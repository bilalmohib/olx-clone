import React from 'react'

import '../Styling/Sell.css'


import logo from "../UI/OLXLogo.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faAngleDown, faQuestionCircle, faBook, faCamera, faMapMarkerAlt, faCoffee, faSearch, faSearchPlus, faUserCircle, faComment, faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom"
import { connect } from "react-redux"
import Login from "./LoginModal"
import history from '../history'
import "../Styling/App.css";
import firebase from 'firebase/app';
import firebaseAuth from 'firebase/auth/dist/index.esm'

import { set_seller_data } from '../store/action/index'


class Sell extends React.Component {
    constructor() {
        super()
        this.state = {
            category: "",
            SellData: {},
            condition: false
        }
    }
   
    handleClick = (event) => {
        alert(event.target.innerText);
        //////////////////////////////////////////////
        let name = firebase.auth().currentUser.displayName;
        let email = firebase.auth().currentUser.email;
        let photo = firebase.auth().currentUser.photoURL;

        let Selldata = {
            SellerName: name,
            SellerEmail: email,
            SellerPhoto:photo,
            Category: event.target.innerText,

        }
        this.setState({
            SellData: Selldata,
            condition: true
        })
        //////////////////////////////////////////////
        console.log("Inside==>", this.state.SellData)
    }
    componentDidUpdate = () => {
        console.log("SELL DATA====>", this.state.SellData)
    }
    render() {
        {
            (this.state.condition) ?
                (
                    this.props.set_seller_data(this.state.SellData)
                ) : (
                    console.log("No data selected")
                )
        }

        return (
            <div>
                {
                    (this.props.USER_AUTH_DATA.isSignedIn)
                        ?
                        (
                            <div>
                                <nav>
                                    <Link to="/sell/attribute">
                                        <FontAwesomeIcon style={{ fontSize: "25px", marginTop: "20px", marginLeft: "40px" }} icon={faArrowLeft} />
                                    </Link>
                                    <img style={{ marginTop: "0px" }} id="logo" src={logo} alt="" />
                                    {
                                        (this.state.condition) ? (
                                            <Link to="/sell/attribute"><button style={{ marginRight: "20px", marginTop: "10px" }}  className="btn-lg btn-success float-right">Next<FontAwesomeIcon style={{ fontSize: "25px", marginLeft: "10px" }} icon={faArrowRight} /></button></Link>
                                        ) : (
                                                <span></span>
                                            )

                                    }
                                </nav>
                                <h1 id="cat">Select your category</h1>
                                {/* This is the categories things */}

                                <div className="list-group">
                                    <button type="button" onClick={this.handleClick} className="list-group-item list-group-item-action active text-center btn-lg btn-block">
                                        Mobile Phones
                            </button>
                                 <details>
                                     <summary></summary>
                                 </details>   

                                    <button type="button" onClick={(e) => this.handleClick(e)} className="list-group-item list-group-item-action text-center btn-lg btn-block">Cars</button>


                                    <button type="button" onClick={(e) => this.handleClick(e)} className="list-group-item list-group-item-action text-center btn-lg btn-block">Motorcycles</button>
                                    <button type="button" onClick={(e) => this.handleClick(e)} className="list-group-item list-group-item-action text-center btn-lg btn-block">Houses</button>
                                    <button type="button" onClick={(e) => this.handleClick(e)} className="list-group-item list-group-item-action text-center btn-lg btn-block">Electric and Home Appliances</button>
                                    <button type="button" onClick={(e) => this.handleClick(e)} className="list-group-item list-group-item-action text-center btn-lg btn-block">TV Audio and Video</button>
                                    <button type="button" onClick={(e) => this.handleClick(e)} className="list-group-item list-group-item-action text-center btn-lg btn-block">Tablets</button>
                                    <button type="button" onClick={(e) => this.handleClick(e)} className="list-group-item list-group-item-action text-center btn-lg btn-block">Land and Plots</button>
                                </div>
                                {
                                    (this.state.condition) ? (
                                        <Link to="/sell/attribute"><button style={{ marginRight: "20px", marginTop: "10px" }}  className="btn-lg btn-block btn-success float-center">Next<FontAwesomeIcon style={{ fontSize: "25px", marginLeft: "10px" }} icon={faArrowRight} /></button></Link>
                                    ) : (
                                            <span></span>
                                        )

                                }
                                {/* This is the categories things */}
                            </div>
                        ) :
                        (
                            <div style={{marginTop:"50vh"}}>
                                
                                <h1 className="text-center text-warning">Dear User Please Login to Sell your products</h1>
                                  
                                <div className="text-center"><Link className="btn btn-primary btn-lg" to="/">Login</Link></div>
                            </div>
                        )

                }

            </div>
        )
    }
}
const mapStateToProps = (state) => ({
    SELLER_DATA: state.app.Sell,
    USER_AUTH_DATA: state.auth.USER
})
//updating the data of the state
const mapDispatchToProp = (dispatch) => ({
    set_seller_data: (data) => dispatch(set_seller_data(data))
})
//updating the data of the state
export default connect(mapStateToProps,mapDispatchToProp)(Sell);