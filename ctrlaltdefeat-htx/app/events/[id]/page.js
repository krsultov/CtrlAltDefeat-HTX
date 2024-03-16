"use client"
import {useEffect, useState} from "react";
import {useSelector} from "react-redux";
import QRCodeComponent from "@/app/(components)/QRCode";


export default function EventDetails({params}) {

    const [event, setEvent] = useState(null);
    const {currentUser} = useSelector(state => state.user)

    const {id} = params
    const getEventById = async (eventId) => {

        const res = await fetch(`/api/events/${eventId}`, {
            method: "GET",
            cache: "no-store"
        })

        const {foundEvent} = await res.json()

        setEvent(foundEvent)
    }

    useEffect(() => {
        getEventById(id)
    }, [id]);

    const addParticipant = async (id, name, pfp) => {

        const participant = {
            id,
            name,
            pfp,
        }

        console.log(JSON.stringify(participant))

        const modifiedParticipants = [...event.participants,participant]

        const modifiedEvent = {...event, participants: modifiedParticipants}

        const res2 = await fetch(`/api/events/${id}`, {
            method: "PUT",
            cache: "no-store",
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(modifiedEvent)
        })
    }

    return event && (

        <div className="grid grid-cols-1 md:grid-cols-2">
            <img src={event.beforeImage}
                 alt='Event picture' className="p-4 w-full">
            </img>
            <div>
                <p className="pt-3 text-slate-800 text-lg">{event.location}</p>
                <h1 className="text-7xl py-10">{event.title}</h1>
                <p>{event.description}</p>
                <button onClick={() => addParticipant(currentUser.userContent._id,currentUser.userContent.username, currentUser.userContent.profilePicture)}
                        className="  my-10 border py-2 border-solid border-base-500 rounded-lg px-5 bg-secondary hover:bg-secondaryDark">Join
                    this event
                </button>
                <div className="space-x-2 flex">
                    <p className="space-x-2 py-0.5 pr-5">Participants: </p>
                    {event.participants.map((participant, _index) => (
                        <div className="flex items-center gap-3" key={_index}>
                            <a className="space-x-2 py-0.5">{participant.name}</a>
                            <div
                                className="flex  h-10 w-10 rounded-full overflow-hidden mr-6 border-2 border-emerald-500/50">
                                <img src={participant.pfp} alt="Profile"/>
                            </div>
                        </div>
                    ))}
                </div>
                {
                    event.organizer === currentUser.userContent._id && <QRCodeComponent url={`${window.location.host}/handleqr/${id}`} />
                }

            </div>
        </div>
    );
}
