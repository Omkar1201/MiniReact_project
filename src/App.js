import logo from './logo.svg';
import { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Filter from './components/Filter';
import Cards from './components/Cards';
import filterdata, { apiurl } from './components/Data';
import Spinner from './components/Spinner';
  const App=()=>{
    const [loading,setloading]=useState(false);
    const [apidata,setapidata]=useState([]);
    const [category,setcategory]=useState(filterdata[0].title)
    async function fetchurl()
    {
      setloading(true);
      try{
        const ap=await fetch(apiurl);
        const data=await ap.json();
        setapidata(data.data)
        console.log(data.data);
      }
      catch(error)
      {
        console.log("error");
      }
      setloading(false);
    }
    
    
    useEffect(()=>{
      fetchurl();
    },[])
  return (
    <div className='w-[100vw] min-h-[100vh] bg-slate-500'>
        <Navbar></Navbar>
        <Filter category={category} setcategory={setcategory}></Filter>
        <div className=' md:w-[100vw] lg:w-[75vw] m-auto'>
            {loading ? <Spinner></Spinner> : <Cards apidata={apidata} category={category}></Cards>}
        </div>
    </div>
  );
}

export default App;
