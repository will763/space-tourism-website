import { NextPage } from "next";

interface Props {
    text ?: string;
}

const Description : NextPage<Props> = ({text}) =>{
  const description = text;

return(
    <p className="text-gray w-[90%] tablet:w-[62%] desktop:w-[80%] tablet:my-0 tablet:mx-[auto] desktop:text-left text-center font-barlow font-normal text-[15px] tablet:text-[16px] leading-[25px] tablet:leading-[28px] desktop:ml-0">{text}</p>
)

}

export default Description;