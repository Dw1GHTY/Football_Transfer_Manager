

import { getAllClubs } from "../../../lib/neo4j";
import RenderClubs from "./RenderClubs";



const allClubs = await getAllClubs();

export default function Clubs(props) {

    {/*prop koji ce da skladisti podatake iz <RenderClubs /> ||| ne moze funkcija jer trazi da bude srvrska komponenta*/ }
    const getRenderClubsComponentData = async (data) => {
        "use server"
        //console.log("Clubs---> " + data);
        props.getDataForParent(data);
    }

    {/*funkcija koja salje podatke \app page.js*/ }
    const clubs = allClubs.map(club => {
        const properties = club.c.properties;
        return {
            name: properties.name,
            country: properties.country,
            league: properties.league,
            funds: properties.funds
        };
    });

    return (
        <div class="flex flex-col w-full min-h-screen dark:bg-slate-400">
            <div>
                {
                    clubs.map((club, index) => (
                        <RenderClubs
                            key={index}
                            clubName={club.name}
                            clubFunds={club.funds}
                            clubCountry={club.country}
                            clubLeague={club.league}
                            getDataForParent={getRenderClubsComponentData} />
                    ))
                }
            </div>
        </div>
    )
}