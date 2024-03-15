import mongoose, {Schema} from "mongoose";

const imageSchema = new mongoose.Schema({
    filename: String,
    contentType: String,
    image: Buffer,
});

const Image = mongoose.models.Image || mongoose.model("Image", imageSchema);
export default Image;