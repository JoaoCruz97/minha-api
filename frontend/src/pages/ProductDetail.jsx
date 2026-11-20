import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Loader } from "../components/ui/Loader";
import { EmptyState } from "../components/ui/EmptyState";
import { Button } from "../components/common/Button";
import { formatPrice, formatMaterial, formatGender } from "../utils/formatters";

export function ProductDetail() {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [quantity, setQuantity] = useState(1);

    // Endpoint GET /products/:id não existe no backend ainda
    // Quando estiver disponível, usar productService.getById(id)
    const loadProduct = async () => {
        try {
            setLoading(true);
            throw new Error("Endpoint não implementado");
        } catch {
            setLoading(false);
        }
    };

    // loadProduct(); // Desabilitado até o backend implementar

    if (loading) return <Loader />;

    return (
        <div className="min-h-screen bg-offwhite">
            <nav className="bg-white border-b border-cinza/10 py-4">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <Link to="/catalogo" className="text-cinza hover:text-pretosuave text-sm font-medium">
                        ← Voltar ao catálogo
                    </Link>
                </div>
            </nav>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <EmptyState
                    title="Produto em breve"
                    description="A página de detalhes do produto será carregada quando o backend estiver disponível."
                    actionLabel="Ver catálogo"
                    action={() => {}}
                />
            </div>

            {/* Botão de compra fixo no mobile */}
            <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-cinza/10 p-4 shadow-lg">
                <Button variant="gold" className="w-full" onClick={() => {}} disabled>
                    Adicionar ao carrinho
                </Button>
            </div>
        </div>
    );
}
