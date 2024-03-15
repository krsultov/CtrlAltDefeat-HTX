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
            <img src={event.beforeImage}
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
                    <a className="space-x-2 py-0.5" href="#"><img
                        src="https://scontent-sof1-2.cdninstagram.com/v/t51.2885-19/354656992_933023704670145_7792669753326946027_n.jpg?stp=dst-jpg_s100x100&_nc_cat=109&ccb=1-7&_nc_sid=3fd06f&_nc_ohc=NvyfMcuXYDQAX9Rdee1&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent-sof1-2.cdninstagram.com&oh=00_AfCgyfxUKsjdag-lfRw_A-4AeddMKLFoQ8Cer40agIW_cw&oe=65F8DF36"
                        alt="Krum" className="border border-solid border-base-500 rounded-3xl w-5"></img></a>
                    <a className="space-x-2 py-0.5" href="#">Krum</a>
                </div>

            </div>
        </div>
    );
}
