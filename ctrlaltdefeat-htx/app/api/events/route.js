import Event from "@/app/(models)/EventModel";
import {NextResponse} from "next/server";

//Create New Event
export async function POST(req) {
    try {
        const body = await req.json()
        const eventData = body.formData
        await Event.create(eventData)

        return NextResponse.json({message: "Event Created Successfully"}, {status: 201})
    } catch (e) {
        console.log(e)
        return NextResponse.json({message: "Error", e}, {status: 500})
    }
}

// Fetch Events
export async function GET(req) {
    try {
        const events = await Event.find();
        return NextResponse.json({events}, {status: 200})
    } catch (e) {
        console.log(e)
        return NextResponse.json({message: "Error", e}, {status: 500})
    }
}