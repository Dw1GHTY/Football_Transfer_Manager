"use client"
import Link from "next/link"
import React, { useState, useEffect } from 'react';

export default function Navbar(props) {

    return (
        <div class=' sticky top-0 z-50 flex flex-row basis-1/4 h-16 dark:bg-slate-800'>
            <Logo />
            <Home />
            <Help />
            <CurrentTeamInfo />
        </div>
    )
}

function CurrentTeamInfo(props) {

    return (
        <div class='flex flex-row ml-auto pt-5 pr-2 pl-2 text-white'>
            <div class='mr-4'>
                Selected Club:
            </div>
            <div class='mr-4'>
                ClubName        {/*Ovde cu morati da uzimam ime trenutno izabgranog kluba*/}
            </div>
            <div class='mr-4'>
                PROMENA       {/*Ovde cu morati da uzimam trenutan npvac izabranog kluba*/}
            </div>
        </div>
    )
}

function Logo() {
    return (
        <div class='m ml-8 mr-8 pt-2 cursor-pointer'>

            <Link href='/'>
                <img class='h-12 w-12' src="/logo.jpg" alt="FTN logo" />
            </Link>
        </div>
    )
}



