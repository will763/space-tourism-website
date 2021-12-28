import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { dataFetch } from './dataFetch';
import Description from './Description';
import Navigation from './Navigation';
import Picture from './Picture';


interface Props {
    title ?: string,
    description ?: string,
    images ?: string
}

const Technology = () => {

  const [data,setData] = useState<Props>()

  const router = useRouter();
  const {name} = router.query

  useEffect(()=>{

    const managerData = () => {
      const widthScreen = window.innerWidth
      const data = dataFetch(name,widthScreen);
      setData({
        title : data?.title,
        images : data?.images,
        description : data?.description
      })
    }

managerData();

  window.addEventListener("resize",() => {
     managerData();
  })

  return () => {
    setData({})
  }

  },[name])

  return (
   <div className='flex flex-col  items-center mt-12 sm:mt-28'>
   <span className='w-max sm:absolute sm:top-28 sm:left-[5%] font-barlowCondesed desktop:self-start desktop:ml-[7%] desktop:mt-[3%] font-normal text-white text-[16px] tablet:text-[20px]  tracking-[2.7px] tablet:tracking-[3.375px] leading-[19,2px] tablet:leading-[24px]'><span className='font-bold uppercase mr-4 opacity-25'>03</span>SPACE LAUNCH 101</span>
   
   <div className='desktop:w-[88vw] desktop:mt-12 desktop:h-[60vh] desktop:self-end flex flex-col items-center desktop:grid desktop:grid-cols-[12%_47%_41%] '>
   <Picture url={data?.images} />

   <Navigation />

   <div className='flex flex-col  items-center desktop:items-start'>
      <span className='text-gray text-[12px] tablet:text-[14px] font-barlowCondesed font-normal text-center leading-[17px] tablet:leading-[19px] tracking-[2.362499952316284px] tablet:tracking-[2.7px] '>
      THE TERMINOLOGY…</span>

     <span className='text-white uppercase font-bellefair mt-1 mb-4 font-normal text-center text-[24px] tablet:text-[35px] tablet:leading-[41px] leading-[28px]'>
      {data?.title} </span> 

     <Description text={data?.description}/>
   </div>
   </div>
   </div>
  )
}

export default Technology;