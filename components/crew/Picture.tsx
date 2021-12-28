import { NextPage } from "next";
import Image from "next/image";

interface Props {
  url ?: string
}


const Picture : NextPage<Props> = ({url}) => {
const image = url || "/crew/image-douglas-hurley.webp"

    return(
        <div className="w-[45vw] desktop:w-[35vw] desktop:order-2 flex h-[35vh] desktop:h-[95.5%] relative tablet:absolute tablet:bottom-0 mt-6 desktop:relative desktop:ml-[3rem] ">
    <Image src={image} layout="fill" alt="picture" quality={100} priority={true} />
  </div>
    )
}

export default Picture;