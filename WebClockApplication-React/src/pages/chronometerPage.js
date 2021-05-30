import React, {Component} from 'react';
import '../Styles/chronometerStyles.css'
import { Link } from "react-router-dom";

const App = () => {
    const chronometerID = 0;
    const chronometerIntervals = []
    const chronometerStatus = []
}

class chronometer{
    constructor(id, title, hour, minute, second, milisecond){
    this.id = id;
    this.title = title;
    this.hour = hour;
    this.minute = minute;
    this.second = second;
    this.milisecond = milisecond;
    }
}

const runChronometer = () =>{
    var hourText = "";
    var minuteText = "";
    var secondText = "";
    var milisecondText = "";
   
    chronometer.milisecond++;
    if(chronometer.milisecond === 100){
        chronometer.milisecond = 0;
        chronometer.second ++;
        
        if(chronometer.second === 60){
            chronometer.second = 0;
            chronometer.minute++;

            if(chronometer.minute === 60){
                chronometer.minute = 0;
                chronometer.hour++;
            }
        }
    }

    milisecondText = updateText(chronometer.milisecond);
    secondText = updateText(chronometer.second);
    minuteText = updateText(chronometer.minute);
    hourText = updateText(chronometer.hour);

    var view = document.getElementById("container-" + chronometer.id);
    view.querySelector("#display").innerHTML = hourText + ":" + minuteText + ":" + secondText + ":" + milisecondText;

}


const  updateText = (value) => {
    if(value < 10)
        return "0" + value.toString();
    
    return value.toString();
}

const  start = (chronometer) => {
    
    var isStopped = App.chronometerStatus[chronometer.id];
    var selectedDiv = document.getElementById("container-" + chronometer.id);

    if(isStopped){
        window.clearInterval(App.chronometerIntervals[chronometer.id]);
        selectedDiv.querySelector("#start-button").innerHTML = "Start";
        App.chronometerStatus[chronometer.id] = false;
        selectedDiv.querySelector("#message").style.visibility = "visible"
    }else{
        const interval = setInterval(() => {
            runChronometer(chronometer)
          }, 10);
        
        App.chronometerIntervals[chronometer.id] = interval;
        selectedDiv.querySelector("#start-button").innerHTML = "Pause";
        App.chronometerStatus[chronometer.id] = true;
        selectedDiv.querySelector("#message").style.visibility = "hidden"
    }
}

const  clearTime = (chronometer) => {

    var selectedDiv = document.getElementById("container-" + chronometer.id);

    window.clearInterval(App.chronometerIntervals[chronometer.id]);
    chronometer.milisecond = 0;
    chronometer.second = 0;
    chronometer.minute = 0;
    chronometer.hour = 0;
    App.chronometerStatus[chronometer.id] = false;
    selectedDiv.querySelector("#display").innerHTML = "00:00:00:00";
    selectedDiv.querySelector("#start-button").innerHTML = "Start";
    selectedDiv.querySelector("#message").style.visibility = "hidden";
}

const deleteChronometer = (id) => {
    var selectedDiv = document.getElementById("container-" + id);
    selectedDiv.parentNode.removeChild(selectedDiv)
    App.chronometerStatus[id] = false;
    window.clearInterval(App.chronometerIntervals[id]);
}

const insertChronometer = () => {

    var choronometerName = document.getElementById("name-text-input").value;
    if(choronometerName === ""){
        alert("Please enter a valid name")
        return;
    }
    var newChronometer = new chronometer(App.chronometerID, App.choronometerName, 0, 0, 0, 0)
    var savedChronometers = document.getElementsByClassName("saved-background")[0];
    var container = document.createElement("div");
    container.className = "container";
    container.id = "container-" + App.chronometerID;
    
    var name = document.createElement("p");
    container.appendChild(name);
    name.id = "name";
    name.innerHTML = App.choronometerName;
    choronometerName = " ";

    var message = document.createElement("p");
    container.appendChild(message);
    message.id = "message";
    message.innerHTML = "Stopped!";

    var display = document.createElement("div");
    container.appendChild(display);
    display.id = "display";
    display.innerHTML = "00:00:00:00";

    var buttons = document.createElement("div");
    buttons.className = "buttons";
    container.appendChild(buttons);

    var startButton = document.createElement("button");
    startButton.id = "start-button";
    startButton.onclick = function(){
        start(newChronometer);
    }
    startButton.innerHTML = "Start";
    buttons.appendChild(startButton);

    var clearButton = document.createElement("button");
    clearButton.id = "clear-button";
    clearButton.innerHTML = "Clear";
    clearButton.onclick = function(){
        clearTime(newChronometer);
    }
    buttons.appendChild(clearButton);

    var deleteButton = document.createElement("button");
    deleteButton.id = "delete-button";
    deleteButton.innerHTML = "Delete";
    deleteButton.setAttribute("onClick","deleteChronometer("+ App.chronometerID +")")
    buttons.appendChild(deleteButton);

    savedChronometers.appendChild(container);

    App.chronometerStatus[App.chronometerID] = false;
    App.chronometerID++;
    
}


class ChronometerPage extends React.Component{ 

    render(){
        return(

        <div class="main-background">
            <div class="top-background">
            <Link to={{ pathname: "/home" }}>
                <a class="home-button">HOME</a>
            </Link>
                <div class="name-container">
                    <h2>Save Your Chronometer</h2>
                    <div class="name-input">

                        <div class="name-input-field">
                            <input type="text" id="name-text-input" required=""></input>
                            <label>Please Enter The Name</label>
                            <span></span>
                        </div>

                        <button type="submit" name="" class="save-button" onClick={insertChronometer}>
                            Save
                        </button>

                    </div>
                </div>
            </div>

            <div class="saved-background">
                {/* <div class="item-container">

                    <p id="name">Name</p>
                    <p id="message"> Stopped! </p>

                    <div id="display">
                        00:00:00:00
                    </div>

                    <div class="buttons">
                        <button id="start-button" onclick="start()">Start</button>
                        <button id="clear-button" onclick="clearTime()">Clear</button>
                        <button id="delete-button" onclick="clearTime()">Delete</button>
                    </div>
                </div> */}
            </div>

        </div>

        );
    }
}

export default ChronometerPage