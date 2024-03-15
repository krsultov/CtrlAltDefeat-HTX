import Report from "@/app/(models)/ReportModel";
import {NextResponse} from "next/server";

// Fetch report by Id
export async function GET(req, {params}){
    try{
        const {id} = params
        const foundReport = await Report.findById({_id: id})
        return NextResponse.json({foundReport}, {status:200})
    } catch (e) {
        return NextResponse.json({message: "Error", e}, {status:500})
    }
}

// Update Report by Id
export async function PUT(req, {params}){
    try{
        const {id} = params
        const body = await req.json()
        const reportData = body.formData

        const updatedReport = await Report.findByIdAndUpdate(id, {
            ...reportData
        })

        return NextResponse.json({message: "Event updated successfully"}, {status:200})
    } catch (e) {
        return NextResponse.json({message: "Error", e}, {status:500})
    }
}