
import { getAllPlayers, getAllManagers, getAllCoaches } from "../../../lib/neo4j"

import PlayersTable from "./PlayersTable"
import ManagersTable from "./ManagersTable"
import CoachesTable from "./CoachesTable"
import Search from "./Search"
import Navbar from "../components/Navbar"

const allPlayers = await getAllPlayers();
const allManagers = await getAllManagers();
const allCoaches = await getAllCoaches();

export default function TransferMarket() {

    return (
        <div>
            <Navbar />
            <div class='flex flex-col w-full min-h-screen dark:bg-slate-400'>
                {/* <ToggleView /> */}
                <Search />
                <PlayersTable players={allPlayers} />      {/*sada treba da napravim da se vidi samo tabela koja je izabrana*/}
                <ManagersTable managers={allManagers} />
                <CoachesTable coaches={allCoaches} />
            </div>
        </div>
    )
}



