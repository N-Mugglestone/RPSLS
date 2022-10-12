import { useState } from "react";
import PropTypes from "prop-types";
import axios from "axios";

import '../SCSS/addHobbies'


const addHobbies = (newHobby) => {

    const { title, description } = newHobby;
// const newHobby = new Model(title, description, newAddhobbies)  - need to make a model in the backend for this to work

    const [newHobby, setNewHobby] = useState('');
    const [addhobbyMessage, setAddHobbyMessage] = useState('');
    

    const addNewhobby = async (e) => {
        e.preventDefault()

        
        
        if (Object.keys(newHobby).includes(title && description)) {
            try {
                const res = await axios.post('http://localhost:3000/addHobbies', newHobby)
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
                    <form onSubmit={addNewhobby}>
                        <textarea
                            onChange={e => setNewHobby(e.target.value)} type="text" placeholder="Write here..." value={newHobby} ></textarea>
                        {addhobbyMessage && <small>{addhobbyMessage}</small>}
                        <br />
                        <input id="newHobbyButton" type="submit" value="Hobby" />
                    </form>
                </div>
            </div>
        </>
    )
}
    
addHobbies.PropTypes = {
    newHobby: PropTypes.oneOfType({
        title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired 
        })
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