import Event from "@/app/(models)/EventModel";
import User from "@/app/(models)/UserModel";
import {NextResponse} from "next/server";

export async function GET(req, {params}) {
    try {
        const {id} = params
        const foundEvent = await Event.findById({_id: id})
        const {attended} = foundEvent

        return NextResponse.json({attended}, {status: 200})
    } catch (e) {
        console.log(e)
    }
}

export async function POST(req, {params}) {
    try {
        const {id} = params
        const {userId, amount} = await req.json();

        const foundEvent = await Event.findById({_id: id});

        if (!foundEvent.attended.includes(userId)) {
            const updatedEvent = await Event.findByIdAndUpdate({_id: id}, {
                $push: {attended: userId}
            }, {new: true});

            if (!updatedEvent) {
                return NextResponse.json({message: "event not found"}, {status: 404})
            }

            const user = await User.findByIdAndUpdate({_id: userId}, {
                $inc: {points: amount}
            }, {new: true});
        } else {
            return NextResponse.json({message: "user already attended"}, {status: 400})
        }

        if (foundEvent.attended.length - 1 >= foundEvent.participants.length / 2) {
            const updatedEvent = await Event.findByIdAndUpdate({_id: id}, {
                status: "old"
            }, {new: true});
        }

        return NextResponse.json({message: "success"}, {status: 200})
    } catch (error) {
        console.error(error);
        return NextResponse.json({error}, {status: 500})
    }
}