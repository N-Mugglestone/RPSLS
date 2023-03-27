import mongoose from 'mongoose';

const peepSchema = new mongoose.Schema({
    firstName: { type: String, required: true },
    secondName: { type: String, required: true },
    timeStamp: { type: Date, required: true },
    postContent: { type: String, required: true }
});

const Post = mongoose.model("Peep", peepSchema)

export default Post;