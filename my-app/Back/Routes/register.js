import express from 'express';

const router = express.Router();

router.route(`/`)
    .post([[]],

        (req, res) => {
            console.log(req.body);
            const newRegister = new Register(req.body);

            newRegister.save(err => {
                if (err) {
                    res.status(400).send(`Cannot reach register page, try again? `)
                } else {

                } res.status(200).send(`Page access success`)
            })

        })

export { router as Register };