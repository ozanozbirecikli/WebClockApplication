var globalID = 0
var intervals = []
class countDown{
    constructor(name,hour,min,sec,id){
        this.name = "Title: " + name
        this.hour = hour
        this.min = min
        this.sec = sec
        this.id = id.toString() + "-id"
    }
    getID(){
        return this.id
    }

}

function update(cdObject){
    toWrite = document.getElementById(cdObject.id)

    if (cdObject.sec==0){
        if(cdObject.min==0){
            if(cdObject.hour == 0){
                toWrite.innerHTML = cdObject.name + " countdown is Finished"
                return
            }
            else{
                cdObject.min = 59
                cdObject.sec = 59
                cdObject.hour --
            }
        }
        else{
            cdObject.sec = 59
            cdObject.min --
        }
    }
    else cdObject.sec --
    toWrite.innerHTML = cdObject.name + "\n" + cdObject.hour + ":" + cdObject.min + ":" +cdObject.sec
    
}

function deleteClick(id){
    noofID = id.id.toString()
    noofID = parseInt(noofID.substring(3),10)
    console.log(noofID)
    temp = document.getElementById(id.id).parentNode
    console.log(temp);
    temp.parentNode.removeChild(temp)
    window.clearInterval(intervals[noofID])
}

function addCountDown(){
    division = document.getElementById("warning").innerHTML= ""
    var CDdiv = document.createElement("div")
    var pCountDown = document.createElement("pre")
    pCountDown.setAttribute("id", (globalID+"-id"))

    var name = document.getElementById("name").value
    document.getElementById("name").value = ""
    

    var hour = document.getElementById("hour").value
    document.getElementById("hour").value = ""

    var minute = document.getElementById("minute").value
    document.getElementById("minute").value = ""

    var second = document.getElementById("second").value
    document.getElementById("second").value = ""

    hour = parseInt(hour,10)
    minute = parseInt(minute,10)
    second = parseInt(second,10)

    if (!isNaN(hour) && !isNaN(minute) && !isNaN(second) && (name!=="")){
        const cdObject = new countDown(name,hour,minute,second,globalID)
        
        deleter = document.createElement("button")
        deleter.setAttribute("id","div"+globalID)
        deleter.innerHTML = "DELETE"
        deleter.setAttribute("onclick","deleteClick(div"+globalID+")")
        deleter.classList.add("deleteButton")
        CDdiv.appendChild(deleter)

        globalID++        

        CDdiv.appendChild(pCountDown)
        CDdiv.classList.add("countDownStyle")
        document.body.appendChild(CDdiv)

        interval = window.setInterval(function(){update(cdObject)}, 1000);
        intervals.push(interval)
    }
    else{
        division = document.getElementById("warning").innerHTML= "One of the input is wrong, or more!"
    }
}