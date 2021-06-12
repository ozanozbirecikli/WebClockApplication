import React from 'react';
import '../Styles/loginStyles.css'
import loginImage from '../images/3.png'
import { Link } from "react-router-dom";

let localStorage = window.localStorage;

class Login extends React.Component{
    saveUserLoginEmail = (input) => {
        var email = document.getElementById("email").value;
        localStorage.setItem("user", email);
    }

    check = (input) => {
        var email = document.getElementById("email").value;
        if(localStorage.getItem(email)) {
            alert("ok");
            return true;
        }
        alert("User doesn't exist");
        return false;
    }
    render(){
        return(
        <div class="background">
        <div class="container-login">
            <form action="/" method="post" onsubmit="return check();">
            <div class="imgcontainer">
                <img src={loginImage} alt="Avatar" class="avatar"/>
            </div>

            <div class="container-login">
                <label for="email"><b>Email</b></label>
                <input type="email" placeholder="Enter Your Email" name="email" id="email" required/>

                <label for="psw"><b>Password</b></label>
                <input type="password" placeholder="Enter Password" name="psw" required/>
                <Link to={{ pathname: "/" }}>
                <button type="submit" onclick="saveUserLoginEmail(this);">Login </button>
                </Link>
                
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

