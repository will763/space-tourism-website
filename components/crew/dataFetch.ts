import { dataCrew } from "./data"

export const dataFetch =  (v : string | string[] | undefined) => {
    
    if(v == "Douglas_Hurley" || v == "Mark_Shuttleworth" || v == "Victor_Glover" || v == "Anousheh_Ansari"){
        return {
            name : dataCrew[v]["name"],
            role : dataCrew[v]["role"],
            bio : dataCrew[v]["bio"],
            image : dataCrew[v]["image"]
     }
  }
}