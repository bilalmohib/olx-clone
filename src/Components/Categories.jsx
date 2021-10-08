import React from 'react'
import { Link } from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faListAlt } from '@fortawesome/free-solid-svg-icons';
import "../Styling/Categories.css";
import { connect } from "react-redux"
import { setSelectedCategory } from '../store/action';
import { useHistory } from "react-router-dom";
import history from '../history'
import { Redirect,withRouter } from "react-router-dom";
class Categories extends React.Component {
    handleClick = (c,event) => {
        //alert(event.target.innerText);
        //////////////////////////////////////////////
        let category=c;
        let subCategory=event.target.innerText;

        let current_category = {
            Category: category,
            SubCategory:subCategory
        }

        this.props.setSelectedCategory(current_category);
 
        //history.push('/types')
        return <Redirect to="/types" />
        //////////////////////////////////////////////
       
    }

    handleClick1 = (c,s) => {
        //alert(event.target.innerText);
        //////////////////////////////////////////////
        let category=c;
        let subCategory=s;

        let current_category = {
            Category: category,
            SubCategory:subCategory
        }

        this.props.setSelectedCategory(current_category);
 
        //history.push('/types')
        return <Redirect to="/types" />
        //////////////////////////////////////////////
       
    }

    render() {
        console.log("the category selected is=====>",this.props.current_category)
        return (
            <div>
                <div id="categories">
                    <ul>
                        <div className="dropdown">
                            <button className="btn btn-transparent text-dark dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <b>All Categories</b>
  </button>
                            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                {/* Here the main div starts */}
                                <div style={{ marginTop: "10vh", width: "90vw", height: "fit-content", border: "1px solid black",display:"flex"}}>


                                    <div style={{marginRight:"2%"}}>

                                        <div className="bigDiv">
                                            <p className="text-dark"><Link to="/types" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick1("Vehicles","")}><b>Vehicles</b></Link></p>
                                            <p><Link to="/types" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("Vehicles",e)}>Boats</Link></p>
                                            <p><Link to="/types" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("Vehicles",e)}>Other Vehicles</Link></p>
                                            <p><Link to="/types" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("Vehicles",e)}>Rickshaw & Chingchi</Link></p>
                                            <p><Link to="/types" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("Vehicles",e)}>Buses, Vans & Trucks</Link></p>
                                            <p><Link to="/types" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("Vehicles",e)}>Spare Parts</Link></p>
                                            <p><Link to="/types" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("Vehicles",e)}>Cars Accessories</Link></p>
                                            <p><Link to="/types" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("Vehicles",e)}>Cars on Installments</Link></p>
                                            <p><Link to="/types" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("Vehicles",e)}>Cars</Link></p>
                                        </div>

                                        <div className="bigDiv">
                                            <p><Link to="/types" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick1("Mobiles","")}><b>Mobiles</b></Link></p>
                                            <p><Link to="/types" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("Mobiles",e)}>Mobile Phones</Link></p>
                                            <p><Link to="/types" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("Mobiles",e)}>Accessories</Link></p>
                                            <p><Link to="/types" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("Mobiles",e)}>Tablets</Link></p>
                                        </div>

                                        <div className="bigDiv">
                                            <p><Link to="/types" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick1("Electronics and Home Appliances","")}><b>Electronics and Home Appliances</b></Link></p>
                                            <p><Link to="/types" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("Electronics and Home Appliances",e)}>Washing Machines and Dryers</Link></p>
                                            <p><Link to="/types" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("Electronics and Home Appliances",e)}>Fridges and Freezers</Link></p>
                                            <p><Link to="/types" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("Electronics and Home Appliances",e)}>AC and Coolers</Link></p>
                                            <p><Link to="/types" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("Electronics and Home Appliances",e)}>Kitchen Appliances</Link></p>
                                            <p><Link to="/types" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("Electronics and Home Appliances",e)}>Generators, UPS and Power Solutions</Link></p>
                                            <p><Link to="/types" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("Electronics and Home Appliances",e)}>Other Home Appliances</Link></p>
                                            <p><Link to="/types" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("Electronics and Home Appliances",e)}>Games and Entertainment</Link></p>
                                            <p><Link to="/types" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("Electronics and Home Appliances",e)}>Cameras and Accessories</Link></p>
                                            <p><Link to="/types" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("Electronics and Home Appliances",e)}>TV - Video - Audio</Link></p>
                                            <p><Link to="/types" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("Electronics and Home Appliances",e)}>Computers and Accessories</Link></p>
                                        </div>


                                        <div className="bigDiv">
                                            <p><Link to="/types" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick1("Property for Sale","")}><b>Property for Sale</b></Link></p>
                                            <p><Link to="/types" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("Property for Sale",e)}>Portions & Floors</Link></p>
                                            <p><Link to="/types" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("Property for Sale",e)}>Shops - Offices - Commercial Space</Link></p>
                                            <p><Link to="/types" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("Property for Sale",e)}>Apartments & Flats</Link></p>
                                            <p><Link to="/types" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("Property for Sale",e)}>Houses</Link></p>
                                            <p><Link to="/types" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("Property for Sale",e)}>Land & Plots</Link></p>
                                        </div>
                                    </div>


                                    <div style={{marginRight:"2%"}}>

                                        <div className="bigDiv">
                                            <p><Link to="/types" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick1("Animals","")}><b>Animals</b></Link></p>
                                            <p><Link to="/types" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("Animals",e)}>Other Animals</Link></p>
                                            <p><Link to="/types" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("Animals",e)}>Pet Food & Accessories</Link></p>
                                            <p><Link to="/types" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("Animals",e)}>Horses</Link></p>
                                            <p><Link to="/types" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("Animals",e)}>Livestock</Link></p>
                                            <p><Link to="/types" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("Animals",e)}>Dogs</Link></p>
                                            <p><Link to="/types" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("Animals",e)}>Cats</Link></p>
                                            <p><Link to="/types" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("Animals",e)}>Hens & Aseel</Link></p>
                                            <p><Link to="/types" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("Animals",e)}>Birds</Link></p>
                                            <p><Link to="/types" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("Animals",e)}>Fish & Aquariums</Link></p>
                                        </div>

                                        <div className="bigDiv">
                                            <p><Link to="/types" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick1("Furniture & Home Decor","")}><b>Furniture & Home Decor</b></Link></p>
                                            <p><Link to="/types" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("Furniture & Home Decor",e)}>Other Household Items</Link></p>
                                            <p><Link to="/types" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("Furniture & Home Decor",e)}>Office Furniture</Link></p>
                                            <p><Link to="/types" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("Furniture & Home Decor",e)}>Curtains & Blinds</Link></p>
                                            <p><Link to="/types" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("Furniture & Home Decor",e)}>Rugs & Carpets</Link></p>
                                            <p><Link to="/types" to="/types" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("Furniture & Home Decor",e)}>Painting & Mirrors</Link></p>
                                            <p><Link to="/types" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("Furniture & Home Decor",e)}>Garden & Outdoor</Link></p>
                                            <p><Link to="/types" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("Furniture & Home Decor",e)}>Tables & Dining</Link></p>
                                            <p><Link to="/types" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("Furniture & Home Decor",e)}>Home Decoration</Link></p>
                                            <p><Link to="/types" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("Furniture & Home Decor",e)}>Beds & Wardrobes</Link></p>
                                            <p><Link to="/types" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("Furniture & Home Decor",e)}>Sofa & Chairs</Link></p>
                                        </div>

                                        <div className="bigDiv">
                                            <p><Link to="/types" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick1("Business, Industrial & Agriculture","")}><b>Business, Industrial & Agriculture</b></Link></p>
                                            <p><Link to="/types" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("Business, Industrial & Agriculture",e)}>Medical & Pharma</Link></p>
                                            <p><Link to="/types" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("Business, Industrial & Agriculture",e)}>Other Business & Industry</Link></p>
                                            <p><Link to="/types" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("Business, Industrial & Agriculture",e)}>Agriculture</Link></p>
                                            <p><Link to="/types" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("Business, Industrial & Agriculture",e)}>Construction & Heavy Machinery</Link></p>
                                            <p><Link to="/types" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("Business, Industrial & Agriculture",e)}>Trade & Industrial</Link></p>
                                            <p><Link to="/types" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("Business, Industrial & Agriculture",e)}>Food & Restaurants</Link></p>
                                            <p><Link to="/types" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("Business, Industrial & Agriculture",e)}>Business for Sale</Link></p>
                                        </div>


                                        <div className="bigDiv">
                                            <p><Link to="/types" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick1("Bikes","")}><b>Bikes</b></Link></p>
                                            <p><Link to="/types" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("Bikes",e)}>Scooters</Link></p>
                                            <p><Link to="/types" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("Bikes",e)}>ATV & Quads</Link></p>
                                            <p><Link to="/types" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("Bikes",e)}>Bicycles</Link></p>
                                            <p><Link to="/types" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("Bikes",e)}>Spare Parts</Link></p>
                                            <p><Link to="/types" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("Bikes",e)}>Motorcycles</Link></p>
                                            
                                        </div>
                                    </div>



                                    <div style={{marginRight:"2%"}}>

                                        <div className="bigDiv">
                                            <p><Link to="/types" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick1("Fashion & Beauty","")}><b>Fashion & Beauty</b></Link></p>
                                            <p><Link to="/types" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("Fashion & Beauty",e)}>Other Fashion</Link></p>
                                            <p><Link to="/types" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("Fashion & Beauty",e)}>Couture</Link></p>
                                            <p><Link to="/types" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("Fashion & Beauty",e)}>Lawn & Pret</Link></p>
                                            <p><Link to="/types" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("Fashion & Beauty",e)}>Wedding</Link></p>
                                            <p><Link to="/types" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("Fashion & Beauty",e)}>Watches</Link></p>
                                            <p><Link to="/types" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("Fashion & Beauty",e)}>Skin & Hair</Link></p>
                                            <p><Link to="/types" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("Fashion & Beauty",e)}>Make Up</Link></p>
                                            <p><Link to="/types" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("Fashion & Beauty",e)}>Jewellery</Link></p>

                                            <p><Link to="/types" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("Fashion & Beauty",e)}>Footwear</Link></p>
                                            <p><Link to="/types" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("Fashion & Beauty",e)}>Clothes</Link></p>
                                            <p><Link to="/types" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("Fashion & Beauty",e)}>Accessories</Link></p>
                                        </div>

            
                                        <div className="bigDiv">
                                            <p><Link to="/types" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick1("Property for Rent","")}><b>Property for Rent</b></Link></p>
                                            <p><Link to="/types" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("Property for Rent",e)}>Land & Plots</Link></p>
                                            <p><Link to="/types" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("Property for Rent",e)}>Vacation Rentals - Guest Houses</Link></p>
                                            <p><Link to="/types" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("Property for Rent",e)}>Roommates & Paying Guests</Link></p>
                                            <p><Link to="/types" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("Property for Rent",e)}>Rooms</Link></p>
                                            <p><Link to="/types" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("Property for Rent",e)}>Shops - Offices - Commercial Space</Link></p>
                                            <p><Link to="/types" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("Property for Rent",e)}>Portions & Floors</Link></p>
                                            <p><Link to="/types" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("Property for Rent",e)}>Apartments & Flats</Link></p>
                                            <p><Link to="/types" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("Property for Rent",e)}>Houses</Link></p>
                                        </div>


                                        <div className="bigDiv">
                                            <p><Link to="/types" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick1("Jobs","")}><b>Jobs</b></Link></p>
                                            <p><Link to="/types" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("Jobs",e)}>Other Jobs</Link></p>
                                            <p><Link to="/types" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("Jobs",e)}>Part - Time</Link></p>
                                            <p><Link to="/types" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("Jobs",e)}>Domestic Staff</Link></p>
                                            <p><Link to="/types" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("Jobs",e)}>Medical</Link></p>
                                            <p><Link to="/types" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("Jobs",e)}>Manufacturing</Link></p>
                                            <p><Link to="/types" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("Jobs",e)}>Accounting & Finance</Link></p>
                                            <p><Link to="/types" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("Jobs",e)}>Human Resources</Link></p>
                                            <p><Link to="/types" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("Jobs",e)}>Clerical & Administration</Link></p>

                                            <p><Link to="/types" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick1("Hotels & Tourism","")}>Hotels & Tourism</Link></p>
                                            <p><Link to="/types" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("Hotels & Tourism",e)}>IT & Networking</Link></p>
                                            <p><Link to="/types" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("Hotels & Tourism",e)}>Sales</Link></p>
                                            <p><Link to="/types" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("Hotels & Tourism",e)}>Customer Service</Link></p>
                                            <p><Link to="/types" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("Hotels & Tourism",e)}>Education</Link></p>
                                            <p><Link to="/types" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("Hotels & Tourism",e)}>Advertising & PR</Link></p>
                                            <p><Link to="/types" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("Hotels & Tourism",e)}>Marketing</Link></p>
                                            <p><Link to="/types" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("Hotels & Tourism",e)}>Online</Link></p>
                                        </div>
                                    </div>



                                    <div style={{marginRight:"2%"}}>

                                        <div className="bigDiv">
                                            <p><Link to="/types" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick1("Services","")}><b>Services</b></Link></p>
                                            <p><Link to="/types" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("Services",e)}>Farm & Fresh Food</Link></p>
                                            <p><Link to="/types" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("Services",e)}>Catering & Restaurant</Link></p>
                                            <p><Link to="/types" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("Services",e)}>Home & Office Repair</Link></p>
                                            <p><Link to="/types" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("Services",e)}>Movers & Packers</Link></p>
                                            <p><Link to="/types" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("Services",e)}>Maids & Domestic Help</Link></p>
                                            <p><Link to="/types" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("Services",e)}>Health & Beauty</Link></p>
                                            <p><Link to="/types" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("Services",e)}>Event Services</Link></p>
                                            <p><Link to="/types" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("Services",e)}>Electronics & Computer Repair</Link></p>

                                            <p><Link to="/types" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("Services",e)}>Other Services</Link></p>
                                            <p><Link to="/types" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("Services",e)}>Web Development</Link></p>
                                            <p><Link to="/types" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("Services",e)}>Drivers & Taxi</Link></p>
                                            <p><Link to="/types" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("Services",e)}>Car Rental</Link></p>
                                            <p><Link to="/types" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("Services",e)}>Travel & Visa</Link></p>
                                            <p><Link to="/types" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("Services",e)}>Education & Classes</Link></p>
                                        </div>

                                        <div className="bigDiv">
                                            <p><Link to="/types" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick1("Books, Sports & Hobbies","")}><b>Books, Sports & Hobbies</b></Link></p>
                                            <p><Link to="/types" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("Books, Sports & Hobbies",e)}>Other Hobbies</Link></p>
                                            <p><Link to="/types" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("Books, Sports & Hobbies",e)}>Gym & Fitness</Link></p>
                                            <p><Link to="/types" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("Books, Sports & Hobbies",e)}>Sports Equipment</Link></p>
                                            <p><Link to="/types" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("Books, Sports & Hobbies",e)}>Musical Instruments</Link></p>
                                            <p><Link to="/types" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("Books, Sports & Hobbies",e)}>Books & Magazines</Link></p>
                                        </div>

                                        <div className="bigDiv">
                                            <p><Link to="/types" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick1("Kids","")}><b>Kids</b></Link></p>
                                            <p><Link to="/types" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("Kids",e)}>Kids Accessories</Link></p>
                                            <p><Link to="/types" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("Kids",e)}>Kids Bikes</Link></p>
                                            <p><Link to="/types" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("Kids",e)}>Swings & Slides</Link></p>
                                            <p><Link to="/types" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("Kids",e)}>Prams & Walkers</Link></p>
                                            <p><Link to="/types" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("Kids",e)}>Toys</Link></p>
                                            <p><Link to="/types" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("Kids",e)}>Kids Furniture</Link></p>
                                        </div>


                                    </div>







                                </div>
                                {/* Here the main div starts */}
                            </div>
                        </div>

                        <Link to="/types" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("1",e)}>Mobile Phones</Link>
                        <Link to="/types" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("1",e)}>Cars</Link>
                        <Link to="/types" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("1",e)}>Motorcycles</Link>
                        <Link to="/types" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("1",e)}>Houses</Link>
                        <Link to="/types" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("1",e)}>TV-Video-Audio</Link>
                        <Link to="/types" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("1",e)}>Tablets</Link>
                        <Link to="/types" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("1",e)}>Land and Plots</Link>
                    </ul>
                </div>
                <div style={{ textAlign: "center", margin: "3%" }} id="displayDesktop" className="btn-group">
                    {/* <button className="btn btn-info btn-lg" type="button">
                        <FontAwesomeIcon style={{ color: "white", fontSize: "25px" }} icon={faListAlt} /> Categories
                    </button>
                    <button type="button" className="btn btn-lg btn-info dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <span className="sr-only">Toggle Dropdown</span>
                    </button>
                    <div className="dropdown-menu">
                        <button className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("1",e)}>Mobile Phones</button> <br />
                        <button className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("1",e)}>Cars</button> <br />
                        <button className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("1",e)}>Motorcycles</button> <br />
                        <button className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("1",e)}>Houses</button> <br />
                        <button className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("1",e)}>TV-Video-Audio</button> <br />
                        <button className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("1",e)}>Tablets</button> <br />
                        <button className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("1",e)}>Land and Plots</button> <br />
                    </div> */}
                    <button className="btn btn-dark btn-sm text-light dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <b>All Categories</b>
  </button>
                            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                {/* Here the main div starts */}
                                <div style={{ marginTop: "10vh", width: "90vw", height: "fit-content", border: "1px solid black",display:"block"}}>


                                    <div style={{marginRight:"2%"}}>

                                        <div className="bigDiv">
                                            <p className="text-dark"><Link to="/types" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("Vehicles","")}><b>Vehicles</b></Link></p>
                                            <p><Link to="/types" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("Vehicles",e)}>Boats</Link></p>
                                            <p><Link to="/types" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("Vehicles",e)}>Other Vehicles</Link></p>
                                            <p><Link to="/types" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("Vehicles",e)}>Rickshaw & Chingchi</Link></p>
                                            <p><Link to="/types" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("Vehicles",e)}>Buses, Vans & Trucks</Link></p>
                                            <p><Link to="/types" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("Vehicles",e)}>Spare Parts</Link></p>
                                            <p><Link to="/types" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("Vehicles",e)}>Cars Accessories</Link></p>
                                            <p><Link to="/types" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("Vehicles",e)}>Cars on Installments</Link></p>
                                            <p><Link to="/types" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("Vehicles",e)}>Cars</Link></p>
                                        </div>

                                        <div className="bigDiv">
                                            <p><Link to="/types" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("Mobiles","")}><b>Mobiles</b></Link></p>
                                            <p><Link to="/types" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("Mobiles",e)}>Mobile Phones</Link></p>
                                            <p><Link to="/types" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("Mobiles",e)}>Accessories</Link></p>
                                            <p><Link to="/types" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("Mobiles",e)}>Tablets</Link></p>
                                        </div>

                                        <div className="bigDiv">
                                            <p><Link to="/types" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("Electronics and Home Appliances","")}><b>Electronics and Home Appliances</b></Link></p>
                                            <p><Link to="/types" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("Electronics and Home Appliances",e)}>Washing Machines and Dryers</Link></p>
                                            <p><Link to="/types" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("Electronics and Home Appliances",e)}>Fridges and Freezers</Link></p>
                                            <p><Link to="/types" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("Electronics and Home Appliances",e)}>AC and Coolers</Link></p>
                                            <p><Link to="/types" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("Electronics and Home Appliances",e)}>Kitchen Appliances</Link></p>
                                            <p><Link to="/types" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("Electronics and Home Appliances",e)}>Generators, UPS and Power Solutions</Link></p>
                                            <p><Link to="/types" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("Electronics and Home Appliances",e)}>Other Home Appliances</Link></p>
                                            <p><Link to="/types" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("Electronics and Home Appliances",e)}>Games and Entertainment</Link></p>
                                            <p><Link to="/types" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("Electronics and Home Appliances",e)}>Cameras and Accessories</Link></p>
                                            <p><Link to="/types" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("Electronics and Home Appliances",e)}>TV - Video - Audio</Link></p>
                                            <p><Link to="/types" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("Electronics and Home Appliances",e)}>Computers and Accessories</Link></p>
                                        </div>


                                        <div className="bigDiv">
                                            <p><Link to="/types" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("Property for Sale","")}><b>Property for Sale</b></Link></p>
                                            <p><Link to="/types" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("Property for Sale",e)}>Portions & Floors</Link></p>
                                            <p><Link to="/types" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("Property for Sale",e)}>Shops - Offices - Commercial Space</Link></p>
                                            <p><Link to="/types" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("Property for Sale",e)}>Apartments & Flats</Link></p>
                                            <p><Link to="/types" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("Property for Sale",e)}>Houses</Link></p>
                                            <p><Link to="/types" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("Property for Sale",e)}>Land & Plots</Link></p>
                                        </div>
                                    </div>


                                    <div style={{marginRight:"2%"}}>

                                        <div className="bigDiv">
                                            <p><Link to="/types" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("Animals","")}><b>Animals</b></Link></p>
                                            <p><Link to="/types" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("Animals",e)}>Other Animals</Link></p>
                                            <p><Link to="/types" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("Animals",e)}>Pet Food & Accessories</Link></p>
                                            <p><Link to="/types" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("Animals",e)}>Horses</Link></p>
                                            <p><Link to="/types" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("Animals",e)}>Livestock</Link></p>
                                            <p><Link to="/types" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("Animals",e)}>Dogs</Link></p>
                                            <p><Link to="/types" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("Animals",e)}>Cats</Link></p>
                                            <p><Link to="/types" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("Animals",e)}>Hens & Aseel</Link></p>
                                            <p><Link to="/types" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("Animals",e)}>Birds</Link></p>
                                            <p><Link to="/types" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("Animals",e)}>Fish & Aquariums</Link></p>
                                        </div>

                                        <div className="bigDiv">
                                            <p><Link to="/types" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("Furniture & Home Decor","")}><b>Furniture & Home Decor</b></Link></p>
                                            <p><Link to="/types" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("Furniture & Home Decor",e)}>Other Household Items</Link></p>
                                            <p><Link to="/types" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("Furniture & Home Decor",e)}>Office Furniture</Link></p>
                                            <p><Link to="/types" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("Furniture & Home Decor",e)}>Curtains & Blinds</Link></p>
                                            <p><Link to="/types" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("Furniture & Home Decor",e)}>Rugs & Carpets</Link></p>
                                            <p><Link to="/types" to="/types" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("Furniture & Home Decor",e)}>Painting & Mirrors</Link></p>
                                            <p><Link to="/types" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("Furniture & Home Decor",e)}>Garden & Outdoor</Link></p>
                                            <p><Link to="/types" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("Furniture & Home Decor",e)}>Tables & Dining</Link></p>
                                            <p><Link to="/types" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("Furniture & Home Decor",e)}>Home Decoration</Link></p>
                                            <p><Link to="/types" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("Furniture & Home Decor",e)}>Beds & Wardrobes</Link></p>
                                            <p><Link to="/types" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("Furniture & Home Decor",e)}>Sofa & Chairs</Link></p>
                                        </div>

                                        <div className="bigDiv">
                                            <p><Link to="/types" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("Business, Industrial & Agriculture","")}><b>Business, Industrial & Agriculture</b></Link></p>
                                            <p><Link to="/types" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("Business, Industrial & Agriculture",e)}>Medical & Pharma</Link></p>
                                            <p><Link to="/types" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("Business, Industrial & Agriculture",e)}>Other Business & Industry</Link></p>
                                            <p><Link to="/types" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("Business, Industrial & Agriculture",e)}>Agriculture</Link></p>
                                            <p><Link to="/types" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("Business, Industrial & Agriculture",e)}>Construction & Heavy Machinery</Link></p>
                                            <p><Link to="/types" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("Business, Industrial & Agriculture",e)}>Trade & Industrial</Link></p>
                                            <p><Link to="/types" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("Business, Industrial & Agriculture",e)}>Food & Restaurants</Link></p>
                                            <p><Link to="/types" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("Business, Industrial & Agriculture",e)}>Business for Sale</Link></p>
                                        </div>


                                        <div className="bigDiv">
                                            <p><Link to="/types" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("Bikes","")}><b>Bikes</b></Link></p>
                                            <p><Link to="/types" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("Bikes",e)}>Scooters</Link></p>
                                            <p><Link to="/types" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("Bikes",e)}>ATV & Quads</Link></p>
                                            <p><Link to="/types" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("Bikes",e)}>Bicycles</Link></p>
                                            <p><Link to="/types" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("Bikes",e)}>Spare Parts</Link></p>
                                            <p><Link to="/types" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("Bikes",e)}>Motorcycles</Link></p>
                                            
                                        </div>
                                    </div>



                                    <div style={{marginRight:"2%"}}>

                                        <div className="bigDiv">
                                            <p><Link to="/types" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("Fashion & Beauty","")}><b>Fashion & Beauty</b></Link></p>
                                            <p><Link to="/types" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("Fashion & Beauty",e)}>Other Fashion</Link></p>
                                            <p><Link to="/types" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("Fashion & Beauty",e)}>Couture</Link></p>
                                            <p><Link to="/types" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("Fashion & Beauty",e)}>Lawn & Pret</Link></p>
                                            <p><Link to="/types" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("Fashion & Beauty",e)}>Wedding</Link></p>
                                            <p><Link to="/types" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("Fashion & Beauty",e)}>Watches</Link></p>
                                            <p><Link to="/types" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("Fashion & Beauty",e)}>Skin & Hair</Link></p>
                                            <p><Link to="/types" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("Fashion & Beauty",e)}>Make Up</Link></p>
                                            <p><Link to="/types" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("Fashion & Beauty",e)}>Jewellery</Link></p>

                                            <p><Link to="/types" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("Fashion & Beauty",e)}>Footwear</Link></p>
                                            <p><Link to="/types" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("Fashion & Beauty",e)}>Clothes</Link></p>
                                            <p><Link to="/types" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("Fashion & Beauty",e)}>Accessories</Link></p>
                                        </div>

            
                                        <div className="bigDiv">
                                            <p><Link to="/types" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("Property for Rent","")}><b>Property for Rent</b></Link></p>
                                            <p><Link to="/types" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("Property for Rent",e)}>Land & Plots</Link></p>
                                            <p><Link to="/types" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("Property for Rent",e)}>Vacation Rentals - Guest Houses</Link></p>
                                            <p><Link to="/types" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("Property for Rent",e)}>Roommates & Paying Guests</Link></p>
                                            <p><Link to="/types" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("Property for Rent",e)}>Rooms</Link></p>
                                            <p><Link to="/types" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("Property for Rent",e)}>Shops - Offices - Commercial Space</Link></p>
                                            <p><Link to="/types" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("Property for Rent",e)}>Portions & Floors</Link></p>
                                            <p><Link to="/types" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("Property for Rent",e)}>Apartments & Flats</Link></p>
                                            <p><Link to="/types" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("Property for Rent",e)}>Houses</Link></p>
                                        </div>


                                        <div className="bigDiv">
                                            <p><Link to="/types" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("Jobs","")}><b>Jobs</b></Link></p>
                                            <p><Link to="/types" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("Jobs",e)}>Other Jobs</Link></p>
                                            <p><Link to="/types" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("Jobs",e)}>Part - Time</Link></p>
                                            <p><Link to="/types" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("Jobs",e)}>Domestic Staff</Link></p>
                                            <p><Link to="/types" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("Jobs",e)}>Medical</Link></p>
                                            <p><Link to="/types" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("Jobs",e)}>Manufacturing</Link></p>
                                            <p><Link to="/types" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("Jobs",e)}>Accounting & Finance</Link></p>
                                            <p><Link to="/types" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("Jobs",e)}>Human Resources</Link></p>
                                            <p><Link to="/types" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("Jobs",e)}>Clerical & Administration</Link></p>

                                            <p><Link to="/types" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("Hotels & Tourism","")}>Hotels & Tourism</Link></p>
                                            <p><Link to="/types" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("Hotels & Tourism",e)}>IT & Networking</Link></p>
                                            <p><Link to="/types" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("Hotels & Tourism",e)}>Sales</Link></p>
                                            <p><Link to="/types" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("Hotels & Tourism",e)}>Customer Service</Link></p>
                                            <p><Link to="/types" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("Hotels & Tourism",e)}>Education</Link></p>
                                            <p><Link to="/types" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("Hotels & Tourism",e)}>Advertising & PR</Link></p>
                                            <p><Link to="/types" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("Hotels & Tourism",e)}>Marketing</Link></p>
                                            <p><Link to="/types" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("Hotels & Tourism",e)}>Online</Link></p>
                                        </div>
                                    </div>



                                    <div style={{marginRight:"2%"}}>

                                        <div className="bigDiv">
                                            <p><Link to="/types" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("Services","")}><b>Services</b></Link></p>
                                            <p><Link to="/types" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("Services",e)}>Farm & Fresh Food</Link></p>
                                            <p><Link to="/types" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("Services",e)}>Catering & Restaurant</Link></p>
                                            <p><Link to="/types" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("Services",e)}>Home & Office Repair</Link></p>
                                            <p><Link to="/types" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("Services",e)}>Movers & Packers</Link></p>
                                            <p><Link to="/types" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("Services",e)}>Maids & Domestic Help</Link></p>
                                            <p><Link to="/types" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("Services",e)}>Health & Beauty</Link></p>
                                            <p><Link to="/types" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("Services",e)}>Event Services</Link></p>
                                            <p><Link to="/types" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("Services",e)}>Electronics & Computer Repair</Link></p>

                                            <p><Link to="/types" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("Services",e)}>Other Services</Link></p>
                                            <p><Link to="/types" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("Services",e)}>Web Development</Link></p>
                                            <p><Link to="/types" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("Services",e)}>Drivers & Taxi</Link></p>
                                            <p><Link to="/types" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("Services",e)}>Car Rental</Link></p>
                                            <p><Link to="/types" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("Services",e)}>Travel & Visa</Link></p>
                                            <p><Link to="/types" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("Services",e)}>Education & Classes</Link></p>
                                        </div>

                                        <div className="bigDiv">
                                            <p><Link to="/types" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("Books, Sports & Hobbies","")}><b>Books, Sports & Hobbies</b></Link></p>
                                            <p><Link to="/types" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("Books, Sports & Hobbies",e)}>Other Hobbies</Link></p>
                                            <p><Link to="/types" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("Books, Sports & Hobbies",e)}>Gym & Fitness</Link></p>
                                            <p><Link to="/types" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("Books, Sports & Hobbies",e)}>Sports Equipment</Link></p>
                                            <p><Link to="/types" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("Books, Sports & Hobbies",e)}>Musical Instruments</Link></p>
                                            <p><Link to="/types" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("Books, Sports & Hobbies",e)}>Books & Magazines</Link></p>
                                        </div>

                                        <div className="bigDiv">
                                            <p><Link to="/types" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("Kids","")}><b>Kids</b></Link></p>
                                            <p><Link to="/types" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("Kids",e)}>Kids Accessories</Link></p>
                                            <p><Link to="/types" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("Kids",e)}>Kids Bikes</Link></p>
                                            <p><Link to="/types" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("Kids",e)}>Swings & Slides</Link></p>
                                            <p><Link to="/types" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("Kids",e)}>Prams & Walkers</Link></p>
                                            <p><Link to="/types" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("Kids",e)}>Toys</Link></p>
                                            <p><Link to="/types" className="btn btn-transparent btn-link" onClick={(e) => this.handleClick("Kids",e)}>Kids Furniture</Link></p>
                                        </div>


                                    </div>







                                </div>
                                {/* Here the main div starts */}
                            </div>
                        </div>

                </div>

    
        )
    }
}
const mapStateToProps = (state) => ({
    current_category: state.app.SET_CATEGORY,
})

//updating the data of the state
const mapDispatchToProp = (dispatch) => ({
    setSelectedCategory: (data) => dispatch(setSelectedCategory(data))
})
//updating the data of the state
export default connect(mapStateToProps, mapDispatchToProp)(Categories);