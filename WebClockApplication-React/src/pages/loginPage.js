import React, {Component} from 'react';
import '../Styles/styles1.css'
import loginImage from '../images/3.png'
import { Link } from "react-router-dom";

class Login extends React.Component{
    render(){
        return(
        <div class="background">
        <div class="container-login">
            <form action="main.html" method="post">
            <div class="imgcontainer">
                <img src={loginImage} alt="Avatar" class="avatar"/>
            </div>

            <div class="container-login">
                <label for="email"><b>Email</b></label>
                <input type="email" placeholder="Enter Your Email" name="email" id="email" required/>

                <label for="psw"><b>Password</b></label>
                <input type="password" placeholder="Enter Password" name="psw" required/>

                <button type="submit" onclick="saveUserLoginEmail(this)">Login </button>
                <label>
                <input type="checkbox" checked="checked" name="remember"/>
                Remember me
                </label>
            </div>

            <div class="container-login" style={{backgroundColor:"#f1f1f1"}}>
            <Link to={{ pathname: "/signup" }}>
                <button type="button" class="createaccbutton">Create
                account</button>
                </Link>
            </div>
            </form>


        </div>

        </div>

        );
    }
}

export default Login;

