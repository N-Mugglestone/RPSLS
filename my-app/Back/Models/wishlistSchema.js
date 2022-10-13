import mongoose from 'mongoose';

const wishlistSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
});

const Random = mongoose.model("Wishlist", wishlistSchema)

export default Wishlist;