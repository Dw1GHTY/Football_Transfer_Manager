

function Club() {

    return (
        <div class='flex flex-row mt-8 ml-4 h-24 w-96 dark: bg-slate-100'>
            <div class=" my-4 mx-4 px-2 border border-cyan-800">
                name
            </div>
            <div class=" my-4 mx-4 px-4 border border-cyan-800">
                country
            </div>
            <div class=" my-4 mx-4 px-4 border border-cyan-800">
                league
            </div>
            <div>

            </div>
        </div>
    )
}

export default function Clubs() {

    return (
        <div class="flex flex-col w-full min-h-screen dark:bg-slate-400">
            <Club />
        </div>
    )
}