import React from "react"
import { Link } from "react-router-dom"
import { FaFacebook } from 'react-icons/fa';
import { AiFillTwitterCircle } from 'react-icons/ai';
import { AiFillYoutube } from 'react-icons/ai';
import { ImLinkedin } from 'react-icons/im';
import "../Styling/Footer.css";
import badge from "../UI/badge.png";
import footerImage from "../UI/Footer.jpg";

class Footer extends React.Component {
    render() {
        return (
            <div style={{ position: "relative", bottom: "0px", width: "100%" }}>
                <div id="foot1" style={{ backgroundColor: "#ebeeef", width: "100%" }}>
                    <div style={{ display: "flex" }}>
                        <img style={{ marginLeft: "10%" }} src={footerImage} alt="OLX Footer Image" />
                        <div style={{ width: "30%", marginTop: "30px", marginLeft: "2%" }}>
                            <h1 style={{ color: "#0d3639" }}>Try the OLX App</h1>
                            <h5 style={{ color: "#0d3639", marginTop: "20px",marginBottom: "50px" }}>Buy, sell and find just about anything using the app on your mobile.</h5>
                        </div>
                        <div style={{marginLeft:"12.5%"}}>
                            <p style={{ fontWeight: "bold", color: "#0d3639", marginLeft: "20px", marginTop: "30%" }}>GET YOUR APP TODAY</p>
                            <a href="https://github.com/Muhammad-Bilal-7896/Android-Quiz-App"><img src={badge} alt="" /></a>
                        </div>

                    </div>
                </div>

                <div id="links">

                    <ul>
                        <br />
                        <li style={{ fontWeight: "bold", fontSize: "15px", color: "rgb(0, 47, 82)" }}>POPULAR CATEGORIES</li>
                        <li>Cars</li>
                        <li>Flats for rent</li>
                        <li>Jobs</li>
                        <li>Mobile Phones</li>
                    </ul>

                    <ul>
                        <br />
                        <li style={{ fontWeight: "bold", fontSize: "15px", color: "rgb(0, 47, 82)" }}>Trending Searches</li>
                        <li>Bikes</li>
                        <li>Watches</li>
                        <li>Books</li>
                        <li>Dogs</li>
                    </ul>
                    <ul>
                        <br />
                        <li style={{ fontWeight: "bold", fontSize: "15px", color: "rgb(0, 47, 82)" }}>About US</li>
                        <li>About OLX Group</li>
                        <li>About US</li>
                        <li>Contact US</li>
                        <li>OLX for business</li>
                    </ul>
                    <ul>
                        <br />
                        <li style={{ fontWeight: "bold", fontSize: "15px", color: "rgb(0, 47, 82)" }}>OLX</li>
                        <li>Help</li>
                        <li>Sitemap</li>
                        <li>Legal and Privacy Information</li>
                    </ul>
                    <div style={{ marginLeft: "10%" }}>
                    <br />
                        <h5 style={{ color: "rgb(0, 47, 82)",marginLeft: "6%" }}>FOLLOW US</h5>
                        <div style={{ display: "flex", fontSize: "20px" }}>
                            <div style={{ color: "rgb(0, 47, 82)" }}><Link to=""> <FaFacebook /></Link> </div>
                            <div style={{ marginLeft: "15px", color: "rgb(0, 47, 82)" }}><Link><AiFillTwitterCircle /></Link> </div>
                            <div style={{ marginLeft: "15px", color: "rgb(0, 47, 82)" }}><Link><AiFillYoutube /></Link></div>
                            <div style={{ marginLeft: "15px", color: "rgb(0, 47, 82)" }}><Link> <ImLinkedin /></Link> </div>
                        </div>
                    </div>
                </div>
                <div className="text-light" style={{ backgroundColor: "#002f34", height: "50px", lineHeight: "50px" }}>
                    <span style={{ marginLeft: "5%" }}>Other Countries India - South Africa - Indonesia</span>
                </div>


            </div>
        )
    }
}
export default Footer;