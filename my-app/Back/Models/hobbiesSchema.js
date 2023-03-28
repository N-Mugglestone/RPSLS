import mongoose from 'mongoose';

const hobbiesSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
});

const Hobbies = mongoose.model("Hobbies", hobbiesSchema)

export default Hobbies;