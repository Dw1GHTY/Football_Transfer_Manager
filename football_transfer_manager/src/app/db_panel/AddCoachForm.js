import { useState } from "react"
import { addCoach } from "../../../lib/neo4j"

export default function AddCoachForm() {

    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [age, setAge] = useState(0);
    const [country, setCountry] = useState('');
    const [club, setClub] = useState('');
    const [category, setCategory] = useState('');
    const [experience, setExperience] = useState('');
    const [contract, setContract] = useState('');
    const [salary, setSalary] = useState('');

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
    const handleCategoryChange = (e) => {
        setCategory(e.target.value)
    }
    const handleExperienceChange = (e) => {
        setExperience(e.target.value)
    }
    const handleContractChange = (e) => {
        setContract(e.target.value)
    }
    const handleSalaryChange = (e) => {
        setSalary(e.target.value)
    }

    const handleAddCoach = () => {
        addCoach(name, surname, age, country, club, contract, salary);
    }

    return (
        <div class='flex flex-col mx-10 bg-slate-400'>
            <div>
                <h1>Add Coach</h1>
            </div>
            <div>
                <label for="small-input" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name</label>
                <input type="text" id="small-input" value={name} onChange={handleNameChange} class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
            </div>
            <div>
                <label for="small-input" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Surname</label>
                <input type="text" id="small-input" value={surname} onChange={handleSurnameChange} class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
            </div>
            <div>
                <label for="small-input" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Age</label>
                <input type="text" id="small-input" value={age} onChange={handleAgeChange} class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
            </div>
            <div>
                <label for="small-input" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Country</label>
                <input type="text" id="small-input" value={country} onChange={handleCountryChange} class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
            </div>
            <div>
                <label for="small-input" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Club</label>
                <input type="text" id="small-input" value={club} onChange={handleClubChange} class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
            </div>
            <div>
                <label for="small-input" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Category</label>
                <input type="text" id="small-input" value={category} onChange={handleCategoryChange} class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
            </div>
            <div>
                <label for="small-input" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Experience</label>
                <input type="text" id="small-input" value={experience} onChange={handleExperienceChange} class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
            </div>
            <div>
                <label for="small-input" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Contract left</label>
                <input type="text" id="small-input" value={contract} onChange={handleContractChange} class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
            </div>
            <div>
                <label for="small-input" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Salary</label>
                <input type="text" id="small-input" value={salary} onChange={handleSalaryChange} class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
            </div>
            <div class='my-4'>
                <button type="submit" onClick={handleAddCoach} class="text-white bg-green-600 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-900 dark:focus:ring-blue-800">Add Coach</button>
            </div>
        </div>
    )
}