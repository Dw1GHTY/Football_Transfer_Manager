//glavna strana
import { getAllNodes, deleteAllNodes, addPlayer } from "../../lib/neo4j"

import ClubsButton from "./components/ClubsButton"
import PlayersMarketButton from "./components/PlayersMarketButton"

//read
//const data = await getAllNodes();

//delete
//deleteAllNodes();

//create
//addPlayer('Thomas Muller', 'Germany', 33, 15000000)


export default function MainPage() {
  return (
    <div class='flex flex-row min-h-screen dark:bg-slate-400'>
      <div className="main-page-buttons-div">
        <ClubsButton />
      </div>
    </div>
  )
}
