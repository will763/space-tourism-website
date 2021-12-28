import { dataBackground } from "./dataBackground"

type Props = string | string[] | undefined;

export const fetchBackground = (path : Props , screenWidth : number) => {

    if (path == "technology" || path == "crew" || path == "destination"){
           if (screenWidth <= 375)
           return dataBackground["mobile"][path]
           if (screenWidth > 375 && screenWidth < 1000)
           return dataBackground["tablet"][path]
           if (screenWidth >= 1000)
           return dataBackground["desktop"][path]
        
    }

        if (screenWidth <= 375)
           return dataBackground["mobile"]["home"]
             if (screenWidth > 375 && screenWidth < 1000)
               return dataBackground["tablet"]["home"]
                if (screenWidth >= 1000)
                 return dataBackground["desktop"]["home"]
    

}