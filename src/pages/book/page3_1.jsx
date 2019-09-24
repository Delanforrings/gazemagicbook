import React, {Component} from 'react';
import {MDBContainer, MDBRow, MDBCol, MDBView, MDBMask, MDBAnimation, MDBBtn, MDBIcon} from 'mdbreact';
import {Helmet} from 'react-helmet';
import "./page.css";
import posterImg from '../../images/poster1@2x.png';
import leftMan from '../../images/leftMane@2x.png';
import leftMan2 from '../../images/leftMan2@2x.png';
import rightMan from '../../images/rightMan@2x.png';
import rightMan2 from '../../images/rightMan2@2x.png';

class Page3_1 extends React.Component {
    componentDidMount() {
        let poster = document.getElementById("poster");
        let left1 = document.getElementById("p1");
        let left2 = document.getElementById("p1_2");
        let right1 = document.getElementById("p2");
        let right2 = document.getElementById("p2_2");

        setTimeout(() => {
            left1.style.opacity = "1";
            right1.style.opacity = "1";
            poster.style.opacity = "0.5";
        }, 2000);

        setTimeout(() => {
            left2.style.opacity = "1";
            right2.style.opacity = "1";
            poster.style.opacity = "0";
        }, 5000);

        setTimeout(() => {
            window.open("/page4","_self");
        }, 8000)

    }

    render() {
        let poster = <img id="poster" className="poster-sizing" style={{position:"relative",left:"0", top:"0"}} src={posterImg}/>;
        let left = <img id="p1" className="people1 peoples" src={leftMan}/>;
        let left2 = <img id="p1_2" className="people1_2 peoples" src={leftMan2}/>;
        let right = <img id="p2" className="people2 peoples" src={rightMan}/>;
        let right2 = <img id="p2_2" className="people2_2 peoples" src={rightMan2}/>;
        return (
            <div id="page">
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>What's on the poster?</title>
                </Helmet>
                <div className="positioning book-font" style={{overflow:"hidden"}}>

                    <MDBContainer className="px-md-3 px-sm-0 d-flex justify-content-center align-items-center gradient" style={{height: "100vh"}}>
                        <MDBRow>
                            <MDBCol md="12" className="mb-4 text-center poster-positioning">
                                <div className="people-positioning">
                                    {poster}
                                    {left}
                                    {right}
                                    {left2}
                                    {right2}
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