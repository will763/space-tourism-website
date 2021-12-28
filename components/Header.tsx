import type { NextPage } from 'next'
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import Image from 'next/image'

const Header: NextPage = () => {
  const router = useRouter();

useEffect(()=>{
  let ative = false;
  const menu = document.getElementById("menu");
  const naviMenu = document.getElementById("naviMenu");
  const li = document.getElementsByClassName("navi-index")

   const addClass = () => {
          for (let i = 0; i < 4; i++) {
              if(!li[i].classList.contains("border-transparent")){
                 li[i].classList.add("border-transparent")
                };     
             }
         } 
   
   const selectionMenu = () => {
     if(window.innerWidth >= 640){
       li[0].addEventListener("click", () => {
         addClass();
         li[0].classList.remove("border-transparent")
       })
       li[1].addEventListener("click", () => {
        addClass();
        li[1].classList.remove("border-transparent")
      })
      li[2].addEventListener("click", () => {
        addClass();
        li[2].classList.remove("border-transparent")
      })
      li[3].addEventListener("click", () => {
        addClass();
        li[3].classList.remove("border-transparent")
      })
     }
   }

   selectionMenu()

  menu?.addEventListener("click",()=>{
    if(ative){
      menu?.classList.remove("menu-close");
      menu?.classList.add("menu-open");
      naviMenu?.classList.add("hidden");
      naviMenu?.classList.remove("flex");
      ative = false;
    }else {
      menu?.classList.remove("menu-open");
      menu?.classList.add("menu-close");
      naviMenu?.classList.remove("hidden");
      naviMenu?.classList.add("flex");
      ative = true;
    }
  })

  naviMenu?.addEventListener("click",()=>{
      menu?.classList.remove("menu-close");
      menu?.classList.add("menu-open");
      naviMenu?.classList.add("hidden");
      naviMenu?.classList.remove("flex");
      ative = false;
  })
})

  return (
   <div id='header' className='h-10 pt-10 flex justify-center'>
       <header className='flex w-[90%] h-full justify-between items-center desktop:mt-6 '>
      
       <Image src="/shared/logo.svg" alt="picture" width={40} height={40} priority={true}/>
      
      
      <div id='menu' className='z-[3] sm:hidden menu-open w-[20px] h-[20px] bg-cover bg-center cursor-pointer'>
        </div> 

        <div className='hidden desktop:block desktop:absolute desktop:z-[3] desktop:left-40 desktop:w-[24vw] desktop:h-[.5px] desktop:bg-white/25'>
        </div>

           <nav id='naviMenu' className='hidden desktop:mt-6 sm:flex sm:items-center sm:justify-around desktop:px-[5%] z-[2] cursor-pointer bg-white/[0.04] backdrop-blur-[40px] desktop:backdrop-blur-[20px] flex-col  sm:flex-row space-y-6 sm:space-y-0  pt-28 sm:pt-0 pl-5 sm:pl-0 absolute top-0 right-0 w-[65%] h-[100vh] sm:h-[75px] text-gray font-barlowCondesed'>
             <li onClick={()=>router.push("/")} className='navi-index list-none font-normal text-[16px] sm:text-[14px] leading-[19px] tracking-[2,7px] sm:border-b-2 sm:pt-7 sm:pb-6'><span className='font-bold mr-2 sm:hidden desktop:inline text-white'>00</span>HOME</li>
             <li onClick={()=>router.push("/?category=destination&planet=moon")} className='navi-index list-none font-normal text-[16px] sm:text-[14px] leading-[19px] tracking-[2,7px] sm:border-b-2 border-transparent  sm:pt-7 sm:pb-6 '><span className='font-bold mr-2 sm:hidden desktop:inline text-white'>01</span>DESTINATION</li>
             <li onClick={()=>router.push("/?category=crew&name=Douglas_Hurley")} className='navi-index list-none font-normal text-[16px] sm:text-[14px] leading-[19px] tracking-[2,7px] sm:border-b-2 border-transparent sm:pt-7 sm:pb-6 '><span className='font-bold mr-2 sm:hidden desktop:inline text-white'>02</span>CREW</li>
             <li onClick={()=>router.push("/?category=technology&name=launch_vehicle")} className='navi-index list-none font-normal text-[16px] sm:text-[14px] leading-[19px] tracking-[2,7px] sm:border-b-2 border-transparent sm:pt-7 sm:pb-6 '><span className='font-bold mr-2 sm:hidden desktop:inline  text-white'>03</span>TECHNOLOGY</li>
           </nav>
 </header>
   </div>
  )
}

export default Header;