import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom'
import {MDBAnimation, MDBCol} from 'mdbreact';
import Home from "./pages/home";
import Landing from "./pages/landing";
import Page1 from "./pages/book/page1";
import Page2 from "./pages/book/page2";
import Page3_2 from "./pages/book/page3";
import Page3_1 from "./pages/book/page3_1";
import Page4 from "./pages/book/page4";
import Page5 from "./pages/book/page5";
import Page6 from "./pages/book/page6";
import Test1 from "./pages/book/test1";
import Out1 from "./pages/book/out1";
import Test2 from "./pages/book/test2";

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
                    <Route path="/page4" component={Page4}/>
                    <Route path="/page5" component={Page5}/>
                    <Route path="/page6" component={Page6}/>
                    <Route path="/Test1" component={Test1}/>
                    <Route path="/Test2" component={Test2}/>
                    <Route path="/Out1" component={Out1}/>

                </MDBAnimation>
            </div>
        </Router>
    );
}

export default App;
