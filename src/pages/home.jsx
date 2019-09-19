import React, {Component} from 'react';
import {MDBContainer, MDBRow, MDBCol, MDBView, MDBMask, MDBAnimation, MDBBtn, MDBIcon} from 'mdbreact';
import {Helmet} from 'react-helmet';
import "./home.css";

class Home extends React.Component {
    render() {

        return (
            <div>
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>Welcome To eyeBook</title>
                </Helmet>

                <MDBContainer className="px-md-3 px-sm-0 d-flex justify-content-center align-items-center gradient book-font" style={{marginTop: "16%"}}>
                    <MDBRow>
                        <MDBCol md="12" className="mb-4 text-center">
                            <h3 className="display-3 font-weight-bold mb-0 pt-md-5">
                                Welcome to eyeBook{" "}
                            </h3>
                            <hr className="hr-light my-4 w-75" />
                            <h4 className="subtext-header mt-2 mb-4">
                               Unleash the power of online reading
                            </h4>
                            <MDBBtn outline rounded color="black" >
                                <MDBIcon icon="home" /> Start exploring
                            </MDBBtn>
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
            </div>
        )
    }
}

export default Home;