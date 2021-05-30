import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import '../Styles/mainstyle.css'
import chronometerImage from '../images/chronometer.png'
import countDownImage from '../images/countdown.jpg'

const clearStorage = (status) => {
    if(status){
        let localStorage = window.localStorage;
        localStorage.clear();
    }
}

class Home extends React.Component{
    render(){
        return(
            
        <div class="background-home">
            
            <div class="top">
                <div class = "title">
                    <h1 class="name"> Clock Management App</h1>
                    <p1 class="useremail">You are logged as
                        <script>document.write(returnUserEmail(this));</script>
                    </p1>
                </div>
                <div class = "dashboard">
                <Link to={{ pathname: "/login" }}>
                    <button class="logout-button" onClick={() => clearStorage(true)}>Logout</button>
                </Link>
                </div>

            </div>
            <div class="middle">
            
                <div class="container">
                    <Link 
                    to={{ pathname: "/chronometer" }}>
                        <input type="image" alt="chronometer" class="linkedImages" src={chronometerImage} />
                    </Link>
                    <h1>CHRONOMETER</h1>
                </div>
                <div class="container">
                    <Link to={{ pathname: "/countdown" }}>
                        <input type="image" alt = "countdown" class="linkedImages" src={countDownImage} />
                    </Link>
                    <h1>COUNTDOWN</h1>
                </div>
                
            </div>

        </div>

        );
    }
}

export default Home