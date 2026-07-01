import Image from "next/image";

import { Container } from "../ui/container";

import LogoFooter from "@/assets/LogoBranca.png";

export function Footer() {

    const currentYear = new Date().getFullYear();

    return (
        <footer className="bottom-0 z-50 w-full bg-[#3B146A] backdrop-blur-md py-6">
            <Container className="grid grid-cols-3 gap-1 items-center justify-items-center relative">
                <div className="flex items-left h-full">
                    <Image
                        src={LogoFooter}
                        alt="Lotus Tech Logo"
                        className=" sm:h-20 md:h-70 w-auto object-contain"
                        priority
                    />
                </div>
                <div className="flex flex-col items-center justify-center text-center gap-1 sm:gap-2 w-full py-16 px-2 border-x border-white">
                    <h4 className="font-semibold text-white tracking-wide text-[9px] sm:text-sm md:text-lg">
                        Entre em contato:
                    </h4>
                    <div className="flex flex-col text-white gap-1">
                        <p className="text-white leading-relaxed text-[8px] sm:text-sm md:text-lg">
                            contato@lotustech.com.br
                        </p>
                    </div>
                </div>
                <div className="flex flex-col items-center justify-center text-center max-w-[200px] sm:text-xs md:text-sm">
                    <p className="text-white leading-relaxed text-[9px] sm:text-sm md:text-lg">
                        &copy; {currentYear} Lotus Tech <br/>
                        Todos os direitos reservados.
                    </p>
                </div>
            </Container>
        </footer>
    );
}