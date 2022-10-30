import express from 'express';

const router = express.Router();

router.route(`/`)
    .post([[]],

        (req, res) => {
            console.log(req.body);
            const newRandom = new Random(req.body);

            newRandom.save(err => {
                if (err) {
                    res.status(400).send(`Cannot reach Random List, try again? `)
                } else {

                } res.status(200).send(`Access to Random granted`)
            })

        })

export { router as Random };