import React from 'react'
import { useEffect, useState, useRef } from "react";
import img2 from '../assets/circle.png'
import img1 from '../assets/ab.jpg'
function A2p() {
    useEffect(() => {
        window.scrollTo(0, 0);
      });
    
      return (
        <div className=" w-screen relative pt-8">
          <h1 className=" text-green-500 pt-16 text-center p-5 font-bold text-4xl ">
            Application to Person (A2P) Messaging
          </h1>
            <div className=" lg:grid-cols-2 md:grid md:grid-cols-1 lg:p-5 md:p-0 sm:p-0">
              <img
                src={img1}
                className="w-[500px] mx-auto my-4 rounded-2xl"
                alt=""
              />
              <div className=" p-5 pt-10 mx-auto">
                    <p className="font-bold text-2xl  text-blue-600 ">
                      Power of Customer Connect and Engage with your customers  instantly and in real time
                    </p>
                    <p className="text-blue-600 text-xl pt-2 ">
                      Tap into the highest engagement rates with A2P SMS, where 9
                      out of 10 people read their texts within 3 minutes of Global
                      Average, by seamlessly integrating SMS into your Transaction
                      API or Campaign Manager to deliver OTP Message or any
                      promotion.
                    </p>
                    <div className="">
            
            <p className="text-green-500 pt-5 pb-3  font-bold text-2xl">
              Benefits of A2P with SMSCloud Hub
            </p>
          
  
     
        <div className=" grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-3">
            <div className="rounded-lg text-blue-600">
              
                <p className="text-xl font-bold flex">
                    <img src={img2} className='h-7 w-7' alt="" />
                    Reach
                    </p>
                <p>
                  Deliver messages in more than 195 countries with a single click{" "}
                </p>
              
            </div>
            <div className=" rounded-lg text-blue-600">
              
                <p className="text-xl font-bold flex">
                <img src={img2} className='h-7 w-7' alt="" />
                    Routes
          
                </p>
                <p> Use our 0Hop or 1Hop routes for secured delivery</p>
              
            </div>
            <div className="rounded-lg  text-blue-600">
              
                <p className="text-xl flex font-bold">
                    <img src={img2} className='h-7 w-7' alt="" />
                    Support      
          
          </p>
                <p> 24X7 Support and AM team</p>
              
            </div>
            <div className=" rounded-lg  text-blue-600">
              
                <p className="text-xl font-bold flex">
                <img src={img2} className='h-7 w-7' alt="" />
          
                    Data Security</p>
                <p>
                
                  Robust platform with complete authentication and 99.99% uptime
                </p>
              
            </div>
            <div className="rounded-lg text-blue-600">
              
                <p className="text-xl flex font-bold">
                <img src={img2} className='h-7 w-7' alt="" />
          
                    Scalable</p>
                <p>
                  On Demand Cloud based expandable TPS of 1000 from 700 regular
                  TPS
                </p>
              
            </div>
            <div className=" rounded-lg text-blue-600">
            
                <p className="text-xl font-bold flex">
                <img src={img2} className='h-7 w-7' alt="" />
          
                    Countrywise Compliance</p>
                <p>
                  Manage rapidly changing countrywise compliance with
                  our experts' team
                </p>
              
            </div>
          </div>
        </div>
              </div>
      
            </div>
         
        </div>
      );
    
}

export default A2p
