import { cn } from "@/lib/utils";
import { Menu, X, Squircle } from "lucide-react";
import {useEffect, useState } from "react";

const navItems = [
    {name: "Home" , href: "#hero"},
    {name: "Projects" , href: "#projects"},
    {name: "About" , href: "#about"}, 
    {name: "Contact" , href: "#contact"},
];

export const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isLogoScrolled, setIsLogoScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect ( () => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
            setIsLogoScrolled(window.scrollY > window.innerHeight);
        }

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [] );

    return (
        <nav 
            className = {cn(
                "fixed w-full z-40 transition-all duration-300 flex justify-center",
                isScrolled ? "py-3" : "py-5"
            )}
        >
            <div className="container flex justify-center relative">
                
                <a 
                    className={cn(
                        "text-2xl text-primary font-megazoid flex items-center transition-all duration-300",
                        isLogoScrolled ? "opacity-100 pointer-events-auto px-2 pt-1 rounded-lg bg-background/10 backdrop-blur-md" : "opacity-0 pointer-events-none"
                    )} 
                    href="#about"
                >
                    <span > HARIZ </span>
                </a>
                
                
                <div 
                    className={cn(
                        "absolute right-4 top-1/2 -translate-y-1/2 z-50", 
                        "flex items-center transition-all duration-300",
                        isScrolled ? "py-2 px-4 rounded-lg bg-background/10 backdrop-blur-md" : "py-0 px-0"
                    )}
                >
                    {/* Desktop Nav */}
                    <div className="hidden lg:flex space-x-8"> 
                        {navItems.map((item, key) => (
                            <a 
                                key={key} 
                                href={item.href} 
                                className="text-primary hover:text-card transition-colors duration-300"
                            >
                                {item.name}
                            </a>
                        ))}
                    </div>

                    {/* Mobile Nav Button */}
                    <button 
                        onClick={() => setIsMenuOpen((prev) => !prev)}
                        className="lg:hidden p-2 text-primary" 
                        aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
                    >
                        {isMenuOpen ? <X size={24}/> : <Menu size={24}/>}
                    </button>
                </div>
                
                {/* Mobile Menu Overlay */}
                <div 
                    className = {cn(
                        "fixed inset-0 bg-background/95 backdrop-blur-md z-40 flex flex-col items-center justify-center",
                        "transition-all duration-300 lg:hidden",
                        isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none" 
                    )}
                >  
                    <div className="flex flex-col space-y-8 text-xl">
                        {navItems.map((item, key) => (
                            <a 
                                key={key} 
                                href={item.href} 
                                className="text-primary hover:text-card transition-colors duration-300"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                {item.name}
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </nav>
    );
};