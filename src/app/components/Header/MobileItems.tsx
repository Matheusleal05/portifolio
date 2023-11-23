import Link from "next/link"

type NavItemsProps = {
    name: string
    href: string
}

export const MobileItems = ({ name, href }: NavItemsProps) => {
    return (
        <Link href={href} className="px-4 py-6  text-white hover:text-violet-500 ease-in duration-150">
            {name}
        </Link>
    )
}