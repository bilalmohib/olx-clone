import React from 'react';
// Import FirebaseAuth and firebase.

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


import firebase from '../firebase/index.js';

import firebaseAuth from 'firebase/auth/dist/index.esm'

import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';

import Slider from './OLXSlider'

import { Button, Modal } from 'react-bootstrap'

import { connect } from 'react-redux'

import { set_data } from '../store/action/index'
import { ControlCamera } from '@material-ui/icons';



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
    componentDidMount(){

        var positiono={};
        if ('geolocation' in navigator) {
            // console.log("Geolocation is Available");
            navigator.geolocation.getCurrentPosition((position) => {
               positiono=position
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
                    uid:firebase.auth().currentUser.uid,
                    isSignedIn: this.state.isSignedIn,
                    position: positiono,
                    LoginTime:dateTime
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
    
    componentWillUnmount=()=>{
        firebase.database().ref(`Users/`).push(this.state.user_data);
    }

    render() {
       
        if (this.state.isSignedIn == true) {
            this.props.set_data(this.state.user_data);
       
        }

        //  console.log("redux data",this.props.USER)
        return (
            <div>
                <button style={{fontSize:"25px"}} className="btn btn-primary" onClick={() => { this.handleModal() }}>
                    Login
                </button>

                <Modal
                    backdrop="static"
                    keyboard={false} show={this.state.show}>
                    <Modal.Header>
                        <Slider />
                    </Modal.Header>
                    <Modal.Body>
                        {
                            this.state.isSignedIn ? (
                                <div>
                                    <div>Signed In!</div>
                                    <button onClick={() => firebase.auth().signOut()}>Sign out!</button>
                                    <h1>Welcome {firebase.auth().currentUser.displayName}</h1>
                                    <img
                                        alt="profile picture"
                                        src={firebase.auth().currentUser.photoURL}
                                    />
                                </div>
                            ) : (
                                    <div style={{ height: "200px" }}>
                                        <StyledFirebaseAuth
                                            uiConfig={this.uiConfig}
                                            firebaseAuth={firebase.auth()}
                                        />
                                    </div>
                                )}
                    </Modal.Body>
                    <Modal.Footer>
                        {
                            this.state.isSignedIn ? (
                                <div></div>
                            ) : (
                                    <Button onClick={() => { this.closeModal() }} variant="secondary">
                                        Close
                                    </Button>
                                )
                        }


                        {
                            this.state.isSignedIn ? (
                                <Button onClick={() => { this.closeModal() }} variant="success">
                                    Go To Home
                                </Button>

                            ) : (
                                    <div></div>
                                )
                        }
                    </Modal.Footer>
                </Modal>

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
