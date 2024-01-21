import { getAllPlayers } from "../../../lib/neo4j"



function Search() {
    return (
        <div class='mx-6 my-3'>
            <form class="flex items-center">
                <label for="search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                <div class="relative flex items-center">
                    <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                        <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                        </svg>
                    </div>
                    <input type="search" id="search" class="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search" required />
                    <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 ml-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
                </div>
            </form>
        </div>
    )
}



//sampla table, change later
function Table(props) {
    getAllPlayers();
    return (
        <div class='max-w-screen-xl mx-6 dark:bg-slate-900 rounded'>
            <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 rounded">
                <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" class="px-6 py-3">
                            Name
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Surname
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Age
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Country
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Position
                        </th>
                        <th scope="col" class="px-6 py-3">
                            ATK
                        </th>
                        <th scope="col" class="px-6 py-3">
                            STR
                        </th>
                        <th scope="col" class="px-6 py-3">
                            DEF
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Club
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Contract
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Value
                        </th>
                        <th scope="col" class="px-6 py-3">
                            <span class="sr-only">Edit</span>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                        <td class="px-6 py-4">
                            Thomas
                        </td>
                        <td class="px-6 py-4">
                            Muller
                        </td>
                        <td class="px-6 py-4">
                            34
                        </td>
                        <td class="px-6 py-4">
                            Germany
                        </td>
                        <td class="px-6 py-4">
                            CAM
                        </td>
                        <td class="px-6 py-4">
                            89
                        </td>
                        <td class="px-6 py-4">
                            80
                        </td>
                        <td class="px-6 py-4">
                            45
                        </td>
                        <td class="px-6 py-4">
                            FC Bayern
                        </td>
                        <td class="px-6 py-4">
                            14
                        </td>
                        <td class="px-6 py-4">
                            13000000
                        </td>
                        <td class="px-6 py-4 text-right">
                            <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Purchase</a>
                        </td>
                    </tr>
                    {/* <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            Microsoft Surface Pro
                        </th>
                        <td class="px-6 py-4">
                            White
                        </td>
                        <td class="px-6 py-4">
                            Laptop PC
                        </td>
                        <td class="px-6 py-4">
                            $1999
                        </td>
                        <td class="px-6 py-4 text-right">
                            <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                        </td>
                    </tr>
                    <tr class="bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-600">
                        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            Magic Mouse 2
                        </th>
                        <td class="px-6 py-4">
                            Black
                        </td>
                        <td class="px-6 py-4">
                            Accessories
                        </td>
                        <td class="px-6 py-4">
                            $99
                        </td>
                        <td class="px-6 py-4 text-right">
                            <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                        </td>
                    </tr> */}
                </tbody>
            </table>
        </div>
    )
}

export default function TransferMarket() {

    return (
        <div class='flex flex-col w-full min-h-screen dark:bg-slate-400'>
            <Search />
            <Table />
        </div>
    )
}