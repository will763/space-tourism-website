import { NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect } from "react";

const Navigation : NextPage = () => { 

    const router = useRouter();
    const {name,category} = router.query;

    useEffect(()=>{
        const li = document.getElementsByClassName("naviCrew");

        const removeClass = () => {
         for (let index = 0; index < li.length; index++) {
             if(li[index].classList.contains("select-crew")){
                li[index].classList.remove("select-crew")
               };     
            }
        } 

        if(category == "crew" && name == undefined){
            router.push("/?category=crew&name=Douglas_Hurley")
         }

         removeClass()

         name == "Douglas_Hurley" ? document.getElementsByClassName("naviCrew")[0].classList.add("select-crew")
         : name == "Mark_Shuttleworth" ? document.getElementsByClassName("naviCrew")[1].classList.add("select-crew")
         : name == "Victor_Glover" ? document.getElementsByClassName("naviCrew")[2].classList.add("select-crew")
         : document.getElementsByClassName("naviCrew")[3].classList.add("select-crew")
         
    },[name,router,category])


    return(
       <ol className="flex space-x-4 mb-6 z-[1] tablet:order-3 tablet:mb-0 cursor-pointer tablet:my-0 tablet:mx-[auto] tablet:mt-8 desktop:ml-0 desktop:mt-[5rem]  ">
           <li onClick={()=> router.push("/?category=crew&name=Douglas_Hurley") } className="naviCrew h-[12px] w-[12px] cursor-pointer flex items-center justify-center border-[1px] border-white/20 hover:bg-white/20 rounded-[50%] " />
           <li onClick={()=> router.push("/?category=crew&name=Mark_Shuttleworth") } className="naviCrew h-[12px] w-[12px] cursor-pointer flex items-center justify-center  border-[1px] border-white/20 hover:bg-white/20 rounded-[50%] " />
           <li onClick={()=> router.push("/?category=crew&name=Victor_Glover") } className="naviCrew h-[12px] w-[12px] cursor-pointer flex items-center justify-center  border-[1px] border-white/20 hover:bg-white/20 rounded-[50%] " />
           <li onClick={()=> router.push("/?category=crew&name=Anousheh_Ansari") } className="naviCrew h-[12px] w-[12px] cursor-pointer flex items-center justify-center  border-[1px] border-white/20 hover:bg-white/20 rounded-[50%] " />
       </ol>
    )
}

export default Navigation;