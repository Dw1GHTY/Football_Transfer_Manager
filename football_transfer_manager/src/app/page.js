
import Clubs from "./components/Clubs"
import Navbar from "./components/Navbar"
import AddDataButton from "./components/AddDataButton"
import ClubsButton from "./components/ClubsButton"
import TransferMarketButton from "./components/TransferMarketButton"


let storedData = null;
export default function MainPage() {

  const getClubsComponentData = async (data) => {
    "use server";
    //console.log("MainPage---->" + data);
    storedData = data;
    //console.log("stored data---->" + storedData)
  }

  return (
    <div>
      <Navbar />
      <div class='grid grid-cols-2 min-h-screen dark:bg-slate-400'>
        <div class='my-20 ml-10'>
          {/* <ClubsButton /> */}
          <TransferMarketButton />
          <AddDataButton />
        </div>
        <div class='flex items-end'>
          <Clubs getDataForParent={getClubsComponentData} />  {/*uzimanje podataka iz Clubs*/}
        </div>
      </div>
    </div>
  )
}
