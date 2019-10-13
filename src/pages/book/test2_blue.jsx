import React, {Component} from 'react';
import {MDBContainer, MDBRow, MDBCol, MDBView, MDBMask, MDBAnimation, MDBBtn, MDBIcon} from 'mdbreact';
import {Helmet} from 'react-helmet';
import "./page.css";
import test2 from "../../images/test2.png";
import gotTicket from "../../images/CharileGolden2@2x.png";
import invetion1 from "../../images/invention1.png";
import invetion2 from "../../images/invention2.png";
import invetion3 from "../../images/invention3.png";
import steak from "../../images/steak.png";
const $ = window.$;

export default class Test2_blue extends React.Component {

    componentDidMount() {
        $("#eyexmovingcircle").css("border","2px solid #4F86F7");
        let timeoutId = null;
        $('#restrictedZone').eyeIn(
            function() {
                $("#eyexmovingcircle").css("border","2px solid red");
                $("#eyexmovingcircle").css("color","red");
                $("#eyexmovingcircle").css("font-size","18px");
                $("#eyexmovingcircle").css("text-align","center");
                $("#eyexmovingcircle").css("font-family"," 'IM Fell English', serif");
                $("#eyexmovingcircle").text("Be Careful!");

                timeoutId = setTimeout(() =>{
                    window.open("/Out2","_self");
                }, 1800)
            }
        );

        $('#restrictedZone').eyeOut(
            function() {
                $("#eyexmovingcircle").css("border","2px solid #4F86F7");
                $("#eyexmovingcircle").css("color","#4F86F7");
                $("#eyexmovingcircle").css("font-size","18px");
                $("#eyexmovingcircle").css("text-align","center");
                $("#eyexmovingcircle").css("font-family"," 'IM Fell English', serif");
                $("#eyexmovingcircle").text("");

                if(timeoutId != null) {
                    clearTimeout(timeoutId)
                }
            }
        );

        $('#inv1').eyeIn(
            function() {
                $("#eyexmovingcircle").css("border","2px solid green");
                $("#eyexmovingcircle").css("color","green");
                $("#eyexmovingcircle").css("font-size","18px");
                $("#eyexmovingcircle").css("text-align","center");
                $("#eyexmovingcircle").css("font-family"," 'IM Fell English', serif");
                $("#eyexmovingcircle").css("white-space"," 'nowrap");
                $("#restrictedZone").css("bottom","386px");
                $("#inv1-caption").text('a Chocolate Pasta! It looks like a chocolate but it tastes like pasta');
            }
        );

        $('#inv1').eyeOut(
            function() {
                $("#eyexmovingcircle").css("border","2px solid #4F86F7");
            }
        );

        $('#inv2').eyeIn(
            function() {
                $("#eyexmovingcircle").css("border","2px solid green");
                $("#eyexmovingcircle").css("color","green");
                $("#eyexmovingcircle").css("font-size","18px");
                $("#eyexmovingcircle").css("text-align","center");
                $("#eyexmovingcircle").css("font-family"," 'IM Fell English', serif");
                $("#eyexmovingcircle").css("white-space"," 'nowrap");
                $("#restrictedZone").css("bottom","431px");
                $("#inv1-caption").text('a Donut mushroom soup! It looks like a chocolate but it tastes like mushroom soup.');
            }
        );

        $('#inv2').eyeOut(
            function() {
                $("#eyexmovingcircle").css("border","2px solid #4F86F7");
            }
        );

        $('#inv3').eyeIn(
            function() {
                $("#eyexmovingcircle").css("border","2px solid green");
                $("#eyexmovingcircle").css("color","green");
                $("#eyexmovingcircle").css("font-size","18px");
                $("#eyexmovingcircle").css("text-align","center");
                $("#eyexmovingcircle").css("font-family"," 'IM Fell English', serif");
                $("#eyexmovingcircle").css("white-space"," 'nowrap");
                $("#restrictedZone").css("bottom","386px");
                $("#inv1-caption").text('a Chewing gum cookie! It looks like a cookie but it is actually a chewing gum.');
            }
        );

        $('#inv3').eyeOut(
            function() {
                $("#eyexmovingcircle").css("border","2px solid #4F86F7");
            }
        );

        $('#inv4').eyeIn(
            function() {
                $("#eyexmovingcircle").css("border","2px solid green");
                $("#eyexmovingcircle").css("color","green");
                $("#eyexmovingcircle").css("font-size","18px");
                $("#eyexmovingcircle").css("text-align","center");
                $("#eyexmovingcircle").css("font-family"," 'IM Fell English', serif");
                $("#eyexmovingcircle").css("white-space"," 'nowrap");
                $("#restrictedZone").css("bottom","386px");
                $("#inv1-caption").text('a Steak candy! It is a candy which you could taste steak from it.');
            }
        );

        $('#inv4').eyeOut(
            function() {
                $("#eyexmovingcircle").css("border","2px solid #4F86F7");
            }
        );

        let timeoutIdNext = null;
        setTimeout(() => {
            $("#inv1-caption").text("nothing. Let's move on to next room");

            $('#nextPage').eyeIn(
                function() {
                    $("#eyexmovingcircle").css("border","2px solid green");
                    $("#eyexmovingcircle").css("color","green");
                    $("#eyexmovingcircle").css("font-size","18px");
                    $("#eyexmovingcircle").css("text-align","center");
                    $("#eyexmovingcircle").css("font-family"," 'IM Fell English', serif");
                    $("#eyexmovingcircle").text("Room 3");
                    timeoutIdNext = setTimeout(() =>{
                        window.open("/test3", "_self");
                    }, 2000)

                }
            );
            $('#nextPage').eyeOut(
                function() {
                    $("#eyexmovingcircle").css("border","2px solid #4F86F7");
                    $("#eyexmovingcircle").text("")
                    if(timeoutIdNext != null) {
                        clearTimeout(timeoutIdNext)
                    }
                }
            );
        }, 18000)
    }

