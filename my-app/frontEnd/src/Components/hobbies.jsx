// this will be the where the hobbies are formed and the form decided and displayed

import PropTypes from "prop-types";

function Hobbies({ hobbiesBody }) {

    const { hobbiesContent, timeStamp } = hobbiesBody;
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

// Hobbies.PropTypes = {
//     hobbiesBody: PropTypes.shape({
//         title: PropTypes.string.isRequired,
//         description: PropTypes.string.isRequired

//     })
// }

export default Hobbies;