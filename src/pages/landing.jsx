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
                                Please move your mouse by a little bit to interact with the objects
                            </li>
                            <li>
                                Please read everything carefully to collect secret hints to trigger more events
                            </li>
                            <li>
                                Please be aware that the story might be different from what you have read below
                            </li>
                            <li>
                                Please enjoy as much as you can
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