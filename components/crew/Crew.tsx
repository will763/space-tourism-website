import { NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { dataFetch } from "./dataFetch";
import Description from "./Description";
import Navigation from "./Navigation";
import Picture from "./Picture";

interface crewData {
    name ?: string
    role ?: string
    image ?: string
    bio ?: string
}


const Crew  = () => {
   const router = useRouter();
   const {name} = router.query;

   const [data,setData] = useState<crewData>({
       name : "",
       role : "",
       image : "",
       bio : ""
   })

   useEffect(()=>{
      const results = dataFetch(name);
      setData({
          name : results?.name,
          role : results?.role,
          image : results?.image,
          bio : results?.bio
      })
   },[name])

    return (
        <div className='flex flex-col items-center mt-12 sm:mt-28 desktop:h-[80vh] desktop:absolute desktop:bottom-0 desktop:mx-[auto] desktop:grid desktop:grid-cols-[50%_50%] '>
            <span className='desktop:absolute sm:self-start sm:ml-[2.5rem] sm:mt-[-30px] desktop:left-[5rem] w-max font-barlowCondesed font-normal text-white text-[16px] tablet:self-start tablet:ml-[4%] tablet:mt-[-30px] desktop:mt-0 tablet:text-[20px] tracking-[2.7px] tablet:tracking-[3.38px] leading-[19,2px] tablet:leading-[24px]'><span className='font-bold mr-4 opacity-25'>02</span>MEET YOUR CREW</span>

            <Picture url={data.image} />
            <span className="w-[90%] tablet:hidden h-[1px] bg-white/20 mb-6" />
             
    
             <div className="flex flex-col desktop:ml-[7.5rem] tablet:mt-10 items-center tablet:grid tablet:w-[100%]  tablet:grid-cols-[100%] ">
            <Navigation />

            <span className='text-white/50 uppercase text-[16px] desktop:text-left tablet:text-[24px] tablet:leading-[28px] font-bellefair font-normal text-center leading-[18px] '>
    {data.role}</span>

   <span className='text-white uppercase desktop:text-left font-bellefair mt-1 mb-4 font-normal text-center text-[24px] tablet:text-[40px] tablet:leading-[46px] leading-[28px]'>
   {data.name}</span> 

            <Description text={data.bio} />
            </div>
        </div>
    )
}

export default Crew;