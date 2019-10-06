import React, {Component} from 'react';
import {MDBContainer, MDBRow, MDBCol, MDBView, MDBMask, MDBAnimation, MDBBtn, MDBIcon} from 'mdbreact';
import {Helmet} from 'react-helmet';
import "./page.css";
import factory from "../../images/factory.jpg";
import YouTube from 'react-youtube';


export default class Factory extends React.Component {


    render() {
        let factoryImg = <img src={factory}/>;
        const opts = {
            height: '1000px',
            width: '100%',
            playerVars: { // https://developers.google.com/youtube/player_parameters
                autoplay: 0
            }
        };
        return (
            <div id="page">
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>The Factory is all yours! </title>
                </Helmet>
                <YouTube
                    videoId="nkwRyfE67EI"
                    opts={opts}
                    onReady={this._onReady}
                />
            </div>
        )

    }
    _onReady(event) {
        // access to player in all event handlers via event.target
        event.target.playVideo();
    }
}