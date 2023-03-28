import mongoose from 'mongoose';

const randomSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
});

const Random = mongoose.model("Random", randomSchema)

export default Random;