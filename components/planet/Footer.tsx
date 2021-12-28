import { NextPage } from "next";

interface Props {
    distance ?: string
    travel ?: string
}

const Footer : NextPage<Props> = ({distance,travel}) => {
    return(
        <div className="flex flex-col sm:flex-row items-center mt-4 sm:mt-6 sm:space-y-0 sm:space-x-16 space-y-4">
            <div className="flex flex-col items-center desktop:items-start">
                <span className="text-gray text-[12px] desktop:text-[14px] font-barlowCondesed uppercase tracking-[2.36 px] leading-[17px]">AVG. DISTANCE</span>
                <span className="uppercase text-white font-bellefair text-[24px] desktop:text-[28px] leading-[32px] font-normal">{distance}</span>
            </div>
            <div className="flex flex-col items-center desktop:items-start">
              <span className="text-gray text-[12px] desktop:text-[14px] font-barlowCondesed uppercase tracking-[2.36 px] leading-[17px]">Est. travel time</span>
              <span className="uppercase text-white font-bellefair text-[24px] desktop:text-[28px] leading-[32px] font-normal" >{travel}</span>
            </div>

        </div>
    )
}

export default Footer;