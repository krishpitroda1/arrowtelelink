import React from 'react'
import img1 from "../assets/circle.png";
import img2 from "../assets/hr.jpeg";

function Technology() {
  return (
    <div>
    <div className=" w-screen pt-8 relative pb-8">
    

      <h1 className=" text-green-500  pt-16 text-center p-5  font-bold text-4xl">
      Technology Market Place  </h1>
      <div className=" lg:grid-cols-2 grid md:grid-cols-1  lg:p-5 md:p-0 sm:p-0">
        <img
          src={img2}
          className="w-[500px] mx-auto my-4 rounded-2xl"
          alt=""
        />
        <div className="mx-auto p-5 pt-10">
        <p className="text-blue-600 text-2xl font-bold">
        Technology markets are an important tool for promoting technology and a valuable source of data for technological intelligence.
    </p>
    <p className="text-blue-600 text-lg ">
    Technology marketplaces come in a variety of forms. They can be based on common interests, industry specialization, proficient in technology requests and offers or patents, specialized in technology or innovation difficulties, or even communities of specialists. The ones that matter most for technology are:

Arrow Telelink is one of the main technology transfer
     </p>
        <div>
          <p className="pt-5 text-2xl font-bold text-green-500">Our Technology Marketplace will help to:
</p>
          <div className="pt-4 grid lg:grid-cols-1 text-blue-600 md:grid-cols-1">
            <div className="flex text-xl pt-1 ">
              <img src={img1} alt="" className="h-7 w-7" />
              <p>Find ideas for new products and services</p>
            </div>
            <div className="flex text-xl pt-1">
              <img src={img1} alt="" className="h-7 w-7" />
              <p>Answer questions about patenting and protection of ideas</p>
            </div>
            <div className="flex text-xl pt-1">
              <img src={img1} alt="" className="h-7 w-7" />
              <p> Exploit users' own technologies</p>
            </div>
            <div className="flex text-xl pt-1">
              <img src={img1} alt="" className="h-7 w-7" />
              <p> Provide a starting point for science and technology around the world</p>
            </div>
      
          </div>
        </div>
          
     </div>
      </div>
    
   
    </div>
  </div>)
}

export default Technology
