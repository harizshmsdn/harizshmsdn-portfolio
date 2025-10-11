import { Navbar } from "../components/Navbar";
import { HeroSection } from "../components/HeroSection";
import { ProjectSection } from "../components/ProjectSection";
import { AboutSection } from "../components/AboutSection";
import { ContactSection } from "../components/ContactSection";
import DitherBackground from "../components/DitherBackground"; 
import { Footer } from "@/components/Footer";

export const Home = () => {
    return (
        <div className="min-h-screen text-secondary overflow-x-hidden relative"> 
            
            
            <div className="fixed inset-0 z-0">

                <DitherBackground 
                    waveColor={[0.65, 0.75, 0.65]} 
                    colorNum={4}
                    pixelSize={2}
                    disableAnimation={false}
                    enableMouseInteraction={true}
                    mouseRadius={0.3}
                    waveAmplitude={0.3}
                    waveFrequency={3}
                    waveSpeed={0.05}
                />
                
            </div>

            <Navbar /> 
            
            <main className="relative z-10 pointer-events-none"> 
                <HeroSection/> 
                <ProjectSection/>
                <AboutSection/>
                <ContactSection/>
            </main>

            <Footer />
            
        </div>
    );
};