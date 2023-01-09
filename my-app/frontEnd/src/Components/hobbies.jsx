// this will be the where the hobbies are formed and the form decided and displayed

import PropTypes from "prop-types";

function Hobbies({ hobbiesBody }) {

    const { timeStamp, hobbiesContent } = hobbiesBody;
    const formatterDate = new Date(timeStamp).toDateString();

    return (
        <>
            <div className="card">
                <div className="container">
                    <h5>  {formatterDate} </h5>
                    <p> {hobbiesContent} </p>

                </div>
            </div>

        </>
    )

}

Hobbies.propTypes = {

    hobbiesContent: PropTypes.shape({
        _id: PropTypes.string,
        description: PropTypes.string,
        timeStamp: PropTypes.oneOfType([
            PropTypes.string,
        ]),
        hobbiesBody: PropTypes.string,
    })
}

export default Hobbies;