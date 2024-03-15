import Report from "@/app/(models)/EventModel";
import {NextResponse} from "next/server";

// Create new report
export async function POST(req) {
    try {
        const body = await req.json()
        const reportData = body.formData
        await Report.create(reportData)

        return NextResponse.json({message: "Report Created Successfully"}, {status: 201})
    } catch (e) {
        console.log(e)
        return NextResponse.json({message: "Error", e}, {status: 500})
    }
}

// Fetch all reports
export async function GET(req) {
    try {
        const reports = await Report.find();
        return NextResponse.json({reports}, {status: 200})
    } catch (e) {
        console.log(e)
        return NextResponse.json({message: "Error", e}, {status: 500})
    }
}