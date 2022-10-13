// import Proptypes from 'prop-types'  may use later 
import { Link } from 'react-router-dom'
import '../CSS/header.css'


const Header = () => {
    return (

        <>
            <nav>
                <nav className="navbar navbar-expand-lg navbar-dark">
                    <a className="navbar-brand" href='#'>Testing navbar</a>
                    <div className='container-fluid'>
                        <div className="navbar-nav">

                            <h1> <Link className="nav-link" to="/"> <em>Home</em> </Link> </h1>
                            <h1> <Link className="nav-link" to="/hobbies"> <em>Hobbies</em> </Link> </h1>
                            <h1> <Link className="nav-link" to="/Wishlist"> <em>Wishlist</em> </Link> </h1>
                            <h1> <Link className="nav-link" to="/random"> <em>Random</em> </Link> </h1>
                            <h1> <Link className="nav-link" to="/bucketlist"> <em>Bucket List</em> </Link> </h1>

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