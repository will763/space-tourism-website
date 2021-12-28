import { NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { dataFetch } from "./dataFetch";
import Description from "./Description";
import Footer from "./Footer";
import Navigation from "./Navigation";
import Picture from "./Picture";

interface Props {
    name ?: string
    travel ?: string
    distance ?: string
    description ?: string
    images ?: string
  }

const Planet = () => {

    const [data,setData] = useState<Props>();
    const router = useRouter();

  useEffect(()=>{
      const {category,planet} = router.query;

      if(category == 'destination' && planet == undefined){
         router.push("/?category=destination&planet=moon")
      }

  },[router])  

  useEffect(()=>{
    const {planet} = router.query
    
    const results = dataFetch(planet);
    setData({
        name : results?.name,
        travel : results?.travel,
        distance : results?.distance,
        description : results?.description,
        images : results?.images
    }) 
  },[router])


    return (
      <div className="desktop:flex desktop:justify-end">
        <div className='flex desktop:grid desktop:grid-cols-[50%_50%] desktop:w-[90%] desktop:h-[70vh] flex-col items-center mt-12 sm:mt-28'>
            <span className='w-max desktop:left-[12%] sm:absolute sm:left-[5%] sm:top-28 font-barlowCondesed uppercase font-normal text-white text-[16px] tablet:text-[20px] tracking-[2.7px] leading-[19,2px] tablet:leading-[24px] tablet:tracking-[3.38px]'><span className='font-bold mr-4 opacity-25'>01</span>Pick your destination</span>

            <Picture url={data?.images} />
            <div className="flex flex-col items-center desktop:items-start desktop:mr-4">
            <Navigation />
            <Description name={data?.name} description={data?.description} />
            <Footer distance={data?.distance} travel={data?.travel} />
            </div>
         </div>
        </div>
    )
}

export default Planet;