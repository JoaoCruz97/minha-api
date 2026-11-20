
import mongoose from "mongoose";

let mongoServer;

export async function connectToDatabase() {
    try {
        if (process.env.MONGODB_URI === "memory") {
            console.log("Usando banco de dados em memória!");
            console.log("Banco de dados conectado com sucesso!");
            return;
        }

        console.log("Iniciando MongoDB local...");

        const { MongoMemoryServer } = await import("mongodb-memory-server");
        const { mkdir } = await import("node:fs/promises");
        const { resolve } = await import("node:path");

        const dbPath = resolve(process.cwd(), "data/mongodb");

        await mkdir(dbPath, { recursive: true });

        mongoServer = await MongoMemoryServer.create({
            instance: {
                storageEngine: "wiredTiger",
                dbPath
            }
        });

        const mongoUri = mongoServer.getUri();

        console.log("Conectando ao banco de dados...");

        await mongoose.connect(mongoUri, {
            dbName: process.env.MONGODB_NAME || "minha-loja"
        });

        console.log("Banco de dados conectado com sucesso!");
        console.log("MongoDB local:", mongoUri);

    } catch (error) {
        console.error("Erro ao conectar no banco:", error.message);

        if (mongoServer) {
            await mongoServer.stop();
            mongoServer = null;
        }

        throw error;
    }
}

export async function disconnectDatabase() {
    try {
        await mongoose.disconnect();

        if (mongoServer) {
            await mongoServer.stop();
            mongoServer = null;
        }

        console.log("Banco de dados encerrado.");
    } catch (error) {
        console.error("Erro ao encerrar banco:", error.message);
    }
}
