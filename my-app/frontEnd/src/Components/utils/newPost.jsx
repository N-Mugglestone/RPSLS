import PropTypes from 'prop-types'


function Posts({ postBody }) {

    const { firstName, secondName, timeStamp, postContent } = postBody;
    const formattedDate = new Date(timeStamp).toDateString()

    return (
        <>
            <div className="card">
                <div className="container">
                    <h4 className='PostName'>{firstName}{secondName}</h4>
                    <h2 className='userHandle'>{userHandle}</h2>
                    <h5> {formattedDate}</h5>
                    <p> {postContent} </p>

                </div>
            </div>
        </>
    )
}


Posts.propTypes = {
    postContent: PropTypes.shape({
        _id: PropTypes.string,
        firstName: PropTypes.string,
        secondName: PropTypes.string,
        timeStamp: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.instanceOf(Date),
        ]),
        postBody: PropTypes.string
    })
}



export default Peeps;