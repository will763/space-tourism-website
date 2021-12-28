import { NextPage } from "next";
import Image from "next/image";

interface Props {
  url ?: string
}


const Picture : NextPage<Props> = ({url}) => {
const image = url || "/destination/image-moon.webp"

    return(
        <div className="w-[120px] flex h-[120px] sm:h-[180px] sm:w-[180px] desktop:w-[380px] desktop:h-[380px] relative mt-6 mb-4">
    <Image src={image} layout="fill" alt="picture" quality={100} priority={true} />
  </div>
    )
}

export default Picture;