import React from 'react';
import Link from "next/link";

const Navigation = () => {
    return (
        <nav className="flex justify-between bg-blue-200 p-4">
            <div className="flex items-center space-x-4">
                <Link href="/">
                    LOGO + NAME
                </Link>
            </div>
            <div className="flex items-center space-x-4">
                <Link href="/#events">
                    Events
                </Link>
                <Link href="/#reports">
                    Reports
                </Link>
                <Link href="/#login">
                    Login
                </Link>
            </div>
        </nav>
    );
};

export default Navigation;