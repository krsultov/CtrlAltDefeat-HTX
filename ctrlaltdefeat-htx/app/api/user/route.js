import User from "@/app/(models)/UserModel";
import {NextResponse} from "next/server";

export async function GET(req, {params}) {
    try {
        const {id} = params
        const foundUser = await User.findById({_id: id})

        if(!foundUser){
            return NextResponse.json({message: "user not found"}, {status: 404})
        }

        return NextResponse.json({foundUser}, {status: 200})
    } catch (e) {
        console.log(e)
        return NextResponse.json({message:e}, {status: 500})
    }
}