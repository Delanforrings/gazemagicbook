import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom'
import { MDBAnimation } from 'mdbreact';
import Home from "./pages/home";

function App() {
    return (
        <Router>

            <div>
                <MDBAnimation type="fadeIn">
                    <Route exact path="/" component={Home} />
                </MDBAnimation>
            </div>
        </Router>
    );
}

export default App;
