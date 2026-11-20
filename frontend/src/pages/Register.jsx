import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import { Button } from "../components/common/Button";
import { Input } from "../components/common/Input";

export function Register() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [securityQuestion, setSecurityQuestion] = useState("");
    const [securityAnswer, setSecurityAnswer] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const { register } = useAuth();
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");
        setLoading(true);
        try {
            await register({
                name,
                email,
                password,
                securityQuestion,
                securityAnswer,
            });
            navigate("/login");
        } catch (err) {
            setError(err.response?.data?.error || "Erro ao cadastrar");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-offwhite flex items-center justify-center px-4">
            <div className="max-w-md w-full bg-white border border-cinza/10 rounded-sm p-8 shadow-sm">
                <div className="text-center mb-8">
                    <Link to="/" className="font-serif text-2xl text-dourado mb-4 block">
                        Prata 925
                    </Link>
                    <h2 className="text-2xl font-serif text-pretosuave mb-2">Criar sua conta</h2>
                    <p className="text-cinza text-sm">Junte-se a nossa comunidade</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-5">
                    {error && (
                        <div className="bg-red-50 border border-red-100 text-red-700 px-4 py-3 rounded-sm text-sm">
                            {error}
                        </div>
                    )}
                    <Input
                        label="Nome completo"
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                        autoFocus
                    />
                    <Input
                        label="E-mail"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <Input
                        label="Senha"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                    <Input
                        label="Pergunta de segurança"
                        type="text"
                        value={securityQuestion}
                        onChange={(e) => setSecurityQuestion(e.target.value)}
                        required
                        placeholder="Ex: Qual o nome do seu primeiro animal?"
                    />
                    <Input
                        label="Resposta de segurança"
                        type="password"
                        value={securityAnswer}
                        onChange={(e) => setSecurityAnswer(e.target.value)}
                        required
                    />
                    <Button
                        type="submit"
                        variant="primary"
                        className="w-full py-3"
                        disabled={loading}
                    >
                        {loading ? "Cadastrando..." : "Criar conta"}
                    </Button>
                </form>

                <div className="mt-8 pt-6 border-t border-cinza/10 text-center">
                    <p className="text-cinza text-sm mb-3">
                        Já tem uma conta?
                    </p>
                    <Link to="/login" className="btn-gold text-center w-full py-2 text-sm">
                        Entrar
                    </Link>
                </div>
            </div>
        </div>
    );
}
