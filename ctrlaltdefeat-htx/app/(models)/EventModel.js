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
        date: String, // Event date
        organizer: String, // ID of organizer
        participants: Array, // All participants
        beforeImage: {
            type: String, // Image before cleaning (URL)
            default: "https://i0.wp.com/sunrisedaycamp.org/wp-content/uploads/2020/10/placeholder.png",
        },
        pointValue: Number, // Amount of points the event gives
        status: {
            type: String,
            default: "new"
        },// New, Archived
        attended: {
            type: Array,
            default: [],
        }
    },
    {
        timestamps: true
    }
)

const Event = mongoose.models.Event || mongoose.model("Event", eventSchema);
export default Event;