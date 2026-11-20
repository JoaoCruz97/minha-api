import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { authService } from "../api/auth.service";
import { Button } from "../components/common/Button";
import { Input } from "../components/common/Input";

export function ForgotPassword() {
    const [email, setEmail] = useState("");
    const [step, setStep] = useState("request"); // request | success
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");
        setLoading(true);
        try {
            await authService.forgotPassword(email);
            setStep("success");
        } catch (err) {
            setError(err.response?.data?.error || "Erro ao solicitar recuperação");
        } finally {
            setLoading(false);
        }
    };

    if (step === "success") {
        return (
            <div className="min-h-screen bg-offwhite flex items-center justify-center px-4">
                <div className="max-w-md w-full bg-white border border-cinza/10 rounded-sm p-8 shadow-sm text-center">
                    <h2 className="text-2xl font-serif text-pretosuave mb-2">Verifique seu e-mail</h2>
                    <p className="text-cinza text-sm mb-6">
                        Enviamos instruções para redefinir sua senha.
                    </p>
                    <Link
                        to="/login"
                        className="btn-gold text-center w-full py-2 text-sm"
                    >
                        Voltar ao login
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-offwhite flex items-center justify-center px-4">
            <div className="max-w-md w-full bg-white border border-cinza/10 rounded-sm p-8 shadow-sm">
                <div className="text-center mb-8">
                    <Link to="/" className="font-serif text-2xl text-dourado mb-4 block">
                        Prata 925
                    </Link>
                    <h2 className="text-2xl font-serif text-pretosuave mb-2">Recuperar senha</h2>
                    <p className="text-cinza text-sm">Informe seu e-mail cadastrado</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-5">
                    {error && (
                        <div className="bg-red-50 border border-red-100 text-red-700 px-4 py-3 rounded-sm text-sm">
                            {error}
                        </div>
                    )}
                    <Input
                        label="E-mail"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        autoFocus
                    />
                    <Button
                        type="submit"
                        variant="primary"
                        className="w-full py-3"
                        disabled={loading}
                    >
                        {loading ? "Enviando..." : "Enviar instruções"}
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
