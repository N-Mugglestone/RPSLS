import { useState } from "react";
import axios from "axios";
import Model from './Model'


const AddBucketList = () => {


    const [newBucketList, setNewBucketList] = useState('');
    const [addBucketMessage, setaddBucketMessage] = useState('');


    const makeNewBucketItem = async (e) => {
        e.preventDefault()

        const newPost = new Model(newBucketList)

        if (Object.keys(newPost)) {
            try {
                const res = await axios.post('http://localhost:3000/AddBucketList/', newPost)
                setNewBucketList('')
                setaddBucketMessage(res.data.message)
            } catch (err) {
                setaddBucketMessage('Not happening, the Bucket has ran away')
            }
        }
    }


    return (
        <>

            <div id="postComponent">
                <div>
                    <h1> Add a new item to the BucketList </h1>
                    <form onSubmit={makeNewBucketItem}>
                        <textarea
                            onChange={e => setNewBucketList(e.target.value)} type="text" placeholder="Please input title here 
                            and then write description" value={newBucketList} ></textarea>
                        {addBucketMessage && <small>{addBucketMessage}</small>}
                        <br />
                        <input id="newPostButton" type="submit" value="Add to BucketList" />
                    </form>
                </div>
            </div>

        </>
    )
}

// MAYBE SHOVE THIS IN ANOTHER FILE? 
// function BList({ bListBody }) {

//     const { bListContent } = bListBody
//     const formattedDate = new Date(timeStamp).toDateString()

//     return (
//         <>
//             <div className="card">
//                 <div className="container">
//                     <h4>{formattedDate}</h4>
//                     <h3> {bListBody}</h3>
//                 </div>
//             </div>
//         </>
//     )

// }




export default AddBucketList;