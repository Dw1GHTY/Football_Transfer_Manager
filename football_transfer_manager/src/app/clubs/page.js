import { getAllClubs } from "../../../lib/neo4j"


const allClubs = await getAllClubs();

function Club() {

    const clubs = allClubs.map(club => {
        const properties = club.c.properties;
        return {
            name: properties.name,
            country: properties.country,
            league: properties.league,
            funds: properties.funds
        };
    });
    //console.log(clubs);
    //console.log(allClubs);

    return (
        <div>
            {
                clubs.map((club, index) => (
                    <div key={index} class=" dark:bg-slate-900 mx-10 my-6 max-w-md rounded overflow-hidden shadow-lg hover:cursor-pointer hover:bg-slate-600">
                        <div class="px-6 py-4">
                            <div class="font-bold text-sky-400 text-xl mb-2">{club.name}</div>
                        </div>
                        <div class="px-6 pt-4 pb-2">
                            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{club.country}</span>
                            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{club.league}</span>
                            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">${club.funds}</span>
                        </div>
                    </div>
                ))
            }
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