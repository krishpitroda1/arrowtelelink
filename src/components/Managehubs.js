import React from "react";
import img1 from "../assets/manage.png";
import { useState,useRef,useEffect } from "react";
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
  },);

  const classes = `transition-opacity duration-1000
      ${isVisible ? "opacity-100" : "opacity-0"
      }`;

  return (
      <div ref={ref} className={classes}>
          {children}
      </div>
  );
};

function Managehubs() {
  return (
    <div>
      <div className=" w-screen pt-8 relative pb-8">
      <RevealOnScroll>

        <h1 className="align-center text-gray-500  pt-16 text-center p-5  font-bold text-4xl">
          Managed Services with Arrowtelelink
        </h1>
        <div className=" lg:flex md:grid md:grid-cols-2  lg:p-5 md:p-0 sm:p-0">
          <img
            src={img1}
            className="w-[500px] mx-auto   my-4 rounded-2xl"
            alt=""
          />
          <div className="flex flex-col justify-center text-center mx-auto ">
            <RevealOnScroll>
              <p className="font-bold lg:text-4xl text-3xl text-center  text-sky-600 ">Focus to your core Business Operations  <br /> <span className="text-gray-400">and leaving the technical and operational <br /> aspects to Arrowtelelink  </span></p>
             <p className="text-center p-5 text-gray-400 lg:text-3xl text-2xl ">

             Arrowtelelink is the first choice  to mangae <br /> the SMS Hubs for Telecom Operators
             </p>
            </RevealOnScroll>
          </div>
        </div>
        </RevealOnScroll>
        <div className="">
        <RevealOnScroll>
          <p className="text-gray-500 text-center p-5 pb-1  font-bold text-3xl">
          Let us manage your cumbersome Operations
          </p>
        </RevealOnScroll>
    
        <div className="grid pt-8  lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-3  p-5 lg:pr-8">
          <div className="benefits rounded-lg pt-8 h-32 p-5 bg-sky-900 hover:bg-gray-400  text-white">
            <RevealOnScroll>
              <p className="font-bold text-xl">We can provide network monitoring and network monitoring</p>
            </RevealOnScroll>
          </div>
          <div className="benefits rounded-lg h-32 pt-8 p-5 bg-sky-900 hover:bg-gray-400 text-white">
            <RevealOnScroll>
              <p className="font-bold text-xl">We can provide security,optimization,procurment </p>
            </RevealOnScroll>
          </div>
          <div className="benefits rounded-lg  -32 pt-8 p-5 bg-sky-900 hover:bg-gray-400 text-white">
            <RevealOnScroll>
              <p className="font-bold text-xl">We can provide wholsale platform and SMSC management</p>
            </RevealOnScroll>
          </div>
          <div className="benefits rounded-lg  h-32 pt-8 p-5 bg-sky-900 hover:bg-gray-400 text-white">
            <RevealOnScroll>
              <p className="font-bold text-xl">Our Team is deployed remotely to manage the complete backend for Telcos</p>
            </RevealOnScroll>
          </div>
          <div className="benefits rounded-lg h-32 p-5 pt-8 bg-sky-900 hover:bg-gray-400 text-white">
            <RevealOnScroll>
              <p className="font-bold text-xl">Telco can  use Arrowtelelink's services</p>
            </RevealOnScroll>
          </div>
          <div className=" benefits rounded-lg h-32 p-5 pt-8 bg-sky-900 hover:bg-gray-400 text-white">
            <RevealOnScroll>
              <p className="font-bold text-xl">Arrowtelelink 's expertise to maximize both cost and efficacy</p>
            </RevealOnScroll>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
}

export default Managehubs;
