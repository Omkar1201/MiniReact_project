import React from 'react'
import Card from './Card'
export default function Cards({apidata,category}) {
  function getcourses(){
    let allcourses=[];
    if(category==="All")
    {

      Object.values(apidata).forEach(array => {
        array.forEach(coursedata => {
          allcourses.push(coursedata);
        })
      })
    }
    else{
      return apidata[category];
    }
    return allcourses;
  }
  return (
    <div className='flex flex-wrap justify-center'>
      {
        getcourses().map((course) =>{
          return (<Card key={course.id} course={course}></Card>)
        })
      }
    </div>
  )
}
