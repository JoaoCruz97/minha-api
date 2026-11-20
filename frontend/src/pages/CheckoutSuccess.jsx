import { Link, useNavigate } from "react-router-dom";
import { useCart } from "../contexts/CartContext";
import { Button } from "../components/common/Button";

export function CheckoutSuccess() {
    const { clearCart } = useCart();
    const navigate = useNavigate();

    return (
        <div className="min-h-screen bg-offwhite flex items-center justify-center px-4">
            <div className="max-w-md w-full bg-white border border-cinza/10 rounded-sm p-8 shadow-sm text-center">
                <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-6 text-green-600">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                </div>
                <h2 className="text-2xl font-serif text-pretosuave mb-2">Pedido confirmado!</h2>
                <p className="text-cinza text-sm mb-8">
                    Obrigado pela sua compra. Em breve você receberá as informações
                    de rastreamento por e-mail.
                </p>
                <Button variant="gold" className="w-full py-3" onClick={() => {
                    clearCart();
                    navigate("/");
                }}>
                    Voltar ao início
                </Button>
            </div>
        </div>
    );
}
