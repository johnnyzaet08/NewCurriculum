"use client";

import { Course } from "@/types/curriculum";
import { useState, useEffect } from "react";

const SingleNewCourse = ({ course }: { course: Course }) => {
    const { code, name, credits, equivalence } = course;

    const [isClicked, setIsClicked] = useState(false);

    const sessionStorage = window.sessionStorage;
    
    useEffect(() => {
        if(sessionStorage.getItem(equivalence) == "on"){
          setIsClicked(true);
        }
    }, []);
    
    return (
      <div className={`block w-full h-[200px] border-[1px] rounded-[10px] justify-center items-center ${ isClicked ? "bg-green-300 dark:bg-gray-500" : "" }`}>
        <div className="block w-full h-[140px]" data-wow-delay=".15s">
          <div className="flex">
            <h3 className="ml-2 mb-5 text-xl w-full h-auto text-center font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
              {code}
            </h3>
            <span className="mt-2 -mr-2 text-sm w-full h-auto text-center font-bold text-black dark:text-white">
              {credits} cr
            </span>
          </div>
          <div className="flex h-full justify-center">
            <span className="flex items-center mb-5 mr-1 ml-1 text-center text-black dark:text-white text-xl">
              {name}
            </span>
          </div>
        </div>
      </div>
    );
  };
  
  export default SingleNewCourse;