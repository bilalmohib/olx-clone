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

    handleClick = (c,event) => {
        alert(event.target.innerText);
        //////////////////////////////////////////////
        let name = firebase.auth().currentUser.displayName;
        let email = firebase.auth().currentUser.email;
        let photo = firebase.auth().currentUser.photoURL;
        let category=c;
        let subCategory=event.target.innerText;

        let Selldata = {
            SellerName: name,
            SellerEmail: email,
            SellerPhoto: photo,
            Category: category,
            SubCategory:subCategory
        }
        console.log("Inside==>", this.state.SellData)
        this.props.set_seller_data(Selldata)
        this.setState({
            SellData: Selldata,
            condition: true
        })
        //////////////////////////////////////////////
        
    }
    componentDidUpdate = () => {
        console.log("SELL DATA====>", this.state.SellData)
    }
    render() {
     
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
                                            <Link to="/sell/attribute"><button style={{ marginRight: "20px", marginTop: "10px" }} className="btn-lg btn-success float-right">Next<FontAwesomeIcon style={{ fontSize: "25px", marginLeft: "10px" }} icon={faArrowRight} /></button></Link>
                                        ) : (
                                                <span></span>
                                            )

                                    }
                                </nav>
                                <h1 id="cat">Select your category</h1>
                                {/* This is the categories things */}

                                <div className="list-group">


                                    {/* wait wait and wait wait wait and wait wait wait and wait wait wait and wait wait wait and wait wait wait and wait */}
                                   

                                        
                                           <details> 
                                <summary className="list-group-item list-group-item-action btn-lg btn-block bg-primary text-light"><b>Vehicles</b></summary>
                                            <p><Link to="/sell/attribute" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("Vehicles", e)}>Boats</Link></p>
                                            <p><Link to="/sell/attribute" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("Vehicles", e)}>Other Vehicles</Link></p>
                                            <p><Link to="/sell/attribute" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("Vehicles", e)}>Rickshaw & Chingchi</Link></p>
                                            <p><Link to="/sell/attribute" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("Vehicles", e)}>Buses, Vans & Trucks</Link></p>
                                            <p><Link to="/sell/attribute" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("Vehicles", e)}>Spare Parts</Link></p>
                                            <p><Link to="/sell/attribute" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("Vehicles", e)}>Cars Accessories</Link></p>
                                            <p><Link to="/sell/attribute" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("Vehicles", e)}>Cars on Installments</Link></p>
                                            <p><Link to="/sell/attribute" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("Vehicles", e)}>Cars</Link></p>
                                            </details>
                                        

                                        <details>
                                        <summary className="list-group-item list-group-item-action btn-lg btn-block bg-primary text-light"><b>Mobiles</b></summary>
                                            <p><Link to="/sell/attribute" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("Mobiles", e)}>Mobile Phones</Link></p>
                                            <p><Link to="/sell/attribute" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("Mobiles", e)}>Accessories</Link></p>
                                            <p><Link to="/sell/attribute" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("Mobiles", e)}>Tablets</Link></p>
                                        </details>

                                       <details>
                                       <summary className="list-group-item list-group-item-action btn-lg btn-block bg-primary text-light"><b>Electronics and Home Appliances</b></summary>
                                            <p><Link to="/sell/attribute" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("Electronics and Home Appliances", e)}>Washing Machines and Dryers</Link></p>
                                            <p><Link to="/sell/attribute" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("Electronics and Home Appliances", e)}>Fridges and Freezers</Link></p>
                                            <p><Link to="/sell/attribute" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("Electronics and Home Appliances", e)}>AC and Coolers</Link></p>
                                            <p><Link to="/sell/attribute" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("Electronics and Home Appliances", e)}>Kitchen Appliances</Link></p>
                                            <p><Link to="/sell/attribute" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("Electronics and Home Appliances", e)}>Generators, UPS and Power Solutions</Link></p>
                                            <p><Link to="/sell/attribute" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("Electronics and Home Appliances", e)}>Other Home Appliances</Link></p>
                                            <p><Link to="/sell/attribute" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("Electronics and Home Appliances", e)}>Games and Entertainment</Link></p>
                                            <p><Link to="/sell/attribute" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("Electronics and Home Appliances", e)}>Cameras and Accessories</Link></p>
                                            <p><Link to="/sell/attribute" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("Electronics and Home Appliances", e)}>TV - Video - Audio</Link></p>
                                            <p><Link to="/sell/attribute" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("Electronics and Home Appliances", e)}>Computers and Accessories</Link></p>
                                        </details>
                                    

                                        <details>
                                        <summary className="list-group-item list-group-item-action btn-lg btn-block bg-primary text-light"><b>Property for Sale</b></summary>
                                            <p><Link to="/sell/attribute" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("Property for Sale", e)}>Portions & Floors</Link></p>
                                            <p><Link to="/sell/attribute" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("Property for Sale", e)}>Shops - Offices - Commercial Space</Link></p>
                                            <p><Link to="/sell/attribute" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("Property for Sale", e)}>Apartments & Flats</Link></p>
                                            <p><Link to="/sell/attribute" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("Property for Sale", e)}>Houses</Link></p>
                                            <p><Link to="/sell/attribute" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("Property for Sale", e)}>Land & Plots</Link></p>
                                        </details>


                                    

                                       <details>
                                            <summary className="list-group-item list-group-item-action  btn-lg btn-block bg-primary text-light"><b>Animals</b></summary>
                                            <p><Link to="/sell/attribute" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("Animals", e)}>Other Animals</Link></p>
                                            <p><Link to="/sell/attribute" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("Animals", e)}>Pet Food & Accessories</Link></p>
                                            <p><Link to="/sell/attribute" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("Animals", e)}>Horses</Link></p>
                                            <p><Link to="/sell/attribute" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("Animals", e)}>Livestock</Link></p>
                                            <p><Link to="/sell/attribute" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("Animals", e)}>Dogs</Link></p>
                                            <p><Link to="/sell/attribute" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("Animals", e)}>Cats</Link></p>
                                            <p><Link to="/sell/attribute" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("Animals", e)}>Hens & Aseel</Link></p>
                                            <p><Link to="/sell/attribute" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("Animals", e)}>Birds</Link></p>
                                            <p><Link to="/sell/attribute" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("Animals", e)}>Fish & Aquariums</Link></p>
                                        </details>

                                        <details>
                                        <summary className="list-group-item list-group-item-action  btn-lg btn-block bg-primary text-light"><b>Furniture & Home Decor</b></summary>
                                            <p><Link to="/sell/attribute" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("Furniture & Home Decor", e)}>Other Household Items</Link></p>
                                            <p><Link to="/sell/attribute" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("Furniture & Home Decor", e)}>Office Furniture</Link></p>
                                            <p><Link to="/sell/attribute" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("Furniture & Home Decor", e)}>Curtains & Blinds</Link></p>
                                            <p><Link to="/sell/attribute" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("Furniture & Home Decor", e)}>Rugs & Carpets</Link></p>
                                            <p><Link to="/sell/attribute" to="/types" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("Furniture & Home Decor", e)}>Painting & Mirrors</Link></p>
                                            <p><Link to="/sell/attribute" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("Furniture & Home Decor", e)}>Garden & Outdoor</Link></p>
                                            <p><Link to="/sell/attribute" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("Furniture & Home Decor", e)}>Tables & Dining</Link></p>
                                            <p><Link to="/sell/attribute" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("Furniture & Home Decor", e)}>Home Decoration</Link></p>
                                            <p><Link to="/sell/attribute" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("Furniture & Home Decor", e)}>Beds & Wardrobes</Link></p>
                                            <p><Link to="/sell/attribute" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("Furniture & Home Decor", e)}>Sofa & Chairs</Link></p>
                                        </details>

                                        <details>
                                        <summary className="list-group-item list-group-item-action btn-lg btn-block bg-primary text-light"><b>Business, Industrial & Agriculture</b></summary>
                                            <p><Link to="/sell/attribute" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("Business, Industrial & Agriculture", e)}>Medical & Pharma</Link></p>
                                            <p><Link to="/sell/attribute" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("Business, Industrial & Agriculture", e)}>Other Business & Industry</Link></p>
                                            <p><Link to="/sell/attribute" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("Business, Industrial & Agriculture", e)}>Agriculture</Link></p>
                                            <p><Link to="/sell/attribute" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("Business, Industrial & Agriculture", e)}>Construction & Heavy Machinery</Link></p>
                                            <p><Link to="/sell/attribute" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("Business, Industrial & Agriculture", e)}>Trade & Industrial</Link></p>
                                            <p><Link to="/sell/attribute" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("Business, Industrial & Agriculture", e)}>Food & Restaurants</Link></p>
                                            <p><Link to="/sell/attribute" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("Business, Industrial & Agriculture", e)}>Business for Sale</Link></p>
                                        </details>


                                        <details>
                                        <summary className="list-group-item list-group-item-action btn-lg btn-block bg-primary text-light"><b>Bikes</b></summary>
                                            <p><Link to="/sell/attribute" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("Bikes", e)}>Scooters</Link></p>
                                            <p><Link to="/sell/attribute" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("Bikes", e)}>ATV & Quads</Link></p>
                                            <p><Link to="/sell/attribute" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("Bikes", e)}>Bicycles</Link></p>
                                            <p><Link to="/sell/attribute" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("Bikes", e)}>Spare Parts</Link></p>
                                            <p><Link to="/sell/attribute" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("Bikes", e)}>Motorcycles</Link></p>

                                        </details>
                                   



                                    

                                        <details>
                                        <summary className="list-group-item list-group-item-action btn-lg btn-block bg-primary text-light"><b>Fashion & Beauty</b></summary>
                                            <p><Link to="/sell/attribute" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("Fashion & Beauty", e)}>Other Fashion</Link></p>
                                            <p><Link to="/sell/attribute" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("Fashion & Beauty", e)}>Couture</Link></p>
                                            <p><Link to="/sell/attribute" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("Fashion & Beauty", e)}>Lawn & Pret</Link></p>
                                            <p><Link to="/sell/attribute" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("Fashion & Beauty", e)}>Wedding</Link></p>
                                            <p><Link to="/sell/attribute" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("Fashion & Beauty", e)}>Watches</Link></p>
                                            <p><Link to="/sell/attribute" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("Fashion & Beauty", e)}>Skin & Hair</Link></p>
                                            <p><Link to="/sell/attribute" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("Fashion & Beauty", e)}>Make Up</Link></p>
                                            <p><Link to="/sell/attribute" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("Fashion & Beauty", e)}>Jewellery</Link></p>

                                            <p><Link to="/sell/attribute" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("Fashion & Beauty", e)}>Footwear</Link></p>
                                            <p><Link to="/sell/attribute" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("Fashion & Beauty", e)}>Clothes</Link></p>
                                            <p><Link to="/sell/attribute" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("Fashion & Beauty", e)}>Accessories</Link></p>
                                        </details>


                                        <details>
                                        <summary className="list-group-item list-group-item-action btn-lg btn-block bg-primary text-light"><b>Property for Rent</b></summary>
                                            <p><Link to="/sell/attribute" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("Fashion & Beauty", e)}>Land & Plots</Link></p>
                                            <p><Link to="/sell/attribute" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("Fashion & Beauty", e)}>Vacation Rentals - Guest Houses</Link></p>
                                            <p><Link to="/sell/attribute" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("Fashion & Beauty", e)}>Roommates & Paying Guests</Link></p>
                                            <p><Link to="/sell/attribute" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("Fashion & Beauty", e)}>Rooms</Link></p>
                                            <p><Link to="/sell/attribute" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("Fashion & Beauty", e)}>Shops - Offices - Commercial Space</Link></p>
                                            <p><Link to="/sell/attribute" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("Fashion & Beauty", e)}>Portions & Floors</Link></p>
                                            <p><Link to="/sell/attribute" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("Fashion & Beauty", e)}>Apartments & Flats</Link></p>
                                            <p><Link to="/sell/attribute" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("Fashion & Beauty", e)}>Houses</Link></p>
                                        </details>


                                        <details>
                                        <summary className="list-group-item list-group-item-action btn-lg btn-block bg-primary text-light"><b>Jobs</b></summary>
                                            <p><Link to="/sell/attribute" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("Jobs", e)}>Other Jobs</Link></p>
                                            <p><Link to="/sell/attribute" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("Jobs", e)}>Part - Time</Link></p>
                                            <p><Link to="/sell/attribute" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("Jobs", e)}>Domestic Staff</Link></p>
                                            <p><Link to="/sell/attribute" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("Jobs", e)}>Medical</Link></p>
                                            <p><Link to="/sell/attribute" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("Jobs", e)}>Manufacturing</Link></p>
                                            <p><Link to="/sell/attribute" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("Jobs", e)}>Accounting & Finance</Link></p>
                                            <p><Link to="/sell/attribute" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("Jobs", e)}>Human Resources</Link></p>
                                            <p><Link to="/sell/attribute" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("Jobs", e)}>Clerical & Administration</Link></p>

                                            <p><Link to="/sell/attribute" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("Hotels & Tourism", e)}>Hotels & Tourism</Link></p>
                                            <p><Link to="/sell/attribute" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("Hotels & Tourism", e)}>IT & Networking</Link></p>
                                            <p><Link to="/sell/attribute" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("Hotels & Tourism", e)}>Sales</Link></p>
                                            <p><Link to="/sell/attribute" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("Hotels & Tourism", e)}>Customer Service</Link></p>
                                            <p><Link to="/sell/attribute" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("Hotels & Tourism", e)}>Education</Link></p>
                                            <p><Link to="/sell/attribute" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("Hotels & Tourism", e)}>Advertising & PR</Link></p>
                                            <p><Link to="/sell/attribute" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("Hotels & Tourism", e)}>Marketing</Link></p>
                                            <p><Link to="/sell/attribute" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("Hotels & Tourism", e)}>Online</Link></p>
                                        </details>
                                    



                                    

                                        <details>
                                        <summary className="list-group-item list-group-item-action btn-lg btn-block bg-primary text-light"><b>Services</b></summary>
                                            <p><Link to="/sell/attribute" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("Services", e)}>Farm & Fresh Food</Link></p>
                                            <p><Link to="/sell/attribute" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("Services", e)}>Catering & Restaurant</Link></p>
                                            <p><Link to="/sell/attribute" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("Services", e)}>Home & Office Repair</Link></p>
                                            <p><Link to="/sell/attribute" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("Services", e)}>Movers & Packers</Link></p>
                                            <p><Link to="/sell/attribute" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("Services", e)}>Maids & Domestic Help</Link></p>
                                            <p><Link to="/sell/attribute" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("Services", e)}>Health & Beauty</Link></p>
                                            <p><Link to="/sell/attribute" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("Services", e)}>Event Services</Link></p>
                                            <p><Link to="/sell/attribute" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("Services", e)}>Electronics & Computer Repair</Link></p>

                                            <p><Link to="/sell/attribute" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("Services", e)}>Other Services</Link></p>
                                            <p><Link to="/sell/attribute" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("Services", e)}>Web Development</Link></p>
                                            <p><Link to="/sell/attribute" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("Services", e)}>Drivers & Taxi</Link></p>
                                            <p><Link to="/sell/attribute" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("Services", e)}>Car Rental</Link></p>
                                            <p><Link to="/sell/attribute" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("Services", e)}>Travel & Visa</Link></p>
                                            <p><Link to="/sell/attribute" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("Services", e)}>Education & Classes</Link></p>
                                        </details>

                                        <details>
                                        <summary className="list-group-item list-group-item-action btn-lg btn-block bg-primary text-light"><b>Books, Sports & Hobbies</b></summary>
                                            <p><Link to="/sell/attribute" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("Books, Sports & Hobbies", e)}>Other Hobbies</Link></p>
                                            <p><Link to="/sell/attribute" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("Books, Sports & Hobbies", e)}>Gym & Fitness</Link></p>
                                            <p><Link to="/sell/attribute" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("Books, Sports & Hobbies", e)}>Sports Equipment</Link></p>
                                            <p><Link to="/sell/attribute" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("Books, Sports & Hobbies", e)}>Musical Instruments</Link></p>
                                            <p><Link to="/sell/attribute" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("Books, Sports & Hobbies", e)}>Books & Magazines</Link></p>
                                        </details>

                                        <details>
                                        <summary className="list-group-item list-group-item-action btn-lg btn-block bg-primary text-light"><b>Kids</b></summary>
                                            <p><Link to="/sell/attribute" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("Kids", e)}>Kids Accessories</Link></p>
                                            <p><Link to="/sell/attribute" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("Kids", e)}>Kids Bikes</Link></p>
                                            <p><Link to="/sell/attribute" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("Kids", e)}>Swings & Slides</Link></p>
                                            <p><Link to="/sell/attribute" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("Kids", e)}>Prams & Walkers</Link></p>
                                            <p><Link to="/sell/attribute" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("Kids", e)}>Toys</Link></p>
                                            <p><Link to="/sell/attribute" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("Kids", e)}>Kids Furniture</Link></p>
                                        </details>

                                   


                                    {/* wait wait and wait wait wait and wait wait wait and wait wait wait and wait wait wait and wait wait wait and wait */}

                                    {/* <button type="button" onClick={(e) => this.handleClick(e)} className="list-group-item list-group-item-action active text-center btn-lg btn-block">Mobile Phones </button>
                                    <button type="button" onClick={(e) => this.handleClick(e)} className="list-group-item list-group-item-action text-center btn-lg btn-block">Cars</button>
                                    <button type="button" onClick={(e) => this.handleClick(e)} className="list-group-item list-group-item-action text-center btn-lg btn-block">Motorcycles</button>
                                    <button type="button" onClick={(e) => this.handleClick(e)} className="list-group-item list-group-item-action text-center btn-lg btn-block">Houses</button>
                                    <button type="button" onClick={(e) => this.handleClick(e)} className="list-group-item list-group-item-action text-center btn-lg btn-block">Electric and Home Appliances</button>
                                    <button type="button" onClick={(e) => this.handleClick(e)} className="list-group-item list-group-item-action text-center btn-lg btn-block">TV Audio and Video</button>
                                    <button type="button" onClick={(e) => this.handleClick(e)} className="list-group-item list-group-item-action text-center btn-lg btn-block">Tablets</button>
                                    <button type="button" onClick={(e) => this.handleClick(e)} className="list-group-item list-group-item-action text-center btn-lg btn-block">Land and Plots</button> */}
                                </div>




                                {
                                    (this.state.condition) ? (
                                        <Link to="/sell/attribute"><button style={{ marginRight: "20px", marginTop: "10px" }} className="btn-lg btn-block btn-success float-center">Next<FontAwesomeIcon style={{ fontSize: "25px", marginLeft: "10px" }} icon={faArrowRight} /></button></Link>
                                    ) : (
                                            <span></span>
                                        )

                                }
                                {/* This is the categories things */}
                            </div>
                        ) :
                        (
                            <div style={{ marginTop: "50vh" }}>

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
export default connect(mapStateToProps, mapDispatchToProp)(Sell);