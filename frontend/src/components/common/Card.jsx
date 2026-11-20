import { forwardRef } from "react";

export const Card = forwardRef(({ className, children, ...props }, ref) => {
    return (
        <div
            ref={ref}
            className={`card-product ${className || ""}`}
            {...props}
        >
            {children}
        </div>
    );
});

Card.displayName = "Card";
