import express from 'express';
import Random from '../Models/randomSchema.js';

const router = express.Router();

router.route(`/`)
    .post([[]],

        (req, res) => {
            console.log(req.body);
            const newRandom = new Random(req.body);

            newRandom.save(err => {
                if (err) {
                    res.status(400).send(`Adding random failed, try again? `)
                } else {

                    res.status(200).send(`random is a success`)
                }
            })

        })

export { router as addRandom };