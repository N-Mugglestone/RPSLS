import { useState } from "react";
import PropTypes from 'prop-types';
import axios from "axios";

import Model from './Model'


const AddHobbies = (user) => {


    const [newHobby, setNewHobby] = useState('');
    const [addhobbyMessage, setAddHobbyMessage] = useState('');


    const makeNewHobby = async (e) => {
        e.preventDefault()

        const newPost = new Model(firstName, secondName, Date, newHobby)

        if (Object.keys(newPost).length) {
            try {
                const res = await axios.post('http://localhost:3000/AddHobbies/', newPost)
                setNewHobby('')
                setAddHobbyMessage(res.data.message)
            } catch (err) {
                setAddHobbyMessage('Nope, not happening, no hobbies here today!')
            }
        }
    }


    return (
        <>

            <div id="postComponent">
                <div>
                    <h1> Add a new Hobby </h1>
                    <h2 className="postName">{firstName} {secondName} </h2>
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

AddHobbies.propTypes = {
    user: PropTypes.oneOfType([
        PropTypes.bool,
        PropTypes.shape({
            firstName: PropTypes.string,
            secondName: PropTypes.string
        })
    ])
}

export default AddHobbies;
