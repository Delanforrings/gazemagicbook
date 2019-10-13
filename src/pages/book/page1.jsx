import React, {Component} from 'react';
import {MDBContainer, MDBRow, MDBCol, MDBView, MDBMask, MDBAnimation, MDBBtn, MDBIcon} from 'mdbreact';
import {Helmet} from 'react-helmet';
import "./page.css";
import Charlie from '../../images/CharlieLeaf.png';
import Family from '../../images/Family.png';
import Snowing from '../../images/Snowing@2x.png';

const images = [Charlie, Family, Snowing];
const $ = window.$;

class Page1 extends React.Component {


    state = {time:3};

    componentDidMount() {
        let timeoutIdCharlie = null;
        let timeoutIdFamily = null;
        let timeoutIdSnowing = null;
        let timeoutIdNext = null;
        $('#Charlie').eyeIn(
            function() {
                timeoutIdCharlie = setTimeout(() =>{
                    $("#image-component-page1").attr("src",Charlie);
                    $("#image-component-page1").css('opacity','1');
                }, 1100)
            }
        );
        $('#Charlie').eyeOut(
            function() {
                if(timeoutIdCharlie != null) {
                    clearTimeout(timeoutIdCharlie)
                }
            }
        );

        $('#Family').eyeIn(
            function() {
                timeoutIdFamily = setTimeout(() =>{
                    $("#image-component-page1").attr("src",Family);
                    $("#image-component-page1").css('opacity','1');
                }, 1100)
            }
        );
        $('#Family').eyeOut(
            function() {
                if(timeoutIdFamily != null) {
                    clearTimeout(timeoutIdFamily)
                }
            }
        );

        $('#Snowing').eyeIn(
            function() {
                timeoutIdSnowing = setTimeout(() =>{
                    $("#image-component-page1").attr("src",Snowing);
                    $("#image-component-page1").css('opacity','1');
                }, 1100)
            }
        );

        $('#Snowing').eyeOut(
            function() {
                if(timeoutIdSnowing != null) {
                    clearTimeout(timeoutIdSnowing)
                }
            }
        );

        $('#nextPage').eyeIn(
            function() {
                $("#eyexmovingcircle").css("border","2px solid green");
                $("#eyexmovingcircle").css("color","green");
                $("#eyexmovingcircle").css("font-size","18px");
                $("#eyexmovingcircle").css("text-align","center");
                $("#eyexmovingcircle").css("font-family"," 'IM Fell English', serif");
                $("#eyexmovingcircle").text("What's next?");
                timeoutIdNext = setTimeout(() =>{
                    window.open("/Page2", "_self");
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
        let nextButton =  <a id="next-button" className="next-chapter" href="/Page2">Next Chapter</a>;
        return (
            <div id="page">
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>Hi my name is Charlie</title>
                </Helmet>
                <div className="positioning book-font">
                    <MDBContainer className="px-md-3 px-sm-0 d-flex justify-content-center align-items-center gradient" style={{height: "100vh"}}>
                        <MDBRow>
                            <MDBCol md="6" className="mb-4 text-left text-positioning">
                                <p id="Charlie">
                                    Once upon a time, there was a little boy.
                                    His name is Charlie Bucket, and YOU are his guardian angle.
                                </p>

                                <p id="Family">
                                    His family is very poor, but
                                    little Charlie has a very kind heart and
                                    he loves his family more than
                                    anything.
                                </p>

                                <p id="Snowing">
                                    But he always have a dream to
                                    visit to the Wonka’s chocolate
                                    Factory.
                                </p>

                            </MDBCol>
                            <MDBCol md="5" className="mb-4 text-center">
                                <img id="image-component-page1" className="img-sizing-page1" src={null}/>
                            </MDBCol>

                        </MDBRow>
                    </MDBContainer>
                    <MDBCol md="1" id="nextPage" className="nextSection">
                    </MDBCol>
                </div>
            </div>
        )
    }
}

export default Page1;