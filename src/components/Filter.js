import React from 'react'
import filterdata from './Data'
export default function Filter({category,setcategory}) {
    function categoryhandler(title)
    {
      setcategory(title)
      
    }
  return (
    <div className='flex justify-center flex-wrap m-4 gap-4'>
        {
            filterdata.map((data)=>{
            
                return(<button key={data.id}  className={` border-2 rounded-[0.4rem] px-3 font-semibold bg-slate-700 text-white py-1 ${category==data.title ? "border-white" : " border-transparent"}`} onClick={()=>{categoryhandler
                (data.title)}}>{data.title}</button>);
            })
        }
    </div>
  )
}
