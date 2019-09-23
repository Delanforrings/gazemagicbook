import React, {Component} from 'react';
import {MDBContainer, MDBRow, MDBCol, MDBView, MDBMask, MDBAnimation, MDBBtn, MDBIcon} from 'mdbreact';
import {Helmet} from 'react-helmet';
import "./page.css";


export default class Test2 extends React.Component {
    render() {
        return (
            <div id="page">
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>Invention Room</title>
                </Helmet>

                <div className="positioning book-font">
                    <MDBContainer className="px-md-3 px-sm-0 d-flex justify-content-center align-items-center gradient" style={{height: "100vh"}}>
                        <MDBRow>
                            <MDBCol md="12" className="mb-4 text-center text-positioning">
                                <p>
                                    The first room is full of candy and chocolate fountain.
                                </p>
                                <p>
                                    However, some kids might addict to candy and chocolate...
                                </p>
                                <span style={{color: "red"}}>
                                        Hint: Try not to stare or take the candy! Find the entry for the next room when you finish viewing this room

                                    </span>
                                <div style={{position:"relative"}}>

                                </div>

                            </MDBCol>
                        </MDBRow>
                    </MDBContainer>

                </div>
            </div>
        )
    }
}