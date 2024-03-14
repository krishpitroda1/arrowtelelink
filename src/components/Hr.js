import React from "react";
import img1 from "../assets/circle.png";
import img from '../assets/hr.jpeg'
function Hr() {
  return (
    <div className="pt-16">
      <h1 className="w-screen text-green-500 pt-10 text-center p-5 font-bold text-4xl">
        HR & Recruitment
      </h1>
      <div className="w-screen grid  lg:grid-cols-2 md:grid-cols-1">
        <div>
        <img
            src={img}
            className="w-[500px] mx-auto   my-4 rounded-2xl"
            alt=""
          />
        
        </div>
        <div className="p-5 pr-10">
          <p className="text-blue-600 text-2xl font-bold">
            Unlock your workforce potential with our HR & Recruitment services.
            We specialize in finding the right talent to fuel your company's
            growth.
          </p>
          <div>
            <p className="pt-5 text-2xl font-bold text-green-500">
              Recruitment Services
            </p>
            <div className="pt-4 grid lg:grid-cols-2 text-blue-600 md:grid-cols-1">

            <div className="flex text-xl ">
              <img src={img1} alt="" className="h-7 w-7" />
              <p>
                
                Executive Search
    
              </p>
            </div>
            <div className="flex text-xl">
              <img src={img1} alt="" className="h-7 w-7" />
              <p>
                
              Talent Acquisition
    </p>
            </div>
            <div className="flex text-xl">
              <img src={img1} alt="" className="h-7 w-7" />
              <p>
                
            
                 Technical Recruitment
    
    
              </p>
            </div>
            <div className="flex text-xl">
              <img src={img1} alt="" className="h-7 w-7" />
              <p>
                
                
   
    HR Consulting 
              </p>
            </div>
            </div>
            
          </div>
          <div>
            <p className="pt-5 text-2xl font-bold text-green-500">
            Why Partner With Us 
            </p>
            <div className="pt-4 grid lg:grid-cols-1 text-blue-600 md:grid-cols-1">

            <div className="flex text-xl ">
              <img src={img1} alt="" className="h-7 w-7" />
              <p>
                
              Industry-Specific Expertise
        
    
              </p>
            </div>
            <div className="flex text-xl">
              <img src={img1} alt="" className="h-7 w-7" />
              <p>
                
              Talent Acquisition
    </p>
            </div>
            <div className="flex text-xl">
              <img src={img1} alt="" className="h-7 w-7" />
              <p>
                
            
              Streamlined Hiring Processes

    
              </p>
            </div>
          
            </div>
            
          </div>
          <div>
          <p className="pt-5 text-2xl font-bold text-green-500">
              Career Opportunities
            </p>
            <div className="flex pt-5">
            <img src={img1} alt="" className="h-7 w-7" />
              <p className="text-xl text-blue-600">
              Provide a section for job seekers to explore opportunities within your organization.

              
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hr;
