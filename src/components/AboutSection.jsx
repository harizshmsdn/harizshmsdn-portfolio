import aboutImageVertical from "../assets/vertical.jpg"; 
import aboutImageSquare from "../assets/face.jpg"; 

const CONTENT_ALIGNMENT_PADDING = "md:px-20 lg:px-20";

export const AboutSection = () => {

  return (
    <section 
      id="about" 
      
      className="min-h-screen py-16 px-4 md:px-20 flex flex-col justify-center text-primary" 
    >
      
      <div className="flex flex-col xl:flex-row gap-10 items-start w-full"> 
        
        <div className="w-full xl:w-7/12 flex flex-col md:flex-row gap-5 lg:gap-12 items-start">
            
            <div className="w-full md:w-5/12 flex justify-center md:justify-start pt-16 md:pt-0">
              <div className="w-full sm:w-3/4 md:w-full max-w-sm">
                <img
                  src={aboutImageSquare}
                  alt="4:3 aspect ratio image of Hariz"
                  className="w-full object-cover shadow-2xl rounded-lg"
                  style={{ maxHeight: '40vh', aspectRatio: '3 / 4' }} 
                />
              </div>
            </div>
            
            <div className="w-full md:w-7/12 flex-shrink-0 flex justify-center md:justify-start">
              <img
                src={aboutImageVertical}
                alt="Vertical portrait image of Hariz"
                className="w-full max-w-md h-auto object-cover rounded-lg"
                style={{ maxHeight: '80vh' }}
              />
            </div>
        </div>
        
        <div className="w-full xl:w-5/12 text-left space-y-6 mt-8 xl:mt-0">
          <h2 className="text-5xl md:text-6xl font-extrabold m-0">
            A LITTLE BIT OF ME
          </h2>
          <p className="text-lg md:text-xl font-light leading-relaxed">
            Digital creation and versatility. These two aspects are what I believe that needs to be balanced while mastering the convergence of technology and art. As a digital creator, it is vital that I use my background in computer science to build harmonic and intuitive digital experiences, and my passion for cinematography to produce captivating films.
          </p>
          <p className="text-lg md:text-xl font-light leading-relaxed">
            Whilst studying for my Bachelor of Computer Science in Artificial Intelligence in University of Malaya, I am actively looking for opportunities to expand my technological and character boundaries. Making time for side-projects and diligently keeping up-to-date with the latest technologies is what I do to keep pushing my knowledge in this field. For the sake of character development, I constantly participate in university projects and events. Let's not forget about my love for cinematography. It keeps me sane.  
          </p>
          <p className="text-lg md:text-xl font-light leading-relaxed">
            How do I approach all of this? Proper planning.
            I believe that taking a moment to think before starting something is what determines the success of an activity. Organize your thoughts and goals. Using a framework that adapts to different types of activities makes my work effective and efficient. 
          </p>
          <p className="text-lg md:text-xl font-bold leading-relaxed italic">
            "Luck is when preparation meets opportunity"
          </p>
        </div>
      </div>
    </section>
  );
};