import { useState } from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { authService } from "../api/auth.service";
import { Button } from "../components/common/Button";
import { Input } from "../components/common/Input";

export function ResetPassword() {
    const [searchParams] = useSearchParams();
    const email = searchParams.get("email") || "";
    const [securityAnswer, setSecurityAnswer] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");
        setLoading(true);
        try {
            await authService.resetPassword({
                email,
                securityAnswer,
                newPassword,
            });
            navigate("/login");
        } catch (err) {
            setError(err.response?.data?.error || "Erro ao redefinir senha");
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
                    <h2 className="text-2xl font-serif text-pretosuave mb-2">Redefinir senha</h2>
                    <p className="text-cinza text-sm">Responda sua pergunta de segurança</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-5">
                    {error && (
                        <div className="bg-red-50 border border-red-100 text-red-700 px-4 py-3 rounded-sm text-sm">
                            {error}
                        </div>
                    )}
                    <div className="mb-2">
                        <label className="label-field">E-mail cadastrado</label>
                        <p className="text-sm text-cinza bg-begeclaro px-3 py-2 rounded-sm">
                            {email}
                        </p>
                    </div>
                    <Input
                        label="Resposta de segurança"
                        type="text"
                        value={securityAnswer}
                        onChange={(e) => setSecurityAnswer(e.target.value)}
                        required
                        autoFocus
                        placeholder="Sua resposta cadastrada"
                    />
                    <Input
                        label="Nova senha"
                        type="password"
                        value={newPassword}
                        onChange={(e) => setNewPassword(e.target.value)}
                        required
                    />
                    <Button
                        type="submit"
                        variant="primary"
                        className="w-full py-3"
                        disabled={loading}
                    >
                        {loading ? "Redefinindo..." : "Redefinir senha"}
                    </Button>
                </form>

                <div className="mt-8 pt-6 border-t border-cinza/10 text-center">
                    <Link to="/login" className="text-cinza text-sm font-medium hover:text-pretosuave">
                        Voltar ao login
                    </Link>
                </div>
            </div>
        </div>
    );
}
