

import AddDataButton from "./components/AddDataButton"
import ClubsButton from "./components/ClubsButton"
import TransferMarketButton from "./components/TransferMarketButton"



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
