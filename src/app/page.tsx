import { HeroSection } from "@/components/hero/hero-section";
import { AboutSection } from "@/components/about/about-section";

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col">
            <HeroSection />
            <AboutSection />
        </main>
    );
}