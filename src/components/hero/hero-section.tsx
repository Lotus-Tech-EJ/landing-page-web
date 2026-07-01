import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
// 1. Importando o seu componente Section
import { Section } from "@/components/ui/section";

export function HeroSection() {
    return (
        // 2. Trocamos a tag <section> nativa pelo seu componente <Section>
        // e removemos o "py-16 md:py-24" daqui
        <Section id="hero" className="w-full bg-[#6b4a9b] text-white">
            <Container>

                <div className="mb-16 w-full text-center">
                    <h1 className="text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
                        Lótus Tech <br />
                        <span className="mt-2 block text-4xl sm:text-5xl lg:text-6xl">
                            [slogan]
                        </span>
                    </h1>
                </div>

                <div className="mx-auto max-w-5xl grid grid-cols-1 items-center gap-12 md:grid-cols-2 md:gap-16">

                    {/* Coluna da Esquerda: Textos e Botão */}
                    <div className="flex flex-col items-start text-xl sm:text-2xl">

                        <p className="text-white/90 leading-tight">
                            Breve descrição dos serviços da Lótus <br /> Tech
                        </p>

                        <div className="flex flex-col leading-6 text-white/80 my-3">
                            <span>.</span>
                            <span>.</span>
                            <span>.</span>
                            <span>.</span>
                            <span>.</span>
                            <span>.</span>
                        </div>

                        <p className="text-white leading-tight">
                            Frase de chamamento
                        </p>

                        <Button
                            className="mt-10 ml-6 !rounded-[2rem] bg-white px-12 py-6 !text-2xl !font-extrabold !text-[#3b1c61] hover:bg-gray-100 transition-transform hover:scale-105 shadow-md"
                        >
                            Nossos projetos
                        </Button>
                    </div>

                    {/* Coluna da Direita: Imagem */}
                    <div className="relative flex h-[480px] w-full max-w-[380px] mx-auto items-center justify-center overflow-hidden rounded-[3rem] bg-white text-gray-800 shadow-lg">
                        <svg
                            className="absolute inset-0 h-full w-full text-gray-400"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 100 100"
                            preserveAspectRatio="none"
                        >
                            <line x1="0" y1="0" x2="100" y2="100" strokeWidth="1" />
                            <line x1="100" y1="0" x2="0" y2="100" strokeWidth="1" />
                        </svg>
                        <span className="relative z-10 text-xl font-medium text-gray-700 bg-white/90 px-3 py-1 rounded">
                            Imagem
                        </span>
                    </div>

                </div>
            </Container>
        </Section>
    );
}