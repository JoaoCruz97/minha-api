import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { LogOut, Menu, X, Layout, ShoppingCart, Users, Package } from "lucide-react";
import { useAuth } from "../contexts/AuthContext";

export function AdminLayout({ children }) {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const location = useLocation();
    const { logout } = useAuth();

    const isActive = (path) => location.pathname === path;

    return (
        <div className="flex h-screen bg-offwhite">
            {/* Mobile sidebar overlay */}
            {sidebarOpen && (
                <div
                    className="fixed inset-0 z-20 bg-black/40 md:hidden"
                    onClick={() => setSidebarOpen(false)}
                />
            )}

            {/* Sidebar */}
            <aside
                className={`fixed inset-y-0 left-0 z-30 w-64 bg-white border-r border-cinza/10 transform transition-transform duration-300 ${
                    sidebarOpen ? "translate-x-0" : "-translate-x-full"
                } md:relative md:translate-x-0`}
            >
                <div className="flex h-16 items-center justify-between px-6 border-b border-cinza/10">
                    <Link to="/admin/dashboard" className="font-serif text-xl text-dourado">
                        Admin
                    </Link>
                    <button
                        onClick={() => setSidebarOpen(false)}
                        className="md:hidden text-cinza hover:text-pretosuave"
                    >
                        <X size={20} />
                    </button>
                </div>
                <nav className="px-4 py-6 space-y-1">
                    <Link
                        to="/admin/dashboard"
                        onClick={() => setSidebarOpen(false)}
                        className={`flex items-center gap-3 px-3 py-2 rounded-sm text-sm font-medium transition ${
                            isActive("/admin/dashboard")
                                ? "bg-dourado/10 text-dourado"
                                : "text-cinza hover:bg-begeclaro hover:text-pretosuave"
                        }`}
                    >
                        <Layout size={18} /> Dashboard
                    </Link>
                    <Link
                        to="/admin/produtos"
                        onClick={() => setSidebarOpen(false)}
                        className={`flex items-center gap-3 px-3 py-2 rounded-sm text-sm font-medium transition ${
                            location.pathname.startsWith("/admin/produtos")
                                ? "bg-dourado/10 text-dourado"
                                : "text-cinza hover:bg-begeclaro hover:text-pretosuave"
                        }`}
                    >
                        <Package size={18} /> Produtos
                    </Link>
                    <Link
                        to="/admin/pedidos"
                        onClick={() => setSidebarOpen(false)}
                        className={`flex items-center gap-3 px-3 py-2 rounded-sm text-sm font-medium transition ${
                            isActive("/admin/pedidos")
                                ? "bg-dourado/10 text-dourado"
                                : "text-cinza hover:bg-begeclaro hover:text-pretosuave"
                        }`}
                    >
                        <ShoppingCart size={18} /> Pedidos
                    </Link>
                    <Link
                        to="/admin/usuarios"
                        onClick={() => setSidebarOpen(false)}
                        className={`flex items-center gap-3 px-3 py-2 rounded-sm text-sm font-medium transition ${
                            isActive("/admin/usuarios")
                                ? "bg-dourado/10 text-dourado"
                                : "text-cinza hover:bg-begeclaro hover:text-pretosuave"
                        }`}
                    >
                        <Users size={18} /> Clientes
                    </Link>
                </nav>
                <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-cinza/10">
                    <button
                        onClick={logout}
                        className="flex items-center gap-3 w-full text-left px-3 py-2 text-sm font-medium text-cinza hover:bg-begeclaro hover:text-pretosuave transition"
                    >
                        <LogOut size={18} /> Sair
                    </button>
                </div>
            </aside>

            {/* Mobile sidebar button */}
            <button
                onClick={() => setSidebarOpen(true)}
                className="md:hidden fixed top-4 left-4 z-40 bg-white px-3 py-2 rounded-sm shadow-md text-cinza hover:text-pretosuave"
                aria-label="Abrir menu"
            >
                <Menu size={20} />
            </button>

            {/* Main content */}
            <main className="flex-1 overflow-y-auto bg-offwhite p-6 md:p-8">
                {children}
            </main>
        </div>
    );
}
