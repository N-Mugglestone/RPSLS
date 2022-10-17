// import Proptypes from 'prop-types'  may use later 
import { Link } from 'react-router-dom'



const Header = () => {
    return (

        <>
            <nav>
                <nav className="navbar navbar-expand-lg navbar-dark">
                    <div className='container-fluid'>
                        <Link className="navbar-brand" to='/'> </Link>
                        <div className='collapse navbar-collapse' id="navbarNavAltMarkup"></div>
                        <div className="navbar-nav">

                            <h1> <Link className="nav-link" to="/"> <em>Home</em> </Link> </h1>

                            <h1> <Link className="nav-link" to="/hobbies"> <em>Hobbies</em> </Link> </h1>
                            <h1> <Link className="nav-link" to="/Wishlist"> <em>Wishlist</em> </Link> </h1>
                            <h1> <Link className="nav-link" to="/random"> <em>Random</em> </Link> </h1>
                            <h1> <Link className="nav-link" to="/bucketlist"> <em>Bucket List</em> </Link> </h1>
                            <br />
                            <h1><Link className="nav-Link" to="/AddHobbies"><em> Add Hobby</em> </Link> </h1>
                            <h1><Link className="nav-Link" to="/addWishlist"><em> Add to Wishlist</em> </Link> </h1>
                            <h1><Link className="nav-Link" to="/addRandom"><em> Add Random</em> </Link> </h1>
                            <h1><Link className="nav-Link" to="/addBucketList"><em> Add to Bucket List</em> </Link> </h1>


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