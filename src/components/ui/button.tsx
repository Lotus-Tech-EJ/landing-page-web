import { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "primary" | "secondary" | "outline" | "navbar";
}

export function Button({
                           children,
                           variant = "primary",
                           className = "",
                           ...props
                       }: ButtonProps) {
    const baseStyles = "inline-flex items-center justify-center rounded-md px-6 py-3 text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none";

    const variants = {
        primary: "bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-600",
        secondary: "bg-gray-100 text-gray-900 hover:bg-gray-200 focus:ring-gray-500",
        outline: "border border-gray-300 bg-transparent text-gray-700 hover:bg-gray-50 focus:ring-gray-500",
        navbar: "bg-white text-[#6b4a9b] hover:text-[#3b1c61] px-5 py-2.5 font-bold !rounded-xl text-base focus:ring-transparent focus:ring-offset-0"
    };

    return (
        <button
            className={`${baseStyles} ${variants[variant]} ${className}`}
            {...props}
        >
            {children}
        </button>
    );
}