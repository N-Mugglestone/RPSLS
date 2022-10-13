import express from 'express';
import BucketList from '../BucketList/bucketListSchema.js';

const router = express.Router();

router.route(`/`)
    .post([[]],

        (req, res) => {
            console.log(req.body);
            const newBucketList = new BucketList(req.body);

            newBucketList.save(err => {
                if (err) {
                    res.status(400).send(`Adding BucketList failed, try again? `)
                } else {

                } res.status(200).send(`BucketList is a success`)
            })

        })

export { router as addBucketList };