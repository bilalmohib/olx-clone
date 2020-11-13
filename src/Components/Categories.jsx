import React from 'react'
import { Link } from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faListAlt } from '@fortawesome/free-solid-svg-icons';
import "../Styling/Categories.css";
import { connect } from "react-redux"
import { setSubSelectedCategory } from '../store/action';
import { setSelectedCategory } from '../store/action';

class Categories extends React.Component {
    render() {
        return (
            <div>
                <div id="categories">
                    <ul>
                        <div class="dropdown">
                            <button class="btn btn-transparent text-dark dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <b>All Categories</b>
  </button>
                            <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                {/* Here the main div starts */}
                                <div style={{ marginTop: "10vh", width: "90vw", height: "fit-content", border: "1px solid black",display:"flex"}}>


                                    <div style={{marginRight:"2%"}}>

                                        <div className="bigDiv">
                                            <p className="text-dark"><Link><b>Vehicles</b></Link></p>
                                            <p><Link>Boats</Link></p>
                                            <p><Link>Other Vehicles</Link></p>
                                            <p><Link>Rickshaw & Chingchi</Link></p>
                                            <p><Link>Buses, Vans & Trucks</Link></p>
                                            <p><Link>Spare Parts</Link></p>
                                            <p><Link>Cars Accessories</Link></p>
                                            <p><Link>Cars on Installments</Link></p>
                                            <p><Link>Cars</Link></p>
                                        </div>

                                        <div className="bigDiv">
                                            <p><Link><b>Mobiles</b></Link></p>
                                            <p><Link>Mobile Phones</Link></p>
                                            <p><Link>Accessories</Link></p>
                                            <p><Link>Tablets</Link></p>
                                        </div>

                                        <div className="bigDiv">
                                            <p><Link><b>Electronics and Home Appliances</b></Link></p>
                                            <p><Link>Washing Machines and Dryers</Link></p>
                                            <p><Link>Fridges and Freezers</Link></p>
                                            <p><Link>AC and Coolers</Link></p>
                                            <p><Link>Kitchen Appliances</Link></p>
                                            <p><Link>Generators, UPS and Power Solutions</Link></p>
                                            <p><Link>Other Home Appliances</Link></p>
                                            <p><Link>Games and Entertainment</Link></p>
                                            <p><Link>Cameras and Accessories</Link></p>
                                            <p><Link>TV - Video - Audio</Link></p>
                                            <p><Link>Computers and Accessories</Link></p>
                                        </div>


                                        <div className="bigDiv">
                                            <p><Link><b>Property for Sale</b></Link></p>
                                            <p><Link>Portions & Floors</Link></p>
                                            <p><Link>Shops - Offices - Commercial Space</Link></p>
                                            <p><Link>Apartments & Flats</Link></p>
                                            <p><Link>Houses</Link></p>
                                            <p><Link>Land & Plots</Link></p>
                                        </div>
                                    </div>


                                    <div style={{marginRight:"2%"}}>

                                        <div className="bigDiv">
                                            <p><Link><b>Animals</b></Link></p>
                                            <p><Link>Other Animals</Link></p>
                                            <p><Link>Pet Food & Accessories</Link></p>
                                            <p><Link>Horses</Link></p>
                                            <p><Link>Livestock</Link></p>
                                            <p><Link>Dogs</Link></p>
                                            <p><Link>Cats</Link></p>
                                            <p><Link>Hens & Aseel</Link></p>
                                            <p><Link>Birds</Link></p>
                                            <p><Link>Fish & Aquariums</Link></p>
                                        </div>

                                        <div className="bigDiv">
                                            <p><Link><b>Furniture & Home Decor</b></Link></p>
                                            <p><Link>Other Household Items</Link></p>
                                            <p><Link>Office Furniture</Link></p>
                                            <p><Link>Curtains & Blinds</Link></p>
                                            <p><Link>Rugs & Carpets</Link></p>
                                            <p><Link>Painting & Mirrors</Link></p>
                                            <p><Link>Garden & Outdoor</Link></p>
                                            <p><Link>Tables & Dining</Link></p>
                                            <p><Link>Home Decoration</Link></p>
                                            <p><Link>Beds & Wardrobes</Link></p>
                                            <p><Link>Sofa & Chairs</Link></p>
                                        </div>

                                        <div className="bigDiv">
                                            <p><Link><b>Business, Industrial & Agriculture</b></Link></p>
                                            <p><Link>Medical & Pharma</Link></p>
                                            <p><Link>Other Business & Industry</Link></p>
                                            <p><Link>Agriculture</Link></p>
                                            <p><Link>Construction & Heavy Machinery</Link></p>
                                            <p><Link>Trade & Industrial</Link></p>
                                            <p><Link>Food & Restaurants</Link></p>
                                            <p><Link>Business for Sale</Link></p>
                                        </div>


                                        <div className="bigDiv">
                                            <p><Link><b>Bikes</b></Link></p>
                                            <p><Link>Scooters</Link></p>
                                            <p><Link>ATV & Quads</Link></p>
                                            <p><Link>Bicycles</Link></p>
                                            <p><Link>Spare Parts</Link></p>
                                            <p><Link>Motorcycles</Link></p>
                                            
                                        </div>
                                    </div>



                                    <div style={{marginRight:"2%"}}>

                                        <div className="bigDiv">
                                            <p><Link><b>Fashion & Beauty</b></Link></p>
                                            <p><Link>Other Fashion</Link></p>
                                            <p><Link>Couture</Link></p>
                                            <p><Link>Lawn & Pret</Link></p>
                                            <p><Link>Wedding</Link></p>
                                            <p><Link>Watches</Link></p>
                                            <p><Link>Skin & Hair</Link></p>
                                            <p><Link>Make Up</Link></p>
                                            <p><Link>Jewellery</Link></p>

                                            <p><Link>Footwear</Link></p>
                                            <p><Link>Clothes</Link></p>
                                            <p><Link>Accessories</Link></p>
                                        </div>

            
                                        <div className="bigDiv">
                                            <p><Link><b>Property for Rent</b></Link></p>
                                            <p><Link>Land & Plots</Link></p>
                                            <p><Link>Vacation Rentals - Guest Houses</Link></p>
                                            <p><Link>Roommates & Paying Guests</Link></p>
                                            <p><Link>Rooms</Link></p>
                                            <p><Link>Shops - Offices - Commercial Space</Link></p>
                                            <p><Link>Portions & Floors</Link></p>
                                            <p><Link>Apartments & Flats</Link></p>
                                            <p><Link>Houses</Link></p>
                                        </div>


                                        <div className="bigDiv">
                                            <p><Link><b>Jobs</b></Link></p>
                                            <p><Link>Other Jobs</Link></p>
                                            <p><Link>Part - Time</Link></p>
                                            <p><Link>Domestic Staff</Link></p>
                                            <p><Link>Medical</Link></p>
                                            <p><Link>Manufacturing</Link></p>
                                            <p><Link>Accounting & Finance</Link></p>
                                            <p><Link>Human Resources</Link></p>
                                            <p><Link>Clerical & Administration</Link></p>

                                            <p><Link>Hotels & Tourism</Link></p>
                                            <p><Link>IT & Networking</Link></p>
                                            <p><Link>Sales</Link></p>
                                            <p><Link>Customer Service</Link></p>
                                            <p><Link>Education</Link></p>
                                            <p><Link>Advertising & PR</Link></p>
                                            <p><Link>Marketing</Link></p>
                                            <p><Link>Online</Link></p>
                                        </div>
                                    </div>



                                    <div style={{marginRight:"2%"}}>

                                        <div className="bigDiv">
                                            <p><Link><b>Services</b></Link></p>
                                            <p><Link>Farm & Fresh Food</Link></p>
                                            <p><Link>Catering & Restaurant</Link></p>
                                            <p><Link>Home & Office Repair</Link></p>
                                            <p><Link>Movers & Packers</Link></p>
                                            <p><Link>Maids & Domestic Help</Link></p>
                                            <p><Link>Health & Beauty</Link></p>
                                            <p><Link>Event Services</Link></p>
                                            <p><Link>Electronics & Computer Repair</Link></p>

                                            <p><Link>Other Services</Link></p>
                                            <p><Link>Web Development</Link></p>
                                            <p><Link>Drivers & Taxi</Link></p>
                                            <p><Link>Car Rental</Link></p>
                                            <p><Link>Travel & Visa</Link></p>
                                            <p><Link>Education & Classes</Link></p>
                                        </div>

                                        <div className="bigDiv">
                                            <p><Link><b>Books, Sports & Hobbies</b></Link></p>
                                            <p><Link>Other Hobbies</Link></p>
                                            <p><Link>Gym & Fitness</Link></p>
                                            <p><Link>Sports Equipment</Link></p>
                                            <p><Link>Musical Instruments</Link></p>
                                            <p><Link>Books & Magazines</Link></p>
                                        </div>

                                        <div className="bigDiv">
                                            <p><Link><b>Kids</b></Link></p>
                                            <p><Link>Kids Accessories</Link></p>
                                            <p><Link>Kids Bikes</Link></p>
                                            <p><Link>Swings & Slides</Link></p>
                                            <p><Link>Prams & Walkers</Link></p>
                                            <p><Link>Toys</Link></p>
                                            <p><Link>Kids Furniture</Link></p>
                                        </div>


                                    </div>







                                </div>
                                {/* Here the main div starts */}
                            </div>
                        </div>

                        <Link>Mobile Phones</Link>
                        <Link>Cars</Link>
                        <Link>Motorcycles</Link>
                        <Link>Houses</Link>
                        <Link>TV-Video-Audio</Link>
                        <Link>Tablets</Link>
                        <Link>Land and Plots</Link>
                    </ul>
                </div>
                <div style={{ textAlign: "center", margin: "3%" }} id="displayDesktop" className="btn-group">
                    <button className="btn btn-info btn-lg" type="button">
                        <FontAwesomeIcon style={{ color: "white", fontSize: "25px" }} icon={faListAlt} /> Categories
                    </button>
                    <button type="button" className="btn btn-lg btn-info dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <span className="sr-only">Toggle Dropdown</span>
                    </button>
                    <div className="dropdown-menu">
                        <Link>Mobile Phones</Link> <br />
                        <Link>Cars</Link> <br />
                        <Link>Motorcycles</Link> <br />
                        <Link>Houses</Link> <br />
                        <Link>TV-Video-Audio</Link> <br />
                        <Link>Tablets</Link> <br />
                        <Link>Land and Plots</Link> <br />
                    </div>
                </div>

            </div>
        )
    }
}
const mapStateToProps = (state) => ({
    current_category: state.app.SET_CATEGORY,
    current_sub_category: state.app.SET_SUB_CATEGORY
})

//updating the data of the state
const mapDispatchToProp = (dispatch) => ({
    setSelectedCategory: (data) => dispatch(setSelectedCategory(data)),
    setSubSelectedCategory: (data) => dispatch(setSubSelectedCategory(data))
})
//updating the data of the state
export default connect(mapStateToProps, mapDispatchToProp)(Categories);