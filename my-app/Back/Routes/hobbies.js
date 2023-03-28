import express from 'express';

const router = express.Router();

router.route(`/`)
    .post([[]],

        (req, res) => {
            console.log(req.body);
            const newHobby = new Hobbies(req.body);

            newHobby.save(err => {
                if (err) {
                    res.status(400).send(`Cannot reach hobbies,  try again? `)
                } else {

                    res.status(200).send(`Page access success`)
                }
            })

        })

export { router as Hobbies };