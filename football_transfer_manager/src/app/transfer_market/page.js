
import { getAllPlayers, getAllManagers, getAllCoaches } from "../../../lib/neo4j"

import PlayersTable from "./players/PlayersTable"
import ManagersTable from "./ManagersTable"
import CoachesTable from "./CoachesTable"
import Search from "./Search"




function ToggleView() {
    return (
        <div class='w-64 ml-6 mt-4'>
            <label for="countries" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Select type</label>
            <select id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                <option selected value='Players'>Players</option>
                <option value="Managers">Managers</option>
                <option value="Coaches">Coaches</option>
            </select>
        </div>
    )
}


const allPlayers = await getAllPlayers();
const allManagers = await getAllManagers();
const allCoaches = await getAllCoaches();

export default function TransferMarket() {

    return (
        <div class='flex flex-col w-full min-h-screen dark:bg-slate-400'>
            <ToggleView />
            <Search />
            <PlayersTable players={allPlayers} />      {/*sada treba da napravim da se vidi samo tabela koja je izabrana*/}
            <ManagersTable managers={allManagers} />
            <CoachesTable coaches={allCoaches} />
        </div>
    )
}



