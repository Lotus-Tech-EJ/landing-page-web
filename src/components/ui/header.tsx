"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";

import { Container } from "../ui/container";
import { Button } from "../ui/button";

//arquivo logo
import LogoHeader from "@/assets/LogoHorizontal.png";

export function Header() {
    // para menu mobile
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const headerRef = useRef<HTMLDivElement>(null);

    // scroll suave
    const handleScroll = (id: string) => {
        setIsMenuOpen(false);
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    useEffect(() => {
        function handleClickOutside(event: MouseEvent | TouchEvent) {
            if (isMenuOpen && headerRef.current && !headerRef.current.contains(event.target as Node)) {
                setIsMenuOpen(false);
            }
        }

        document.addEventListener("touchstart", handleClickOutside);
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("touchstart", handleClickOutside);
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [isMenuOpen]);

    return (
        <header ref={headerRef} className="sticky top-0 z-50 w-full border-b border-gray-100 bg-white backdrop-blur-md">
            <Container className="flex h-20 items-center justify-between">

                {/* Logo da barra */}
                <div
                    className="flex items-center h-full cursor-pointer select-none"
                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                >
                    <Image
                        src={LogoHeader}
                        alt="Logo"
                        className="h-16 w-auto object-contain"
                        priority
                    />
                </div>

                {/* menu */}
                <nav className="hidden md:flex items-center gap-4">
                    <Button
                        variant="navbar"
                        onClick={() => handleScroll("hero")}
                    >
                        Início
                    </Button>
                    <Button
                        variant="navbar"
                        onClick={() => handleScroll("sobre")}
                    >
                        Sobre Nós
                    </Button>
                    <Button
                        variant="navbar"
                        onClick={() => handleScroll("servicos")}
                    >
                        Portfólio
                    </Button>
                </nav>

                {/* abrir menu mobile */}
                <button
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    className="flex h-10 w-10 items-center justify-center rounded-lg border border-gray-200 text-gray-600 md:hidden hover:bg-gray-50 transition-colors"
                    aria-label="Toggle Menu"
                >
                    {isMenuOpen ? (
                        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    ) : (
                        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    )}
                </button>
            </Container>

            {/*menu retratil */}
            {isMenuOpen && (
                <div className="border-b border-gray-100 bg-white md:hidden animate-in fade-in slide-in-from-top-5 duration-200">
                    <nav className="flex flex-col p-4 gap-3">
                        <Button
                            variant="navbar"
                            onClick={() => handleScroll("hero")}
                            className="w-full text-center"
                        >
                            Início
                        </Button>
                        <Button
                            variant="navbar"
                            onClick={() => handleScroll("sobre")}
                            className="w-full text-center"
                        >
                            Sobre Nós
                        </Button>
                        <Button
                            variant="navbar"
                            onClick={() => handleScroll("servicos")}
                            className="w-full text-center"
                        >
                            Portfólio
                        </Button>
                    </nav>
                </div>
            )}
        </header>
    );
}