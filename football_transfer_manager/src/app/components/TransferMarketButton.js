import Link from "next/link"

export default function TransferMarketButton() {
    return (
        <div class='flex place-content-center w-36 h-14 my-6 
        border-2 border-white hover:border-4 hover:border-double hover:border-purple-700'>
            <Link class='flex items-center justify-center w-full bg-slate-800 text-white' href='/transfer_market'>Transfer Market</Link>
        </div>
    )
}