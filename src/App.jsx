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
import Out2 from "./pages/book/out2";
import Test2_blue from "./pages/book/test2_blue";
import Test3 from "./pages/book/test3";
import Out3 from "./pages/book/out3";
import Test3_blue from "./pages/book/test3_blue";
import Out3_blue from "./pages/book/out3_blue";
import Test3_trash from "./pages/book/test3_trash";
import Test3_blue_trash from "./pages/book/test3_blue_trash";
import Test4 from "./pages/book/test4";
import Test4_blue from "./pages/book/test4_blue";
import Test4_blue_trash from "./pages/book/test4_blue_trash";
import Test4_trash from "./pages/book/test4_trash";
import Factory from "./pages/book/factory";

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
                    <Route path="/Test2_blue" component={Test2_blue}/>
                    <Route path="/Test3" component={Test3}/>
                    <Route path="/Test3_blue" component={Test3_blue}/>
                    <Route path="/Test3_blue_trash" component={Test3_blue_trash}/>
                    <Route path="/Test3_trash" component={Test3_trash}/>
                    <Route path="/Test4" component={Test4}/>
                    <Route path="/Test4_blue" component={Test4_blue}/>
                    <Route path="/Test4_blue_trash" component={Test4_blue_trash}/>
                    <Route path="/Test4_trash" component={Test4_trash}/>
                    <Route path="/Out1" component={Out1}/>
                    <Route path="/Out2" component={Out2}/>
                    <Route path="/Out3" component={Out3}/>
                    <Route path="/Out3_blue" component={Out3_blue}/>
                    <Route path="/Factory" component={Factory}/>

                </MDBAnimation>
            </div>
        </Router>
    );
}

export default App;
