import { forwardRef } from "react";

export const Input = forwardRef(({ className, label, error, ...props }, ref) => {
    return (
        <div className="mb-4">
            {label && <label className="label-field">{label}</label>}
            <input
                ref={ref}
                className={`input-field ${error ? "border-red-500 focus:ring-red-500" : ""} ${className || ""}`}
                {...props}
            />
            {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
        </div>
    );
});

Input.displayName = "Input";
