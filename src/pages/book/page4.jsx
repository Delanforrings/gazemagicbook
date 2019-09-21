import React, {Component} from 'react';
import {MDBContainer, MDBRow, MDBCol, MDBView, MDBMask, MDBAnimation, MDBBtn, MDBIcon} from 'mdbreact';
import {Helmet} from 'react-helmet';
import "./page.css";
import ticket from "../../images/ticketnice@2x.png";

class Page4 extends React.Component {

    render() {

        return (
            <div id="page">
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>Where is the last ticket?</title>
                </Helmet>
                <div className="positioning book-font">
                    <MDBContainer className="px-md-3 px-sm-0 d-flex justify-content-center align-items-center gradient" style={{height: "100vh"}}>
                        <MDBRow>
                            <MDBCol md="6" className="mb-4 text-left text-positioning">
                                <p>
                                    The four golden tickets have been gotten by
                                    four children from all over the world.
                                </p>

                                <p>
                                    There is only one last golden
                                    ticket left…
                                </p>

                            </MDBCol>
                            <MDBCol md="6" className="mb-4 text-center">
                                <img id="image-component" className="img-sizing" src={ticket}/>
                            </MDBCol>
                        </MDBRow>
                    </MDBContainer>
                </div>
            </div>
        )
    }
}

export default Page4;