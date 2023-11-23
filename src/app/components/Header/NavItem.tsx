import Link from "next/link"

type NavItemsProps = {
    name: string
    href: string
}

export const NavItems = ({ name, href }: NavItemsProps) => {
    return (
        <Link href={href} className="p-2  text-white hover:text-violet-500 ease-in duration-150">
            {name}
        </Link>
    )
}