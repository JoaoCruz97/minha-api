import { PackageSearch } from "lucide-react";

export function EmptyState({ title, description, action, actionLabel }) {
    return (
        <div className="flex flex-col items-center justify-center py-20 text-center">
            <div className="w-16 h-16 rounded-full bg-begeclaro flex items-center justify-center mb-6 text-cinza/40">
                <PackageSearch size={24} />
            </div>
            <h3 className="text-xl font-serif text-pretosuave mb-2">{title}</h3>
            <p className="text-cinza mb-6 max-w-md mx-auto">{description}</p>
            {action && actionLabel && (
                <Button variant="gold" onClick={action}>
                    {actionLabel}
                </Button>
            )}
        </div>
    );
}
