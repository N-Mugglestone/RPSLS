import mongoose from 'mongoose';

const postSchema = new mongoose.Schema({
    firstName: { type: String, required: true },
    secondName: { type: String, required: true },
    timeStamp: { type: Date, required: true },
    postContent: { type: String, required: true }
});

const Post = mongoose.model("Post", postSchema)

export default Post;   