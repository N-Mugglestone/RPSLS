import mongoose from 'mongoose';
import Post from '../postSchema'

const bucketListSchema = new mongoose.Schema({
    firstName: { type: String, required: true },
    secondName: { type: String, required: true },
    timeStamp: { type: Date, required: true },
    postContent: { type: String, required: true }
});

const BucketList = mongoose.model("BucketList", bucketListSchema)

export default BucketList;