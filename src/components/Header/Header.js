import React from 'react';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Button, NavLink } from 'react-bootstrap';
// import useAuth from '../../Hook/useAuth';
import './Header.css';
// import Usefirebase from '../../Hook/Usefirebase';
import { Box } from '@mui/system';
import a from './../../images/ad-logo.png'
import aru from '../../images/Group 1000004534.png'

const Header = () => {
    // const { user, logout } = Usefirebase();
    // const { user, admin, logout } = useAuth();
    // console.log(admin);
    return (
        <div>
            <div className="header">
            <span className="hot-deal-logo style={{ height: 50px }}" >
                <img className='img' src={aru} alt="" />
              </span>
                <ul class="nav justify-content-end">
               
                    <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="#">Home</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Course List</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Video List</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Contact us</a>
                    </li>
                    <NavLink as={Link} to="/loggedin">Log in</NavLink>

                </ul>
            </div >
           
        </div>

    );
};

export default Header;