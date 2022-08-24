import express from 'express';
import dotenv from 'dotenv';
import morgan from 'morgan';
import cors from 'cors';

import { home } from './Routes/home.js';
import { hobbies } from './Routes/hobbies.js';
import { wishlist } from './Routes/wishlist.js';
import { random } from './Routes/random.js';

dotenv.config({ path: '.env.${process.env.NODE_ENV}' });

const app = express();

const port = process.env.PORT;
const host = process.env.HOST;

app.use('/', home)

const main = async () => {
    console.log('coding in process, not yet done')
}