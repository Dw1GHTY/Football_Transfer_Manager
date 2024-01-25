"use client";
import React from 'react'
import RenderClubs from "./RenderClubs";
import { useState } from 'react';


const Clubs = ({ allClubs, club }) => {


    const [chosenClub, setChosenClub] = useState([]);


    const getClubData = (name, funds, country, league) => {
        let clubDataArray = [];

        clubDataArray.push(name);
        clubDataArray.push(funds);
        clubDataArray.push(country);
        clubDataArray.push(league);

        console.log(clubDataArray);

        setChosenClub(clubDataArray);

        club(clubDataArray);

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
        <div class="flex flex-col w-full min-h-fit dark:bg-slate-400">
            <div class='grid grid-cols-3'>
                {
                    clubs.map((club, index) => (
                        <RenderClubs
                            key={index}
                            clubName={club.name}
                            clubFunds={club.funds}
                            clubCountry={club.country}
                            clubLeague={club.league}
                            clubData={getClubData}
                        />
                    ))
                }
            </div>
            <div>
                {chosenClub.length > 0 && (
                    <div class='flex items-center justify-center min-h-fit min-w-fit bg-gray-900 text-white'>
                        <div class='flex flex-col items-center p-8 bg-gray-800'>

                            <h1 class='text-2xl font-bold mb-4'>Currently selected team:</h1>
                            <p>Selected Club: {chosenClub[0]}</p>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Clubs
