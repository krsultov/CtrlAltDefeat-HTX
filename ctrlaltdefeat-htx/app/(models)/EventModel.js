import mongoose, {Schema} from "mongoose";

mongoose.connect(process.env.MONGODB_URI).then(r => {console.log('Connected to MongoDB');
}).catch((e) => {
    console.log(e);
});

mongoose.Promise = global.Promise;

const eventSchema = new Schema(
    {
        title: String, //Event title
        description: String, //Event description
        location: String, //Event location
        date: Date, // Event date
        reqParticipants: Number, // minimum number of participants
        maxParticipants: Number, // maximum number of participants
        organizer: String, // ID of organizer
        moderator: String, // ID of overlooking moderator
        participants: Array, // All participants
        beforeImage: String, // Image before cleaning (URL)
        afterImage: String, // Image after cleaning (URL)
        pointValue: Number, // Amount of points the event gives
        status: String, // New, Archived
    },
    {
        timestamps: true
    }
)

const Event = mongoose.models.Event || mongoose.model("Event", eventSchema);
export default Event;