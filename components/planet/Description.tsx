import { NextPage } from "next";

interface Props {
    name ?: string
    description ?: string
}

const Description:NextPage<Props> = ({name,description}) => {
    return (
        <div className="w-[90%] sm:w-[80%] desktop:text-left desktop:w-[95%] mt-2 text-center flex flex-col items-center desktop:items-start pb-5 desktop:pb-12 border-b-[1px] border-white/10">
           <h1 className="font-normal text-white font-bellefair text-[50px] desktop:text-[100px] tablet:text-[70px] leading-[64px] desktop:leading-[115px] tablet:leading-[82px] uppercase">{name}</h1>
           <p className="font-normal font-barlow text-[15px] desktop:text-[18px] tablet:text-[16px] leading-[25px] desktop:leading-[32px] tablet:leading-[28px] text-gray">{description}</p>
        </div>
    )
}

export default Description;