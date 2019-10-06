import React, {Component} from 'react';
import {MDBContainer, MDBRow, MDBCol, MDBView, MDBMask, MDBAnimation, MDBBtn, MDBIcon} from 'mdbreact';
import {Helmet} from 'react-helmet';
import "./page.css";
import out from "../../images/chocolatOut.jpg";

export default class Out1 extends React.Component {

    render() {

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
                                    Charlie and you are addicted to chocolate and candy!
                                </p>
                                <p>
                                    Mr.Wonka doesn't like kid to be addicted to candy. It is not right!
                                </p>
                                <p>
                                    You make Charlie out!
                                </p>
                                <p>
                                    He can’t win the biggest price anymore...
                                </p>
                                <p>
                                    To be a good child, you can’t eat too much
                                    candy and chocolate.
                                </p>

                                <p>
                                    If you promise that you will not be addicted to the sweets again, the eyeBook will bring you back.
                                </p>
                                <a href="/Test1">
                                    Yes, I will not addict to sweets anymore.
                                </a>
                                <a href="/">
                                    No, candy is my life. I have to eat candy every second in my life.
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