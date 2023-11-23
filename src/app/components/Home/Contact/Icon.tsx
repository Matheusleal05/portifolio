import { IconBaseProps } from "react-icons"

type IconProps = {
    icon: IconBaseProps
}

export const Icons = ({ icon  }:IconProps) => {
    return (
        <div className="p-3  rounded-lg cursor-pointer hover:bg-slate-700/30 ease-in duration-150">
            <>
            {icon}
            </>
        </div>
    )
}