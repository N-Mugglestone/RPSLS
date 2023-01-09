import express from 'express';

const router = express.Router();

router.route(`/`)
    .post([[]],

        (req, res) => {
            console.log(req.body);
            const newWishlist = new Wishlist(req.body);

            newWishlist.save(err => {
                if (err) {
                    res.status(400).send(`Cannot reach Wishlist, try again? `)
                } else {

                } res.status(200).send(`Access to Wishlist granted`)
            })

        })

export { router as wishlist };