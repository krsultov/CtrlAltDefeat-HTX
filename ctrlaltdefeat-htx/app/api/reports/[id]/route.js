import Report from "@/app/(models)/ReportModel";
import {NextResponse} from "next/server";

// Fetch Event by ID
export async function GET(req, {params}){
    try{
        const {id} = params
        const foundEvent = await Report.findById({_id: id})
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
        const update = {
            ...body
        }
        const updatedEvent = await Report.findOneAndUpdate({_id: body._id}, update,)

        return NextResponse.json({message: "Report updated successfully"}, {status:200})
    } catch (e) {
        return NextResponse.json({message: "Error", e}, {status:500})
    }
}

// Delete Event by ID
export async function DELETE(req, {params}){
    try{
        const {id} = params
        await Report.findByIdAndDelete(id)

        return NextResponse.json({message: "Report deleted successfully"}, {status:200})
    } catch (e) {
        return NextResponse.json({message: "Error", e}, {status:500})
    }
}