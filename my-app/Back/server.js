import express from 'express';
import dotenv from 'dotenv';
import morgan from 'morgan';
import cors from 'cors';

import { home } from './Routes/home.js';
import { Bucketlist } from './Routes/BucketList.js';
import { hobbies } from './Routes/hobbies.js';
import { wishlist } from './Routes/wishlist.js';
import { Random } from './Routes/random.js';
import { addBucketList } from './Routes/addBucketList.js'
import { addHobbies } from './Routes/addHobbies.js'
import { addWishlist } from './Routes/addWishList.js'
import { addRandom } from './Routes/addRandom.js'
import { register } from './Routes/register.js'


dotenv.config({ path: '.env.${process.env.NODE_ENV}' });

const app = express();

const port = process.env.PORT;
const host = process.env.HOST;

app.use(morgan('tiny'));
app.use(express.json());
app.use(cors());

app.use('/', home)
app.use('/bucketList', Bucketlist)
app.use('/hobbies', hobbies)
app.use('/wishlist', wishlist)
app.use('/random', Random)
app.use('/addBucketList', addBucketList)
app.use('/addHobbies', addHobbies)
app.use('/addWishlist', addWishlist)
app.use('/addRandom', addRandom)
app.use('/register', register)


const main = async () => {
    console.log(`Connecting to DB: ${process.env.DB_URI}`);
    await mongoose.connect(process.env.DB_URI);
}

main().then(console.log('database')).catch(err => console.log(err))


const server = app.listen(port, host, () => {
    const SERVERHOST = server.address().address;
    const SERVERPORT = server.address().port;
    console.log(`App listening at http://${SERVERHOST}:${SERVERPORT}`)
});

export default server