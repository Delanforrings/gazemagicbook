import React, {Component} from 'react';
import {MDBContainer, MDBRow, MDBCol, MDBView, MDBMask, MDBAnimation, MDBBtn, MDBIcon} from 'mdbreact';
import {Helmet} from 'react-helmet';
import "./page.css";
import ticket from "../../images/ticketnice@2x.png";

class Page4 extends React.Component {

    componentDidMount() {
        let inputField = document.getElementById("ticketInput");
        let alerting = document.getElementById("alerting");
        setInterval(() => {
            console.log(typeof inputField.value)
            if (inputField.value === "1") {
                alerting.style.color = "green";
                alerting.innerText = "That's correct! ✔✔✔";
                setTimeout(() => {
                    window.open("/page5", "_self");
                }, 1000);

            } else if (inputField.value !== "") {
                alerting.style.color = "red";
                alerting.innerText = "Hmmmm, not correct ✖✖✖";
            }
        },3000);
    }

    render() {
        let numberInput = <input id="ticketInput" type="number"/>;

        let alerting = <span id="alerting"></span>

        return (
            <div id="page">
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>Where is the last ticket?</title>
                </Helmet>
                <div className="positioning book-font">
                    <MDBContainer className="px-md-3 px-sm-0 d-flex justify-content-center align-items-center gradient" style={{height: "100vh"}}>
                        <MDBRow>
                            <MDBCol md="6" className="mb-4 text-left text-positioning">
                                <p>
                                    The four golden tickets have been gotten by
                                    four children from all over the world.
                                </p>

                                <p>
                                    If you don't know how many tickets have left, you won't be permitted by Charlie's father to help him anymore.

                                </p>
                                <p>
                                    The correct number of tickets left is:
                                </p>
                                <p>
                                    {numberInput}
                                </p>

                                {alerting}

                            </MDBCol>
                            <MDBCol md="6" className="mb-4 text-center">
                                <img id="image-component" className="img-sizing" src={ticket}/>
                            </MDBCol>
                        </MDBRow>
                    </MDBContainer>
                </div>
            </div>
        )
    }
}

export default Page4;