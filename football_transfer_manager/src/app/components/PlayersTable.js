"use client";

import React, { useEffect } from 'react'
import { useState } from 'react';
import { buyPlayer } from '../../../lib/neo4j';

const PlayersTable = ({ players, func, fetchData }) => {

    const [playersState, setPlayersState] = useState([]);

    useEffect(() => {
        setPlayersState(players);
    }, [])

    const allPlayers = playersState.map(player => {
        const properties = player.p.properties;
        return {
            name: properties.name,
            surname: properties.surname,
            age: properties.age,
            country: properties.country,
            position: properties.position,
            attack: properties.attacking,
            strength: properties.strength,
            defense: properties.defense,
            club: properties.club,
            contract: properties.contract,
            value: properties.value
        };
    });

    async function updateTable() {
        await fetchData();
    }

    const handlePurchase = (index) => {
        console.log(index);

        let clubInfo = [];
        clubInfo = func();

        if (clubInfo.length !== 0) {
            const wantedPlayer = playersState.find((player, playerIndex) => playerIndex === index);
            console.log(wantedPlayer.p.properties.value);


            if (parseInt(clubInfo[1]) >= parseInt(wantedPlayer.p.properties.value) && clubInfo[0] !== wantedPlayer.p.properties.club) {
                //const updatedPlayers = [...playersState];
                //updatedPlayers.splice(index, 1);
                //setPlayersState(updatedPlayers);

                let price = clubInfo[1] - wantedPlayer.p.properties.value;
                price.toString();

                buyPlayer(
                    clubInfo[0],
                    wantedPlayer.p.properties.name,
                    wantedPlayer.p.properties.surname,
                    price
                );
                updateTable();
            } else {
                alert("Broke");
            }

        } else {
            alert("player not selected");
        }

    };


    return (
        <>
            <div class='max-w-screen-xl mx-6 dark:bg-slate-900 rounded my-4'>
                <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 rounded">
                    <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" class="px-6 py-3">
                                Name
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Surname
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Age
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Country
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Position
                            </th>
                            <th scope="col" class="px-6 py-3">
                                ATK
                            </th>
                            <th scope="col" class="px-6 py-3">
                                STR
                            </th>
                            <th scope="col" class="px-6 py-3">
                                DEF
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Club
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Contract
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Value
                            </th>
                            <th scope="col" class="px-6 py-3">
                                <span class="sr-only">Purchase</span>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            allPlayers.map((player, index) => (
                                <tr key={index} class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                    <td class="px-6 py-4">
                                        {player.name}
                                    </td>
                                    <td class="px-6 py-4">
                                        {player.surname}
                                    </td>
                                    <td class="px-6 py-4">
                                        {player.age}
                                    </td>
                                    <td class="px-6 py-4">
                                        {player.country}
                                    </td>
                                    <td class="px-6 py-4">
                                        {player.position}
                                    </td>
                                    <td class="px-6 py-4">
                                        {player.attack}
                                    </td>
                                    <td class="px-6 py-4">
                                        {player.strength}
                                    </td>
                                    <td class="px-6 py-4">
                                        {player.defense}
                                    </td>
                                    <td class="px-6 py-4">
                                        {player.club}
                                    </td>
                                    <td class="px-6 py-4">
                                        {player.contract}
                                    </td>
                                    <td class="px-6 py-4">
                                        {player.value}
                                    </td>
                                    <td class="px-6 py-4 text-right">
                                        <button
                                            onClick={() => handlePurchase(index)}
                                            class="font-medium dark: bg-slate-800 text-blue-600 dark:text-blue-500 hover:bg-slate-300">Purchase</button>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default PlayersTable;
