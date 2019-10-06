import React, {Component} from 'react';
import {MDBContainer, MDBRow, MDBCol, MDBView, MDBMask, MDBAnimation, MDBBtn, MDBIcon} from 'mdbreact';
import {Helmet} from 'react-helmet';
import "./page.css";
import out from "../../images/blueberry.png";


export default class Out2 extends React.Component {

    render() {
        function warning() {
            alert("The eyeBook will rewind the story for you, however you are going to see the world in blue color");
            window.open("/Test2_blue", "_self");
        }
        return (
            <div id="page">
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>You are out!</title>
                </Helmet>

                <div className="positioning book-facont">
                    <MDBContainer className="px-md-3 px-sm-0 d-flex justify-content-center align-items-center gradient" style={{height: "100vh"}}>
                        <MDBRow>
                            <MDBCol md="6" className="mb-4 text-left text-positioning">
                                <p>
                                    "Ah oh! The blueberry pie part is not quite finished yet..." Mr.Wonka said.
                                </p>
                                <p>
                                    Your choice made Charlie turn to a human blueberry...
                                </p>
                                <p>
                                    You will need to listen to people's kind reminder carefully. If not, you might be in trouble.
                                </p>
                                <a href="/Test2_blue" onClick={warning}>
                                    Yes, I will listen to Mr.Wonka's reminder from now onwards.
                                </a>
                                <a href="/">
                                    No, I love chewing gum! I make my own decision.
                                </a>

                            </MDBCol>
                            <MDBCol md="6" className="mb-4 text-center" style={{display:"flex", alignItems:"center"}}>
                                <img id="image-component" className="img-sizing" src={out}/>
                            </MDBCol>
                        </MDBRow>
                    </MDBContainer>

                </div>
            </div>
        )
    }
}