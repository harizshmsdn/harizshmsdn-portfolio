import { ArrowUpRight } from "lucide-react";
import CurvedLoop from "./CurvedLoop";
import TiltedCard from "./TiltedCard";

const projects = [

    {
        id: 1,
        title: "Youtube Channel",
        description: "I do some vlogs from time to time",
        image: "/projects/temp1.jpg",
        demoUrl: "https://www.youtube.com/@hhhariz",
    },
    {
        id: 2,
        title: "TEMP IMAGE",
        description: "temp description",
        image: "/projects/temp2.jpg",
        demoUrl: "#",
    },
    {
        id: 3,
        title: "MASH'D",
        description: "Multimedia Producer",
        image: "/projects/temp3.jpg",
        demoUrl: "https://www.instagram.com/mashd.kl/",
    },

];

export const ProjectSection = () => {

    return (
        <section id="projects" className="py-24 px-4 relative">
            <div className="mx-auto pt-10 pb-0">
                <CurvedLoop
                    marqueeText="LATEST PROJECTS ✦"
                    speed={2}
                    curveAmount={-80}
                    direction="right"
                    interactive={true}
                    className="fill-primary font-avenirblack pointer-events-auto"
                />
            </div>

            <div className="container mx-auto max-w-6xl pointer-events-auto">
                <div className="
                    grid grid-cols-1 
                    md:grid-cols-2 
                    lg:grid-cols-3 
                    md:gap-12 lg:gap-16 xl:gap-24 items-start
                    
                ">
                    {projects.map((project, key) => {
                        const rotationClass =
                            key === 0 ? 'lg:-rotate-3' :       
                            key === 1 ? 'lg:rotate-0' :        
                            key === 2 ? 'lg:rotate-3' : '';    

                        const translationClass =
                            key === 0 ? 'lg:translate-y-8' :   
                            key === 1 ? 'lg:translate-y-0' :   
                            key === 2 ? 'lg:translate-y-8' : ''; 

                        return (
                            <div
                                key={key}
                                className={`
                                    group flex flex-col items-center transition duration-300 w-full
                                    ${translationClass}
                                    ${rotationClass}   
                                    
                                    transform origin-center
                                `}
                            >
                                <a 
                                    href={project.demoUrl} 
                                    target="_blank" 
                                    rel="noopener noreferrer" 
                                    className="w-full aspect-square flex justify-center items-center" 
                                >
                                    <TiltedCard
                                        imageSrc={project.image}
                                        altText={project.title}
                                        captionText={project.title}
                                        
                                        rotateAmplitude={14}
                                        scaleOnHover={1.05}
                                        showMobileWarning={false}
                                        showTooltip={false}
                                        displayOverlayContent={false}
                                        
                                        overlayContent={
                                            <p className="tilted-card-demo-text font-bold text-lg p-2 bg-black bg-opacity-50 rounded-md">
                                                {project.title}
                                            </p>
                                        }
                                        
                                        wrapperClassName={`
                                            bg-card rounded-lg overflow-hidden shadow-xl 
                                            transition duration-300 card-hover w-full h-full 
                                        `}
                                    />
                                </a>

                                <a href={project.demoUrl} className="pb-10">
                                    <h3 className="text-xl font-semibold text-center mt-4 text-primary flex items-center justify-center duration-500 group-hover:scale-105">
                                        {project.title} <ArrowUpRight className="text-primary text-md ml-1 duration-500 group-hover:rotate-45 group-hover:scale-105" />
                                    </h3>
                                    <p className="text-card text-sm mb-4">{project.description}</p>
                                </a>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};