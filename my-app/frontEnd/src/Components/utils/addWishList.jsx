import { useState } from "react";
import axios from "axios";
import Model from './Model'


const AddWishList = () => {


    const [newWishList, setNewWishList] = useState('');
    const [addWishMessage, setaddWishMessage] = useState('');


    const makeNewWish = async (e) => {
        e.preventDefault()

        const newPost = new Model(newWishList)

        if (Object.keys(newPost)) {
            try {
                const res = await axios.post('http://localhost:3000/AddWishList/', newPost)
                setNewWishList('')
                setaddWishMessage(res.data.message)
            } catch (err) {
                setaddWishMessage('Not happening, try to make a wish again, maybe later?')
            }
        }
    }


    return (
        <>

            <div id="postComponent">
                <div>
                    <h1> Add a new item to the BucketList </h1>
                    <form onSubmit={makeNewWish}>
                        <textarea
                            onChange={e => setNewWishList(e.target.value)} type="text" placeholder="Please input title here 
                            and then write description" value={newWishList} ></textarea>
                        {addWishMessage && <small>{addWishMessage}</small>}
                        <br />
                        <input id="newPostButton" type="submit" value="WishListItem" />
                    </form>
                </div>
            </div>

        </>
    )
}

export default AddWishList;