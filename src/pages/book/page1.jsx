import React, {Component} from 'react';
import {MDBContainer, MDBRow, MDBCol, MDBView, MDBMask, MDBAnimation, MDBBtn, MDBIcon} from 'mdbreact';
import {Helmet} from 'react-helmet';
import "./page.css";
import Charlie from '../../images/CharlieLeaf.png';
import Family from '../../images/Family.png';
import Snowing from '../../images/Snowing@2x.png';

const images = [Charlie, Family, Snowing];

class Page1 extends React.Component {


    state = {imageIndex :0};

    componentDidMount() {
        setInterval(() => {
            const { imageIndex } = this.state;
            const nextIndex = imageIndex + 1;
            this.setState({
                imageIndex: nextIndex
            });
        }, 4000);

        setTimeout(() => {
            let component = document.getElementById("next-button");
            component.style.display = "block";
            console.log(component.offsetLeft);
            component.style.opacity = "1";
        }, 12500)
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
                                <p>
                                    Once upon a time, there was a little boy.
                                    His name is Charlie Bucket.
                                </p>

                                <p>
                                    His family is very poor, but
                                    little Charlie has a very kind heart and
                                    he loves his family more than
                                    anything.
                                </p>

                                <p>
                                    But he always have a dream to
                                    visit to the Wonka’s chocolate
                                    Factory.
                                </p>

                            </MDBCol>
                            <MDBCol md="6" className="mb-4 text-center">
                                {nextButton}
                                <img id="image-component" className="img-sizing" src={images[this.state.imageIndex]}/>
                            </MDBCol>
                        </MDBRow>
                    </MDBContainer>
                </div>
            </div>
        )
    }
}

export default Page1;