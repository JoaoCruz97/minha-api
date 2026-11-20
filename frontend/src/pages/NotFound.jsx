import { Link } from "react-router-dom";
import { Button } from "../components/common/Button";

export function NotFound() {
    return (
        <div className="min-h-screen bg-offwhite flex items-center justify-center px-4">
            <div className="max-w-md w-full bg-white border border-cinza/10 rounded-sm p-8 shadow-sm text-center">
                <h1 className="text-6xl font-serif text-pretosuave mb-4">404</h1>
                <p className="text-cinza text-lg mb-8">
                    Página não encontrada
                </p>
                <Link
                    to="/"
                    className="btn-gold text-center w-full py-3"
                >
                    Voltar ao início
                </Link>
            </div>
        </div>
    );
}
