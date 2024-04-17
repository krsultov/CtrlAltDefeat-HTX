"use client"
import React, {useEffect, useState} from 'react';
import Link from "next/link";
import Card from "@/app/(components)/Card";

const Events = () => {
    const [events, setEvents] = useState(null);
    const [status, setStatus] = useState("new");

    const getEvents = async () => {
        try {
            const res = await fetch("/api/events", {
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

    const filterEvents = (status) => {
        const filteredEvents = events.filter((event) => event.status === status)
        if (filteredEvents.length > 0) {
            return filteredEvents.map((filteredEvent, _index) => <Card id={_index} key={_index} event={filteredEvent}/>)
        } else return <h1>No Found Events for status: {status}</h1>
    }

    return events && (

        <div>
            <div className="p-5 w-full">
                <div className="flex items-center gap-5">
                    <div>
                        <div className="flex gap-3 justify-end">
                            <label className="block mb-1 font-medium">New</label>
                            <input onChange={() => setStatus("new")} checked={status === "new"} type="radio"
                                   id="radioNew"/>
                        </div>
                        <div className="flex gap-3 justify-end">
                            <label className="block mb-1 font-medium">Archived</label>
                            <input onChange={() => setStatus("old")} checked={status === "old"} type="radio"
                                   id="radioOld"/>
                        </div>
                    </div>
                    <Link href={"/events/new"}>
                        <button
                            className="my-5 border py-2 border-solid border-base-500 rounded-lg px-5 bg-secondary hover:bg-secondaryDark">Create
                            an Event
                        </button>
                    </Link>

                </div>
                <h1 className="text-3xl font-bold mb-5">Events</h1>
                <div className="grid sm:grid-cols-1 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                    {filterEvents(status)}
                </div>


            </div>

        </div>
    );
}

export default Events;