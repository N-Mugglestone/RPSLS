// this will be the display images that link to each element ... maybe just a page to play with at some point
// maybe show the most recent posts?

import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import axios from 'axios';

const Wall = () => {

    const [bucketArray, setBucketArray] = useState([]);



    const [hobbiesArray, setHobbiesArray] = useState([]);
    const [randomArray, setRandomArray] = useState([]);
    const [wishArray, setWishArray] = useState([]);

    useEffect(() => {
        const getBucket = async () => {
            const response = await axios.get(`http://localhost:3000/`)
            setBucketArray(response.data);
        }
        getBucket()
    }, [])


    useEffect(() => {
        const getHobbies = async () => {
            const response = await axios.get('http://localhost:3000/')
            setHobbiesArray(response.data);
        }
        getHobbies()
    }, [])


    useEffect(() => {
        const getRandom = async () => {
            const response = await axios.get('http://localhost:3000/')
            setRandomArray(response.data);
        }
        getRandom()
    }, [])


    useEffect(() => {
        const getWish = async () => {
            const response = await axios.get('http://localhost:3000/')
            setWishArray(response.data);
        }
        getWish()
    }, [])
}

Wall.prototype = {
    bucketArray: PropTypes.array,
    hobbiesArray: PropTypes.array,
    randomArray: PropTypes.array,
    wishArray: PropTypes.array
}

// return (
//     <>
//         { }

//     </>
// )

export default Wall;