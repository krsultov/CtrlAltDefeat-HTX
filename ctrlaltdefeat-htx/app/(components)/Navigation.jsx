"use client"
import React from 'react';
import Link from "next/link";
import {useSelector} from "react-redux";
import Image from "next/image";

const Navigation = () => {

    const {currentUser} = useSelector(state => state.user)

    return (
        <nav className="flex justify-between bg-primary p-4 px-8">
            <div className="flex items-center space-x-4">
                <Link href="/" className="text-2xl font-bold">
                    Baywatch
                </Link>
            </div>
            <div className="flex items-center space-x-4">
                <Link href="/events">
                    Events
                </Link>
                <Link href="/#reports">
                    Reports
                </Link>

                <Link href='/login'>
                    {currentUser ? (
                        <div className="flex items-center space-x-2 ml-5">
                            <h1>{currentUser && currentUser.userContent.username}</h1>
                            <div className="h-10 w-10 rounded-full overflow-hidden mr-6 border-2 border-emerald-500/50">
                                <img src={currentUser.userContent.profilePicture} alt="Profile"/>
                            </div>
                        </div>
                    ) : (
                        <button
                            className="bg-secondary focus:outline-none focus:ring-0 focus:ring-offset-1 focus:ring-secondaryDark hover:bg-secondaryDark text-black font-semibold py-3 px-6 rounded-md">
                            Login
                        </button>
                    )}
                </Link>
            </div>
        </nav>
    );
};

export default Navigation;