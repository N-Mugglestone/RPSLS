import express from 'express';
import Wishlist from '../Wishlist/wishListSchema.js';

const router = express.Router();

router.route(`/`)
    .post([[]],

        (req, res) => {
            console.log(req.body);
            const newWishlist = new Wishlist(req.body);

            newWishlist.save(err => {
                if (err) {
                    res.status(400).send(`Adding to WishList failed, try again? `)
                } else {

                } res.status(200).send(`Wishlist is a success`)
            })

        })

export { router as addWishlist };