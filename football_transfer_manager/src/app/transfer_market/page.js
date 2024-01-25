// page.js
"use client";
import React, { useEffect, useState } from 'react';
import {
    getAllPlayers,
    getAllManagers,
    getAllCoaches,
    getAllClubs,
    findPerson
} from '../../../lib/neo4j';
import PlayersTable from '../components/PlayersTable';
import ManagersTable from '../components/ManagersTable';
import CoachesTable from '../components/CoachesTable';
import Navbar from '../components/Navbar';
import Search from '../components/Search';

import Clubs from '../components/Clubs';

const Page = () => {

    const [selectedType, setSelectedType] = useState('Player');
    const [allPlayers, setAllPlayers] = useState([]);
    const [allManagers, setAllManagers] = useState([]);
    const [allCoaches, setAllCoaches] = useState([]);
    const [allClubs, setAllClubs] = useState([]);
    const [selectedClub, setSelectedClub] = useState([]);



    function getSelectedClub(club) {
        setSelectedClub(club);
    }
    function getClubInfo() {
        return selectedClub;
    }



    const handleTypeChange = (e) => {
        setSelectedType(e.target.value);

    };

    const fetchData = async () => {
        setAllPlayers(await getAllPlayers());
        setAllManagers(await getAllManagers());
        setAllCoaches(await getAllCoaches());
        setAllClubs(await getAllClubs());
    };

    useEffect(() => {
        fetchData();

    }, []);

    async function getPerson(name) {
        let data = await findPerson(`${selectedType}`, name);
        console.log(data)
        if (selectedType === 'Player') {
            setAllPlayers(data);
        } else if (selectedType === 'Manager') {
            setAllManagers(data);
        } else if (selectedType === 'Coach') {
            setAllCoaches(data);
        }
    }

    function test() {
        console.log(allClubs);
    }

    function returnClubData() {
        return
    }

    return (
        <>

            <button onClick={test}>klikni me</button>

            <div>
                <div className='flex flex-col w-full min-h-screen dark:bg-slate-400'>
                    <Navbar />
                    <Clubs
                        allClubs={allClubs}
                        club={getSelectedClub} />

                    <div className='ml-6 mt-4'>
                        <label
                            htmlFor='Player'
                            className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
                        >
                            Select type:
                        </label>

                        <div>
                            <input
                                type='radio'
                                id='Player'
                                name='playerType'
                                value='Player'
                                checked={selectedType === 'Player'}
                                onChange={handleTypeChange}
                            />
                            <label htmlFor='Player' className='ml-2 mr-4'>
                                Players
                            </label>
                        </div>

                        <div>
                            <input
                                type='radio'
                                id='Manager'
                                name='playerType'
                                value='Manager'
                                checked={selectedType === 'Manager'}
                                onChange={handleTypeChange}
                            />
                            <label htmlFor='Manager' className='ml-2 mr-4'>
                                Managers
                            </label>
                        </div>

                        <div>
                            <input
                                type='radio'
                                id='Coach'
                                name='playerType'
                                value='Coach'
                                checked={selectedType === 'Coach'}
                                onChange={handleTypeChange}
                            />
                            <label htmlFor='Coach' className='ml-2 mr-4'>
                                Coaches
                            </label>
                        </div>
                    </div>
                    <Search func={getPerson} />
                    {selectedType === 'Player' && <PlayersTable players={allPlayers} func={getClubInfo} fetchData={fetchData} />}
                    {selectedType === 'Manager' && <ManagersTable managers={allManagers} func={getClubInfo} fetchData={fetchData} />}
                    {selectedType === 'Coach' && <CoachesTable coaches={allCoaches} func={getClubInfo} fetchData={fetchData} />}
                </div>
            </div>
        </>
    );
};

export default Page;
