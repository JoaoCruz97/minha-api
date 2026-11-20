import { Link, useNavigate } from "react-router-dom";
import { Button } from "../../components/common/Button";
import { EmptyState } from "../../components/ui/EmptyState";

export function AdminProductList() {
    const navigate = useNavigate();

    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center">
                <div>
                    <h1 className="text-2xl font-serif text-pretosuave mb-2">Produtos</h1>
                    <p className="text-cinza">Gerencie o catálogo da loja</p>
                </div>
                <Link
                    to="/admin/produtos/novo"
                    className="btn-gold px-4 py-2 text-sm"
                >
                    Novo produto
                </Link>
            </div>

            <EmptyState
                title="Nenhum produto cadastrado"
                description="Os produtos serão listados aqui quando o backend estiver disponível."
                actionLabel="Cadastrar primeiro produto"
                action={() => navigate("/admin/produtos/novo")}
            />
        </div>
    );
}
