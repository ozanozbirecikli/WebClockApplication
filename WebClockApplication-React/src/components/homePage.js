import React from 'react';
import { BrowserRouter as Route, Link } from "react-router-dom";
import '../Styles/homeStyles.css'
import chronometerImage from '../images/chronometer.png'
import countDownImage from '../images/countdown.jpg'
import Footer from './footer'


const clearStorage = (status) => {
    if (status) {
        let localStorage = window.localStorage;
        localStorage.clear();
    }
}

const returnUserEmail = () => {
    if (localStorage.length === 0) return "";
    if (localStorage.getItem("newUserEmail") === null) {
        return localStorage.getItem("user");
    }
    else return localStorage.getItem("newUserEmail");
}

class Home extends React.Component {
    render() {
        return (
            <div className="container-fluid" style={{ backgroundColor: 'white' }}>
                <div class="d-flex flex-column flex-md-row align-items-center pb-3 mb-4 border-bottom">
                    <a href="/" class="d-flex align-items-center text-dark text-decoration-none">
                        <span class="fs-4">Clock Management App</span>
                    </a>

                    <nav class="d-inline-flex mt-2 mt-md-0 ms-md-auto">
                        <Link to={{ pathname: "/login" }}>
                            <button type="button" onClick={() => clearStorage(true)} className="btn btn-outline-primary">Sign Out</button>
                        </Link>
                    </nav>
                </div>
                <div className="container-fluid ">
                    <div className="row">
                        <div className="col-6">
                            <div className="card" >
                                <img src={chronometerImage} class="linkedImages" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">Chronometer Page</h5>
                                    <p className="card-text">Create multiple stopwatch blocks under a specific name. These blocks work independently from each other.</p>
                                    <Link
                                        to={{ pathname: "/chronometer" }}>
                                        <a className="btn btn-primary">Click To Go</a>
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div className="col-6">
                            <div className="card" >
                                <img src={countDownImage} class="linkedImages" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">Countdown Page</h5>
                                    <p className="card-text">Create a count down block under a title by entering the hour, minute and second </p>
                                    <Link to={{ pathname: "/countdown" }}>
                                        <a className="btn btn-primary">Click To Go</a>
                                    </Link>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                <Footer/>
            </div>
        );
    }
}

export default Home