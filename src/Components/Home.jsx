import React from 'react';
import { get_seller_all_data } from '.././store/action/index'
import Categories from './Categories'
import { connect } from "react-redux"
import Header from "./Header"
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
    deleteAll=()=>{
        let database=firebase.database();
        let userRef = database.ref('WithoutSignIn');
        userRef.remove();
    }
    render() {
        console.log("firebase sales data", this.props.users_ads)
        return (
            <div className="home-page">
                <div className="fixed-top" style={{marginTop:"0px",width:"100%"}}>
                {/* <button onClick={this.deleteAll} className="btn btn-danger btn-block">DELETE ALL THE DATA</button> */}
                <Header />
                </div>
                <div id="structure">
                <Categories />
                <hr/>
                <img className=".container-fluid" id="frontPic" src={frontPic} alt="This is the front pic of olx" />
                <ul style={{position:"relative",marginTop:"5%"}}>
                    {this.props.users_ads.map((v, i) => {
                        return <li style={{display:"inline"}} key={i}>
                            <div style={{display:"inline-block"}}>
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
                </ul>
                

                {/* here the components will be rendered */}
                <div>

                </div>
                {/* here the components will be rendered */}

                </div>
             </div>
        )
    }
}

const mapStateToProps = (state) => ({
    users_ads: state.app.GET_SELL

})

//updating the data of the state
const mapDispatchToProp = (dispatch) => ({
    get_seller_all_data: () => dispatch(get_seller_all_data())
})
//updating the data of the state
export default connect(mapStateToProps, mapDispatchToProp)(HomePage);
