import React from "react";
import Navbar from "./Navbar";
import videobg from "../assets/fn4.mp4";
// import Divs from "./Divs";
import { useEffect, useState, useRef } from "react";
import img from "../assets/hr.jpeg";
import img1 from '../assets/cons.jpeg';
import img4 from '../assets/tech2.jpg'
import img3 from "../assets/manage.jpg";
import { Link } from "react-router-dom";
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
      ${isVisible ? "opacity-100" : "opacity-0"}`;

  return (
    <div ref={ref} className={classes}>
      {children}
    </div>
  );
};
const words = [
  "Consulting Services",
  "Recruitment Services",
  "Managed Service",
];
function Home() {
  // Create a state variable to store the text opacity
  // useEffect(() => {
  //   window.scrollTo(0, 0);
  // });
  const [index, setIndex] = useState(0);

  // A useEffect hook to set up a timer that updates the index every 2 seconds
  useEffect(() => {
    // A function that increments the index by one, or resets it to zero if it reaches the end of the array
    const updateIndex = () => {
      setIndex((prevIndex) => (prevIndex + 1) % words.length);
    };

    // A variable to store the timer ID
    const timerId = setInterval(updateIndex, 1000); // A cleanup function that clears the timer when the component unmounts
    return () => {
      clearInterval(timerId);
    };
  }, []);

  return (
    <div className="w-screen homediv relative overflow-hidden">
      <Navbar />
      <div className="relative pt-16">
        <video
          src={videobg}
          className=" blur-sm top-3  absolute rounded-lg "
          autoPlay
          playsInline
          muted
          loop
        ></video>

        <div className=" relative pt-14 lg:pt-16 my-auto first max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center text-5xl flex flex-col justify-center text-sky-400  overflow-hidden">
          <h1 className="text-white  relative font-bold p-3  mt-10 text-5xl md:py-6">
            Unlocking Potential and Empowering Success <br />
            <p className="font-bold text-blue-600 p-0 pt-3 text-4xl">
              {" "}
              We are providing Our service for <br />{" "}
              <span className="text-green-600"> {words[index]}</span>
            </p>
          </h1>

          <p
            className="md:text-2xl text-xl relative font-bold pt-0 p-5 text-white
            "
          >
            We are Arrowtelelink, a leading recruitment company committed to
            connecting exceptional talent with organizations across various
            industries{" "}
          </p>
        </div>
      </div>
      {/* ------------------------------------------hr service------------------------------------------------------- */}
      <div className=" w-screen pt-8 relative pb-8">
      <RevealOnScroll>

        <h1 className="align-center text-green-500  pt-16 text-center p-5  font-bold text-4xl">
          HR Services with Arrowtelelink
        </h1>
        <div className=" lg:flex md:grid md:grid-cols-2  lg:p-5 md:p-0 sm:p-0">
          <img
            src={img}
            className="w-[500px] mx-auto   my-4 rounded-2xl"
            alt=""
          />
          <div className="flex flex-col justify-center text-center mx-auto ">
            <RevealOnScroll>
              <p className="font-bold lg:text-4xl text-3xl text-center  text-blue-500 "> Arrow TeleLink offers HR services <br /> just to professionals in
                  <br /> <span className="text-green-500">   the telecommunications and  technology fields   </span></p>
             <p className="text-center p-5 text-blue-500 lg:text-3xl text-2xl ">
             we focus on voice, SMS, business messaging <br /> and managed service
             </p>
            </RevealOnScroll>
        <div className="p-3">
                  <Link to='/Hr'>
                  <button className="rounded-md p-5 text-white bg-green-500 ">
                    Read More
                    
                    </button>
                  </Link>
                </div>
          </div>
        </div>
        </RevealOnScroll>
      </div>
      {/* ----------------------------------------consultancy service----------------------------------------------- */}
      <div className=" w-screen pt-8 relative pb-8">
      <RevealOnScroll>

        <h1 className="align-center text-green-500  pt-16 text-center p-5  font-bold text-4xl">
          Consultancy Services with Arrowtelelink
        </h1>
        <div className=" lg:flex md:grid md:grid-cols-2  lg:p-5 md:p-0 sm:p-0">
          <img
            src={img1}
            className="w-[500px] mx-auto   my-4 rounded-2xl"
            alt=""
          />
          <div className="flex flex-col justify-center text-center mx-auto ">
            <RevealOnScroll>
              <p className="font-bold lg:text-4xl text-3xl text-center  text-blue-500 ">Adopting a proactive company model   <br /> <span className="text-green-500">is essential to their survival and expansion <br /> aspects to Arrowtelelink  </span></p>
             <p className="text-center p-5 text-blue-500 lg:text-3xl text-2xl ">

             The businesses that can quickly and adeptly change <br /> and create new value will be the ones <br /> that succeed in the future  </p>
            </RevealOnScroll>
        <div className="p-3">
                  <Link to="/Consultancy">
                  <button className="rounded-md p-5 text-white bg-green-500 ">
                    Read More
                    
                    </button>
                  </Link>
                </div>
          </div>
        </div>
        </RevealOnScroll>
      </div>
      {/* ----------------------------------------manage service-----------------------------------------------------*/}
      <div className=" w-screen pt-8 relative pb-8">
      <RevealOnScroll>

        <h1 className="align-center text-green-500  pt-16 text-center p-5  font-bold text-4xl">
          Managed Services with Arrowtelelink
        </h1>
        <div className=" lg:flex md:grid md:grid-cols-2  lg:p-5 md:p-0 sm:p-0">
          <img
            src={img3}
            className="w-[500px] mx-auto   my-4 rounded-2xl"
            alt=""
          />
          <div className="flex flex-col justify-center text-center mx-auto ">
            <RevealOnScroll>
              <p className="font-bold lg:text-4xl text-3xl text-center  text-blue-500 ">Focus to your core Business Operations  <br /> <span className="text-green-500">and leaving the technical and operational <br /> aspects to Arrowtelelink  </span></p>
             <p className="text-center p-5 text-blue-500 lg:text-3xl text-2xl ">

             Arrowtelelink is the first choice  to mangae <br /> the SMS Hubs for Telecom Operators
             </p>
            </RevealOnScroll>
        <div className="p-3">
                  <Link to="/Managehubs">
                  <button className="rounded-md p-5 text-white bg-green-500 ">
                    Read More
                    
                    </button>
                  </Link>
                </div>
          </div>
        </div>
        </RevealOnScroll>
      </div>
      {/* ---------------------------------------Tech market place----------------------------------------------------- */}
      <div className=" w-screen pt-8 relative pb-8">
      <RevealOnScroll>

        <h1 className="align-center text-green-500  pt-16 text-center p-5  font-bold text-4xl">
          Technology Marketplace with Arrowtelelink
        </h1>
        <div className=" lg:flex md:grid md:grid-cols-2 md:p-0 sm:p-0">
          <img
            src={img4}
            className="w-[500px] mx-auto   my-4 rounded-2xl"
            alt=""
          />
          <div className="flex flex-col justify-center text-center mx-auto ">
            <RevealOnScroll>
              <p className="font-bold lg:text-4xl text-3xl text-center  text-blue-500 ">Technology markets are an important <br /> tool for promoting

<br /> <span className="text-green-500">technology and a valuable source of <br /> data for technological intelligence  </span></p>
  </RevealOnScroll>
        <div className="p-3">
                  <Link to='/Technology'>
                  <button className="rounded-md p-5 text-white bg-green-500 ">
                    Read More
                    
                    </button>
                  </Link>
                </div>
          </div>
        </div>
        </RevealOnScroll>
      </div>
      </div>
  );
}

export default Home;
