import User from "@/app/(models)/UserModel";
import bcryptjs from "bcryptjs";
import {NextResponse} from "next/server";
import {cookies} from "next/headers";
import jwt from "jsonwebtoken"

export async function POST(req) {
    const body = await req.json()
    const {email, password} = body;
    try {
        const validUser = await User.findOne({email});
        if (!validUser) return NextResponse.json({message: 'User not found'}, {status: 404});
        const validPassword = bcryptjs.compareSync(password, validUser.password);
        if (!validPassword) return NextResponse.json({message: 'Bad Credentials'}, {status: 401});
        const token = jwt.sign({id: validUser._id}, process.env.JWT_SECRET)
        const {password: hashedPassword, ...userContent} = validUser._doc;
        let expiryDate = new Date(Date.now() + 52000000); // ~ 1 Day
        cookies().set('access_token', token, { httpOnly: true, expires: expiryDate })
        return NextResponse.json({userContent}, {status: 200})
    } catch (e) {
        throw new Error(e);
    }
}

