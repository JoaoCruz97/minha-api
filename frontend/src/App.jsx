import { Routes, Route, Navigate } from "react-router-dom";
import { useAuth } from "./hooks/useAuth";
import Home from "./pages/Home";
import Catalog from "./pages/Catalog";
import ProductDetail from "./pages/ProductDetail";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import CheckoutSuccess from "./pages/CheckoutSuccess";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ForgotPassword from "./pages/ForgotPassword";
import ResetPassword from "./pages/ResetPassword";
import Account from "./pages/Account";
import NotFound from "./pages/NotFound";
import AdminLayout from "./components/layout/AdminLayout";
import AdminDashboard from "./pages/admin/Dashboard";
import AdminProductList from "./pages/admin/ProductList";
import AdminProductForm from "./pages/admin/ProductForm";
import AdminOrderList from "./pages/admin/OrderList";
import AdminUserList from "./pages/admin/UserList";

function ProtectedRoute({ children }) {
    const { isAuthenticated } = useAuth();
    if (!isAuthenticated) {
        return <Navigate to="/login" replace />;
    }
    return children;
}

function AdminRoute({ children }) {
    const { user, isAuthenticated } = useAuth();
    if (!isAuthenticated || user.role !== "admin") {
        return <Navigate to="/login" replace />;
    }
    return children;
}

export default function App() {
    return (
        <Routes>
            {/* Loja pública */}
            <Route path="/" element={<Home />} />
            <Route path="/catalogo" element={<Catalog />} />
            <Route path="/produto/:id" element={<ProductDetail />} />
            <Route path="/carrinho" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/checkout/sucesso" element={<CheckoutSuccess />} />

            {/* Autenticação */}
            <Route path="/login" element={<Login />} />
            <Route path="/cadastro" element={<Register />} />
            <Route path="/esqueci-minha-senha" element={<ForgotPassword />} />
            <Route path="/redefinir-senha" element={<ResetPassword />} />

            {/* Conta do cliente */}
            <Route path="/minha-conta" element={<ProtectedRoute><Account /></ProtectedRoute>} />

            {/* Painel administrativo */}
            <Route
                path="/admin/*"
                element={
                    <AdminRoute>
                        <AdminLayout />
                    </AdminRoute>
                }
            >
                <Route path="dashboard" element={<AdminDashboard />} />
                <Route path="produtos" element={<AdminProductList />} />
                <Route path="produtos/novo" element={<AdminProductForm />} />
                <Route path="produtos/:id/editar" element={<AdminProductForm />} />
                <Route path="pedidos" element={<AdminOrderList />} />
                <Route path="usuarios" element={<AdminUserList />} />
            </Route>

            <Route path="*" element={<NotFound />} />
        </Routes>
    );
}
