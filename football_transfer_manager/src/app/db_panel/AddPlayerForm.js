import { addPlayer } from "../../../lib/neo4j"
import { useState } from "react"


export default function AddPlayerForm() {

    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [age, setAge] = useState(0); // Pretpostavljam da je age broj, pa postavljam početnu vrednost na 0
    const [country, setCountry] = useState('');
    const [position, setPosition] = useState('');
    const [attacking, setAttacking] = useState(0);
    const [strength, setStrength] = useState(0);
    const [defense, setDefense] = useState(0);
    const [club, setClub] = useState('');
    const [contract, setContract] = useState('');
    const [value, setValue] = useState('');

    const handleNameChange = (e) => {
        setName(e.target.value);
    };

    const handleSurnameChange = (e) => {
        setSurname(e.target.value);
    };

    const handleAgeChange = (e) => {
        setAge(Number(e.target.value));
    };

    const handleCountryChange = (e) => {
        setCountry(e.target.value);
    };

    const handlePositionChange = (e) => {
        setPosition(e.target.value);
    };

    const handleAttackingChange = (e) => {
        setAttacking(Number(e.target.value));
    };

    const handleStrengthChange = (e) => {
        setStrength(Number(e.target.value));
    };

    const handleDefenseChange = (e) => {
        setDefense(Number(e.target.value));
    };

    const handleClubChange = (e) => {
        setClub(e.target.value);
    };

    const handleContractChange = (e) => {
        setContract(e.target.value);
    };

    const handleValueChange = (e) => {
        setValue(e.target.value);
    };

    const handleAddPlayer = () => {
        // Pozovite funkciju addPlayer sa vrednostima stanja
        addPlayer(name, surname, age, country, position, attacking, strength, defense, club, contract, value);
    };

    return (
        <div class='flex flex-col mx-10 bg-slate-400'>
            <div>
                <h1>Add Player</h1>
            </div>
            <div>
                <label for="small-input" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name</label>
                <input type="text" id="p-name" value={name} onChange={handleNameChange} class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
            </div>
            <div>
                <label for="small-input" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Surname</label>
                <input type="text" id="p-surname" value={surname} onChange={handleSurnameChange} class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
            </div>
            <div>
                <label for="small-input" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Age</label>
                <input type="number" id="p-age" value={age} onChange={handleAgeChange} class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
            </div>
            <div>
                <label for="small-input" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Country</label>
                <input type="text" id="p-country" value={country} onChange={handleCountryChange} class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
            </div>
            <div>
                <label for="small-input" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Position</label>
                <input type="text" id="p-position" value={position} onChange={handlePositionChange} class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
            </div>
            <div>
                <label for="small-input" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Attacking</label>
                <input type="text" id="p-attacking" value={attacking} onChange={handleAttackingChange} class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
            </div>
            <div>
                <label for="small-input" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Strength</label>
                <input type="text" id="p-strength" value={strength} onChange={handleStrengthChange} class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
            </div>
            <div>
                <label for="small-input" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Defense</label>
                <input type="text" id="p-defense" value={defense} onChange={handleDefenseChange} class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
            </div>
            <div>
                <label for="small-input" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Club</label>
                <input type="text" id="p-club" value={club} onChange={handleClubChange} class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
            </div>
            <div>
                <label for="small-input" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Remaining contract duration</label>
                <input type="text" id="p-contract" value={contract} onChange={handleContractChange} class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
            </div>
            <div>
                <label for="small-input" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Value</label>
                <input type="text" id="p-value" value={value} onChange={handleValueChange} class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
            </div>
            <div class='my-4'>
                <button type="submit"
                    onClick={handleAddPlayer}
                    class="text-white bg-green-600 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-blue-300 
                             font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-900 
                           dark:focus:ring-blue-800">Add Player</button>
            </div>
        </div>
    )
}