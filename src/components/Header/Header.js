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

const Header = () => {
    // const { user, logout } = Usefirebase();
    // const { user, admin, logout } = useAuth();
    // console.log(admin);
    return (
        <div>
            <div className="header">
                <ul class="nav justify-content-end">
                    <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="#">Merchant Corner</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Complain & Suggestion</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Track Order</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Login</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Bangla</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">English</a>
                    </li>

                </ul>
            </div >
            <div className='middle-inner'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-2 col-md-2 col-12'>

                            <div className='logo'>
                                <a href='http://localhost:3000/'>
                                    <img className='img-fluid w-40' src={a} alt="" />
                                </a>
                            </div>
                            <div className='search-top'>

                                <div className='top-search'>
                                    <a href='#0'>
                                        <i className='ti-search'></i>
                                    </a>
                                </div>
                                <div className="search-top">
                                    <form className="search-form">
                                        <input type='text' placeholder="Search Product" />
                                        <button value="search" type="submit">hhh</button>
                                        <i className='ti-search'>::before</i>
                                    </form>

                                </div>


                                <div className="mobile-nav"></div>

                            </div>
                        </div>
                        <div className="col-lg-8 col-md-7 col-12">
                            <div className="search-bar-top">
                                <div className="search-bar">
                                    <form>
                                        <input name="search" placeholder="প্রোডাক্ট খুজুন" id="txtName" className="ui-autocomplete-input" autocomplete="off" style={{ width: '100%' }} />
                                        <button type="button" className="btnn" onclick="SearchLocation()"><i className='ti-search' style={{ fontSize: 24, lineHeight: 1.7 }}></i></button>

                                    </form>
                                </div>
                            </div>
                        </div>
                        {/* <ul class="dropdown-menu">
                    <li><h6 class="dropdown-header">Dropdown header</h6></li>
                    <li><a class="dropdown-item" href="#">Action</a></li>
                    <li><a class="dropdown-item" href="#">Another action</a></li>
                </ul> */}
                        <div className='col-lg-2 col-md-3 col-12'>
                            <div className='right-bar'>
                                <div className='sinlge-bar shopping'>
                                    <a href='#' className='single-icon'>
                                        <img src='https://static.ajkerdeal.com/images/desktop-home/cart.svg' style={{ width: 60 }} alt=''></img>
                                        <span style={{ marginRight: '2.5rem' }} className='total-count' id="total-count">o</span>
                                    </a>

                                </div>

                            </div>
                        </div>


                    </div>


                </div>

            </div>
        </div>

    );
};

export default Header;