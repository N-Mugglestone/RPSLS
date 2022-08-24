import Proptypes from 'prop-types'
import { Link } from 'react-router-dom'


const Header = () => {
    return (
        <>
            <nav>
                <nav className="navbar navbar-expand-lg navbar-dark">
                    <div className="container-fluid">
                        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                            <div className="navbar-nav">

                                <h1> Home </h1>

                            </div>
                        </div>
                    </div>
                </nav>
            </nav>
        </>
    )
}

export default Header;