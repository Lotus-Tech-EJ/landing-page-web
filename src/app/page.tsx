import { HeroSection } from "@/components/hero/hero-section";
import { AboutSection } from "@/components/about/about-section";
import { ServicesSection} from "@/components/services/ServicesSection";

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col">
            <HeroSection />
            <AboutSection />
            <ServicesSection />

        </main>
    );
}