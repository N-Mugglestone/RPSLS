import mongoose from 'mongoose';

const bucketListSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
});

const BucketList = mongoose.model("BucketList", bucketListSchema)

export default BucketList;