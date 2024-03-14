import mongoose, {Schema} from "mongoose";

mongoose.connect(process.env.MONGODB_URI).then(r => {console.log('Connected to MongoDB');
}).catch((e) => {
    console.log(e);
});

mongoose.Promise = global.Promise;

const reportSchema = new Schema(
    {
        title: String, //Event title
        description: String, //Event description
        location: String, //Event location
        date: Date, // Event date
        image: String, // Image for the report
        reporter: String, // The person creating the report
        status: String, // New, Resolved
    },
    {
        timestamps: true
    }
)

const Report = mongoose.models.Report || mongoose.model("Report", reportSchema);
export default Report;