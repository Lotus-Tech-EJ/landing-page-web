"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";

import { Container } from "../ui/container";
import { Button } from "../ui/button";

import LogoHeader from "@/assets/LogoHorizontal.png";

export function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const headerRef = useRef<HTMLElement>(null);

    const navItems = [
        { id: "hero", label: "Início" },
        { id: "sobre", label: "Sobre Nós" },
        { id: "servicos", label: "Portfólio" }
    ];

    const renderNavButton = (isMobile = false) =>
        navItems.map((item) => (
            <Button
                key={item.id}
                variant="navbar"
                onClick={() => handleScroll(item.id)}
                className={isMobile ? "w-full text-center" : ""}
            >
                {item.label}
            </Button>
        ));

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

                <nav className="hidden md:flex items-center gap-4">
                    {renderNavButton()}
                </nav>

                <Button
                    variant="iconNav"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    className="md:hidden z-50"
                    aria-label={isMenuOpen ? "Fechar Menu" : "Abrir Menu"}>

                    <svg className="h-6 w-6 text-[#6b4a9b]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                        />
                    </svg>

                </Button>
            </Container>

            {isMenuOpen && (
                <div className="border-b border-gray-100 bg-white md:hidden animate-in fade-in slide-in-from-top-5 duration-200">
                    <nav className="flex flex-col p-4 gap-3">
                        {renderNavButton()}
                    </nav>
                </div>
            )}
        </header>
    );
}