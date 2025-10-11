import blurredText from "../assets/blurredtext.png";
import coverIMAGE from "../assets/coverIMAGE.jpg";
import { ArrowDown } from "lucide-react";
import {useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import Shuffle from "./TextShuffle";

const ALIGNMENT_PADDING = "md:px-20 lg:px-20";

export const HeroSection = () => {
    const [isArrowScrolled, setIsArrowScrolled] = useState(false);

    useEffect ( () => {
        const handleScroll = () => {
            setIsArrowScrolled(window.scrollY > 10);
        }

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [] );

    return (
        <section 
            id="hero" 
            className="min-h-screen flex flex-col relative"
        >
          
            <div className="animate-fade-in relative w-full h-[45vh] sm:h-[40vh] md:h-[40vh] lg:h-[50vh] bg-cover bg-center">
                <img
                    src={blurredText}
                    alt="Wide background image"
                    className="absolute inset-0 w-full h-full object-cover z-0"
                />
                
                <div className={`absolute inset-0 flex items-center justify-start z-10 pt-8 p-4 sm:p-8 ${ALIGNMENT_PADDING}`}>
                    <div className="flex flex-col items-start text-primary pointer-events-auto">
                        <Shuffle
                            text="HARIZ"
                            className="text-6xl sm:text-7xl lg:text-9xl font-bold m-0 font-megazoid"
                            pointerEventsAuto={true} 
                            shuffleDirection="right"
                            duration={0.35}
                            animationMode="evenodd"
                            shuffleTimes={1}
                            ease="power3.out"
                            stagger={0.03}
                            threshold={0.1}
                            triggerOnce={true}
                            triggerOnHover={true}
                            respectReducedMotion={true}
                        />
                    </div>
                </div>
            </div>

            <div className={`w-full flex flex-col md:flex-row items-start justify-start relative z-10 p-4 sm:p-8 ${ALIGNMENT_PADDING}`}>
                <div className="hidden sm:block animate-fade-in w-full md:w-6/12 xl:w-8/12 h-[30vh] md:h-[40vh] flex-shrink-0">
                    <img
                        src={coverIMAGE}
                        alt="Left-aligned half-width image"
                        className="w-full h-full object-cover rounded-lg"
                    />
                </div>
                <div className="w-full md:w-6/12 xl:w-4/12 h-auto md:h-[40vh] flex flex-col justify-end md:justify-between text-left text-primary font-avenirblack mt-4 md:mt-0 md:ml-10">
                    
                    <h1 className="text-6xl sm:text-6xl md:text-6xl lg:text-8xl opacity-0 animate-fade-in-delay-1">FILM.</h1>
                    
                    <h1 className="text-6xl sm:text-6xl md:text-6xl lg:text-8xl opacity-0 animate-fade-in-delay-2">CODE.</h1>
                    
                    <h1 className="text-6xl sm:text-6xl md:text-6xl lg:text-8xl opacity-0 animate-fade-in-delay-3">REPEAT.</h1>
                </div>
            </div>
            <div 
                className={cn(" absolute bottom-5 left-1/2 transform -translate-x-1/2 flex flex-col itmes-center animate-bounce duration-300",
                                isArrowScrolled ? "opacity-0" : "opacity-100"
                            )}
            > 
                <ArrowDown className="h-5 w-5 text-primary" />
            </div>
        </section>
    );
};