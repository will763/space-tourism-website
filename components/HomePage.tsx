
const HomePage = () => {
  return (
   <div className='flex mt-16 sm:mt-28 desktop:mt-[14%] desktop:ml-[12%]'>

       <div className='flex flex-col items-center desktop:flex-row desktop:w-[80%]  '>
         <div className="flex flex-col items-center desktop:items-start ">

           <div className='text-center font-barlowCondesed text-[16px] tablet:text-[20px] leading-[19,2px] tablet:leading-[24px] font-normal tracking-[2.7px] tablet:tracking-[3.38px] text-gray'>
             SO, YOU WANT TO TRAVEL TO
           </div>

           <div className='mt-2 font-normal text-[80px] tablet:text-[150px] font-bellefair leading-[100px] tablet:leading-[150px] text-center text-white'>
               SPACE
           </div>

           <p className='text-gray text-center font-barlow text-[15px] tablet:text-[16px] tablet:leading-[28px] tablet:w-[60%] leading-[25px] font-normal w-[92%] sm:w-[70%] mt-4 desktop:text-left '>
           Let’s face it; if you want to go to space, you might as well 
    genuinely go to outer space and not hover kind of on the edge of it. Well
  sit back, and relax because we’ll give you a truly out of this world experience!
           </p>
           
           </div>
           <div className='flex z-[1] cursor-pointer justify-center items-center absolute rounded-[50%] top-[70%] desktop:top-[50%] desktop:right-[10%] h-[180px] w-[180px] bg-white hover:border-[20px] hover:w-[200px] hover:h-[200px] border-indigo-500/25' >
         <p className='font-normal font-bellefair text-blackSmooth text-center text-[20px] leading-[22,92px] tracking-[1,25px]'>EXPLORE</p>
      </div>
  </div>
       
   </div>
  )
}

export default HomePage;