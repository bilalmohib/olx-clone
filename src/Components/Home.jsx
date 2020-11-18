import React from 'react';
import { get_seller_all_data } from '.././store/action/index'
import Categories from './Categories'
import { connect } from "react-redux"
import Header from "./Header"
import Footer from "./Footer"
import { Link } from 'react-router-dom'
import Ads from './Ads'
import frontPic from '../UI/front.png'
import '../Styling/Header.css'
import '../Styling/Home.css'
import firebase from 'firebase/app';
import firebaseAuth from 'firebase/auth/dist/index.esm'

class HomePage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
      
        }
    }
    componentDidMount() {
        this.props.get_seller_all_data();
    }
    deleteAll = () => {
        let database = firebase.database();
        let userRef = database.ref('WithoutSignIn');
        userRef.remove();
    }
    render() {
        console.log("firebase sales data", this.props.users_ads)
        console.log("Search ads props data is===>",this.props.search_ads)
        return (
            <div className="home-page">
                <div className="fixed-top" style={{ marginTop: "0px", width: "100%" }}>
                    {/* <button onClick={this.deleteAll} className="btn btn-danger btn-block">DELETE ALL THE DATA</button> */}
                    <Header />
                </div>
                <div style={{ position: "relative" }} id="structure">
                    <Categories />
                    <hr />
                    <img className=".container-fluid" id="frontPic" src={frontPic} alt="This is the front pic of olx" />

                     {(this.props.currentCondition==true)?(
                        <ul style={{ position: "relative", marginTop: "5%" }}>
{/* This is another thing will be called later */}
                        
                        {this.props.users_ads.map((v, i) => {
                            return <li id="mosti" key={i}>
                                <div style={{ display: "inline-block" }}>
                                    {/* {console.log("key==>",i)} */}
                                     
                                    <Ads
                                        index={i}
                                        url={v.url}
                                        email={v.SellerEmail}
                                        phone={v.mobilePhone}
                                        title={v.title}
                                        price={v.price}
                                        name={v.SellerName}
                                        category={v.Categories}
                                        userphoto={v.SellerPhoto}
                                        time={v.dateTime}
                                        description={v.description}
                                        itemCondition={v.itemCondition}
                                        mobile={v.mobilePhone}
                                        location={v.selectLocation}
                                    />

                                </div>
                            </li>
                        })}

                        {/* This is another thing will be called later */}
                    </ul>

                     ):(
<ul style={{ position: "relative", marginTop: "5%" }}>
{/* This is another thing will be called later */}
                        
                        {this.props.search_ads.map((v, i) => {
                            return <li id="mosti" key={i}>
                                <div style={{ display: "inline-block" }}>
                                    {/* {console.log("key==>",i)} */}
                                     
                                    <Ads
                                        index={i}
                                        url={v.url}
                                        email={v.SellerEmail}
                                        phone={v.mobilePhone}
                                        title={v.title}
                                        price={v.price}
                                        name={v.SellerName}
                                        category={v.Categories}
                                        userphoto={v.SellerPhoto}
                                        time={v.dateTime}
                                        description={v.description}
                                        itemCondition={v.itemCondition}
                                        mobile={v.mobilePhone}
                                        location={v.selectLocation}
                                    />

                                </div>
                            </li>
                        })}

                        {/* This is another thing will be called later */}
                    </ul>

                     )} 
  

                    

                    {/* here the components will be rendered */}
                    <div>

                    </div>
                    {/* here the components will be rendered */}
                    
                     {
                         (this.props.USER_AUTH_DATA.isSignedIn)?(
                             <div>
                               <Link id="sellbtnspecial" className=" btn btn-warning text-light btn-outline-dark btn-lg" to="/login">SELL</Link>
                             </div>
                         ):(
                             <span>

                             </span>
                         )
                     }
  

              

                </div>
                <div style={{ position: "relative", bottom: "0px" }}>
                    <Footer />
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    users_ads: state.app.GET_SELL,
    USER_AUTH_DATA: state.auth.USER,
    search_ads: state.app.SETSEARCHEDDATA,
    currentCondition:state.app.SETCONDITION
})

//updating the data of the state
const mapDispatchToProp = (dispatch) => ({
    get_seller_all_data: () => dispatch(get_seller_all_data())
})
//updating the data of the state
export default connect(mapStateToProps, mapDispatchToProp)(HomePage);
