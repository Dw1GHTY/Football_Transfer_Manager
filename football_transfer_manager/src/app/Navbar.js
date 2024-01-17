
function Logo() {
    return (
        <div class='m ml-8 mr-8 pt-2 cursor-pointer'>
            <img class='h-12 w-12' src="/logo.jpg" alt="FTN logo" />
        </div>
    )
}

function Home() {
    return (
        <div class='m ml-5 mr-5 pt-5 pl-2 pr-2 dark:text-white hover:bg-sky-700 cursor-pointer rounded-lg'>
            Home
        </div>
    )
}

function Help() {
    return (
        <div class='m ml-5 mr-5 pt-5 pl-2 pr-2 dark:text-white hover:bg-sky-700 cursor-pointer rounded-lg'>
            Help
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