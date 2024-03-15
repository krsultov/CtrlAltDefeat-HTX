import Image from "next/image";
import Card from "../(components)/Card";
import React from 'react';

const getEvents = async () => {
    try {
        const res = await fetch("http://localhost:3000/api/events", {
            cache: "no-store",
        })

        return res.json()
    } catch (e) {
        console.log("Failed to fetch events", e);
    }
}

const Events = async () => {

    const {events} = await getEvents()

    const uniqueStatuses = [
        ...new Set(events?.map(({status}) => status))
    ]

    return (
        <div className="flex gap-3 lg:flex-wrap p-8">

            <div className="p-5">
                <div>
                    {events && uniqueStatuses?.map((uniqueStatus, statusIndex) => (
                        <div key={statusIndex} className="mb-4">
                            <h2>{uniqueStatus}</h2>
                            <div className="lg:grid grid-cols-2 xl:grid-cols-4">
                                {events.filter((event) => event.category === uniqueStatus).map((filteredEvent, _index) => (
                                    <Card id={_index} key={_index} ticket={filteredEvent}/>
                                ))}
                            </div>

                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Events;