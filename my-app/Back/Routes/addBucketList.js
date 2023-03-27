import express from 'express';
import Post from '../Models/postSchema'

const router = express.Router();

router.route(`/`)
    .post([[]],

        (req, res) => {
            console.log(req.body);
            const newBucketList = new Post(req.body);

            newBucketList.save(err => {
                if (err) {
                    res.status(400).send(`Adding BucketList failed, try again? `)
                } else {

                } res.status(200).send(`BucketList is a success`)
            })

        })

export { router as addBucketList };