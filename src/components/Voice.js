import React from 'react'
import img2 from '../assets/circle.png'
import img1 from '../assets/voice.png'
function Voice() {
  return (
    <div className=" w-screen relative pt-8">
    <h1 className=" text-green-500 pt-16 text-center p-5 font-bold text-4xl ">
    Elevate Your Communications with Arrowtelelink VoIP Solutions  </h1>
      <div className=" lg:grid-cols-2 md:grid md:grid-cols-1 lg:p-5 md:p-0 sm:p-0">
        <img
          src={img1}
          className="w-[500px] mx-auto my-4 rounded-2xl"
          alt=""
        />
        <div className=" p-5 mx-auto">
              <p className="font-bold text-2xl  text-blue-600 ">
              Seamless Connectivity, Reliable
Routing and Top-tier Service   </p>
              <p className="text-blue-600 text-xl pt-2 ">
              At SMSCloud Hub, we excel in VoIP termination, enabling businesses to seamlessly connect with their customers. Leveraging our vast network of carriers and Tier 1 operators, we ensure reliable and efficient routing of voice traffic.</p>
              <div className="">
      
      <p className="text-green-500 pt-3 pb-3  font-bold text-2xl">
        Benefits of Voice with Arrowtelelink
      </p>
    


  <div className=" grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-3">
      <div className="rounded-lg text-blue-600">
        
          <p className="text-xl font-bold flex">
              <img src={img2} className='h-7 w-7' alt="" />
              Competitive rates
              </p>
          <p>
          SMSCloud Hub's strength is to offer the best possible rates without compromising on quality</p>
        
      </div>
      <div className=" rounded-lg text-blue-600">
        
          <p className="text-xl font-bold flex">
          <img src={img2} className='h-7 w-7' alt="" />
          SIP Integration
    
          </p>
          <p>Industry accepted SIP connectivity</p>
        
      </div>
      <div className="rounded-lg  text-blue-600">
        
          <p className="text-xl flex font-bold">
              <img src={img2} className='h-7 w-7' alt="" />
              Expandable capability
    
    </p>
          <p>Advance Expandable capacity with endless channels and robust cps capabilities</p>
        
      </div>
      <div className=" rounded-lg  text-blue-600">
        
          <p className="text-xl font-bold flex">
          <img src={img2} className='h-7 w-7' alt="" />
    
          Global DID coverage</p>
          <p>
          
          For hassle-free access and explore our convenient access numbers </p>
        
      </div>
      <div className="rounded-lg text-blue-600">
        
          <p className="text-xl flex font-bold">
          <img src={img2} className='h-7 w-7' alt="" />
          CloudContactCenter Platform & API's
              </p>
          <p>
          Rich-featured CCC (CloudContactCenter) platform for agent management and intensifying engagement</p>
        
      </div>
      <div className=" rounded-lg text-blue-600">
      
          <p className="text-xl font-bold flex">
          <img src={img2} className='h-7 w-7' alt="" />
          Friendly Support
        </p>
          <p>
          Round-the-clock support with a friendly nature for quick and effective services </p>
        
      </div>
    </div>
  </div>
        </div>

      </div>
   
  </div>)
}

export default Voice
