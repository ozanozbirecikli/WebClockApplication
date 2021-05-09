var chronometerID = 0;
var chronometerIntervals = []

var hour = 0;
var minute = 0;
var second = 0;
var milisecond = 0;

var hourText = "";
var minuteText = "";
var secondText = "";
var milisecondText = "";

var stopped = false;


function chronometer(){
    milisecond++;
    if(milisecond === 100){
        milisecond = 0;
        second ++;
        
        if(second === 60){
            second = 0;
            minute++;

            if(minute === 60){
                minute = 0;
                hour++;
            }
        }
    }

    milisecondText = updateText(milisecond);
    secondText = updateText(second);
    minuteText = updateText(minute);
    hourText = updateText(hour);

    document.getElementById("display").innerHTML = hourText + ":" + minuteText + ":" + secondText + ":" + milisecondText;

}

function updateText(value){
    if(value < 10)
        return "0" + value.toString();
    
    return value.toString();
}

function insertChronometer(){

    var choronometerName = document.getElementById("name-text").value;
    if(choronometerName === ""){
        alert("Please enter a valid name")
        return;
    }
    var savedChronometers = document.getElementsByClassName("saved-background")[0];
    var container = document.createElement("div");
    container.className = "container";
    container.id = "container-" + chronometerID;
    
    var name = document.createElement("p");
    container.appendChild(name);
    name.id = "name";
    name.innerHTML = choronometerName;

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
    startButton.setAttribute("onclick","start()")
    startButton.innerHTML = "Start";
    buttons.appendChild(startButton);

    var clearButton = document.createElement("button");
    clearButton.id = "clear-button";
    clearButton.innerHTML = "Clear";
    clearButton.setAttribute("onclick","clearTime()")
    //div"+globalID+"
    buttons.appendChild(clearButton);

    var deleteButton = document.createElement("button");
    deleteButton.id = "delete-button";
    deleteButton.innerHTML = "Delete";
    deleteButton.setAttribute("onclick","clearTime()")
    buttons.appendChild(deleteButton);

    savedChronometers.appendChild(container);

    chronometerID++;
    
    
}

function deleteChronometer(){

}

function start(){
    
    if(stopped){
        window.clearInterval(interval);
        document.getElementById("start-button").innerHTML = "Start";
        stopped = false;
        document.getElementById("message").style.visibility = "visible"
    }else{
        interval = window.setInterval(chronometer, 10);
        document.getElementById("start-button").innerHTML = "Pause";
        stopped = true;
        document.getElementById("message").style.visibility = "hidden"
    }
}

function clearTime(){

    window.clearInterval(interval);
    milisecond = 0;
    second = 0;
    minute = 0;
    hour = 0;
    stopped = false;
    document.getElementById("display").innerHTML = "00:00:00:00";
    document.getElementById("start-button").innerHTML = "Start";
    document.getElementById("message").style.visibility = "hidden"
}