    render() {

        let inv1 = <img className="inventions" id="inv1" src={invetion1} style={{bottom:"10%", left:"0"}}/>;
        let inv2 = <img className="inventions" id="inv2" src={invetion2} style={{left:"0"}}/>;
        let inv3 = <img className="inventions" id="inv3" src={invetion3} style={{bottom:"10%"}}/>;
        let inv4 = <img className="inventions" id="inv4" src={steak}/>;

        let restrictedZone2 = <div id="restrictedZone" className="rZone2" onClick={out2} style={{cursor:"pointer"}}/>;

        function out2() {
            window.open("/Out2", "_self");
        }

        return (
            <div id="page" style={{background:"radial-gradient(#ffffff 59%, #4F86F7)"}}>
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>Invention Room</title>
                </Helmet>

                <div className="positioning book-font">
                    <MDBContainer className="px-md-3 px-sm-0 d-flex justify-content-center align-items-center gradient" style={{height: "100vh"}}>
                        <MDBRow>
                            <MDBCol md="6" className="mb-4 text-left text-positioning">
                                <p>
                                    The second room is invention
                                    room.
                                </p>

                                <p>
                                    It is full of machines that could make imaginary candy and chocolate.
                                </p>

                                <p>
                                    Mr.Wonka has introduced a latest chewing gum that could provide flavours like
                                    steak, cake and blueberry pie. However, Mr.Wonka says it is better to NOT try it.
                                    There are still some issues with it.
                                </p>

                                <p>
                                    Please try NOT to take
                                    the tasty chewing gum from
                                    the machine.
                                </p>
                                <p>
                                    After Mr.Wonka finishes his introduction, he will take you to next room.
                                </p>
                                <p>
                                    Mr.Wonka says "Ok! Now you are looking at  <span id="inv1-caption" style={{fontSize:"30px"}}>...</span>"
                                </p>

                            </MDBCol>
                            <MDBCol md="6" className="mb-4 text-center">
                                <img id="image-component" className="img-sizing" src={test2} style={{position:"relative"}}/>
                                {inv1}
                                {inv2}
                                {inv3}
                                {inv4}
                                {restrictedZone2}
                            </MDBCol>
                        </MDBRow>
                    </MDBContainer>
                    <MDBCol md="1" id="nextPage" className="nextSection"/>
                </div>
            </div>
        )
    }
}