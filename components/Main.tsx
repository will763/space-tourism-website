import { NextPage } from "next";
import { useRouter } from "next/router";
import { FunctionComponent, FunctionComponentElement, ReactChildren, ReactComponentElement, ReactElement, ReactNode, useEffect, useState } from "react";
import Crew from "./crew/Crew";
import HomePage from "./HomePage";
import Planet from "./planet/Planet";
import Technology from "./technology/Technology";

const Main : FunctionComponent = () : JSX.Element => {
   const router =  useRouter();
   const [component,setComponent]  = useState<JSX.Element>()
   

   useEffect(()=>{

    router.asPath == "/" ? setComponent(<HomePage />)
    : router.query.category == "destination" ? setComponent(<Planet />)
    : router.query.category == "crew" ? setComponent(<Crew />)
    : setComponent(<Technology />);

   },[router])


    return <>
          {component}
    </>
}

export default Main;