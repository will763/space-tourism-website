import { data } from "./data"

interface Props {
  name : string
  travel : string
  distance : string
  description : string
  images : string
}


export const dataFetch = (value : string | string[] | undefined)   => {

  if (value == "moon" || value == "mars" || value == "europa" || value == "titan")
    return {
          name : data[value]["name"],
          distance : data[value]['distance'],
          description : data[value]["description"],
          images : data[value]['images'],
          travel : data[value]['travel']

      }

}