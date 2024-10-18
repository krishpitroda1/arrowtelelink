import React, { useEffect ,useState,useRef} from "react";
import img from "../assets/ab.jpg";
const RevealOnScroll = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
      const scrollObserver = new IntersectionObserver(([entry]) => {
          if (entry.isIntersecting) {
              setIsVisible(true);
              scrollObserver.unobserve(entry.target);
          }
      });

      scrollObserver.observe(ref.current);

      return () => {
          if (ref.current) {
              scrollObserver.unobserve(ref.current);
          }
      };
  }, []);

  const classes = `transition-opacity duration-1000
      ${isVisible ? "opacity-100" : "opacity-0"
      }`;

  return (
      <div ref={ref} className={classes}>
          {children}
      </div>
  );
};

function About() {
  useEffect(() => {
    window.scrollTo(0, 0);
  },[]);
  return (
    <div className="w-screen  overflow-x-hidden p-8 ">
      <div className="">
        <h1 className="lg:l-5 sm:pl-5 pl-5 align-center text-green-500 pt-10 text-center p-5  font-bold text-3xl">
        <RevealOnScroll>
          About Us
        </RevealOnScroll>
        </h1>
      </div>
      <div className="">
        <RevealOnScroll>
        <div className="lg:flex md:grid lg:grid-cols-2 md:pl-3 md:p-5 lg:p-0 sm:p-0">
           <img
            className="w-[500px] rounded-2xl mx-auto  "
            src={img}
            alt="/"
          /> 
          <div className="flex flex-col lg:pl-5 justify-center">
            {/* <p className="text-sky-600 font-bold text-3xl">About Us</p> */}
            <h1 className="md:text-2xl sm:text-2xl text-blue-600 text-2xl font-bold p-5">
          <RevealOnScroll>

          SMSCloud Hub provides solutions for better customer engagement through a cloud
based platform empowering businesses to engage with their people through a variety of 
channels, making their communication conversational, more personalized, fun, 
meaningful, and with ease.</RevealOnScroll>
            </h1>
          <p className="p-5 text-xl">SMSCloud Hub is a team of experts with a background in A2P SMS with operational excellence & effective support.</p>
          <p className="p-5 text-xl">When messaging is the central to the business, we solve today’s unique customer challenges by bridging business to the world by using complex communication channels. And we thrive with A2P messaging for Indian and International market providing solutions with the right mix of Cloud Technlogy & Telecommunications</p>
          </div>
        </div>
        </RevealOnScroll>
      </div>
   
    </div>
  );
}

export default About;
