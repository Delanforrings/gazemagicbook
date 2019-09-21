import React, {Component} from 'react';
import {MDBContainer, MDBRow, MDBCol, MDBView, MDBMask, MDBAnimation, MDBBtn, MDBIcon} from 'mdbreact';
import {Helmet} from 'react-helmet';
import "./page.css";
import gotTicket from '../../images/CharileGolden2@2x.png';

class Page3_2 extends React.Component {
    render() {
        return (
            <div id="page">
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>I got the Golden Ticket!</title>
                </Helmet>
                <div className="positioning book-font">

                    <MDBContainer className="px-md-3 px-sm-0 d-flex justify-content-center align-items-center gradient" style={{height: "100vh"}}>
                        <MDBRow>
                            <MDBCol md="6" className="mb-4 text-left text-positioning">
                                <p>
                                    You helped Charlie get the Golden Ticket!
                                </p>

                                <p>
                                    In fact, little Charlie only gets one
                                    chocolate bar a year as his birthday
                                    present. He has the least chance to win the ticket as compared to all the children in the world.
                                </p>

                                <p>
                                    Tomorrow, little Charlie and grandpa joe are going to the Wonka's chocolate factory.
                                </p>

                            </MDBCol>
                            <MDBCol md="6" className="mb-4 text-center">
                                <img id="image-component" className="img-sizing" src={gotTicket}/>
                            </MDBCol>
                        </MDBRow>
                    </MDBContainer>
                </div>
            </div>
        )
    }
}

export default Page3_2;