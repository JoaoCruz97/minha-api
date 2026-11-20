import { useState } from "react";
import { Link } from "react-router-dom";
import { Loader } from "../components/ui/Loader";
import { EmptyState } from "../components/ui/EmptyState";
import { Button } from "../components/common/Button";
import { CATEGORIAS, MATERIAIS } from "../utils/constants";
import { formatPrice, formatCategory, formatMaterial } from "../utils/formatters";

export function Catalog() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchProducts = async () => {
        try {
            setLoading(true);
            // Endpoint GET /products não existe no backend ainda
            // Quando estiver disponível, usar productService.list()
            throw new Error("Endpoint não implementado");
        } catch {
            setLoading(false);
            setError("O catálogo de produtos será carregado quando o backend estiver disponível.");
        }
    };

    // Carregar produtos ao montar
    // fetchProducts(); // Desabilitado até o backend implementar

    if (loading) return <Loader />;

    return (
        <div className="min-h-screen bg-offwhite">
            <nav className="bg-white border-b border-cinza/10 py-4">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <Link to="/" className="text-cinza hover:text-pretosuave text-sm font-medium">
                        ← Voltar ao início
                    </Link>
                </div>
            </nav>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="flex flex-col lg:flex-row gap-8">
                    {/* Filtros mobile (drawer) */}
                    <div className="lg:hidden">
                        <Button variant="outline" className="w-full" onClick={() => {}}>
                            Filtrar produtos
                        </Button>
                    </div>

                    {/* Conteúdo principal */}
                    <div className="flex-1">
                        <div className="flex justify-between items-end mb-8">
                            <div>
                                <h1 className="text-2xl font-serif text-pretosuave">
                                    Catálogo
                                </h1>
                                <p className="text-cinza text-sm">
                                    Descubra nossas joias em prata 925 e semijoias
                                </p>
                            </div>
                        </div>

                        {error && (
                            <EmptyState
                                title="Catálogo em breve"
                                description={error}
                                actionLabel="Voltar ao início"
                                action={() => {}}
                            />
                        )}

                        {!error && products.length === 0 && (
                            <EmptyState
                                title="Nenhum produto encontrado"
                                description="Tente ajustar os filtros ou navegue por outra categoria."
                                actionLabel="Limpar filtros"
                                action={() => {}}
                            />
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
