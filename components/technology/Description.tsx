import { NextPage } from "next";

interface Props {
    text ?: string;
}

const Description : NextPage<Props> = ({text}) =>{
  const description = text;

return(
    <p className="text-gray w-[90%] tablet:w-[58%] desktop:w-[80%] text-center desktop:text-left font-barlow font-normal text-[15px] tablet:text-[16px] tablet:leading-[28px] leading-[25px]">{text}</p>
)

}

export default Description;