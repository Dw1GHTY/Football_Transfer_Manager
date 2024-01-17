import Link from "next/link"

function Logo() {
    return (
        <div class='m ml-8 mr-8 pt-2 cursor-pointer'>

            <Link href='/'>
                <img class='h-12 w-12' src="/logo.jpg" alt="FTN logo" />
            </Link>
        </div>
    )
}

function Home() {
    return (
        <div class='m ml-5 mr-5 pt-5 pl-2 pr-2 dark:text-white hover:bg-sky-700 cursor-pointer rounded-lg'>
            <Link href='/'>Home</Link>
        </div>
    )
}

function Help() {
    return (
        <div class='m ml-5 mr-5 pt-5 pl-2 pr-2 dark:text-white hover:bg-sky-700 cursor-pointer rounded-lg'>
            <Link href='/help'>Help</Link>
        </div>
    )
}

export default function Navbar() {
    return (
        <div class='flex flex-row basis-1/4 h-16 dark:bg-slate-800'>
            <Logo />
            <Home />
            <Help />
        </div>
    )
}