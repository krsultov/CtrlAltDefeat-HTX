"use client"
import {useEffect, useState} from "react";


export default function EventDetails({params}) {

    const [event, setEvent] = useState(null);

    const {id} = params
    const getEventById = async (eventId) => {

        const res = await fetch(`http://localhost:3000/api/events/${eventId}`, {
            method: "GET",
            cache: "no-store"
        })

        const {foundEvent} = await res.json()

        setEvent(foundEvent)
    }


    useEffect(() => {
        getEventById(id)
    }, [id]);



    return event && (

        <div className="grid grid-cols-1 md:grid-cols-2">
            <img src={`data:image/jpeg;base64,${event.beforeImage}`}
                 alt='Event picture' className="p-4 w-auto">
            </img>
            <div>
                <p className="pt-3 text-slate-800 text-lg">{event.location}</p>
                <h1 className="text-7xl py-10">{event.title}</h1>
                <p>{event.description}</p>
                <button
                        className="  my-10 border py-2 border-solid border-base-500 rounded-lg px-5 bg-secondary hover:bg-secondaryDark">Join
                    this event
                </button>
                <div className="space-x-2 flex">
                    <p className="space-x-2 py-0.5">Participants: </p>
                    {event.participants.map((participant, _index) => (
                        <div key={_index}>
                            <a className="space-x-2 py-0.5">{participant}</a>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    );
}
