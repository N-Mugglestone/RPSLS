import { useState } from "react";
import PropTypes from "prop-types";
import axios from "axios";

import '../SCSS/addHobbies'


const addHobbies = (makeNewHobby) => {

    const { title, description } = makeNewHobby;
// const newHobby = new Model(title, description, newAddhobbies)  - need to make a model in the backend for this to work

    const [newHobby, setNewHobby] = useState('');
    const [addhobbyMessage, setAddHobbyMessage] = useState('');
    

    const addNewHobby = async (e) => {
        e.preventDefault()

        const newPost = new Model(title, description, newHobby)
        
        if (Object.keys(newPost).includes(title && description)) {
            try {
                const res = await axios.post('http://localhost:3000/addHobbies', newPost)
                setNewHobby({
                    title: '',
                    description: '',
                })
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
                    <form onSubmit={addNewHobby}>
                        <textarea
                            onChange={e => setNewHobby(e.target.value)} type="text" placeholder="Write here..." value={newHobby} ></textarea>
                        {addhobbyMessage && <small>{addhobbyMessage}</small>}
                        <br />
                        <input id="newPostButton" type="submit" value="Hobby" />
                    </form>
                </div>
            </div>
        </>
    )
}
    
addHobbies.PropTypes = {
        title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired 
    
    }


export default addHobbies;





// on this page I need the name of a hobby - a image linking to it - a brief description
    //  - and a place to add a comment or message
    
    
    
    
    
    // return (
    //     <>
    //         <h1> Input new hobby </h1>
    //         <form onSubmit={hobbies}>
    //             <label className="formLabel" htmlFor="title"> Title </label>
    //             <br />

    //         </form>
    //     </>
    // )