import React from 'react'
import { Link } from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faListAlt } from '@fortawesome/free-solid-svg-icons';
import "../Styling/Categories.css";
import { connect } from "react-redux"
import { useHistory } from "react-router-dom";
import { get_seller_all_data } from '.././store/action/index'
import Categories from './Categories'
import Header from "./Header"
import Ads from './Ads'
import frontPic from '../UI/front.png'
import '../Styling/Header.css'
import '../Styling/Home.css'
import '../Styling/Home.css'
import firebase from 'firebase/app';
import firebaseAuth from 'firebase/auth/dist/index.esm'
import Footer from './Footer'

class Types extends React.Component {
    state = {
        value: false
    }
    trues = (v) => {
        this.setState({
            value: v
        })
    }
    show=()=>{
        console.log("the all subcategory if present : ",this.props.current_category.SubCategory)
    }
    render() {

        console.log("the category selected in Types is=====>", this.props.current_category)
        return (
            <div>
                <div className="fixed-top" style={{ marginTop: "0px", width: "100%" }}>
                    <Header />
                </div>
                <div id="structure">
                    <Categories />
                    <hr />
                    <h3 className="text-center text-dark">Home/{this.props.current_category.Category}/{this.props.current_category.SubCategory}</h3>
                    <ul style={{ position: "relative", marginTop: "5%" }}>
                        {this.props.users_ads.map((v, i) => {
                            return <li id="mosti" key={i}>
                                <div style={{ display: "inline-block" }}>
                                    {/* {console.log("key==>",i)} */}
                                    {
                                        (this.props.current_category.Category == v.Category && this.props.current_category.SubCategory == v.SubCategory) ? (
                                            <div>

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
                                        ) : (
                                                <span></span>
                                            )
                                    }
                                    
                                    {
                                        (this.props.current_category.Category == "1" && this.props.current_category.SubCategory == v.SubCategory) ? (
                                            <div>

                                               

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
                                        ) : (
                                                <span></span>
                                            )
                                    }

{
                                        (this.props.current_category.Category == v.Category && this.props.current_category.SubCategory =="") ? (

                                            

                                            <div>
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
                                        ) : (
                                                <span></span>
                                            )
                                    }
                                </div>
                            </li>
                        })}
                    </ul>
                    {/* here the components will be rendered */}
                    <div>

                    </div>
                    {/* here the components will be rendered */}

                </div >
            <Footer/>
            </div >
        )
    }
}
const mapStateToProps = (state) => ({
    current_category: state.app.SET_CATEGORY,
    users_ads: state.app.GET_SELL
})

//updating the data of the state
const mapDispatchToProp = (dispatch) => ({
    get_seller_all_data: () => dispatch(get_seller_all_data())
})
//updating the data of the state
export default connect(mapStateToProps, mapDispatchToProp)(Types);