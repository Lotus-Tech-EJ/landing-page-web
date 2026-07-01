import { servicesData } from '@/data/services';
import { ServiceCard } from './ServiceCard';
import { Section } from '@/components/ui/section';
import { Container } from '@/components/ui/container';

export function ServiceSection() {
    return (
        <Section
            id="servicos"
            className="w-full bg-[#6b4a9b] text-white"
            aria-labelledby="services-heading"
        >
            <Container>

                <div className="w-full text-center mb-16">
                    <h2
                        id="services-heading"
                        className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl"
                    >
                        Confira nosso Portfólio!
                    </h2>

                </div>

                <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-2 max-w-6xl mx-auto">
                    {servicesData.map((service) => (
                        <ServiceCard key={service.id} service={service} />
                    ))}
                </div>

            </Container>
        </Section>
    );
}