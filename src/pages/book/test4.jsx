import React, {Component} from 'react';
import {MDBContainer, MDBRow, MDBCol, MDBView, MDBMask, MDBAnimation, MDBBtn, MDBIcon} from 'mdbreact';
import {Helmet} from 'react-helmet';
import "./page.css";
import transition from "../../images/transition.png";


export default class Test4 extends React.Component {

    componentDidMount () {

    }

    render() {


        function nextRoom () {
            window.open("/Test4", "_self");
        }

        function nope () {
            alert("Please drop the unpeeled nut! Don't disturb squirrels' work please.")
        }

        let room = <img src={transition}/>

        return (
            <div id="page">
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>Nut Room</title>
                </Helmet>

                <div className="positioning book-font">
                    <MDBContainer className="px-md-3 px-sm-0 d-flex justify-content-center align-items-center gradient" style={{height: "70vh"}}>
                        <MDBRow>
                            <MDBCol md="12" className="mb-4 text-center text-positioning">
                                <p>
                                    The fourth room is transition room.
                                </p>
                                <p>
                                    Please be quite and watch them to operate.
                                </p>
                                <span style={{color: "red"}}>
                                      Please try not to touch any equipment.
                                </span>
                                <div style={{position:"relative"}}>
                                    {room}
                                </div>

                            </MDBCol>
                        </MDBRow>
                    </MDBContainer>

                </div>
            </div>
        )
    }
}