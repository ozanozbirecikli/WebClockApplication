import React, {Component} from 'react';
import '../Styles/countdownStyles.css'
import { Link } from "react-router-dom";

class CountdownPage extends React.Component{
    render(){
        return(
            
            <div class="bgcountdownpage">
                <Link to={{ pathname: "/home" }}>
                <a class="homebutton">HOME</a>
                </Link>
                <div class="formClass" id="inputdiv">
                    <nobr class="textGeneral"> Countdown Name</nobr>
                    <input class="inputStyle" id="name" type="text" name="cd-name"/>
                    <br/>
                    <nobr class="textGeneral"> Hour: </nobr>
                    <input class="inputStyle" id="hour" type="text" name="Hour"/>
                    <br/>
                    <nobr class="textGeneral"> Minute: </nobr>
                    <input class="inputStyle" id="minute" type="text" name="Minute"/>
                    <br/>
                    <nobr class="textGeneral"> Second: </nobr>
                    <input class="inputStyle" id="second" type="text" name="Second"/>
                    <br/>
                    <p id="warning" class="textGeneral"/>
                </div>
                <br/>
                <button class="plusButton" onclick="addCountDown()">Add Countdown</button>

            </div>

        );
    }

}

export default CountdownPage