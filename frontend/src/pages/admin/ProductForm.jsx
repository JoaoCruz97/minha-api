import { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { productService } from "../../api/product.service";
import { Button } from "../../components/common/Button";
import { Input } from "../../components/common/Input";
import { CATEGORIAS, MATERIAIS } from "../../utils/constants";

export function AdminProductForm() {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [data, setData] = useState({
        name: "", description: "", sku: "", category: "aneis", material: "prata-925",
        price: "", costPrice: "", stockQuantity: 0, isActive: true,
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");
        setLoading(true);
        try {
            await productService.create(data);
            navigate("/admin/produtos");
        } catch (err) {
            setError(err.response?.data?.error || "Erro ao salvar produto");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center">
                <div>
                    <h1 className="text-2xl font-serif text-pretosuave mb-2">Novo produto</h1>
                    <p className="text-cinza">Cadastre um novo produto</p>
                </div>
                <Link to="/admin/produtos" className="text-cinza hover:text-pretosuave text-sm">
                    ← Voltar à lista
                </Link>
            </div>
            <form onSubmit={handleSubmit} className="bg-white border border-cinza/10 rounded-sm p-6 space-y-8 max-w-2xl">
                {error && (
                    <div className="bg-red-50 border border-red-100 text-red-700 px-4 py-3 rounded-sm text-sm">{error}</div>
                )}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                        <label className="block text-sm font-medium text-pretosuave">Nome</label>
                        <Input value={data.name} onChange={(e) => setData({ ...data, name: e.target.value })} required />
                    </div>
                    <div className="space-y-2">
                        <label className="block text-sm font-medium text-pretosuave">SKU</label>
                        <Input value={data.sku} onChange={(e) => setData({ ...data, sku: e.target.value })} required />
                    </div>
                </div>
                <div className="space-y-2">
                    <label className="block text-sm font-medium text-pretosuave">Descrição</label>
                    <textarea value={data.description} onChange={(e) => setData({ ...data, description: e.target.value })} className="input-field h-32" rows={4} />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                        <label className="block text-sm font-medium text-pretosuave">Categoria</label>
                        <select value={data.category} onChange={(e) => setData({ ...data, category: e.target.value })} className="input-field">
                            {CATEGORIAS.map((c) => (<option key={c.key} value={c.key}>{c.label}</option>))}
                        </select>
                    </div>
                    <div className="space-y-2">
                        <label className="block text-sm font-medium text-pretosuave">Material</label>
                        <select value={data.material} onChange={(e) => setData({ ...data, material: e.target.value })} className="input-field">
                            {MATERIAIS.map((m) => (<option key={m.key} value={m.key}>{m.label}</option>))}
                        </select>
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="space-y-2">
                        <label className="block text-sm font-medium text-pretosuave">Preço (R$)</label>
                        <Input type="number" value={data.price} onChange={(e) => setData({ ...data, price: e.target.value })} required />
                    </div>
                    <div className="space-y-2">
                        <label className="block text-sm font-medium text-pretosuave">Custo (R$)</label>
                        <Input type="number" value={data.costPrice} onChange={(e) => setData({ ...data, costPrice: e.target.value })} />
                    </div>
                    <div className="space-y-2">
                        <label className="block text-sm font-medium text-pretosuave">Estoque</label>
                        <Input type="number" value={data.stockQuantity} onChange={(e) => setData({ ...data, stockQuantity: Number(e.target.value) || 0 })} required />
                    </div>
                </div>
                <div className="flex items-start gap-3">
                    <input type="checkbox" checked={data.isActive} onChange={(e) => setData({ ...data, isActive: e.target.checked })} className="w-4 h-4 text-dourado border-cinza/30 rounded focus:ring-dourado" />
                    <label className="text-sm text-pretosuave">Produto ativo</label>
                </div>
                <div className="flex justify-end pt-4">
                    <Link to="/admin/produtos" className="mr-4 text-cinza hover:text-pretosuave text-sm">Cancelar</Link>
                    <Button type="submit" variant="primary" className="px-6 py-2" disabled={loading}>
                        {loading ? "Salvando..." : "Salvar produto"}
                    </Button>
                </div>
            </form>
        </div>
    );
}
