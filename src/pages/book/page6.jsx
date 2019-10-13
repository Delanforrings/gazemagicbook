import React, {Component} from 'react';
import {MDBContainer, MDBRow, MDBCol, MDBView, MDBMask, MDBAnimation, MDBBtn, MDBIcon} from 'mdbreact';
import {Helmet} from 'react-helmet';
import "./page.css";
import wonka from '../../images/wonka@2x.png';
const $ = window.$;
class Page6 extends React.Component {
    componentDidMount() {

        let timeoutIdNext = null;
        $('#nextPage').eyeIn(
            function() {
                $("#eyexmovingcircle").css("border","2px solid green");
                $("#eyexmovingcircle").css("color","green");
                $("#eyexmovingcircle").css("font-size","18px");
                $("#eyexmovingcircle").css("text-align","center");
                $("#eyexmovingcircle").css("font-family"," 'IM Fell English', serif");
                $("#eyexmovingcircle").text("Room 1");
                timeoutIdNext = setTimeout(() =>{
                    window.open("/test1", "_self");
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

    }
    render() {
        return (
            <div id="page">
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>Wonka's Chocolate Factory</title>
                </Helmet>
                <div className="positioning book-font">

                    <MDBContainer className="px-md-3 px-sm-0 d-flex justify-content-center align-items-center gradient" style={{height: "100vh"}}>
                        <MDBRow>
                            <MDBCol md="6" className="mb-4 text-left text-positioning">
                                <p>
                                    Next day, together with other four lucky children,
                                    Charlie went to the Wonka’s Chocolate factory with
                                    his grandpa Joe.
                                </p>

                                <p>
                                    The mysterious Mr.Wonka accompanies them to
                                    visit the factory personally.
                                </p>

                                <p>
                                    He says only ONE child will win the
                                    biggest price that they can never imagine.
                                </p>

                            </MDBCol>
                            <MDBCol md="6" className="mb-4 text-center">
                                <img id="image-component" className="img-sizing" src={wonka}/>
                            </MDBCol>
                        </MDBRow>
                    </MDBContainer>
                    <MDBCol md="1" id="nextPage" className="nextSection"/>
                </div>
            </div>
        )
    }
}

export default Page6;