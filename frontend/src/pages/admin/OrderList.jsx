import { EmptyState } from "../../components/ui/EmptyState";
import { useNavigate } from "react-router-dom";

export function AdminOrderList() {
    const navigate = useNavigate();

    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center">
                <div>
                    <h1 className="text-2xl font-serif text-pretosuave mb-2">Pedidos</h1>
                    <p className="text-cinza">Gerencie os pedidos da loja</p>
                </div>
            </div>

            <EmptyState
                title="Nenhum pedido encontrado"
                description="Os pedidos serão listados aqui quando o backend estiver disponível."
                actionLabel="Ver catálogo"
                action={() => navigate("/catalogo")}
            />
        </div>
    );
}
