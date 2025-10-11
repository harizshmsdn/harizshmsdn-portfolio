import { ArrowUpRight } from "lucide-react";
import TextPressure from "./TextPressure";

export const ContactSection = () => {

    return (
        <section id="contact" className="py-24 px-4 relative">
            <div className="container mx-auto max-w-5xl">

                <TextPressure 
                    text="LET'S KEEP"
                    flex={true}
                    alpha={false}
                    stroke={false}
                    width={true}
                    weight={true}
                    italic={false}
                    textColor="#1F4529"
                    minFontSize={36}
                />
                <TextPressure 
                    text="IN TOUCH"
                    flex={true}
                    alpha={false}
                    stroke={false}
                    width={true}
                    weight={true}
                    italic={false}
                    textColor="#1F4529"
                    minFontSize={36}
                    className="pb-15"
                />
            </div>
            <div className="container mx-auto max-w-5xl pointer-events-auto">
                <div className="flex justify-between items-center flex-wrap">
                    <a 
                        className="underline group flex items-center text-primary text-xl md:text-2xl font-semibold duration-500 hover:scale-105"
                        href="https://my.linkedin.com/in/hariz-shamsudin-225229317"
                    >
                        LinkedIn <ArrowUpRight className="text-primary ml-1 duration-500 group-hover:rotate-45 group-hover:scale-105" />
                    </a>
                    <a className="underline group flex items-center text-primary text-xl md:text-2xl font-semibold duration-500 hover:scale-105" 
                        href="https://www.instagram.com/hhhariz/"
                    >
                        Instagram <ArrowUpRight className="text-primary ml-1 duration-500 group-hover:rotate-45 group-hover:scale-105" />
                    </a>
                    <a className="underline group flex items-center text-primary text-xl md:text-2xl font-semibold duration-500 hover:scale-105"
                        href="mailto:harizshmsdn@gmail.com"
                    >
                        harizshmsdn@gmail.com <ArrowUpRight className="text-primary ml-1 duration-500 group-hover:rotate-45 group-hover:scale-105" />
                    </a>
                </div>
            </div>
        </section>
    );
};