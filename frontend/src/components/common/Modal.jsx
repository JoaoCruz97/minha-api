import { useEffect } from "react";
import { X } from "lucide-react";

export function Modal({ isOpen, onClose, children, title }) {
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        }
        return () => {
            document.body.style.overflow = "";
        };
    }, [isOpen]);

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
            <div
                className="fixed inset-0 bg-black/60 backdrop-blur-sm"
                onClick={onClose}
            />
            <div className="relative bg-white w-full max-w-md rounded-sm p-6 shadow-lg mx-4">
                {title && (
                    <div className="mb-6">
                        <h2 className="text-2xl font-serif text-pretosuave mb-2">
                            {title}
                        </h2>
                        <button
                            onClick={onClose}
                            className="absolute top-4 right-4 text-cinza hover:text-pretosuave"
                            aria-label="Fechar"
                        >
                            <X size={20} />
                        </button>
                    </div>
                )}
                {children}
            </div>
        </div>
    );
}
