{/*!!!!!!!!!!!!OUT OF USE!!!!!!!!!!!!!!*/ }
import Link from "next/link"

export default function ClubsButton() {
    return (
        <div class='flex place-content-center w-36 h-14 my-6 bg-slate-800
        border-2  border-white hover:border-4 hover:border-double hover:border-purple-700'>
            <Link class='flex items-center justify-center w-full  text-white' href='/clubs'>Clubs</Link>
        </div>
    )
}