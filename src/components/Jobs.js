import React, { useEffect, useState } from "react";
import SearchBar from "./SearchBar";
import JobCard from "./JobCard";

import JobDummyData from "../JobDummyData";
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "../Firebase.config";
// import {toDate} from 'dayjs';
function Jobs() {
  const [jobs, setJobs] = useState([]);
  // const dayjs = require('dayjs');
  const fetchJobs = async () => {
    const tempJobs = [];
    const q = query(collection(db, "jobs"));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((job) => {
      // console.log(doc.id,'=>',doc.data());
      tempJobs.push({
        ...job.data(),
        id: job.id,
        // postedOn:job.data().postedOn.toDate()
      });
    });
    setJobs(tempJobs);
  };

  useEffect(() => {
    fetchJobs();
  }, []);
  return (
    <div>
      <div className="  relative pt-7 flex flex-col gap-5 items-center justify-center text-sky-600  w-screen">
        <h1 className="lg:text-5xl text-3xl text-center text-gray-500 font-bold  p-3  pb-0 pt-10 ">
          Your ideal job awaits, start the search
        </h1>
        <p className="text-xl p-5 text-center pt-0 ">
          Get latest job openings that best suits you!
        </p>
        {/* <SearchBar fetchJobsCustom={fetchJobsCustom}/> */}
        {jobs.map((job) => (
          <JobCard key={job.id} {...job} />
        ))}
        {/* <JobCard/> */}
      </div>
    </div>
  );
}

export default Jobs;
