import express from 'express';

const router = express.Router();

router.route(`/`)
    .post([[]],

        (req, res) => {
            console.log(req.body);
            const newBucket = new Wishlist(req.body);

            newBucket.save(err => {
                if (err) {
                    res.status(400).send(`Cannot reach Bucketlist, try again? `)
                } else {

                } res.status(200).send(`Access to Bucketlist granted`)
            })

        })

export { router as Bucketlist };