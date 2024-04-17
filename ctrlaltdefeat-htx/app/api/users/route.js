import User from "@/app/(models)/UserModel";
import {NextResponse} from "next/server";

export async function GET(req, {params}) {
    try {
        const users = await User.find();
        return NextResponse.json(users, {status: 200});
    } catch (e) {
        console.log(e);
    }
}