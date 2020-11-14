import React from 'react';
// Import FirebaseAuth and firebase.

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


import firebase from '../firebase/index.js';

import firebaseAuth from 'firebase/auth/dist/index.esm'

import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';

import Slider from './OLXSlider'

import { Button, Modal } from 'react-bootstrap'

import { connect } from 'react-redux'
import { Link } from "react-router-dom"
import { set_data } from '../store/action/index'
import { ControlCamera } from '@material-ui/icons';
import '../Styling/LoginModal.css'
import { useHistory } from "react-router-dom";
import '../Styling/Header.css'
import '../Styling/Home.css'
import Header from "./Header"
import Categories from './Categories'

class Login extends React.Component {
    constructor() {
        super()
        this.state = {
            show: false,
            isSignedIn: false,
            user_data: {}
        }
    }
    handleModal = () => {
        this.setState({
            show: true
        })
    }
    closeModal = () => {
        this.setState({
            show: false
        })
    }

    uiConfig = {
        signInFlow: "popup",
        signInOptions: [
            firebase.auth.GoogleAuthProvider.PROVIDER_ID,
            firebase.auth.FacebookAuthProvider.PROVIDER_ID,
            firebase.auth.GithubAuthProvider.PROVIDER_ID,
            firebase.auth.EmailAuthProvider.PROVIDER_ID
        ],
        callbacks: {
            signInSuccessWithAuthResult: () => false
        }
    }
    componentDidMount() {

        var positiono = {};
        if ('geolocation' in navigator) {
            // console.log("Geolocation is Available");
            navigator.geolocation.getCurrentPosition((position) => {
                positiono = position
                //  console.log("Latitude==>",position.coords.latitude);
                //  console.log("Longitude==>",position.coords.longitude);
            })
        }
        else {
            alert("Geolocation is not supported by this browser.");
        }
        firebase.auth().onAuthStateChanged(user => {
            this.setState({ isSignedIn: !!user })
            // console.log("user", user)

            if (this.state.isSignedIn == true) {
                ////////////////////////////
                let today = new Date();
                let date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
                let time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
                let dateTime = date + ' ' + time;
                dateTime = dateTime.toString();
                //////////////////////////////

                let userdata = {
                    name: firebase.auth().currentUser.displayName,
                    email: firebase.auth().currentUser.email,
                    photo: firebase.auth().currentUser.photoURL,
                    uid: firebase.auth().currentUser.uid,
                    isSignedIn: this.state.isSignedIn,
                    position: positiono,
                    LoginTime: dateTime
                }
                this.setState({
                    user_data: userdata
                })
                //   console.log("Simple User===>",this.state.user_data);
            }
            else {
                //   console.log("Sign In to continue");
            }
        })

    }
    move = () => {
        alert(`Welcome ${firebase.auth().currentUser.emailVerified} Login Success`)
        this.props.history.push('/')
    }

    componentWillUnmount = () => {
        firebase.database().ref(`Users/`).push(this.state.user_data);
    }

    render() {

        if (this.state.isSignedIn == true) {
            this.props.set_data(this.state.user_data);

        }

        //  console.log("redux data",this.props.USER)
        return (
            <div>

                {
                    this.state.isSignedIn ? (

                        <div>

                            <div className="fixed-top" style={{ marginTop: "0px", width: "100%" }}>
                                <Header />
                            </div>
                            <div id="structure">
                                <Categories />
                                <hr />
                                <h1 className="text-success" style={{ textAlign: "center", marginTop: "5%" }}>Welcome! <span className="text-primary">{firebase.auth().currentUser.displayName}</span> to OLX</h1>
                                <div className='text-center'> <img style={{ borderRadius: "50%" }} width="70" height="70"
                                    alt="profile picture"
                                    src={firebase.auth().currentUser.photoURL}
                                /></div>
                                <h4 style={{ textAlign: "center", marginTop: "2%" }} className="text-info">You are here because you have successfully Logged In.Now go to the main page to post the ads or check them.Thanks</h4>
                                <div style={{ textAlign: "center", marginTop: "5%" }}> <Link className="btn btn-primary btn-outline-warning btn-lg" to="/">Go to Home Page</Link> </div>
                            </div>






                        </div>

                    ) : (
                            <div style={{ height: "200px" }}>
                                 <h1 className="text-success" style={{ textAlign: "center", marginTop: "5%" }}>Sigin To continue Please</h1>
                                 <div className="text-center"><img width="100" height="100" src="https://cdn2.iconfinder.com/data/icons/mixd/512/23_OLX-512.png" alt="This is OLX LOGO"/></div>
                                 <h1 style={{fontFamily:"serif"}} className="text-center">By Muhammad Bilal Mohib-ul-Nabi <a href="https://github.com/Muhammad-Bilal-7896/">Github Profile</a></h1> 
                                <StyledFirebaseAuth
                                    uiConfig={this.uiConfig}
                                    firebaseAuth={firebase.auth()}
                                />
                            </div>
                        )
                }

            </div>
        );
    }
}


const mapStateToProps = (state) => ({
    //USER:state.app.USER,
    //AUTH:state.auth.user_name
})

//updating the data of the state
const mapDispatchToProp = (dispatch) => ({
    set_data: (data) => dispatch(set_data(data))
})
//updating the data of the state
export default connect(mapStateToProps, mapDispatchToProp)(Login);
