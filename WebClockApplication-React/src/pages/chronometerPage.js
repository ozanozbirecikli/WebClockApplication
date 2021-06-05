import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import '../Styles/chronometerStyles.css'
import { Link } from "react-router-dom"

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

class ChronometerPage extends React.Component{ 

    constructor(props) {
        super(props);
        this.state = {
            chronometerID : 0,
            chronometerIntervals : [],
            chronometerStatus : []
        }
    }
    
    deleteChronometer = (id) => {
    var containerName = "container-" + id.toString();
    var selectedDiv = document.getElementById(containerName);
    ReactDOM.findDOMNode(selectedDiv).parentNode.removeChild(selectedDiv)
    this.state.chronometerStatus[id] = false;
    window.clearInterval(this.state.chronometerIntervals[id]);

    }

    clearTime = (chronometer) => {
        var containerName = "container-" + chronometer.id.toString();
        var selectedDiv = document.getElementById(containerName);
    
        window.clearInterval(this.state.chronometerIntervals[chronometer.id]);
        chronometer.milisecond = 0;
        chronometer.second = 0;
        chronometer.minute = 0;
        chronometer.hour = 0;
        this.state.chronometerStatus[chronometer.id] = false;
        selectedDiv.querySelector("#display").innerHTML = "00:00:00:00";
        selectedDiv.querySelector("#start-button").innerHTML = "Start";
        selectedDiv.querySelector("#message").style.visibility = "hidden";
    }

    updateText = (value) => {
        if(value < 10)
            return "0" + value.toString();
        
        return value.toString();
    }

    runChronometer = (chronometer) => {
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
    
        milisecondText = this.updateText(chronometer.milisecond);
        secondText = this.updateText(chronometer.second);
        minuteText = this.updateText(chronometer.minute);
        hourText = this.updateText(chronometer.hour);
    
        var view = document.getElementById("container-" + chronometer.id);
        view.querySelector("#display").innerHTML = hourText + ":" + minuteText + ":" + secondText + ":" + milisecondText;
    }

    start = (chronometer) => {
    
        var isStopped = this.state.chronometerStatus[chronometer.id];
        var selectedDiv = document.getElementById("container-" + chronometer.id);
    
        if(isStopped){
            window.clearInterval(this.state.chronometerIntervals[chronometer.id]);
            selectedDiv.querySelector("#start-button").innerHTML = "Start";
            this.state.chronometerStatus[chronometer.id] = false;
            selectedDiv.querySelector("#message").style.visibility = "visible"
        }else{
            const interval = setInterval(() => {
                this.runChronometer(chronometer)
              }, 10);
            
            this.state.chronometerIntervals[chronometer.id] = interval;
            selectedDiv.querySelector("#start-button").innerHTML = "Pause";
            this.state.chronometerStatus[chronometer.id] = true;
            selectedDiv.querySelector("#message").style.visibility = "hidden"
        }
    }

    insertChronometer = () => {
        var newChronometer = document.getElementById("name-text-input");
        var choronometerName = newChronometer.value;
        if(choronometerName === ""){
            alert("Please enter a valid name")
            return;
        }
        newChronometer.value = "";
        var newChronometer = new chronometer(this.state.chronometerID, this.state.choronometerName, 0, 0, 0, 0)
        var savedChronometers = document.getElementsByClassName("saved-background")[0];
        var container = document.createElement("div");
        container.className = "item-container";
        container.id = "container-" + this.state.chronometerID;
        
        var name = document.createElement("p");
        container.appendChild(name);
        name.id = "name";
        name.innerHTML = choronometerName;
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
        startButton.onclick = () => {
            this.start(newChronometer);
        }
        startButton.innerHTML = "Start";
        buttons.appendChild(startButton);
    
        var clearButton = document.createElement("button");
        clearButton.id = "clear-button";
        clearButton.innerHTML = "Clear";
        clearButton.onclick = () => {
            this.clearTime(newChronometer);
        }
        buttons.appendChild(clearButton);
    
        var deleteButton = document.createElement("button");
        deleteButton.id = "delete-button";
        deleteButton.innerHTML = "Delete";
        deleteButton.selectedId = this.state.chronometerID;
        deleteButton.addEventListener('click', () => {
            
            this.deleteChronometer(deleteButton.selectedId);
        })
        buttons.appendChild(deleteButton);
    
        savedChronometers.appendChild(container);
    
        this.state.chronometerStatus[this.state.chronometerID] = false;
        this.state.chronometerID++;
        
    }
    
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

                        <button type="submit" name="" class="save-button" onClick={this.insertChronometer}>
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