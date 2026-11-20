import { forwardRef } from "react";

export const Button = forwardRef(({ className, variant = "primary", children, disabled, ...props }, ref) => {
    const variants = {
        primary: "btn-primary",
        outline: "btn-outline",
        gold: "btn-gold",
    };

    return (
        <button
            ref={ref}
            className={variants[variant] + " " + (className || "")}
            disabled={disabled}
            {...props}
        >
            {children}
        </button>
    );
});

Button.displayName = "Button";
