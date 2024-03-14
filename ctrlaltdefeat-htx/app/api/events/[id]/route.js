import Event from "@/app/(models)/EventModel";
import {NextResponse} from "next/server";

// Fetch Event by ID
export async function GET(req, {params}){
    try{
        const {id} = params
        const foundEvent = await Event.findById({_id: id})
        return NextResponse.json({foundEvent}, {status:200})
    } catch (e) {
        return NextResponse.json({message: "Error", e}, {status:500})
    }
}

// Update Event by ID
export async function PUT(req, {params}){
    try{
        const {id} = params
        const body = await req.json()
        const eventData = body.formData

        const updatedEvent = await Event.findByIdAndUpdate(id, {
            ...eventData
        })

        return NextResponse.json({message: "Event updated successfully"}, {status:200})
    } catch (e) {
        return NextResponse.json({message: "Error", e}, {status:500})
    }
}

// Delete Event by ID
export async function DELETE(req, {params}){
    try{
        const {id} = params
        await Event.findByIdAndDelete(id)

        return NextResponse.json({message: "Event deleted successfully"}, {status:200})
    } catch (e) {
        return NextResponse.json({message: "Error", e}, {status:500})
    }
}