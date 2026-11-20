import express from 'express'
import cors from 'cors'
import path from 'path'
import { fileURLToPath } from 'url'
import { connectToDatabase } from './config/database.js'
import { authRouter } from './routes/auth.route.js'
import { userRouter } from './routes/user.route.js'
import { logRouter } from './routes/log.route.js'
import { productRouter } from './routes/product.route.js'
import { errorHandler, notFoundHandler } from './middlewares/error.middleware.js'

if (!process.env.JWT_SECRET) {
    console.log("Variável JWT_SECRET não definida no .env")
    process.exit(1)
}

const app = express()
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
    res.json({
        message: "Tudo está funcionando! :)"
    })
})

app.use("/auth", authRouter)
app.use("/users", userRouter)
app.use("/logs", logRouter)
app.use("/products", productRouter)

// Servir arquivos estáticos do frontend (produção)
const frontendDist = path.join(__dirname, "frontend/dist")
app.use(express.static(frontendDist))

// Fallback SPA: rotas não-API devolvem o index.html do frontend
app.use((req, res, next) => {
    if (
        !req.path.startsWith("/auth") &&
        !req.path.startsWith("/users") &&
        !req.path.startsWith("/products") &&
        !req.path.startsWith("/logs")
    ) {
        return res.sendFile(path.join(frontendDist, "index.html"))
    }
    next()
})

// Precisam ficar depois de todas as rotas
app.use(notFoundHandler)
app.use(errorHandler)

connectToDatabase().then(function () {
    app.listen(process.env.PORT, () => {
        console.log("O servidor está rodando: http://localhost:" + process.env.PORT)
    })
}).catch(function (error) {
    console.log("Erro ao conectar ao banco de dados", error.message)
})
