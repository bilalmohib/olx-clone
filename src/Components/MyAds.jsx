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

class MyAds extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }
    componentDidMount() {
        this.props.get_seller_all_data();
    }
    render() {
        console.log("firebase sales data", this.props.users_ads)
        return (
            <div className="home-page">
                <div className="fixed-top" style={{marginTop:"0px",width:"100%"}}>
                <Header />
                </div>
                <div id="structure">
                <Categories />
                <hr/>
                <h1 className="text-primary text-center">This will be Ads which you posted.</h1>
                {/*<img className=".container-fluid" id="frontPic" src={frontPic} alt="This is the front pic of olx" />
                 <ul style={{position:"relative",marginTop:"5%",zIndex:"-1"}}>
                    {this.props.users_ads.map((v, i) => {
                        return <li style={{display:"inline"}} key={i}>
                            <div style={{display:"inline-block"}}> */}
                                {/* {console.log("key==>",i)} */}
                                
                            {/* <Ads
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
                             />
                           */}
                            {/* </div>
                        </li>
                    })}
                </ul>
                 */}

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
export default connect(mapStateToProps, mapDispatchToProp)(MyAds);