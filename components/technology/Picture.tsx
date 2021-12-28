import { NextPage } from "next";
import Image from "next/image";

interface Props {
  url ?: string
}


const Picture : NextPage<Props> = ({url}) => {
const images = url || "/technology/image-launch-vehicle-landscape.jpg"

    return(
        <div className="w-full h-[170px] desktop:h-full desktop:order-3 tablet:h-[32vh] relative my-6 tablet:my-0  ">
    <Image src={images} layout="fill" alt="picture" quality={100} priority={true} />
  </div>
    )
}

export default Picture;