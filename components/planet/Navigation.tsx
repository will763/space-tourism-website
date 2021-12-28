import { NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect } from "react";

const Navigation :NextPage = () => {

     const router = useRouter();
     const {planet,category} = router.query;
 
     useEffect(()=>{
         const li = document.getElementsByClassName("navigation-destination");
 
         const removeClass = () => {
          for (let index = 0; index < li.length; index++) {
              if(li[index].classList.contains("select-destination")){
                 li[index].classList.remove("select-destination")
                };     
             }
         } 
 
         if(category == "technology" && planet == undefined){
             router.push("/?category=destination&planet=moon")
          }
 
          removeClass()
 
          planet == "moon" ? document.getElementsByClassName("navigation-destination")[0].classList.add("select-destination")
          : planet == "mars" ? document.getElementsByClassName("navigation-destination")[1].classList.add("select-destination")
          : planet == "europa" ? document.getElementsByClassName("navigation-destination")[2].classList.add("select-destination")
          : document.getElementsByClassName("navigation-destination")[3].classList.add("select-destination")
          
     },[planet,router,category])
 

    return (
        <div className="z-[1] cursor-pointer flex uppercase space-x-3  text-gray/70 font-barlowCondesed font-normal text-[13px] desktop:text-[14.5px] desktop:leading-[19px] leading-[17px] tracking-[2.36px] desktop:tracking-[2.7px]">
            <span onClick={()=> router.push("/?category=destination&planet=moon")} className="navigation-destination select-destination  hover:border-b-[2.5px] hover:text-gray/50 hover:border-gray/50 pb-2">Moon</span>
            <span onClick={()=> router.push("/?category=destination&planet=mars")} className=" navigation-destination hover:border-b-[2.5px]  hover:text-gray/50 hover:border-gray/50 pb-2" >Mars</span>
            <span onClick={()=> router.push("/?category=destination&planet=europa")} className=" navigation-destination hover:border-b-[2.5px]  hover:text-gray/50 hover:border-gray/50 pb-2" >Europa</span>
            <span onClick={()=> router.push("/?category=destination&planet=titan")} className="navigation-destination hover:border-b-[2.5px]  hover:text-gray/50 hover:border-gray/50 pb-2" >Titan</span>
        </div>
    )
}

export default Navigation;