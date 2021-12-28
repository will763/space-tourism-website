import dataTechnology from "./data"

export const dataFetch = (v : string | string[] | undefined, screenWidth : number) => {

let width = ""

  screenWidth >= 1000 ? width = "desktop" : width = "normal";

  if(width == "normal" || width == "desktop")
      if(v == "launch_vehicle" || v == "spaceport" || v == "space_capsule")
     return {
        title : dataTechnology[v]["name"],
        description : dataTechnology[v]["description"],
        images : dataTechnology[v]["images"][width]
    }

}