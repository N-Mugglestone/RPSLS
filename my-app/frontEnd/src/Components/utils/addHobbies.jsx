import { useState } from "react";
// import PropTypes from "prop-types";
import axios from "axios";
import Model from './Model'

// import '../SCSS/addHobbies.scss'


const AddHobbies = () => {

// const newHobby = new Model(title, description, newAddhobbies)  - need to make a model in the backend for this to work
    

    //figue out how to give a title to each individual hobby ... maybe in the return statement?
    
    const [newHobby, setNewHobby] = useState('');
    const [addhobbyMessage, setAddHobbyMessage] = useState('');
    

    const makeNewHobby = async (e) => {
        e.preventDefault()

        const newPost = new Model( newHobby)
        
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
    
// addHobbies.PropTypes = {
//         title: PropTypes.string.isRequired,
//         description: PropTypes.string.isRequired 
    
//     }


export default AddHobbies;





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