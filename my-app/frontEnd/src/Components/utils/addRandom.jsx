import { useState } from "react";
import axios from "axios";
import Model from './Model'


const AddRandom = () => {


    const [newRandomList, setNewRandomList] = useState('');
    const [addRandomMessage, setaddRandomMessage] = useState('');


    const makeNewRandomItem = async (e) => {
        e.preventDefault()

        const newPost = new Model(newRandomList)

        if (Object.keys(newPost)) {
            try {
                const res = await axios.post('http://localhost:3000/AddRandom/', newPost)
                setNewRandomList('')
                setaddRandomMessage(res.data.message)
            } catch (err) {
                setaddRandomMessage('Not happening, the Bucket has ran away')
            }
        }
    }


    return (
        <>

            <div id="postComponent">
                <div>
                    <h1> Add a new item to the BucketList </h1>
                    <form onSubmit={makeNewRandomItem}>
                        <textarea
                            onChange={e => setNewRandomList(e.target.value)} type="text" placeholder="Please input title here 
                            and then write description" value={newRandomList} ></textarea>
                        {addRandomMessage && <small>{addRandomMessage}</small>}
                        <br />
                        <input id="newPostButton" type="submit" value="Add to Random List" />
                    </form>
                </div>
            </div>

        </>
    )
}

export default AddRandom;