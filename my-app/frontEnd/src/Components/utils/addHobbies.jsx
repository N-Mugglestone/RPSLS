import { useState } from "react";
// import PropTypes from "prop-types";
import axios from "axios";
import Model from './Model'




// on this page I need the name of a hobby - a image linking to it - a brief description
//  - and a place to add a comment or message

const AddHobbies = () => {

    // const newHobby = new Model(title, description, newAddhobbies)  - need to make a model in the backend for this to work



    const [newHobby, setNewHobby] = useState('');
    const [addhobbyMessage, setAddHobbyMessage] = useState('');


    const makeNewHobby = async (e) => {
        e.preventDefault()

        const newPost = new Model(newHobby)

        if (Object.keys(newPost)) {
            try {
                const res = await axios.post('http://localhost:3000/AddHobbies/', newPost)
                setNewHobby('')
                setAddHobbyMessage(res.data.message)
            } catch (err) {
                setAddHobbyMessage('Not happening, no hobbies here today!')
            }
        }
    }


    return (
        <>

            <div id="postComponent">
                <div>
                    <h1> Add a new Hobby </h1>
                    <form onSubmit={makeNewHobby}>
                        <textarea
                            onChange={e => setNewHobby(e.target.value)} type="text" placeholder="Please input title here 
                            and then write description" value={newHobby} ></textarea>
                        {addhobbyMessage && <small>{addhobbyMessage}</small>}
                        <br />
                        <input id="newPostButton" type="submit" value="Hobby" />
                    </form>
                </div>
            </div>

        </>
    )
}

// addHobbies.PropTypes = {
//         title: PropTypes.string.isRequired,
//         description: PropTypes.string.isRequired

//     }



export default AddHobbies;
