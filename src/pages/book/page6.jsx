import React, {Component} from 'react';
import {MDBContainer, MDBRow, MDBCol, MDBView, MDBMask, MDBAnimation, MDBBtn, MDBIcon} from 'mdbreact';
import {Helmet} from 'react-helmet';
import "./page.css";
import wonka from '../../images/wonka@2x.png';

class Page6 extends React.Component {
    render() {
        return (
            <div id="page">
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>Wonka's Chocolate Factory</title>
                </Helmet>
                <div className="positioning book-font">

                    <MDBContainer className="px-md-3 px-sm-0 d-flex justify-content-center align-items-center gradient" style={{height: "100vh"}}>
                        <MDBRow>
                            <MDBCol md="6" className="mb-4 text-left text-positioning">
                                <p>
                                    Next day, together with other four lucky children,
                                    Charlie went to the Wonka’s Chocolate factory with
                                    his grandpa Joe.
                                </p>

                                <p>
                                    The mysterious Mr.Wonka accompanies them to
                                    visit the factory personally.
                                </p>

                                <p>
                                    He says only ONE child will win the
                                    biggest price that they can never imagine.
                                </p>
                                <a href="/test1">
                                    Let's now go to the first room!
                                </a>

                            </MDBCol>
                            <MDBCol md="6" className="mb-4 text-center">
                                <img id="image-component" className="img-sizing" src={wonka}/>
                            </MDBCol>
                        </MDBRow>
                    </MDBContainer>
                </div>
            </div>
        )
    }
}

export default Page6;