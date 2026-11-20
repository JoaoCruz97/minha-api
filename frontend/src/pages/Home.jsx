import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { productService } from "../api/product.service";
import { CATEGORIAS } from "../utils/constants";
import { formatPrice } from "../utils/formatters";
import { Loader } from "../components/ui/Loader";
import { Button } from "../components/common/Button";

export function Home() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadProducts = async () => {
            try {
                await productService.create({ name: "test" });
            } catch {
                setLoading(false);
            }
        };
        loadProducts();
    }, []);

    if (loading) return <Loader />;

    return (
        <div className="min-h-screen bg-offwhite">
            <div className="bg-begeclaro border-b border-cinza/10 py-3">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-wrap items-center gap-4 text-xs text-cinza font-medium">
                        <span>Frete grátis em compras acima de R$ 299,00</span>
                        <span className="border-l border-cinza/30 pl-4">Parcelamento em até 6x sem juros</span>
                        <span className="border-l border-cinza/30 pl-4">Pagamento seguro</span>
                    </div>
                </div>
            </div>

            <section className="relative pt-20 pb-12 lg:pt-24 lg:pb-16 overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center lg:text-left lg:max-w-2xl">
                        <span className="inline-block py-1 px-3 bg-dourado/10 text-dourado text-xs font-medium uppercase tracking-wider rounded-sm mb-6">
                            Coleção exclusiva
                        </span>
                        <h1 className="text-4xl lg:text-6xl font-serif text-pretosuave mb-6 leading-tight">
                            Elegância em cada detalhe
                        </h1>
                        <p className="text-lg text-cinza mb-8 max-w-md lg:max-w-none">
                            Joias em prata 925 e semijoias desenhadas para mulheres que valorizam
                            qualidade, delicadeza e estilo atemporal.
                        </p>
                        <div className="flex flex-col sm:flex-row justify-center gap-4">
                            <Link to="/catalogo" className="btn-gold text-center">
                                Conheça a coleção
                            </Link>
                            <Link to="/catalogo" className="btn-outline text-center">
                                Ver categorias
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
