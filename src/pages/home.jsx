import React, {Component} from 'react';
import {MDBContainer, MDBRow, MDBCol, MDBView, MDBMask, MDBAnimation, MDBBtn, MDBIcon} from 'mdbreact';
import {Helmet} from 'react-helmet';
import "./home.css";
import Landing from "./landing";


class Home extends React.Component {
    render() {
        let home = <div id="home">
            <Helmet>
                <meta charSet="utf-8" />
                <title>Welcome To eyeBook</title>
            </Helmet>
            <div className="background-gradient positioning">
                <MDBContainer className="px-md-3 px-sm-0 d-flex justify-content-center align-items-center gradient book-font">
                    <MDBRow>
                        <MDBCol md="12" className="mb-4 text-center">
                            <h3 className="display-3 font-weight-bold mb-0 pt-md-5">
                                Welcome to eyeBook{" "}
                            </h3>
                            <hr className="hr-light my-4 w-75" />
                            <h4 className="subtext-header mt-2 mb-4">
                                Unleash the power of online reading
                            </h4>
                            <MDBBtn outline rounded color="black" href="/landing">
                                <MDBIcon icon="home"/> Start exploring
                            </MDBBtn>
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
            </div>
        </div>;


        return (
            home
        )
    }
}

export default Home;

/*
Eyebook is designed based on a question why children read.
The eyeBook is considering the fundamental rationale of why children desire to read a book.
The eyeBook provided a more immersive experience to the reader.
Instead of reading a book from the third-person view, eyeBook provided a story-telling style of
reading a book from a first-person view. In that way, the interaction in the eyeBook could be more spontaneous
and immersive.
 */