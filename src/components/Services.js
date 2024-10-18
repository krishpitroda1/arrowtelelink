import React from 'react'
import { useEffect} from 'react'
import img1 from '../assets/ccc.png'
function Services() {
  useEffect(() => {
    window.scrollTo(0, 0);
  },[]);
  return (
    <div className=''>
       <div className="w-screen relative  pb-8">
    
        <h1 className=" text-gray-500 pt-16 text-center p-5  font-bold lg:text-4xl text-2xl ">
          CloudContactCenter
        </h1>
        <div className=" lg:flex md:grid md:grid-cols-2 lg:pl-3 lg:p-5 md:p-0 sm:p-0">
          <img
            src={img1}
            className="w-[500px] mx-auto lg:pl-10  my-4 rounded-2xl"
            alt=""
          />
          <div className="flex flex-col justify-center text-center mx-auto ">
          
              <p className="font-bold lg:text-4xl text-3xl text-center p-5  text-blue-600 ">
                Make Your Communication Conversational <br />{" "}
                <span className="text-gray-400">
                  personalized,fun and with ease
                </span>
              </p>
              <p className="text-center p-5 lg:p-36 lg:pt-3 lg:pb-0 text-gray-400 lg:text-2xl text-2xl ">
                We are in Platform & Managed Services across both the Indian and
                International markets, offering solutions tailored with the
                perfect blend of Cloud Technology and Telecommunications{" "}
              </p>
          
          </div>
        </div>
    

      <div className="">
      
          <p className="text-gray-500 text-center p-5 pb-1  font-bold text-3xl">
            Working of the CloudContactCenter
          </p>
      

        <div className="grid   lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-3  p-5 lg:pr-8">
          <div className="benefits rounded-lg   p-5 bg-sky-900 hover:bg-gray-400  text-white">
          
              <p className="font-bold text-xl">Cloud Infrastructure</p>
              <p>
                This eliminates the need for businesses to invest in on-premises
                hardware and software
              </p>
          
          </div>
          <div className="benefits rounded-lg   p-5 bg-sky-900 hover:bg-gray-400 text-white">
          
              <p className="font-bold text-xl">Channel Integration </p>
              <p>
                This can include voice calls, email, live chat, SMS, social
                media platforms, and more
              </p>
          
          </div>
          <div className="benefits rounded-lg  -32  p-5 bg-sky-900 hover:bg-gray-400 text-white">
          
              <p className="font-bold text-xl">Skills-Based Routing</p>
              <p>
                Customer interactions are routed to agents with the appropriate
                skills
              </p>
          
          </div>
          <div className="benefits rounded-lg    p-5 bg-sky-900 hover:bg-gray-400 text-white">
          
              <p className="font-bold text-xl"> Agent Console</p>
              <p>
                Agents access the Cloud Contact Center system through a
                web-based console
              </p>
          
          </div>
          <div className="benefits rounded-lg  p-5  bg-sky-900 hover:bg-gray-400 text-white">
          
              <p className="font-bold text-xl"> Reporting and Analytics</p>
              <p>
                These insights help businesses optimize their operations and
                identify areas for improvement
              </p>
          
          </div>
          <div className=" benefits rounded-lg  p-5  bg-sky-900 hover:bg-gray-400 text-white">
          
              <p className="font-bold text-xl">CRM integration</p>
              <p>
                {" "}
                This integration enables personalized and context-rich
                conversations
              </p>
          
          </div>
        </div>
      </div>
    </div>
     </div>
  )
}

export default Services
