//glavna strana
import { getAllNodes, deleteAllNodes, addPlayer } from "../../lib/neo4j"
import AddDataButton from "./components/AddDataButton"

import ClubsButton from "./components/ClubsButton"
import TransferMarketButton from "./components/TransferMarketButton"


//read
//const data = await getAllNodes();
//console.log(data)

//delete
//deleteAllNodes();

//create
//addPlayer('Thomas Muller', 'Germany', 33, 15000000)


export default function MainPage() {
  return (
    <div class='flex flex-row min-h-screen dark:bg-slate-400'>
      <div class='my-20 ml-10'>
        <ClubsButton />
        <TransferMarketButton />
        <AddDataButton />
      </div>
    </div>
  )
}
