import Event from "@/app/(models)/EventModel";
import {NextResponse} from "next/server";

//Create New Event
export async function POST(req) {
    try {
        const body = await req.json()
        const ticketData = body.formData
        await Event.create(ticketData)

        return NextResponse.json({message: "Event Created Successfully"}, {status: 201});
    } catch (e) {
        console.log(e)
        return NextResponse.json({message: "Error", e}, {status: 500});
    }
}
