import { Link } from "react-router-dom";

export function Footer() {
    return (
        <footer className="bg-pretosuave text-white mt-auto">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
                    <div>
                        <Link to="/" className="font-serif text-2xl text-dourado mb-6 block">
                            Prata 925
                        </Link>
                        <p className="text-cinza/40 text-sm max-w-xs">
                            Joias em prata 925 e semijoias com design contemporâneo.
                        </p>
                    </div>
                    <div>
                        <h3 className="text-sm font-semibold uppercase tracking-wider mb-6">Navegação</h3>
                        <ul className="space-y-3">
                            <li><Link to="/" className="text-cinza/40 hover:text-white transition">Início</Link></li>
                            <li><Link to="/catalogo" className="text-cinza/40 hover:text-white transition">Catálogo</Link></li>
                            <li><Link to="/login" className="text-cinza/40 hover:text-white transition">Entrar</Link></li>
                            <li><Link to="/cadastro" className="text-cinza/40 hover:text-white transition">Cadastrar</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-sm font-semibold uppercase tracking-wider mb-6">Atendimento</h3>
                        <ul className="space-y-3">
                            <li className="text-cinza/40 text-sm">SAC: contato@prata925.com.br</li>
                            <li className="text-cinza/40 text-sm">Seg a Sex: 9h às 18h</li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-sm font-semibold uppercase tracking-wider mb-6">Políticas</h3>
                        <ul className="space-y-3">
                            <li><a href="#" className="text-cinza/40 hover:text-white transition">Privacidade</a></li>
                            <li><a href="#" className="text-cinza/40 hover:text-white transition">Troca e Devolução</a></li>
                            <li><a href="#" className="text-cinza/40 hover:text-white transition">Termos de Uso</a></li>
                        </ul>
                    </div>
                </div>
                <div className="border-t border-cinza/20 pt-8">
                    <p className="text-cinza/40 text-sm text-center">
                        Prata 925 — Joias e Semijoias. Todos os direitos reservados.
                    </p>
                </div>
            </div>
        </footer>
    );
}
