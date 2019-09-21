import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom'
import {MDBAnimation, MDBCol} from 'mdbreact';
import Home from "./pages/home";
import Landing from "./pages/landing";
import Page1 from "./pages/book/page1";
import Page2 from "./pages/book/page2";
import Page3_2 from "./pages/book/page3";
import Page3_1 from "./pages/book/page3_1";

function App() {
    return (
        <Router>

            <div>
                <MDBAnimation type="fadeIn">
                    <Route exact path="/" component={Home} />
                    <Route path="/landing" component={Landing}/>
                    <Route path="/page1" component={Page1}/>
                    <Route path="/page2" component={Page2}/>
                    <Route path="/page3_2" component={Page3_2}/>
                    <Route path="/page3_1" component={Page3_1}/>

                </MDBAnimation>
            </div>
        </Router>
    );
}

export default App;
