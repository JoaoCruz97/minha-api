import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import { useCart } from "../contexts/CartContext";
import { Menu, X, Search, User, ShoppingBag, ChevronDown } from "lucide-react";

export function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [searchOpen, setSearchOpen] = useState(false);
    const location = useLocation();
    const { isAuthenticated, logout, user } = useAuth();
    const { totalItems } = useCart();

    const isActive = (path) => location.pathname === path;

    return (
        <header className="sticky top-0 z-40 bg-white border-b border-cinza/10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    <Link to="/" className="flex items-center gap-2 font-serif text-2xl text-pretosuave">
                        <span className="text-dourado">P</span>rata 925
                    </Link>

                    <nav className="hidden md:flex items-center gap-8">
                        <Link
                            to="/catalogo"
                            className={`text-sm font-medium transition-color ${isActive("/catalogo") ? "text-dourado" : "text-cinza hover:text-pretosuave"}`}
                        >
                            Catálogo
                        </Link>
                        <div className="relative">
                            <button className="flex items-center gap-1 text-sm font-medium text-cinza hover:text-pretosuave">
                                Novidades <ChevronDown size={14} />
                            </button>
                        </div>
                        <Link
                            to="/"
                            className="text-sm font-medium text-cinza hover:text-pretosuave"
                        >
                            Promoções
                        </Link>
                    </nav>

                    <div className="hidden md:flex items-center gap-4">
                        <button
                            onClick={() => setSearchOpen(true)}
                            className="text-cinza hover:text-pretosuave"
                            aria-label="Buscar"
                        >
                            <Search size={18} />
                        </button>
                        {isAuthenticated ? (
                            <div className="relative">
                                <button className="flex items-center gap-2 text-sm font-medium text-cinza hover:text-pretosuave">
                                    {user?.name}
                                    <ChevronDown size={14} />
                                </button>
                                <div className="absolute right-0 mt-2 w-48 bg-white border border-cinza/10 rounded-sm shadow-lg py-2">
                                    <Link
                                        to="/minha-conta"
                                        className="block px-4 py-2 text-sm text-cinza hover:bg-begeclaro"
                                    >
                                        Minha conta
                                    </Link>
                                    <button
                                        onClick={logout}
                                        className="w-full text-left px-4 py-2 text-sm text-cinza hover:bg-begeclaro"
                                    >
                                        Sair
                                    </button>
                                </div>
                            </div>
                        ) : (
                            <Link
                                to="/login"
                                className="text-sm font-medium text-cinza hover:text-pretosuave"
                            >
                                Entrar
                            </Link>
                        )}
                        <Link
                            to="/carrinho"
                            className="relative text-cinza hover:text-pretosuave"
                            aria-label="Carrinho"
                        >
                            <ShoppingBag size={20} />
                            {totalItems > 0 && (
                                <span className="absolute -top-1 -right-1 w-4 h-4 bg-pretosuave text-white text-[10px] rounded-full flex items-center justify-center">
                                    {totalItems}
                                </span>
                            )}
                        </Link>
                    </div>

                    <button
                        onClick={() => setMenuOpen(true)}
                        className="md:hidden text-cinza hover:text-pretosuave"
                        aria-label="Menu"
                    >
                        <Menu size={20} />
                    </button>
                </div>
            </div>
        </header>
    );
}
