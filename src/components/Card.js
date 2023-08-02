import React, { useState } from 'react'
import {FcLike} from "react-icons/fc";
import {FcLikePlaceholder} from "react-icons/fc";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Card({ course }) {
  console.log(course);
  let info=`${course.description.substring(0,160)}...`;
  const[clicked,setclicked]=useState(false);
  const [iconclicked,seticonclicked]=useState(false)
  function clickhandler()
  {
    setclicked(!clicked)
  }
  function iconclickhandler()
  {
    iconclicked ?toast.warning("LIKE REMOVED"): toast.success("LIKED SUCCESSFULLY");
    seticonclicked(!iconclicked);
  }
  
  return (
    <div className=' w-[18rem] m-3 rounded-[0.6rem] bg-slate-800'>
      <div className='relative'>
        <img className=' rounded-t-[0.6rem]' src={course.image.url}></img>
        <button className='absolute bottom-[-1.1rem] active:bg-opacity-10 bg-white bg-opacity-20 p-2 rounded-full right-5 text-[1.5rem]' onClick={iconclickhandler}>{iconclicked ?<FcLike/> : <FcLikePlaceholder/>}</button>
      </div>
      <div className='text-white ml-2 my-2'>
        <h1 className=' my-2 text-[1.18rem] font-semibold'>{course.title}</h1>
        <p className=''>

          {clicked ? course.description : info}
          <button className='text-blue-400 font-semibold' onClick={clickhandler}>{clicked ? "Show less" : "Read more"}</button>

        </p>
      </div>
      <ToastContainer/>
    </div>
  )
}
