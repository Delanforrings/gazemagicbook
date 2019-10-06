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


export default class Test2_blue extends React.Component {

    componentDidMount() {
        setTimeout(() => {
            let inv1 = document.getElementById("inv1");
            inv1.style.border = "2px dash yellow";
            alert("This is a Chocolate Pasta! It looks like a chocolate but it tastes like pasta.");
            inv1.style.display = "none";
        }, 4000);


        setTimeout(() => {
            let inv2 = document.getElementById("inv2");
            inv2.style.border = "2px dash yellow";
            alert("This is a Chocolate Pasta! It looks like a chocolate but it tastes like pasta.");
            inv2.style.display = "none";
        }, 8000);

        setTimeout(() => {
            let inv3 = document.getElementById("inv3");
            inv3.style.border = "2px dash yellow";
            alert("This is a Chocolate Pasta! It looks like a chocolate but it tastes like pasta.");
            inv3.style.display = "none";
        }, 12000);


        setTimeout(() => {
            let inv4 = document.getElementById("inv4");
            inv4.style.border = "2px dash yellow";
            alert("This is a Chocolate Pasta! It looks like a chocolate but it tastes like pasta.");
            inv4.style.display = "none";
        }, 16000);

        setTimeout(() => {
            window.open("/Test3_blue", "_self");
        }, 18000)
    }

    render() {

        let inv1 = <img className="inventions" id="inv1" src={invetion1} style={{bottom:"10%", left:"0"}}/>;
        let inv2 = <img className="inventions" id="inv2" src={invetion2} style={{left:"0"}}/>;
        let inv3 = <img className="inventions" id="inv3" src={invetion3} style={{bottom:"10%"}}/>;
        let inv4 = <img className="inventions" id="inv4" src={steak}/>;

        let restrictedZone2 = <div className="rZone2" onClick={out2} style={{cursor:"pointer"}}/>;

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

                </div>
            </div>
        )
    }
}