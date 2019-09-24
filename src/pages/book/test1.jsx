import React, {Component} from 'react';
import {MDBContainer, MDBRow, MDBCol, MDBView, MDBMask, MDBAnimation, MDBBtn, MDBIcon} from 'mdbreact';
import {Helmet} from 'react-helmet';
import "./page.css";
import candyImg from '../../images/candyWorld.png';
import candy1 from '../../images/candy1.png';
import candy2 from '../../images/candy2.png';


export default class Test1 extends React.Component {
    componentDidMount() {
        let rZone = document.getElementById("restrictedZone");
        let timeoutId = null;
        rZone.addEventListener("mouseover", () => {
            timeoutId = setTimeout(() =>{
                alert("Don't be greedy at the chocolate pool!");
                window.open("/Out1", "_self");
            }, 2500)
        });

        rZone.addEventListener("mouseout", () => {
            if(timeoutId != null) {
                clearTimeout(timeoutId)
            }
        })
    }


    render() {
        let candyWorld = <img src={candyImg} style={{width: "100%"}}/>;
        let candyOne = <img src={candy1} className="floating" style={{width: "10%", position:"absolute", right:"90%", top:"-25%"}}/>;
        let candyTwo = <img src={candy2} className="floating" style={{width: "10%", position:"absolute", right: "1%", top:"-25%"}}/>;
        let restrcitedZone = <div id="restrictedZone" className="restricted"/>;
        let entryZone = <div className="entryZone" onClick={nextRoom}/>

        function nextRoom() {
            window.open("/Test2", "_self");
        }
        return (
            <div id="page">
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>Candy World!</title>
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
                                        Hint: Try not to stare or take the candy! Find the entrance for the next room when you finish viewing this room

                                    </span>
                                    <div style={{position:"relative"}}>
                                        {candyWorld}
                                        {candyOne}
                                        {candyTwo}
                                        {restrcitedZone}
                                        {entryZone}
                                    </div>

                                </MDBCol>
                            </MDBRow>
                        </MDBContainer>

                </div>
            </div>
        )
    }
}