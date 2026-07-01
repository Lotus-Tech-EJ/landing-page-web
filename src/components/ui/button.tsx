import { ButtonHTMLAttributes } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
    variant?: "primary" | "secondary" | "outline" | "navbar" | "iconNav";
};

export function Button({
                           children,
                           variant = "primary",
                           className = "",
                           ...props
                       }: ButtonProps) {
    const baseStyles = "inline-flex items-center justify-center font-medium transition-colors focus:outline-none disabled:opacity-50 disabled:pointer-events-none";

    const variants = {
        primary: "bg-blue-600 text-white hover:bg-blue-700 focus:ring-2 focus:ring-blue-600 rounded-md px-6 py-3 text-sm",
        secondary: "bg-gray-100 text-gray-900 hover:bg-gray-200 focus:ring-2 focus:ring-gray-500 rounded-md px-6 py-3 text-sm",
        outline: "border border-gray-300 bg-transparent text-gray-700 hover:bg-gray-50 focus:ring-2 focus:ring-gray-500 rounded-md px-6 py-3 text-sm",
        navbar: "bg-white text-[#6b4a9b] hover:bg-[#6b4a9b] hover:text-white px-5 py-2.5 font-bold rounded-xl text-base focus:ring-transparent focus:ring-offset-0",
        iconNav: "h-10 w-10 rounded-lg text-gray-600 hover:bg-gray-50 focus:ring-transparent focus:ring-offset-0"
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