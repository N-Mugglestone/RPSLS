import express from 'express';

const router = express.Router();

router.route(`/`)
    .post([[]],

        (req, res) => {
            console.log(req.body);
            const newRegister = new Register(req.body);

            newRegister.save(err => {
                if (err) {
                    res.status(400).send(`Cannot register, try again? `)
                } else {

                } res.status(200).send(`register success`)
            })

        })

export { router as Register };