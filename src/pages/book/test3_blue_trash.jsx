import React, {Component} from 'react';
import {MDBContainer, MDBRow, MDBCol, MDBView, MDBMask, MDBAnimation, MDBBtn, MDBIcon} from 'mdbreact';
import {Helmet} from 'react-helmet';
import "./page.css";
import squirrel from "../../images/squirrel.png";
import nut from "../../images/nut.png";
import nut_open from "../../images/open_nut.png";
import nut_room from "../../images/nutRoom.jpg";
import rubbish from "../../images/trash.png";


export default class Test3_blue_trash extends React.Component {

    componentDidMount () {
        let nut = document.getElementById("nut");
        nut.addEventListener("mouseover", () => {
            alert("You might not want to take the unpeeled nut.")
        })

        let squirrel = document.getElementById("squirrel");
        squirrel.addEventListener("mouseover", () => {
            alert("You might not want to touch the squirrel");
            out();
        })

        function out () {
            alert("There is something in the world you are just not allowed to have them, just like this squirrel.")
            window.open("/Out3_blue", "_self");
        }
    }

    render() {
        let squirrelImg = <img className="squirrelNBouncing" id="squirrel" src={squirrel} style={{width:"10%", position:"absolute", top:"200px", left:"0"}}/>;
        let nutImg = <img onClick={nope} className="nut" id="nut" src={nut} style={{width:"10%", position:"absolute", left:"0"}}/>;
        let nutOpenImg = <img onClick={nextRoom} className="nutOpen" src={nut_open} style={{width:"10%", position:"absolute", top:"200px", left:"10px"}}/>;
        let nutRoomImg = <img src={nut_room} style={{width:"50%", position:"absolute", right:"0"}}/>;
        let goodNutZone = <div id="good" style={{position:"absolute", height:"120px", width:"100px", right:"305px", top:"176px",background:"transparent"}}/>;
        let trash = <img className="trash" src={rubbish}/>

        function nextRoom () {
            window.open("/Test4", "_self");
        }

        function nope () {
            alert("Please drop the unpeeled nut! Don't disturb squirrels' work please.")
        }



        return (
            <div id="page" style={{background:"linear-gradient(to left, white 50%, #4F86F7)"}}>
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>Nut Room</title>
                </Helmet>

                <div className="positioning book-font">
                    <MDBContainer className="px-md-3 px-sm-0 d-flex justify-content-center align-items-center gradient" style={{height: "100vh"}}>
                        <MDBRow style={{marginBottom: "200px"}}>
                            <MDBCol md="12" className="mb-4 text-center text-positioning">
                                {trash}
                                <p>
                                    The third room is the nuts room.
                                </p>
                                <p>
                                    All the nuts used in the Wonka's chocolate are peeled by squirrels!
                                </p>
                                <p>
                                    "Ok, let's take ONE nut and move on to next room" Mr.Wonka said.
                                </p>
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

                </div>
            </div>
        )
    }
}