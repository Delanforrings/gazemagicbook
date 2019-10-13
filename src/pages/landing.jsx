import React, {Component} from 'react';
import {MDBContainer, MDBRow, MDBCol, MDBView, MDBMask, MDBAnimation, MDBBtn, MDBIcon} from 'mdbreact';
import {Helmet} from 'react-helmet';
import "./landing.css";

class Landing extends React.Component {

    render() {
        let landing = <div id="landing-display" className="background-gradient positioning">
            <MDBContainer className="px-md-3 px-sm-0 d-flex justify-content-center align-items-center gradient book-font">
                <MDBRow>
                    <MDBCol md="12" className="mb-4 text-center">
                        <h3 className="display-3 font-weight-bold mb-0 pt-md-5">
                            Tips for using eyeBook{" "}
                        </h3>
                        <hr className="hr-light my-4 w-75" />
                        <ol className="tips">
                            <li>
                                Please look at the right most edge of the window to go to next page
                            </li>
                            <li>
                                Please read everything carefully to collect secret hints to trigger more events
                            </li>
                            <li>
                                Please note that texts in <span style={{color:"red"}}>blue</span> are the ones require you to click
                            </li>
                            <li>
                                Please note that when you trigger some thing bad the eye circle will turn <span style={{color:"red"}}>red</span>, otherwise it might turn <span style={{color:"green"}}>green</span>
                            </li>
                        </ol>
                        <MDBBtn id="mylink" outline rounded color="black" href="/page1">
                            <MDBIcon icon="book-open" /> Start reading
                        </MDBBtn>

                    </MDBCol>
                </MDBRow>
            </MDBContainer>
        </div>;

        // click to open next page
        function changeLink(){
            setTimeout(function() {
                window.open("/page1", "_self")
            }, 1000);
        }

        return (
            <div id="landing">
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>Welcome To eyeBook</title>
                </Helmet>
                {landing}
            </div>
        )
    }
}

export default Landing;