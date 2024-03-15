import mongoose, {Schema} from "mongoose";

mongoose.connect(process.env.MONGODB_URI).then(r => {console.log('Connected to MongoDB');
}).catch((e) => {
    console.log(e);
});

mongoose.Promise = global.Promise;

const userSchema = new Schema(
    {
        username:{
            type: String,
            required: true,
            unique: true,
        },
        password:{
            type: String,
            required: true,
        },
        email:{
            type: String,
            required: true,
            unique: true,
        },
        roles:{
            type: Array,
        },
        profilePicture: {
            type: String,
            default: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png",
        }
    },
    {
        timestamps: true
    }
)

const User = mongoose.models.User || mongoose.model("User", userSchema);
export default User;