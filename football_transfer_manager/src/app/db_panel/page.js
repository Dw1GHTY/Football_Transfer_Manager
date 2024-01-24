'use client'

import Navbar from "../components/Navbar";
import AddClubForm from "./AddClubFrom";
import AddCoachForm from "./AddCoachForm";
import AddManagerForm from "./AddManagerForm";
import AddPlayerForm from "./AddPlayerForm";


export default function DBPanel() {


    return (
        <div>
            <Navbar />
            <div class='flex flex-row basis-4 min-h-screen dark:bg-slate-400'>
                <AddPlayerForm />
                <AddManagerForm />
                <AddCoachForm />
                <AddClubForm />
            </div>
        </div>
    )
}