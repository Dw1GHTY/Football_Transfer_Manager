
import Clubs from "./components/Clubs"
import Navbar from "./components/Navbar"
import AddDataButton from "./components/AddDataButton"
import ClubsButton from "./components/ClubsButton"
import TransferMarketButton from "./components/TransferMarketButton"
import App from "next/app"


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
      <div class='flex flex-col min-h-screen dark:bg-slate-400'>
      </div>
    </div>
  )
}
