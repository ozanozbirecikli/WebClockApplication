import React, {Component} from 'react'
import axios from 'axios'
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
            chronometerStatus : [],
            chronometerNames : []
        }
    }
    
    setChronometerName = (index) => {
        this.state.chronometerNames[index] = "";
    }

    getExampleChronometers = () =>{

        axios.get(`https://608dc26ffe2e9c00171e1f61.mockapi.io/api/v1/chronometers`)
            .then(res => {
                
                var examples = res.data;
                examples.map((item) => {
                    var name = item.name;
                    var hour = item.hour;
                    var minute = item.minute;
                    var second = item.second;
                    var millisecond = item.millisecond;
                    console.log("item is: " + item)
                    console.log("hour: " + hour + " minute: " + minute +" second: " + second + " millisecond: " + millisecond)
                    var newChronometer = new chronometer(this.state.chronometerID, name, hour, minute, second, millisecond)
                    this.state.chronometerNames.push(name);
                    var savedChronometers = document.getElementsByClassName("saved-background")[0];
                    var container = document.createElement("div");
                    container.className = "item-container";
                    container.id = "container-" + this.state.chronometerID;
                    
                    this.createFields(container, name, newChronometer);
                    savedChronometers.appendChild(container);   
                    this.renderView(newChronometer.id, newChronometer.hour, newChronometer.minute, newChronometer.second, newChronometer.milisecond); 
                    this.state.chronometerStatus[this.state.chronometerID] = false;
                    this.state.chronometerID++; 
                })
            })
    }

    deleteChronometer = (id) => {
    var containerName = "container-" + id.toString();
    var selectedDiv = document.getElementById(containerName);
    this.setChronometerName(id);
    ReactDOM.findDOMNode(selectedDiv).parentNode.removeChild(selectedDiv)
    this.state.chronometerStatus[id] = false;
    window.clearInterval(this.state.chronometerIntervals[id]);
    }
    
    deleteStoppedChronometers = () => {
        for(var i = 0 ; i < this.state.chronometerID; i++){
            var container = document.getElementById("container-" + i.toString());
            if(container != null && this.state.chronometerStatus[i] === false)
                this.deleteChronometer(i);
        }
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
        this.renderView(chronometer.id, chronometer.hour, chronometer.minute, chronometer.second, chronometer.milisecond);
    }

    renderView = (id, hour, minute, second, milisecond) => {
        var hourText = "";
        var minuteText = "";
        var secondText = "";
        var milisecondText = "";
       
        milisecondText = this.updateText(milisecond);
        secondText = this.updateText(second);
        minuteText = this.updateText(minute);
        hourText = this.updateText(hour);
    
        var view = document.getElementById("container-" + id);
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

    createFields = (container, choronometerName, newChronometer) => {
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
    
    }

    checkChronometerName = (choronometerName) => {
        return this.state.chronometerNames.includes(choronometerName);
    }

    insertChronometer = () => {
        var newChronometer = document.getElementById("name-text-input");
        var choronometerName = newChronometer.value;
        
        if(choronometerName === ""){
            alert("Please Enter a Valid Name")
            return;
        }
        if(this.checkChronometerName(choronometerName)){
            newChronometer.value = ""
            alert("Please Enter a Differenct Name")
            return;
        }
        this.state.chronometerNames.push(choronometerName);
        newChronometer.value = "";
        var newChronometer = new chronometer(this.state.chronometerID, this.state.choronometerName, 0, 0, 0, 0)
        var savedChronometers = document.getElementsByClassName("saved-background")[0];
        var container = document.createElement("div");
        container.className = "item-container";
        container.id = "container-" + this.state.chronometerID;
        
        this.createFields(container, choronometerName, newChronometer);
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
                <button type="submit" name="" class="example-button" onClick={this.getExampleChronometers}>
                            Example Chronometers
                </button>
                <button type="submit" name="" class="delete-stopped-button" onClick={this.deleteStoppedChronometers}>
                            Delete Stopped Chronometers
                </button>
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