"use client"
import React, {useEffect, useState} from 'react';
import Link from "next/link";
import Card from "@/app/(components)/Card";

const Reports = () => {
    const [events, setEvents] = useState(null);

    const getEvents = async () => {
        try {
            const res = await fetch("/api/reports", {
                method: "GET",
                cache: "no-store",
            })

            const {events} = await res.json()

            return setEvents(events)
        } catch (e) {
            console.log("Failed to fetch events", e);
        }
    }

    useEffect(() => {
        getEvents()
    }, []);

    return events && (

        <div className="flex gap-3 lg:flex-wrap p-8">

            <div className="p-5 w-full">
                <div className="flex items-center w-full gap-5">
                    <Link href={"/reports/new"}>
                        <button
                            className="my-5 border py-2 border-solid border-base-500 rounded-lg px-5 bg-secondary hover:bg-secondaryDark">Create
                            a Report
                        </button>
                    </Link>

                </div>

                <div className="flex flex-wrap justify-evenly gap-8">
                    {events.map((event, _index) => <Card id={_index} key={_index} event={event}/>)}
                </div>

            </div>
        </div>
    );
}

export default Reports;