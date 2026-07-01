import { Container } from "@/components/ui/container";
// 1. Importe o componente Section que você criou
import { Section } from "@/components/ui/section";

export function AboutSection() {
    return (
        <Section className="w-full bg-white">
            <Container>
                <h2 className="mb-16 text-center text-4xl font-bold text-[#3b1c61] sm:text-5xl">
                    O que é a Lótus Tech?
                </h2>

                {/* Grid Principal: Texto e Imagem */}
                <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2 md:gap-8 lg:gap-16">

                    {/* Coluna da Esquerda: Texto Totalmente Centralizado */}
                    <div className="text-center text-[#4a2e72] text-lg leading-relaxed md:px-4 lg:px-8">
                        <p>
                            Lorem Ipsum is simply dummy text of the printing and typesetting
                            industry. Lorem Ipsum has been the industry's standard dummy text
                            ever since 1966, when designers at Letraset and James Mosley, the
                            librarian at St Bride Printing Library, took a 1914 Cicero
                            translation and scrambled it to make dummy text for Letraset's
                            Body Type sheets. It has survived not only many decades, but also
                            the leap into electronic typesetting, remaining essentially
                            unchanged.
                        </p>
                    </div>

                    {/* Coluna da Direita */}
                    <div className="relative mx-auto md:ml-auto md:mr-0 flex min-h-[320px] w-full max-w-[280px] items-center justify-center overflow-hidden rounded-[3rem] bg-[#a78bba] shadow-sm">
                        <svg
                            className="absolute inset-0 h-full w-full text-[#8e73a1]"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 100 100"
                            preserveAspectRatio="none"
                        >
                            <line x1="0" y1="0" x2="100" y2="100" strokeWidth="1" />
                            <line x1="100" y1="0" x2="0" y2="100" strokeWidth="1" />
                        </svg>
                        <span className="relative z-10 text-xl font-medium text-gray-900">
                            Imagem
                        </span>
                    </div>

                </div>

                <div className="mt-20 flex flex-col items-center justify-between gap-8 md:flex-row md:px-12 lg:px-24">
                    <div className="text-2xl font-medium text-[#3b1c61]">Métrica 1</div>
                    <div className="text-2xl font-medium text-[#3b1c61]">Métrica 2</div>
                    <div className="text-2xl font-medium text-[#3b1c61]">Métrica 3</div>
                </div>
            </Container>
        </Section>
    );
}