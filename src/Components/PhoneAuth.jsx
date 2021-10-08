import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import firebase from "firebase/app"
import { set_seller_data,sendData } from '../store/action/index'
import { Link } from "react-router-dom"
import { connect } from 'react-redux'
import { useHistory } from "react-router-dom";

class PhoneLogin extends React.Component {
    constructor(props) {
        super(props);


        this.state = {
            form: true,
            alert: false,
            mobile: "",
            isAuthenticated: false
            ,
            /////////////////////////////
            time: {}, seconds: 5
            ////////////////////////////
        };
        this.startTimer = this.startTimer.bind(this);
        this.countDown = this.countDown.bind(this);
        
        this.timer = 0;


    }
    ////////////////////////////////////////////////////////////////////////////////////

    secondsToTime(secs) {
        let hours = Math.floor(secs / (60 * 60));

        let divisor_for_minutes = secs % (60 * 60);
        let minutes = Math.floor(divisor_for_minutes / 60);

        let divisor_for_seconds = divisor_for_minutes % 60;
        let seconds = Math.ceil(divisor_for_seconds);

        let obj = {
            "h": hours,
            "m": minutes,
            "s": seconds
        };
        return obj;
    }

    componentDidMount() {
        let timeLeftVar = this.secondsToTime(this.state.seconds);
        this.setState({ time: timeLeftVar });
    }

    startTimer() {
        if (this.timer == 0 && this.state.seconds > 0) {
            this.timer = setInterval(this.countDown, 1000);
        }
        
    }

    countDown() {
        // Remove one second, set state so a re-render happens.
        let seconds = this.state.seconds - 1;
        this.setState({
            time: this.secondsToTime(seconds),
            seconds: seconds,
        });

        // Check if we're at zero.
        if (seconds == 0) {
            clearInterval(this.timer);
            console.log("This is the phone component==>", this.props.SELLER_DATA);
            firebase.auth().signOut();
            this.props.history.push('/success')
        }
    }
    ////////////////////////////////////////////////////////////////////////////////////
    onChangeHandler = (event) => {
        const { name, value } = event.target;
        this.setState({
            [name]: value,
        });
    };

    setUpRecaptcha = () => {
        window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier(
            "recaptcha-container",
            {
                size: "invisible",
                callback: function (response) {
                    console.log("Captcha Resolved");
                    this.onSignInSubmit();
                },
                defaultCountry: "PK",
            }
        );
    };

    onSignInSubmit = (e) => {
        e.preventDefault();
        this.setUpRecaptcha();
        let phoneNumber = "+92" + this.state.mobile;
        console.log(phoneNumber);
        let appVerifier = window.recaptchaVerifier;
        firebase
            .auth()
            .signInWithPhoneNumber(phoneNumber, appVerifier)
            .then(function (confirmationResult) {
                // SMS sent. Prompt user to type the code from the message, then sign the
                // user in with confirmationResult.confirm(code).
                window.confirmationResult = confirmationResult;
                // console.log(confirmationResult);
                alert("OTP is sent.Enter it now.");
            })
            .catch(function (error) {
                alert(error)
                console.log(error);
            });
    };
    onSubmitOtp = (e) => {
        e.preventDefault();
        let otpInput = this.state.otp;
        let optConfirm = window.confirmationResult;
        // console.log(codee);
        optConfirm
            .confirm(otpInput)
            .then((result) => {
                // User signed in successfully.
                // console.log("Result" + result.verificationID);
                let mobilePhone = this.state.mobile;
                let previous = this.props.SELLER_DATA;
                this.props.sendData({
                    ...previous,
                    mobilePhone
                })
                this.props.set_seller_data({
                    ...previous,
                    mobilePhone,
                    isSahi: true
                })
                alert("Phone Number Verified Successfully");
                // let data=this.props
            
                let user = result.user;
            })
            .catch(function (error) {
                console.log(error);
                alert("INVALID OTP.PLEASE TRY AGAIN");
            });
    };
  
    render() {
        
        if (this.props.SELLER_DATA.isSahi === true) {
            console.log("This is the phone component==>", this.props.SELLER_DATA);
            
        }


        return (
            <div>
                <Container fluid="sm" className="mt-3">
                    <Row className="justify-content-center">
                        <Col xs={12} md={6} lg={5}>
                            <h2 className="mb-3">Enter your Phone number</h2>
                            <h6 className="text-danger">Note: Currently this service is only for +92 i.e for pakistan</h6>
                            <Form className="form" onSubmit={this.onSignInSubmit}>
                                <div id="recaptcha-container"></div>
                                <Form.Group>
                                    <Form.Control
                                        type="number"
                                        name="mobile"
                                        placeholder="Mobile Number"
                                        onChange={this.onChangeHandler}
                                        required
                                    />
                                </Form.Group>
                                <Button className="variant-primary" button="Submit" type="submit" >Send OTP</Button>
                             
                            </Form>
                        </Col >
                    </Row >
                    <Row className="justify-content-center">
                        <Col xs={12} md={6} lg={5}>
                            <h2 className="mb-3">Enter OTP</h2>
                            <Form className="form" onSubmit={this.onSubmitOtp}>
                                <Form.Group>
                                    <Form.Control
                                        id="otp"
                                        type="number"
                                        name="otp"
                                        placeholder="OTP"
                                        onChange={this.onChangeHandler}
                                    />
                                </Form.Group>
                                <Button button="Submit" type="submit" className="variant-success">Verify</Button>
                                
                            </Form>
                            <br /><br />
                    
                            {
                                    (this.props.SELLER_DATA.isSahi === true) ? (
                                        <div>
                                    
                                
                                            <h3 className="text-dark">Just Click below to post your ad now</h3>
                                            
                                            <br/>
                                            <h4 className="text-primary text-center">Minutes: {this.state.time.m} : Seconds: {this.state.time.s}</h4>
                                            <button className="btn btn-success btn-lg" onClick={this.startTimer}>Post Your Ad Now</button>
                                            
                                        </div>
                                    ):(
                                        <div>
                                        <h4 className="text-danger">Please verify your phone number to post your Ad</h4>
                                        <br/>
                                        <button type="button" className="btn btn-lg btn-primary" disabled>Post Your Ad Now</button>
                                        </div>
                                    )
                                }
                        </Col>
                    </Row>
                </Container>

            </div>
        )
    }
}
const mapStateToProps = (state) => ({
    SELLER_DATA: state.app.SELL,
    USER_AUTH_DATA: state.auth.USER,
})
//updating the data of the state
const mapDispatchToProp = (dispatch) => ({
    sendData: (data) => sendData(data),
    set_seller_data: (data) => dispatch(set_seller_data(data))
})
//updating the data of the state
export default connect(mapStateToProps, mapDispatchToProp)(PhoneLogin);