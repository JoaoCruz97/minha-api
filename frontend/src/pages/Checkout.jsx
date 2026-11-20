import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "../components/common/Button";
import { Input } from "../components/common/Input";

const STEPS = [
    { key: "identificacao", label: "Identificação" },
    { key: "endereco", label: "Endereço" },
    { key: "entrega", label: "Entrega" },
    { key: "pagamento", label: "Pagamento" },
    { key: "revisao", label: "Revisão" },
];

export function Checkout() {
    const [step, setStep] = useState(0);
    const navigate = useNavigate();

    const isStepComplete = (index) => index < step;

    return (
        <div className="min-h-screen bg-offwhite">
            <nav className="bg-white border-b border-cinza/10 py-4">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <Link to="/carrinho" className="text-cinza hover:text-pretosuave text-sm font-medium">
                        ← Voltar ao carrinho
                    </Link>
                </div>
            </nav>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="mb-10">
                    <div className="flex justify-between mb-4">
                        {STEPS.map((s, index) => (
                            <div key={s.key} className="flex flex-col items-center gap-1">
                                <span className={`text-xs font-medium ${isStepComplete(index) ? "text-dourado" : step === index ? "text-pretosuave font-semibold" : "text-cinza/40"}`}>
                                    {index + 1}
                                </span>
                                <span className={`text-xs ${isStepComplete(index) || step === index ? "text-pretosuave font-medium" : "text-cinza/40"}`}>
                                    {s.label}
                                </span>
                                {index < STEPS.length - 1 && (
                                    <div className="w-4 h-0.5 mx-auto">
                                        {isStepComplete(index + 1)
                                            ? "bg-dourado"
                                            : step === index + 1
                                            ? "bg-dourado/30"
                                            : "bg-cinza/10"}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
                <div className="bg-white border border-cinza/10 rounded-sm p-8">
                    {step === 0 && (
                        <CheckoutIdentification onNext={() => setStep(1)} />
                    )}
                    {step === 1 && (
                        <CheckoutAddress onNext={() => setStep(2)} onBack={() => setStep(0)} />
                    )}
                    {step >= 2 && (
                        <CheckoutComingSoon />
                    )}
                </div>
            </div>
        </div>
    );
}

function CheckoutIdentification({ onNext }) {
    return (
        <div>
            <h2 className="text-xl font-serif text-pretosuave mb-6">Identificação</h2>
            <p className="text-cinza mb-6">
                Informe seus dados para continuar com a compra.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input label="Nome completo" required autoFocus />
                <Input label="E-mail" type="email" required />
            </div>
            <div className="mt-8 flex justify-between">
                <Button variant="outline" className="flex-1 py-3">Voltar</Button>
                <Button variant="gold" className="flex-1 py-3" onClick={onNext}>
                    Próximo
                </Button>
            </div>
        </div>
    );
}

function CheckoutAddress({ onNext, onBack }) {
    return (
        <div>
            <h2 className="text-xl font-serif text-pretosuave mb-6">Endereço de entrega</h2>
            <p className="text-cinza mb-6">
                Para onde vamos entregar seu pedido?
            </p>
            <div className="space-y-4">
                <Input label="CEP" required autoFocus />
                <Input label="Rua / Logradouro" required />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Input label="Número" required />
                    <Input label="Complemento" />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Input label="Bairro" required />
                    <Input label="Cidade" required />
                </div>
                <Input label="Estado (UF)" required maxLength="2" />
            </div>
            <div className="mt-8 flex justify-between">
                <Button variant="outline" className="flex-1 py-3" onClick={onBack}>
                    Voltar
                </Button>
                <Button variant="gold" className="flex-1 py-3" onClick={onNext}>
                    Próximo
                </Button>
            </div>
        </div>
    );
}

function CheckoutComingSoon() {
    return (
        <div className="text-center py-10">
            <h2 className="text-xl font-serif text-pretosuave mb-4">
                Etapas em preparação
            </h2>
            <p className="text-cinza">
                Os fluxos de entrega, pagamento e revisão serão
                integrados quando o backend disponibilizar os
                endpoints de pedidos.
            </p>
            <Link
                to="/carrinho"
                className="mt-6 inline-block text-dourado font-medium hover:text-pretosuave"
            >
                Voltar ao carrinho
            </Link>
        </div>
    );
}
