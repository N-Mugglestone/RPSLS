const Hobbies = () => {


    const [newHobby, setNewHobby] = useState({
        title: '',
        description: '',
    });
    const [submitted, setSubmitted] = useState(fasle);

    const hobbies = async (e) => {
        e.preventDefault()
        const { title, description, } = newHobby;
        if (title && description) {
            try {
                const res = await axios.post('http://localhost:3000/hobbies', newHobby)
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
            <h1> Input new hobby </h1>
            <form onSubmit={hobbies}>
                <label className="formLabel" htmlFor="title"> Title </label>
                <br />

            </form>
        </>
    )

}

// on this page I need the name of a hobby - a image linking to it - a brief description
    //  - and a place to add a comment or message 