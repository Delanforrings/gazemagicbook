import React, {Component} from 'react';
import {MDBContainer, MDBRow, MDBCol, MDBView, MDBMask, MDBAnimation, MDBBtn, MDBIcon} from 'mdbreact';
import {Helmet} from 'react-helmet';
import "./page.css";
import goldTicket from '../../images/goldTicket@2x.png';
import posed, { PoseGroup } from 'react-pose';
import shuffle from './shuffle';

const Item = posed.li({
    flip: {
      transition: {
        scale: {
          type: 'spring',
          velocity: 10
        },
        default: {
          type: 'spring'
        }
      }
    }
});


class Page2 extends React.Component {
    state = {
        items: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
        time: 15,
    };

    componentDidMount() {
        setInterval(() => {
            this.setState({
                items: shuffle(this.state.items)
            });
        }, 3500);

        setInterval(() => {
            const { time } = this.state;
            const nextTime = time - 1;
            this.setState({
                time: nextTime > 0 ? nextTime : 0
            });
            if (nextTime < 0) {
                window.open("/page3_1", "_self");
            }
        }, 1000)


    }
    render() {
        const { items } = this.state;
        let ticket = <img className="ticket1" src={goldTicket}/>;
        let ticketSpecial = <img className="ticketSpecial" src={goldTicket} onClick={openPage3}/>;
        let tickets = <ul>
            <PoseGroup>{items.map(id => id === 7 ? <Item key={id} >{ticketSpecial}</Item> : <Item key={id} >{ticket}</Item> )}</PoseGroup>
        </ul>;

        function openPage3() {
            window.open("/page3_2","_self");
        }
        return (
            <div id="page">
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>I want my ticket...</title>
                </Helmet>
                <div className="positioning book-font">

                    <MDBContainer className="px-md-3 px-sm-0 d-flex justify-content-center align-items-center gradient" style={{height: "100vh"}}>
                        <MDBRow>
                            <MDBCol md="12" className="mb-4 text-center text-positioning">
                                <div>
                                    {tickets}
                                </div>
                                <p>
                                    One day, the owner of the Wonka’s
                                    chocolate factory, Willy Wonka, decides
                                    to invite five luckiest children to visit
                                    his secrete factory.
                                </p>

                                <p>
                                    Read the poster from Wonka’s factory as
                                    fast as you can before the people block your view!
                                </p>
                                <p>
                                    You are going to see the poster in: {this.state.time} seconds
                                </p>
                                <p>
                                    Or you can find a magic golden ticket among these tickets to help Charlie to get in!
                                </p>
                            </MDBCol>
                        </MDBRow>
                    </MDBContainer>
                </div>
            </div>
        )
    }
}

export default Page2;