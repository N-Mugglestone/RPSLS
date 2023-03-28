// import Proptypes from 'prop-types'  may use later 
import { Link } from 'react-router-dom'

import '../Styles/header.css'


const Header = () => {
    return (

        <>
            <nav>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <div className='container-fluid'>
                        <Link className="navbar-brand" to='/'> </Link>
                        <div className='collapse navbar-collapse' id="navbarNavAltMarkup"></div>
                        <div className="navbar-nav">

                            <div style={{ whiteSpace: 'nowrap' }}>
                                <Link className="nav-link" to="/"> <em>Home</em> </Link>&nbsp;

                                <Link className="nav-link" to="/hobbies"> <em>Hobbies</em> </Link> &nbsp;
                                <Link className="nav-link" to="/wishlist"> <em>Wishlist</em> </Link>&nbsp;
                                <Link className="nav-link" to="/random"> <em>Random</em> </Link>&nbsp;
                                <Link className="nav-link" to="/bucketlist"> <em>Bucket List</em> </Link>&nbsp;

                                <Link className="nav-Link" to="/addHobbies"><em><text>Add Hobby</text></em> </Link>&nbsp;
                                <Link className="nav-Link" to="/addWishlist"><em>Add to Wishlist</em> </Link>&nbsp;
                                <Link className="nav-Link" to="/addRandom"><em>Add Random</em> </Link>&nbsp;
                                <Link className="nav-Link" to="/addBucketList"><em>Add to Bucket List</em> </Link>&nbsp;

                                <Link className="nav-Link" to="/login"><em>Login</em></Link> &nbsp;
                                <Link className="nav-Link" to="/register"><em>Register</em> </Link>
                            </div>

                        </div>
                    </div>
                </nav>
            </nav>
        </>

    )


    // return (

    //     <>
    //         <nav>
    //             <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    //                 <div className='container-fluid'>
    //                     <Link className="navbar-brand" to='/'> </Link>
    //                     <div className='collapse navbar-collapse' id="navbarNavAltMarkup"></div>
    //                     <div className="navbar-nav mr-auto">

    //                         <Link className="nav-link" to="/"> <em>Home</em> </Link> 

    //                         <Link className="nav-link" to="/hobbies"> <em>Hobbies</em> </Link> 
    //                         <Link className="nav-link" to="/Wishlist"> <em>Wishlist</em> </Link> 
    //                         <Link className="nav-link" to="/random"> <em>Random</em> </Link> 
    //                         <Link className="nav-link" to="/bucketlist"> <em>Bucket List</em> </Link> 
    //                         <br />

    //                         <Dropdown>
    //                             <Dropdown.Toggle variant="success" id="dropdown">
    //                                 Add a new item
    //                             </Dropdown.Toggle>
    //                             <Dropdown.Menu>
    //                                 <Dropdown.Item><Link className="nav-Link" to="/AddHobbies"><em> Add Hobby</em> </Link> </Dropdown.Item>
    //                                 <Dropdown.Item><Link className="nav-Link" to="/addWishlist"><em> Add to Wishlist</em> </Link>  </Dropdown.Item>
    //                                 <Dropdown.Item><Link className="nav-Link" to="/addRandom"><em> Add Random</em> </Link> </Dropdown.Item>
    //                                 <Dropdown.Item><Link className="nav-Link" to="/addBucketList"><em> Add to Bucket List</em> </Link> </Dropdown.Item>
    //                             </Dropdown.Menu>
    //                         </Dropdown>

    //                     </div>
    //                 </div>
    //             </nav>
    //         </nav>
    //     </>

    // )
}

export default Header;


// play around with this to make it work for this

// <nav class="navbar navbar-expand-lg navbar-light bg-light">
//     <a class="navbar-brand" href="#"> Home </a>
//     <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//         <span class="navbar-toggler-icon"></span>
//     </button>

//     <div class="collapse navbar-collapse" id="navbarSupportedContent">
//         <ul class="navbar-nav mr-auto">
//             <li class="nav-item active">
//                 <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
//             </li>
//             <li class="nav-item">
//                 <a class="nav-link" href="#">Link</a>
//             </li>
//             <li class="nav-item dropdown">
//                 <a class="nav-link dropdown-toggle" href="#" id="navbarSections" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
//                     Sections
//                 </a>
//                 <div class="dropdown-menu" aria-labelledby="navbarDropdown">
//                     <a class="dropdown-item" href="#">Action</a>
//                     <a class="dropdown-item" href="#">Another action</a>
//                     <div class="dropdown-divider"></div>
//                     <a class="dropdown-item" href="#">Something else here</a>
//                 </div>
//             </li>
//             <li class="nav-item">
//                 <a class="nav-link disabled" href="#">Disabled</a>
//             </li>
//         </ul>
//     </div>
// </nav>








// A search button and form  -may be useful later
//         <form class="form-inline my-2 my-lg-0">
//             <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
//                 <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
//         </form>


