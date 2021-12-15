import React from 'react';
import logo from "../../logo.svg";
import "./Home.css";
import Topbar from "../../components/Topbar";
import {Container} from "reactstrap";

const Home = () => {
    return (
        <React.Fragment>
            <Container>
                <Topbar/>
                <div className="App">
                    <header className="App-header">
                        <img src={logo} className="App-logo" alt="logo"/>
                        <p>
                            Edit
                            <code>src/App.js</code>
                            and save to reload.
                        </p>
                        <a
                            className="App-link"
                            href="https://reactjs.org"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Learn React
                        </a>
                    </header>
                </div>
            </Container>
        </React.Fragment>
    );
};

export default Home;
