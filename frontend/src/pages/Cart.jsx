import { Link, useNavigate } from "react-router-dom";
import { useCart } from "../contexts/CartContext";
import { formatPrice } from "../utils/formatters";
import { EmptyState } from "../components/ui/EmptyState";
import { Button } from "../components/common/Button";

export function Cart() {
    const { cart, removeItem, updateQuantity, clearCart, subtotal, totalItems } = useCart();
    const navigate = useNavigate();

    if (cart.length === 0) {
        return (
            <div className="min-h-screen bg-offwhite">
                <EmptyState
                    title="Seu carrinho está vazio"
                    description="Não há produtos no seu carrinho de compras."
                    actionLabel="Ver catálogo"
                    action={() => navigate("/catalogo")}
                />
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-offwhite">
            <nav className="bg-white border-b border-cinza/10 py-4">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <Link to="/catalogo" className="text-cinza hover:text-pretosuave text-sm font-medium">
                        ← Continuar comprando
                    </Link>
                </div>
            </nav>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <h2 className="text-2xl font-serif text-pretosuave mb-8">Carrinho de compras</h2>

                <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                    <div className="lg:col-span-3 space-y-6">
                        {cart.map((item) => (
                            <div
                                key={item.id}
                                className="bg-white border border-cinza/10 rounded-sm p-4 flex flex-col md:flex-row gap-4 items-center"
                            >
                                <div className="w-16 h-16 bg-begeclaro rounded-sm flex-shrink-0 flex items-center justify-center">
                                    <span className="text-xs text-cinza/40">Img</span>
                                </div>
                                <div className="flex-1 min-w-0">
                                    <Link
                                        to={`/produto/${item.id}`}
                                        className="text-sm font-medium text-pretosuave line-clamp-1 mb-1"
                                    >
                                        {item.name}
                                    </Link>
                                    <p className="text-xs text-cinza">{item.material ?? ""}</p>
                                    <p className="text-sm font-semibold text-pretosuave mt-1">
                                        {formatPrice(item.price)}
                                    </p>
                                </div>
                                <div className="flex items-center gap-4">
                                    <button
                                        onClick={() => updateQuantity(item.id, Math.max(1, (item.quantity || 1) - 1))}
                                        className="w-8 h-8 rounded-sm border border-cinza/20 flex items-center justify-center text-sm text-pretosuave hover:bg-begeclaro"
                                    >
                                        −
                                    </button>
                                    <span className="w-8 text-center text-sm font-medium">
                                        {item.quantity}
                                    </span>
                                    <button
                                        onClick={() => updateQuantity(item.id, (item.quantity || 1) + 1)}
                                        className="w-8 h-8 rounded-sm border border/20 flex items-center justify-center text-sm text-pretosuave hover:bg-begeclaro"
                                    >
                                        +
                                    </button>
                                    <button
                                        onClick={() => removeItem(item.id)}
                                        className="text-xs text-red-500 hover:text-red-700 font-medium"
                                    >
                                        Remover
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="lg:col-span-1 bg-white border border-cinza/10 rounded-sm p-6">
                        <h3 className="text-sm font-semibold uppercase tracking-wider text-cinza mb-6">Resumo</h3>
                        <div className="space-y-4 mb-8">
                            <div className="flex justify-between text-sm">
                                <span className="text-cinza">Subtotal ({totalItems} item{totalItems > 1 ? "s" : ""})</span>
                                <span className="font-semibold">{formatPrice(subtotal)}</span>
                            </div>
                        </div>
                        <Button variant="gold" className="w-full py-3" onClick={() => navigate("/checkout")} disabled>
                            Finalizar compra
                        </Button>
                        <button
                            onClick={clearCart}
                            className="w-full py-2 text-sm text-cinza hover:text-red-500 mt-3"
                        >
                            Limpar carrinho
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
