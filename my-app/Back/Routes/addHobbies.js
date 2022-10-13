import express from 'express';
import Hobbies from '../Hobbies/hobbiesSchema.js';

const router = express.Router();

router.route(`/`)
    .post([[]],

        (req, res) => {
            console.log(req.body);
            const newHobby = new Hobbies(req.body);

            newHobby.save(err => {
                if (err) {
                    res.status(400).send(`Adding hobby failed, try again? `)
                } else {

                } res.status(200).send(`hobby is a success`)
            })

        })

export { router as addHobbies };