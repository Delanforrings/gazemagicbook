import React, {Component} from 'react';
import {MDBContainer, MDBRow, MDBCol, MDBView, MDBMask, MDBAnimation, MDBBtn, MDBIcon} from 'mdbreact';
import {Helmet} from 'react-helmet';
import "./page.css";
import transition from "../../images/transition.png";
import launch from "../../images/launch.png";
import rubbish from "../../images/trash.png";


export default class Test4_blue_trash extends React.Component {

    componentDidMount () {
        setTimeout(()=>{
            alert("Congratulations! You are the last child left in this visit! And you will be granted the mysterious surprise.")
            let launchBtn = document.getElementById("btn");
            launchBtn.style.opacity = "1";
            let warning = document.getElementById("warning");
            warning.style.color = "green";
            warning.innerText = "Mr.Wonka wants you to press the Launch Button to see what's the mysterious surprise for you."
        }, 6000)
    }

    render() {


        function nextRoom () {
            let page = document.getElementById("entirePage");
            page.style.opacity = "0"
            setTimeout(()=>{
                window.open("/Factory", "_self");
            }, 3500)
        }

        function out () {
            alert("You have been transferred to a mystery place. You will be transfer back after the visit finishes...")
        }

        let room = <img onClick={out} style={{width:"100%", cursor:"pointer"}} src={transition}/>;
        let launchImg = <img onClick={nextRoom} id="btn" className="launch" style={{cursor:"pointer", position:"absolute", width:"30%", right:"-100px", top:"50px", opacity:"0"}} src={launch}/>;
        let warning = <span id="warning" style={{color: "red"}}>
                                      Please try not to touch any equipment.
                                </span>;
        let trash = <img className="trash" src={rubbish}/>

        return (
            <div id="page" style={{background:"radial-gradient(#ffffff 59%, #4F86F7)"}}>
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>Transition Room</title>
                </Helmet>

                <div className="positioning book-font pageOut" id="entirePage">

                    <MDBContainer className="px-md-3 px-sm-0 d-flex justify-content-center align-items-center gradient" style={{height: "100vh"}}>
                        <MDBRow>
                            <MDBCol md="6" className="mb-4 text-left text-positioning">
                                {trash}
                                <p>
                                    The fourth room is transition room.
                                </p>
                                <p>
                                    Please be quite and watch them to operate.
                                </p>
                                <p>
                                    See how to transfer the chocolate from one place to another.
                                </p>
                                {warning}

                                <div style={{position:"relative"}}>
                                    {launchImg}
                                </div>

                            </MDBCol>
                            <MDBCol md="6" className="mb-4 text-center">
                                {room}
                            </MDBCol>
                        </MDBRow>
                    </MDBContainer>

                </div>
            </div>
        )
    }
}