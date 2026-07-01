import { HeroSection } from "@/components/hero/hero-section";
import { AboutSection } from "@/components/about/about-section";
import { ServiceSection} from "@/components/services/service-section";

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col">
            <HeroSection />
            <AboutSection />
            <ServiceSection />

        </main>
    );
}