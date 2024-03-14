import React from 'react';
import Link from "next/link";

const Navigation = () => {
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
                <Link href="/login">
                    Login
                </Link>
            </div>
        </nav>
    );
};

export default Navigation;