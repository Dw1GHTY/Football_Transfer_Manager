import Link from "next/link";

export default function AddDataButton() {
    return (
        <div class='flex place-content-center w-36 h-14 my-6  bg-red-500
        border-2 border-white hover:border-4 hover:border-double hover:border-white'>
            <Link class='flex items-center justify-center w-full text-white' href='/db_panel'>Add Data</Link>
        </div>
    )
}