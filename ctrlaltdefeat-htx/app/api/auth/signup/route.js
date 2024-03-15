import User from "@/app/(models)/UserModel";
import {NextResponse} from "next/server";
import bcrypt from "bcrypt"

export async function POST(req) {
    const body = await req.json()
    const {username, email, password, roles} = body;
    console.log(JSON.stringify(req.body));
    const salt = await bcrypt.genSaltSync(10)
    const hashedPassword = await bcrypt.hashSync(password, salt);
    const newUser = new User({username, email, password: hashedPassword, roles: roles});
    try {
        await newUser.save();
        console.log(`Successfully created User ${newUser._id}`);
        return NextResponse.json({message: `Successfully created User ${newUser._id}`}, {status: 201})
    } catch (e) {
        return NextResponse.json({message: e.message, success: false, }, {status: 500})
    }
}