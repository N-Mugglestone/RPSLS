import { useState } from "react";
import PropTypes from "prop-types";
import axios from "axios";

import './CSS/addHobbies.css';


const addHobbies = () => {


    const [newHobby, setNewHobby] = useState('');

    const [submitted, setSubmitted] = useState(fasle);

    const hobbies = async (e) => {
        e.preventDefault()

        const { title, description } = newHobby;
        // const newHobby = new Model(title, description, newAddhobbies)  - need to make a model in the backend for this to work
        
        if (title && description) {
            try {
                const res = await axios.post('http://localhost:3000/addHobbies', newHobby)
                setNewHobby({
                    title: '',
                    description: '',
                })
                if (res.data.message === "success") {
                    setSubmitted(true)
                    return
                }
                setSubmitted(res.data.message)
            } catch (err) {
                console.log(err)
            }
        }
    }


    return (
        <>
            <div id="postComponent">
                <div>
                    <h1> Add a new Hobby </h1>
                    <form onSubmit={hobbies}>
                        <textarea
                            onChange={e => setNewHobby(e.target.value)} type="text" placeholder="Write here..." value={newHobby} ></textarea>
                        {submitted && <small>{submitted}</small>}
                        <br />
                        <input id="newHobbyButton" type="submit" value="Hobby" />
                    </form>
                </div>
            </div>
        </>
    )


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