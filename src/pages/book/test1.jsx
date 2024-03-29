import React, {Component} from 'react';
import {MDBContainer, MDBRow, MDBCol, MDBView, MDBMask, MDBAnimation, MDBBtn, MDBIcon} from 'mdbreact';
import {Helmet} from 'react-helmet';
import "./page.css";
import candyImg from '../../images/candyWorld.png';
import candy1 from '../../images/candy1.png';
import candy2 from '../../images/candy2.png';
const $ = window.$;

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

        let timeoutIdNext = null;
        let timeoutIdrZone = null;
        $('#restrictedZone').eyeIn(
            function() {
                $("#eyexmovingcircle").css("border","2px solid red");
                $("#eyexmovingcircle").css("color","red");
                $("#eyexmovingcircle").css("font-size","18px");
                $("#eyexmovingcircle").css("text-align","center");
                $("#eyexmovingcircle").css("font-family"," 'IM Fell English', serif");
                $("#eyexmovingcircle").text("Be Careful!");

                timeoutId = setTimeout(() =>{
                    window.open("/Out1","_self");
                }, 2500)
            }
        );

        $('#restrictedZone').eyeOut(
            function() {
                $("#eyexmovingcircle").css("border","2px solid #666666");
                $("#eyexmovingcircle").css("color","#666666");
                $("#eyexmovingcircle").css("font-size","18px");
                $("#eyexmovingcircle").css("text-align","center");
                $("#eyexmovingcircle").css("font-family"," 'IM Fell English', serif");
                $("#eyexmovingcircle").text("");

                if(timeoutId != null) {
                    clearTimeout(timeoutId)
                }
            }
        );


        $('#entryZone').eyeIn(
            function() {
                $("#eyexmovingcircle").css("border","2px solid green");
                $("#eyexmovingcircle").css("color","green");
                $("#eyexmovingcircle").css("font-size","18px");
                $("#eyexmovingcircle").css("text-align","center");
                $("#eyexmovingcircle").css("font-family"," 'IM Fell English', serif");
                $("#eyexmovingcircle").text("Room 2");
                timeoutIdNext = setTimeout(() =>{
                    window.open("/test2", "_self");
                }, 1500)

            }
        );
        $('#entryZone').eyeOut(
            function() {
                $("#eyexmovingcircle").css("border","2px solid #666666");
                $("#eyexmovingcircle").css("color","#666666");
                $("#eyexmovingcircle").css("font-size","15px");
                $("#eyexmovingcircle").text("Where's entrance?")
                if(timeoutIdNext != null) {
                    clearTimeout(timeoutIdNext)
                }
            }
        );
    }


    render() {
        let candyWorld = <img src={candyImg} style={{width: "100%"}}/>;
        let candyOne = <img src={candy1} className="floating" style={{width: "10%", position:"absolute", right:"90%", top:"-25%"}}/>;
        let candyTwo = <img src={candy2} className="floating" style={{width: "10%", position:"absolute", right: "1%", top:"-25%"}}/>;
        let restrcitedZone = <div id="restrictedZone" className="restricted" style={{cursor:"pointer"}}/>;
        let entryZone = <div id="entryZone" className="entryZone" onClick={nextRoom} style={{cursor:"pointer"}}/>;

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
                                        Hint: Try not to stare or take the candy! Find the entrance (somewhere at the upper-right corner) for the next room when you finish viewing this room
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