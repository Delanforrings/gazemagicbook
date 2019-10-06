import React, {Component} from 'react';
import {MDBContainer, MDBRow, MDBCol, MDBView, MDBMask, MDBAnimation, MDBBtn, MDBIcon} from 'mdbreact';
import {Helmet} from 'react-helmet';
import "./page.css";
import out from "../../images/rubbish.png";


export default class Out3_blue extends React.Component {

    render() {
        function warning() {
            alert("The eyeBook will rewind the story for you, however you are STILL going to see the world in blue color, and there will always be some rubbishes stick on you");
            window.open("/Test2_blue", "_self");
        }
        return (
            <div id="page">
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>You are out!</title>
                </Helmet>

                <div className="positioning book-facont" style={{background:"linear-gradient(to left, white 50%, #4F86F7)"}}>
                    <MDBContainer className="px-md-3 px-sm-0 d-flex justify-content-center align-items-center gradient" style={{height: "100vh"}}>
                        <MDBRow>
                            <MDBCol md="6" className="mb-4 text-left text-positioning">
                                <p>
                                    You have been treated as bad nuts by the squirrel and pushed into the rubbish bin...

                                </p>
                                <p>
                                    Please don’t disturb them next time.
                                </p>
                                <p>
                                    There is something in the world you can not get them. No matter how rich you are and how much you want them.
                                </p>
                                <p>
                                    You need to learn to let these things stay where they are instead of forcing to get them.
                                </p>
                                <a href="/Test3_blue_trash" onClick={warning}>
                                    Yes, I will not get something which does not belong to me .
                                </a>
                                <a href="/">
                                    No, I just want everything I like in the world.
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