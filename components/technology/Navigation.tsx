import { NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect } from "react";

const Navigation : NextPage = () => { 

    const router = useRouter();
    const {name,category} = router.query;

    useEffect(()=>{
        const li = document.getElementsByClassName("naviTechnology");

        const removeClass = () => {
         for (let index = 0; index < li.length; index++) {
             if(li[index].classList.contains("select-navigation")){
                li[index].classList.remove("select-navigation")
               };     
            }
        } 

        if(category == "technology" && name == undefined){
            router.push("/?category=technology&name=launch_vehicle")
         }

         removeClass()

         name == "launch_vehicle" ? document.getElementsByClassName("naviTechnology")[0].classList.add("select-navigation")
         : name == "spaceport" ? document.getElementsByClassName("naviTechnology")[1].classList.add("select-navigation")
         : document.getElementsByClassName("naviTechnology")[2].classList.add("select-navigation");
         
    },[name,router,category])

    return(
       <ol className="flex desktop:w-max desktop:flex-col desktop:space-y-5  space-x-4 desktop:space-x-0 font-bellefair tablet:text-[15px] tracking-[1px] tablet:tracking-[1.2px] desktop:tracking-[2px] leading-[18.34px] tablet:leading-[24] desktop:leading-[36,67px] font-normal mb-5 tablet:my-4 text-white z-[1]">
           <li onClick={()=> router.push("/?category=technology&name=launch_vehicle") } className="naviTechnology h-[40px] w-[40px]  desktop:w-[55px] desktop:h-[55px] cursor-pointer flex items-center justify-center border-[1px] border-white/10 hover:border-white/50 rounded-[50%] " >1</li>
           <li onClick={()=> router.push("/?category=technology&name=spaceport") } className="naviTechnology h-[40px] w-[40px]  desktop:w-[55px] desktop:h-[55px] cursor-pointer flex items-center justify-center  border-[1px] border-white/10 rounded-[50%] hover:border-white/50 ">2</li>
           <li onClick={()=> router.push("/?category=technology&name=space_capsule") } className="naviTechnology h-[40px] w-[40px]  desktop:w-[55px] desktop:h-[55px] cursor-pointer flex items-center justify-center  border-[1px] border-white/10 rounded-[50%] hover:border-white/50">3</li>
       </ol>
    )
}

export default Navigation;