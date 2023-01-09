import { useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import axios from 'axios';

const Register = () => {
    const [newUser, setNewUser] = useState({
        firstName: '',
        secondName: '',
        email: '',
        userHandle: '',
        password: ''
    });
    const [submitted, setSubmitted] = useState(false);

    const register = async (e) => {
        e.preventDefault()
        const { firstName, secondName, email, userHandle, password } = newUser;
        if (firstName && secondName && email && userHandle && password) {
            try {
                const res = await axios.post('http://localhost:4000/register', newUser)
                setNewUser({
                    firstName: '',
                    secondName: '',
                    email: '',
                    userHandle: '',
                    password: '',
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

    const handleChange = e => {
        const { name, value } = e.target;
        setNewUser({
            ...newUser,
            [name]: value
        });
    }

    if (submitted === "user exists") {
        return (
            <>
                <h2>{submitted}</h2>
                <p> You already have a account! <Link to="/login"><br /> Sign in </Link></p>
            </>
        )
    }

    return (
        <>
            {submitted && <Navigate to="/login" />}
            <h1> Create Account</h1>
            <form onSubmit={register}>
                <label className="formLabel" htmlFor='firstName'>First name</label>
                <br />
                <input type="text" id="user-first-name" name="firstName" value={newUser.firstName} onChange={handleChange} placeholder="FirstName" />
                <br />
                <label className="formLabel" htmlFor='secondName'>Last name</label>
                <br />
                <input type="text" id="user-second-name" name="secondName" value={newUser.secondName} onChange={handleChange} placeholder="SecondName" />
                <br />
                <label className="formLabel" htmlFor='email'>Email</label>
                <br />
                <input type="email" id="new-user-email" name="email" value={newUser.email} onChange={handleChange} placeholder="Email" />
                <br />
                <label className="formLabel" htmlFor="userHandle">User handle</label>
                <br />
                <input type="text" id="user-handle-name" name="userHandle" value={newUser.userHandle} onChange={handleChange} placeholder="E.g. @userHandle" />
                <br />
                <label className="formLabel" htmlFor='password'>Password</label>
                <br />
                <input type="password" id="new-user-password" name="password" value={newUser.password} onChange={handleChange} placeholder="Password" />
                <br />
                <input id="registerButton" type="submit" value="Register" />
            </form>
            <p> Already have a account? <Link to="/login"><br /> Sign in </Link></p>
        </>
    )
}

export default Register; 