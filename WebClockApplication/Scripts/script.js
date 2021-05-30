var chronometerID = 0;
var chronometerIntervals = []
var chronometerStatus = []

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

function runChronometer(chronometer){

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

function updateText(value){
    if(value < 10)
        return "0" + value.toString();
    
    return value.toString();
}

function start(chronometer){
    
    var isStopped = chronometerStatus[chronometer.id];
    var selectedDiv = document.getElementById("container-" + chronometer.id);

    if(isStopped){
        window.clearInterval(chronometerIntervals[chronometer.id]);
        selectedDiv.querySelector("#start-button").innerHTML = "Start";
        chronometerStatus[chronometer.id] = false;
        selectedDiv.querySelector("#message").style.visibility = "visible"
    }else{
        interval = window.setInterval(runChronometer, 10, chronometer);
        chronometerIntervals[chronometer.id] = interval;
        selectedDiv.querySelector("#start-button").innerHTML = "Pause";
        chronometerStatus[chronometer.id] = true;
        selectedDiv.querySelector("#message").style.visibility = "hidden"
    }
}

function clearTime(chronometer){

    var selectedDiv = document.getElementById("container-" + chronometer.id);

    window.clearInterval(chronometerIntervals[chronometer.id]);
    chronometer.milisecond = 0;
    chronometer.second = 0;
    chronometer.minute = 0;
    chronometer.hour = 0;
    chronometerStatus[chronometer.id] = false;
    selectedDiv.querySelector("#display").innerHTML = "00:00:00:00";
    selectedDiv.querySelector("#start-button").innerHTML = "Start";
    selectedDiv.querySelector("#message").style.visibility = "hidden";
}

function deleteChronometer(id){
    var selectedDiv = document.getElementById("container-" + id);
    selectedDiv.parentNode.removeChild(selectedDiv)
    chronometerStatus[id] = false;
    window.clearInterval(intervals[id]);
}

function insertChronometer(){

    var choronometerName = document.getElementById("name-text-input").value;
    if(choronometerName === ""){
        alert("Please enter a valid name")
        return;
    }
    var newChronometer = new chronometer(chronometerID, choronometerName, 0, 0, 0, 0)
    var savedChronometers = document.getElementsByClassName("saved-background")[0];
    var container = document.createElement("div");
    container.className = "container";
    container.id = "container-" + chronometerID;
    
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
    deleteButton.setAttribute("onclick","deleteChronometer("+ chronometerID +")")
    buttons.appendChild(deleteButton);

    savedChronometers.appendChild(container);

    chronometerStatus[chronometerID] = false;
    chronometerID++;
    
}
