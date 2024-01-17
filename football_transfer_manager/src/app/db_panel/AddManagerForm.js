import { useState } from "react"
import { addManager } from "../../../lib/neo4j";

export default function AddManagerForm() {

    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [age, setAge] = useState(0);
    const [country, setCountry] = useState('');
    const [club, setClub] = useState('');
    const [contract, setContract] = useState(1);
    const [salary, setSalary] = useState(150);

    const handleNameChange = (e) => {
        setName(e.target.value)
    }
    const handleSurnameChange = (e) => {
        setSurname(e.target.value)
    }
    const handleAgeChange = (e) => {
        setAge(Number(e.target.value))
    }
    const handleCountryChange = (e) => {
        setCountry(e.target.value)
    }
    const handleClubChange = (e) => {
        setClub(e.target.value)
    }
    const handleContractChange = (e) => {
        setContract(Number(e.target.value))
    }
    const handleSalaryChange = (e) => {
        setSalary(Number(e.target.value))
    }

    const handleAddManager = () => {
        addManager(name, surname, age, country, club, contract, salary);
    }

    return (

        <div class='flex flex-col mx-10 bg-slate-400'>
            <div>
                <h1>Add Manager</h1>
            </div>
            <div>
                <label for="small-input" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name</label>
                <input type="text" id="name-input" value={name} onChange={handleNameChange} class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
            </div>
            <div>
                <label for="small-input" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Surname</label>
                <input type="text" id="surname-input" value={surname} onChange={handleSurnameChange} class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
            </div>
            <div>
                <label for="small-input" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Age</label>
                <input type="text" id="age-input" value={age} onChange={handleAgeChange} class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
            </div>
            <div>
                <label for="small-input" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Country</label>
                <input type="text" id="country-input" value={country} onChange={handleCountryChange} class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
            </div>
            <div>
                <label for="small-input" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Club</label>
                <input type="text" id="club-input" value={club} onChange={handleClubChange} class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
            </div>
            <div>
                <label for="small-input" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Contract left</label>
                <input type="text" id="contract-input" value={contract} onChange={handleContractChange} class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
            </div>
            <div>
                <label for="small-input" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Salary</label>
                <input type="text" id="salary-input" value={salary} onChange={handleSalaryChange} class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
            </div>
            <div class='my-4'>
                <button type="submit" onClick={handleAddManager} class="text-white bg-green-600 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-900 dark:focus:ring-blue-800">Add Manager</button>
            </div>
        </div>
    )
}