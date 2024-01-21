'use client'

import AddClubForm from "./AddClubFrom";
import AddCoachForm from "./AddCoachForm";
import AddManagerForm from "./AddManagerForm";
import AddPlayerForm from "./AddPlayerForm";


export default function DBPanel() {


    return (
        <div class='flex flex-row basis-4 min-h-screen dark:bg-slate-400'>
            <AddPlayerForm />
            <AddManagerForm />
            <AddCoachForm />
            <AddClubForm />
        </div>
    )
}