"use client"
import {useEffect, useState} from "react";
import {useSelector} from "react-redux";
import QRCodeComponent from "@/app/(components)/QRCode";


export default function EventDetails({params}) {

    const [event, setEvent] = useState(null);
    const {currentUser} = useSelector(state => state.user)

    const {id} = params
    const getEventById = async (eventId) => {

        const res = await fetch(`/api/reports/${eventId}`, {
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
            <img src={event.beforeImage}
                 alt='Event picture' className="p-4 w-full">
            </img>
            <div>
                <p className="pt-3 text-slate-800 text-lg">{event.location}</p>
                <h1 className="text-7xl py-10">{event.title}</h1>
                <p>{event.description}</p>
            </div>
        </div>
    );
}
