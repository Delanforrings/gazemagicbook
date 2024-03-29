import React, {Component} from 'react';
import {MDBContainer, MDBRow, MDBCol, MDBView, MDBMask, MDBAnimation, MDBBtn, MDBIcon} from 'mdbreact';
import {Helmet} from 'react-helmet';
import "./page.css";
import squirrel from "../../images/squirrel.png";
import nut from "../../images/nut.png";
import nut_open from "../../images/open_nut.png";
import nut_room from "../../images/nutRoom.jpg";
import rubbish from "../../images/rubbish.png";
const $ = window.$;

export default class Test3 extends React.Component {

    componentDidMount () {

        let timeoutId = null;
        $('#squirrel').eyeIn(
            function() {
                $("#eyexmovingcircle").css("border","2px solid red");
                $("#eyexmovingcircle").css("color","red");
                $("#eyexmovingcircle").css("font-size","18px");
                $("#eyexmovingcircle").css("text-align","center");
                $("#eyexmovingcircle").css("font-family"," 'IM Fell English', serif");
                $("#eyexmovingcircle").text("Be Careful!");

                timeoutId = setTimeout(() =>{
                    window.open("/Out3","_self");
                }, 800)
            }
        );

        $('#squirrel').eyeOut(
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

        $('#nutOpened').eyeIn(

            function () {
                $("#eyexmovingcircle").css("border","2px solid green");
                $("#eyexmovingcircle").css("color","green");
                $("#eyexmovingcircle").css("font-size","18px");
                $("#eyexmovingcircle").css("text-align","center");
                $("#eyexmovingcircle").css("font-family"," 'IM Fell English', serif");
                $("#eyexmovingcircle").text("That's it");
                $('#wonka').css("opacity", "1");
                $('#nextPage').css("opacity","1")
            }
        )

        $('#nutOpened').eyeOut(

            function () {
                $("#eyexmovingcircle").css("border","2px solid #666666");
                $("#eyexmovingcircle").text("")
                $('#wonka').css("opacity", "1");
                $('#nextPage').css("opacity","1")
            }
        )

        let timeoutIdNext = null;
        $('#nextPage').eyeIn(
            function() {
                $("#eyexmovingcircle").css("border","2px solid green");
                $("#eyexmovingcircle").css("color","green");
                $("#eyexmovingcircle").css("font-size","18px");
                $("#eyexmovingcircle").css("text-align","center");
                $("#eyexmovingcircle").css("font-family"," 'IM Fell English', serif");
                $("#eyexmovingcircle").text("Room 4");
                timeoutIdNext = setTimeout(() =>{
                    window.open("/test3", "_self");
                }, 2000)

            }
        );
        $('#nextPage').eyeOut(
            function() {
                $("#eyexmovingcircle").css("border","2px solid #666666");
                $("#eyexmovingcircle").text("")
                if(timeoutIdNext != null) {
                    clearTimeout(timeoutIdNext)
                }
            }
        );

        let squirrel = document.getElementById("squirrel");
        squirrel.addEventListener("mouseover", () => {
            alert("You might not want to touch the squirrel");
            out();
        })

        function out () {
            alert("There is something in the world you are just not allowed to have them, just like this squirrel.")
            window.open("/Out3", "_self");
        }
    }

    render() {
        let squirrelImg = <img className="squirrelNBouncing" id="squirrel" src={squirrel} style={{width:"10%", position:"absolute", top:"200px", left:"0"}}/>;
        let nutImg = <img onClick={nope} className="nut" id="nut" src={nut} style={{cursor:"pointer", width:"10%", position:"absolute", left:"0"}}/>;
        let nutOpenImg = <img onClick={nextRoom} id="nutOpened" className="nutOpen" src={nut_open} style={{cursor:"pointer", width:"10%", position:"absolute", top:"200px", left:"10px"}}/>;
        let nutRoomImg = <img src={nut_room} style={{width:"50%", position:"absolute", right:"0"}}/>;
        let goodNutZone = <div id="good" style={{position:"absolute", height:"120px", width:"100px", right:"305px", top:"176px",background:"transparent"}}/>;

        let wonka = <p id="wonka" style={{opacity: "0"}}>"Ok! You got it. Now let's move on to next room"</p>

        function nextRoom () {
            window.open("/Test4", "_self");
        }

        function nope () {
            alert("Please drop the unpeeled nut! Don't disturb squirrels' work please.")
        }



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
                                    The third room is the nuts room.
                                </p>
                                <p>
                                    All the nuts used in the Wonka's chocolate are peeled by squirrels!
                                </p>
                                <p>
                                    "Ok, let's take ONE nut and move on to next room" Mr.Wonka said.
                                </p>
                                {wonka}
                                <span style={{color: "red"}}>
                                       Please try not to touch any squirrel. They are working very hard to peel the nut shell.
                                </span>
                                <div style={{position:"relative"}}>
                                    {squirrelImg}
                                    {nutImg}
                                    {nutOpenImg}
                                    {nutRoomImg}
                                    {goodNutZone}
                                </div>

                            </MDBCol>
                        </MDBRow>
                    </MDBContainer>
                    <MDBCol md="1" id="nextPage" style={{opacity:"0"}} className="nextSection"/>
                </div>
            </div>
        )
    }
}