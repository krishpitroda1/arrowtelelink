 import React from "react";
import img2 from "../assets/manage.jpg";
import img1 from "../assets/circle.png";

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
      <div className=" w-screen pt-8 relative pb-8 ">
      <RevealOnScroll>

        <h1 className=" text-green-500  pt-16 text-center p-5  font-bold text-4xl">
          Managed Services with Arrow Telelink
        </h1>
        <div className=" lg:grid-cols-2 grid md:grid-cols-1  lg:p-5 md:p-0 sm:p-0">
          <img
            src={img2}
            className="w-[500px] mx-auto my-4 rounded-2xl"
            alt=""
          />
          <div className="mx-auto p-5 pt-10">
          <p className="text-blue-600 text-2xl font-bold">
            Welcome to our Consulting Services! We provide expert guidance to
            help you navigate the ever-evolving telecom and technology
            landscape.Our team of experienced consultants brings a wealth of
            industry knowledge to deliver tailored solutions for your specific
            challenges.
          </p>
          <div>
            <p className="pt-5 text-2xl font-bold text-green-500">Let us manage your cumbersome Operations</p>
            <div className="pt-4 grid lg:grid-cols-1 text-blue-600 md:grid-cols-1">
              <div className="flex text-xl pt-1 ">
                <img src={img1} alt="" className="h-7 w-7" />
                <p>Our Team is deployed remotely to manage the complete backend for Telcos</p>
              </div>
              <div className="flex text-xl pt-1">
                <img src={img1} alt="" className="h-7 w-7" />
                <p>We can provide network monitoring and network monitoring</p>
              </div>
              <div className="flex text-xl pt-1">
                <img src={img1} alt="" className="h-7 w-7" />
                <p>We can provide security,optimization,procurment</p>
              </div>
              <div className="flex text-xl pt-1">
                <img src={img1} alt="" className="h-7 w-7" />
                <p>We can provide wholsale platform and SMSC management</p>
              </div>
              <div className="flex text-xl pt-1">
                <img src={img1} alt="" className="h-7 w-7" />
                <p>Telco can use Arrow Telelink's services</p>
              </div>
              <div className="flex text-xl pt-1">
                <img src={img1} alt="" className="h-7 w-7" />
                <p>Arrow Telelink 's expertise to maximize both cost and effciency</p>
              </div>
            </div>
          </div>
            
       </div>
        </div>
        </RevealOnScroll>
        {/* <div className="">
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
      </div> */}
      </div>
    </div>
  );
}

export default Managehubs;
