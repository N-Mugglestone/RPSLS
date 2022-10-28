import { Navigate } from 'react-router-dom'
import addBucketList from './utils/addBucketList'
import { useEffect, useState } from 'react';
import axios from 'axios'

const bucketList = () => {

    const [bucketArray, setBucketArray] = useState([]);

    useEffect(() => {

        const getBucket = async () => {
            const response = await axios.get('https://localhost:3000/')
            setBucketArray(response.data)
        }
        getBucket();
    }, [])

    return (
        <>
            {addBucketList}
        </>
    )
}

addBucketList.prototype = {

}