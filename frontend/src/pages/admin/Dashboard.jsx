import { Layout, Package, ShoppingCart, Users } from "lucide-react";

const stats = [
    { label: "Total de produtos", value: "—", icon: Package },
    { label: "Produtos ativos", value: "—", icon: Package },
    { label: "Total de pedidos", value: "—", icon: ShoppingCart },
    { label: "Clientes cadastrados", value: "—", icon: Users },
];

export function AdminDashboard() {
    return (
        <div className="space-y-8">
            <div>
                <h1 className="text-2xl font-serif text-pretosuave mb-2">Dashboard</h1>
                <p className="text-cinza">Visão geral da sua loja</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {stats.map((stat) => (
                    <div key={stat.label} className="bg-white border border-cinza/10 rounded-sm p-6">
                        <div className="flex items-center justify-between mb-4">
                            <div className="w-10 h-10 bg-begeclaro rounded-sm flex items-center justify-center text-dourado">
                                <stat.icon size={18} />
                            </div>
                            <span className="text-cinza/40 text-xs">Aguardando backend</span>
                        </div>
                        <p className="text-3xl font-serif text-pretosuave">{stat.value}</p>
                        <p className="text-sm text-cinza">{stat.label}</p>
                    </div>
                ))}
            </div>

            <div className="bg-white border border-cinza/10 rounded-sm p-6">
                <h3 className="text-sm font-semibold uppercase tracking-wider text-cinza mb-6">
                    Produtos recentes
                </h3>
                <div className="text-center py-8 text-cinza/40">
                    Nenhum produto cadastrado.
                </div>
            </div>
        </div>
    );
}
