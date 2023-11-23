import Image from "next/image"
import { IconBaseProps } from "react-icons"


type CardsProps = {
    img: string
    title: string
    description: string
    icon: IconBaseProps
    creationDate: string
}

export const Cards = ({ img, title, description, icon, creationDate }:CardsProps) => {
    return (
        <div className="flex  flex-col  items-start p-6  gap-6 rounded-xl bg-purple-950/20 ">
            <div className="">

            <Image src={img} alt="card img" width={400} height={400} className="h-auto"/>
            </div>
            <div className="flex justify-between items-start self-stretch ">
                <p>{creationDate}</p>
                <>
                {icon}
                </>
            </div>
           <h2 className="font-heebo">{title}</h2>
           <p className="font-heebo text-gray-400">{description}.</p>
        </div>
    )
}