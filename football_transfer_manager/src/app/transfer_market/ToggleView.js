"use client";

import { useState } from "react"


export default function ToggleView() {
    return (
        <div class='w-64 ml-6 mt-4'>
            <label for="countries" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Select type</label>
            <select id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                <option selected value='Players'>Players</option>
                <option value="Managers">Managers</option>
                <option value="Coaches">Coaches</option>
            </select>
        </div>
    )
}