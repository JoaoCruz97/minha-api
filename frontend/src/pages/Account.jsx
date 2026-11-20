import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import { userService } from "../api/user.service";
import { Button } from "../components/common/Button";
import { Input } from "../components/common/Input";

export function Account() {
    const { user, logout, updateUser } = useAuth();
    const [localUser, setLocalUser] = useState(user);
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        if (user) setLocalUser(user);
    }, [user]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");
        setSuccess("");
        setLoading(true);
        try {
            const response = await userService.update(localUser.id, {
                name: localUser.name,
                email: localUser.email,
            });
            updateUser(response.data.user);
            setSuccess("Dados atualizados com sucesso");
        } catch (err) {
            setError(err.response?.data?.error || "Erro ao atualizar dados");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-offwhite">
            <nav className="bg-white border-b border-cinza/10 py-4">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <Link to="/" className="text-cinza hover:text-pretosuave text-sm font-medium">
                        ← Loja virtual
                    </Link>
                </div>
            </nav>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <h2 className="text-2xl font-serif text-pretosuave mb-8">Minha conta</h2>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <div className="lg:col-span-2">
                        <form onSubmit={handleSubmit} className="bg-white border border-cinza/10 rounded-sm p-6 space-y-5">
                            {error && (
                                <div className="bg-red-50 border border-red-100 text-red-700 px-4 py-3 rounded-sm text-sm">
                                    {error}
                                </div>
                            )}
                            {success && (
                                <div className="bg-green-50 border border-green-100 text-green-700 px-4 py-3 rounded-sm text-sm">
                                    {success}
                                </div>
                            )}
                            <Input
                                label="Nome completo"
                                type="text"
                                value={localUser.name}
                                onChange={(e) => setLocalUser({ ...localUser, name: e.target.value })}
                                required
                            />
                            <Input
                                label="E-mail"
                                type="email"
                                value={localUser.email}
                                onChange={(e) => setLocalUser({ ...localUser, email: e.target.value })}
                                required
                            />
                            <Button type="submit" variant="primary" className="w-full py-3" disabled={loading}>
                                {loading ? "Atualizando..." : "Salvar alterações"}
                            </Button>
                        </form>

                        <div className="mt-8">
                            <button
                                onClick={logout}
                                className="flex items-center gap-2 text-red-500 text-sm font-medium hover:text-red-700"
                            >
                                Sair da conta
                            </button>
                        </div>
                    </div>

                    <div className="lg:col-span-1">
                        <div className="bg-white border border-cinza/10 rounded-sm p-6">
                            <h3 className="text-sm font-semibold uppercase tracking-wider text-cinza mb-6">
                                Dados da conta
                            </h3>
                            <div className="space-y-4 text-sm">
                                <div className="flex justify-between border-b border-cinza/10 pb-2">
                                    <span className="text-cinza">Nome</span>
                                    <span>{localUser.name}</span>
                                </div>
                                <div className="flex justify-between border-b border-cinza/10 pb-2">
                                    <span className="text-cinza">E-mail</span>
                                    <span>{localUser.email}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-cinza">Membro desde</span>
                                    <span>{localUser.createdAt ? localUser.createdAt.slice(0, 10) : "—"}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
