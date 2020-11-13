import React from 'react';

import logo from "../UI/OLXLogo.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faAngleDown, faQuestionCircle, faBook, faCamera, faMapMarkerAlt, faCoffee, faSearch, faSearchPlus, faUserCircle, faComment } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom"
import { connect } from "react-redux"
import Login from "./LoginModal"

import "../Styling/App.css";
import firebase from 'firebase/app';
import firebaseAuth from 'firebase/auth/dist/index.esm'


class Header extends React.Component {
    constructor() {
        super()
        this.state = {
            selectLocation: "Punjab"
        }
    }
    sign_out = () => {
        firebase.auth().signOut();
        window.location.reload();
    }
    setLocation = (e) => {
        let val = (e.target.value)
        alert(e.target.value)
        this.setState({ selectLocation: e.target.value });
    }

    render() {
        // console.log("DATA OF REDUX IN HEADER==>", this.props.USER_AUTH_DATA)
        return (


            <div >
                {/* This is boostrap navigation bar */}

                <nav style={{ position: "relative", zIndex: "60000" }} className="navbar navbar-expand-lg navbar-light bg-light .container-fluid">
                    <img id="logo" src={logo} alt="" />
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item active">
                                {/* This is the first item in nav bar */}
                                <div className="input">
                                    <div className="input-group-prepend">
                                        <label className="input-group-text">
                                            <FontAwesomeIcon style={{ color: "black" }} id="Icon" icon={faSearch} />
                                        </label>
                                    </div>
                                    <select value={this.state.selectLocation}
                                        onChange={(e) => this.setLocation(e)} className="custom-select" id="inputGroupSelect01">
                                        <option id="location" value="Use Current Location">Use Current Location</option>
                                        <option disabled id="line">________________________________________________</option>
                                        <option defaultValue="Lahore,Pakistan" value="Lahore,Pakistan">Lahore,Pakistan</option>
                                        <option value="Punjab">Punjab</option>
                                        <option value="Lahore">Lahore</option>
                                        <option value="Kala Khatai Road">Kala Khatai Road</option>
                                        <option value="Islamabad">Islamabad</option>
                                        <option value="Sindh">Sindh</option>
                                    </select>
                                </div>

                                {/* This will be used for mobile devices */}
                                <div style={{ position: "relative", zIndex: "1000", backgroundColor: "white" }} className="inputMobile" id="check" className="row">
                                    {
                                        (this.props.USER_AUTH_DATA.isSignedIn) ? (
                                            <img style={{ borderRadius: "50%" }} className="userico" src={firebase.auth().currentUser.photoURL} alt="...." />
                                        ) : (
                                                <div className="col-xs-6"><FontAwesomeIcon className="userico" icon={faUserCircle} /></div>
                                            )
                                    }

                                    {
                                        (this.props.USER_AUTH_DATA.isSignedIn) ? (
                                            <div style={{ fontWeight: "bolder", color: "cadetblue", fontSize: "25px", marginTop: "10px", marginLeft: "20px" }} className="col-xs-6">{firebase.auth().currentUser.displayName}</div>
                                        ) : (
                                                <div style={{ fontSize: "20px", marginTop: "10px", marginLeft: "20px" }} className="col-xs-6 text-primary">Enter to your account</div>
                                            )
                                    }


                                    {/* This will be used for mobile devices */}


                                    {/* This is the first item in nav bar */}
                                </div>
                            </li>
                            <li className="nav-item">
                                <div id="li_two">
                                    <input id="searchInput" type="text" className="form-control" placeholder="Find Cars,Mobile Phones and more..." aria-label="Recipient's username" aria-describedby="basic-addon2" />
                                    <div style={{ marginTop: "7px" }} className="input-group-append">
                                        <button className="input-group-text" id="basic-addon2"><FontAwesomeIcon id="Icon2" icon={faSearch} /></button>
                                    </div>
                                </div>


                                <div style={{ width: "100%" }} className="inputMobile">
                                    <Link to="/sell"> <FontAwesomeIcon id="camico" icon={faCamera} />
                                        <span style={{ fontSize: "22px", marginLeft: "20px", color: "black" }}>Start selling</span>
                                    </Link>
                                    <br />
                                    <Link to="/myads"> <FontAwesomeIcon id="camico" icon={faBook} />
                                        <span style={{ fontSize: "22px", marginLeft: "20px", color: "black" }}>My Ads</span>
                                    </Link>

                                    <br />
                                    <Link to="/chat"> <FontAwesomeIcon id="camico" icon={faComment} />
                                        <span style={{ fontSize: "22px", marginLeft: "20px", color: "black" }}>Chat</span>
                                    </Link>

                                </div>


                            </li>

                            <li className="nav-item">


                                {(this.props.USER_AUTH_DATA.isSignedIn) ? (
                                    //    This is the dropdown items
                                    

                                    <div id="DropUser" className="dropdown">
                                   
                                        <button type="button" style={{ borderRadius: "50%", width: "35px", height: "35px", marginTop: "-20px", display: "flex" }} data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            <img style={{ borderRadius: "50%", width: "35px", height: "35px", marginTop: "-4.4px", marginLeft: "-5.5px" }} src={firebase.auth().currentUser.photoURL} alt="" />
                                            <FontAwesomeIcon style={{ color: "grey", fontWeight: "initial" }} id="Icon" icon={faAngleDown} />
                                        </button>
                                        <div className="dropdown-menu" aria-labelledby="dropdownMenu2">
                                            <Link style={{ marginLeft: "0%", marginBottom: "5px" }} to="/sell" className="btn btn-warning btn-outline-info btn-block text-left" type="button"><FontAwesomeIcon id="camico" icon={faCamera} /> <span style={{fontSize:"18px"}}> Start Selling</span></Link>
                                            <Link style={{ marginLeft: "0%", marginBottom: "5px" }} to="/MyAds" className="btn btn-secondary btn-block btn-outline-light text-left" type="button">
                                                <FontAwesomeIcon id="camico" icon={faBook} /> <span style={{fontSize:"20px"}}>My Ads</span></Link>
                                            <button style={{ width: "100%" }} className="btn btn-danger" onClick={this.sign_out}><span style={{fontSize:"20px"}}>SignOut !</span></button>
                                            <div id="btnbtnlogin" className="btn btn-transparent"><Login /></div>
                                        </div>
                                    </div>

                                    //    This is the drop down items
                                ) : (
                                        <div id="btnbtnlogin" className="btn btn-transparent"><Login /></div>
                                    )}


                                <div className="inputMobile">
                                    <Link> <FontAwesomeIcon id="camico" icon={faQuestionCircle} />
                                        <span style={{ fontSize: "22px", marginLeft: "20px", color: "black" }}>Help</span>
                                    </Link><br />

                                    {(this.props.USER_AUTH_DATA.isSignedIn) ? (
                                        <div>
                                            <div>
                                                <button onClick={this.sign_out} className="btn btn-outline-light btn-danger" style={{ textAlign: "center", fontSize: "25px" }}>SignOut</button>
                                            </div>
                                        </div>
                                    ) : (
                                            <div>
                                                <div className="btn btn-primary" style={{ textAlign: "center", fontSize: "25px" }}><Login /></div>
                                            </div>
                                        )}


                                </div>

                            </li>
                            <li className="nav-item">

                                {(this.props.USER_AUTH_DATA.isSignedIn) ? (

                                    <Link className="inputDesktop" to="/chat"> <FontAwesomeIcon className="text-dark" style={{ fontSize: "30px", marginLeft: "15px", marginTop: "15px" }} icon={faComment} /></Link>
                                ) : (
                                        <span></span>
                                    )
                                }


                            </li>
                            <li className="nav-item">
                                {
                                    (this.props.USER_AUTH_DATA.isSignedIn) ?
                                        (
                                            <Link className="inputDesktop" style={{ fontSize: "20px", border: "1px solid black", borderRadius: "10px", backgroundColor: "white" }} to="/order">Favorites (0)<FontAwesomeIcon className="text-dark" style={{ fontSize: "30px", marginTop: "15px" }} icon={faShoppingCart} /></Link>
                                        ) :
                                        (
                                            <span></span>
                                        )
                                }

                            </li>
                            <li className="nav-item">
                                {
                                    (this.props.USER_AUTH_DATA.isSignedIn) ?
                                        (
                                            <Link to="/sell" id="sellbtn" className="btn btn-info">SELL</Link>
                                        ) :
                                        (
                                            // <Link id="sellbtn" to="" className="btn btn-info">SELL</Link>
                                            <div>
                                                <button onClick={() => alert("Please LOGIN to SELL")} id="sellbtn" className=" btn-lg btn-warning">SELL</button>
                                                {/* <div className="btn btn-outline-dark btn-warning" style={{ marginLeft: "170%", marginTop: "2%" }}><Login /></div> */}
                                            </div>
                                        )
                                }
                            </li>
                        </ul>

                    </div>
                </nav >
                {/* This is bootstrap navigation bar */}

            </div >
        );
    }
}


const mapStateToProps = (state) => ({
    USER_AUTH_DATA: state.auth.USER
})

export default connect(mapStateToProps, null)(Header);