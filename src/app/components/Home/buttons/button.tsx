 import { ButtonHTMLAttributes } from "react"
import { IconBaseProps } from "react-icons"
 
 type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>
    
export const Button = ({children, ...props}:ButtonProps) => {
    return (
        <button className="flex  items-center justify-center px-6 py-4 gap-2 bg-gray-600/50 rounded-lg min-w-[116px] text-white" 
        {...props}
        >
            {children}
        </button>
    )
}