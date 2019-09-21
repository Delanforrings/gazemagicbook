import React, {Component} from 'react';
import {MDBContainer, MDBRow, MDBCol, MDBView, MDBMask, MDBAnimation, MDBBtn, MDBIcon} from 'mdbreact';
import {Helmet} from 'react-helmet';
import "./page.css";
import posterImg from '../../images/poster1@2x.png';
import leftMan from '../../images/leftMane@2x.png';
import leftMan2 from '../../images/leftMan2@2x.png';
import rightMan from '../../images/rightMan@2x.png';

class Page3_1 extends React.Component {
    render() {
        let poster = <img className="poster-sizing" style={{position:"relative",left:"0", top:"0"}} src={posterImg}/>;
        let left = <img className="people1 peoples" src={leftMan}/>;
        let left2 = <img className="people1_2 peoples" src={leftMan2}/>;
        let right = <img className="people2 peoples" src={rightMan}/>;
        return (
            <div id="page">
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>I got the Golden Ticket!</title>
                </Helmet>
                <div className="positioning book-font" style={{overflow:"hidden"}}>

                    <MDBContainer className="px-md-3 px-sm-0 d-flex justify-content-center align-items-center gradient" style={{height: "100vh"}}>
                        <MDBRow>
                            <MDBCol md="12" className="mb-4 text-center poster-positioning">
                                <div className="people-positioning">
                                    {poster}
                                    {left}
                                    {right}
                                </div>
                            </MDBCol>

                        </MDBRow>
                    </MDBContainer>
                </div>
            </div>
        )
    }
}

export default Page3_1;