import Report from "@/app/(models)/ReportModel";
import {NextResponse} from "next/server";

//Create New Event
export async function POST(req) {
    try {
        const body = await req.json()
        const eventData = body.formData
        const {title,description,location,date,beforeImage} = eventData
        const newEvent = new Report({title,description,location,date,beforeImage})
        await newEvent.save()
        return NextResponse.json({message: "Report Created Successfully"}, {status: 201})
    } catch (e) {
        console.log(e)
        return NextResponse.json({message: "Error", e}, {status: 500})
    }
}

// Fetch Reports
export async function GET(req) {
    try {
        const reports = await Report.find();
        return NextResponse.json({reports}, {status: 200})
    } catch (e) {
        console.log(e)
        return NextResponse.json({message: "Error", e}, {status: 500})
    }
}