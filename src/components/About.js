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
            <h1 className="md:text-2xl sm:text-2xl text-sky-600 text-2xl font-bold p-5">
          <RevealOnScroll>

          Arrow TeleLink is a professional network led by Ashish Bavishi & Few industry stalwarts that specialises in IT and telecom consulting, HR, VAS, Technology and Funding.
   </RevealOnScroll>
            </h1>
            <p className="p-5 pt-0 text-xl text-black">
             <RevealOnScroll>

             With over 30 years of telecommunications experience, we use our expertise to bring organisations together and form new partnerships. 
</RevealOnScroll>
            </p>
            <p className="p-5 pt-0 text-xl">The goal is to plug in the gaps of the industry and provide right resource, right advise and right technology making TCO affordable. 


</p>
            <p className="p-5 pt-0 text-xl">
             <RevealOnScroll>
             Discover the benefits of the Arrow TeleLink Team's unique ideas by exploring our offerings as under...
             <br />1.Consulting <br />2.HR <br />3.Technology Market Place <br />4.Managed Services
           
         </RevealOnScroll>
            </p>
            <p className="p-5 pt-0 text-xl">
            Our primary focus is Messaging, CPaaS & Technology.
            </p>
          </div>
        </div>
        </RevealOnScroll>
      </div>
   
    </div>
  );
}

export default About;
