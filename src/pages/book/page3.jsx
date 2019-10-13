import React, {Component} from 'react';
import {MDBContainer, MDBRow, MDBCol, MDBView, MDBMask, MDBAnimation, MDBBtn, MDBIcon} from 'mdbreact';
import {Helmet} from 'react-helmet';
import "./page.css";
import gotTicket from '../../images/CharileGolden2@2x.png';
const $ = window.$;
class Page3_2 extends React.Component {
    componentDidMount() {

        let timeoutIdNext = null;
        let timeoutIdCharlie = null;
        $('#gotIt').eyeIn(
            function() {
                timeoutIdCharlie = setTimeout(() =>{
                    $("#image-component").attr("src",gotTicket);
                    $("#image-component").css('opacity','1');
                }, 100)
            }
        );
        $('#nextPage').eyeIn(
            function() {
                $("#eyexmovingcircle").css("border","2px solid green");
                $("#eyexmovingcircle").css("color","green");
                $("#eyexmovingcircle").css("font-size","18px");
                $("#eyexmovingcircle").css("text-align","center");
                $("#eyexmovingcircle").css("font-family"," 'IM Fell English', serif");
                $("#eyexmovingcircle").text("Next Day");
                timeoutIdNext = setTimeout(() =>{
                    window.open("/page6", "_self");
                }, 2000)

            }
        );
        $('#nextPage').eyeOut(
            function() {
                $("#eyexmovingcircle").css("border","2px solid #666666");
                $("#eyexmovingcircle").css("color","#666666");
                $("#eyexmovingcircle").text("")
                if(timeoutIdNext != null) {
                    clearTimeout(timeoutIdNext)
                }
            }
        );

    }
    render() {

        return (
            <div id="page">
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>I got the Golden Ticket!</title>
                </Helmet>
                <div className="positioning book-font">

                    <MDBContainer className="px-md-3 px-sm-0 d-flex justify-content-center align-items-center gradient" style={{height: "100vh"}}>
                        <MDBRow>
                            <MDBCol md="6" className="mb-4 text-left text-positioning">
                                <p id="gotIt">
                                    You helped Charlie get the Golden Ticket!
                                </p>

                                <p>
                                    In fact, little Charlie only gets one
                                    chocolate bar a year as his birthday
                                    present. He has the least chance to win the ticket as compared to all the children in the world.
                                </p>

                                <p>
                                    Tomorrow, little Charlie and grandpa joe are going to the Wonka's chocolate factory.
                                </p>

                            </MDBCol>
                            <MDBCol md="5" className="mb-4 text-center">
                                <img id="image-component" className="img-sizing-page1" src={null}/>
                            </MDBCol>
                        </MDBRow>
                    </MDBContainer>
                    <MDBCol md="1" id="nextPage" className="nextSection"/>
                </div>
            </div>
        )
    }
}

export default Page3_2;