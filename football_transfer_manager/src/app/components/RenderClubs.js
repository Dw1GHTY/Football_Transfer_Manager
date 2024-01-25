"use client";

import { useState } from "react";


export default function RenderClubs(props) {

    {/*zelim da prenesem sve parametre kluba da bih ga pronasao u bazi preko neo*/ }
    {/*ovi state-ovi treba da se upare sa kontekstom da bi mogao da se menja*/ }
    const [clubName, setName] = useState('');
    const [clubFunds, setFunds] = useState('');
    const [clubCountry, setCountry] = useState('');
    const [clubLeague, setLeague] = useState('');

    async function getClubData(name, funds, country, league) {
        setName(name);
        setFunds(funds);
        setCountry(country);
        setLeague(league);

        props.clubData(name, funds, country, league);

        //console.log(clubName, clubLeague, clubCountry, clubFunds); {/*sve se vidi*/ }
    }

    return (
        <div
            key={props.index}
            class=" dark:bg-slate-900 mx-10 my-6 max-w-md rounded overflow-hidden shadow-lg hover:cursor-pointer hover:bg-slate-600"
            onClick={async () => {
                await getClubData(
                    props.clubName,
                    props.clubFunds,
                    props.clubCountry,
                    props.clubLeague)
            }
            }>
            <div class="px-6 py-4">
                <div class="font-bold text-sky-400 text-xl mb-2">{props.clubName}</div>
            </div>
            <div class="px-6 pt-4 pb-2">
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{props.clubCountry}</span>
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{props.clubLeague}</span>
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">${props.clubFunds}</span>
            </div>
        </div>
    )
}