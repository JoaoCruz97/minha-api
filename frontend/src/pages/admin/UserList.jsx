import { EmptyState } from "../../components/ui/EmptyState";
import { useNavigate } from "react-router-dom";

export function AdminUserList() {
    const navigate = useNavigate();

    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center">
                <div>
                    <h1 className="text-2xl font-serif text-pretosuave mb-2">Clientes</h1>
                    <p className="text-cinza">Gerencie os clientes da loja</p>
                </div>
            </div>

            <EmptyState
                title="Nenhum cliente cadastrado"
                description="Os clientes serão listados aqui quando o backend estiver disponível."
                actionLabel="Ver catálogo"
                action={() => navigate("/catalogo")}
            />
        </div>
    );
}
