import React from 'react';
import '../Styles/styles1.css'
import createAccountImage from '../images/1.png'
import { Link } from "react-router-dom";

class CreateAccount extends React.Component{
    render(){
        return(
        
            <div class="background">
            <div class="container-login">
                <form action="main.html" method="post">
                <div class="imgcontainer">
                    <img src={createAccountImage} alt="Avatar" class="avatar"/>
                </div>

                <div class="container-login">
                    <label for="name"><b>Name</b></label>
                    <input type="text" placeholder="Enter Your Name" name="name" required/>
                    <label for="surname"><b>Surname</b></label>
                    <input type="text" placeholder="Enter Your Surname" name="sname" required/>


                    <label for="uname"><b>Email</b></label>
                    <input type="email" placeholder="Enter Email" name="uname" id="mail" required/>
                    <br/>

                    <label for="psw"><b>Password</b></label>
                    <input type="password" placeholder="Password" name="psw" id="password" required/>

                    <label for="psw"><b>Confirm Password</b></label>
                    <input type="password" placeholder="Confirm Your Password" name="psw_confirm" id="password_confirm"
                    oninput="check(this)" required/>

                    <label for="birthday"><b>Birthday</b></label>
                    <input type="date" id="birthday" name="birthday"/>

                    <button type="submit" onclick="clearStorage(); saveUserCreateAccountEmail(this);">Sign Up</button>

                </div>

                <div class="container-login" style={{backgroundColor:"#f1f1f1"}}>
                <Link to={{ pathname: "/login" }}>
                    <button type="button" class="cancelbtn">Cancel</button>
                </Link>
                </div>
                </form>

            </div>
            </div>

        );
    }
}

export default CreateAccount
            