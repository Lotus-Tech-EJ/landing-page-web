import { ReactNode } from "react";

interface SectionProps {
    children: ReactNode;
    id?: string;
    className?: string;
}

export function Section({ children, id, className = "" }: SectionProps) {
    return (
        <section id={id} className={`py-16 md:py-24 ${className}`}>
            {children}
        </section>
    );
}