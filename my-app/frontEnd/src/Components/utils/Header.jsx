// import Proptypes from 'prop-types'
// import { Link } from 'react-router-dom'
import '../CSS/header.css'


const Header = () => {
    return (

        <>
            <nav>
                <nav className="navbar navbar-expand-lg navbar-dark">
                    <a className="navbar-brand" href='#'>Testing navbar</a>
                    <div className='container-fluid'>
                        <div className="navbar-nav">

                            <h1> Home </h1>
                            <h1> Hobbies </h1>
                            <h1> Wishlist </h1>
                            <h1> Random </h1>
                            <h1> tester </h1>

                        </div>
                    </div>
                </nav>
            </nav>
        </>

    )
}

export default Header;






//                             <Link className="nav-link" to="/"> <h1> Home </h1> </Link>
//                             <Link className="nav-link" to="/hobbies"> <h1> Hobbies </h1> </Link>
//                             <Link className="nav-link" to="/wishlist"> <h1> Wishlist </h1> </Link>
//                             <Link className="nav-link" to="/random"> <h1> Random </h1> </Link>
//                             <Link className="nav-link" to="/tester"> <h1> tester </h1> </Link>