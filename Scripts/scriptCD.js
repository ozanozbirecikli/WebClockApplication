var globalID = localStorage.getItem("globalID") ? localStorage.getItem("globalID"): 0
var intervals = {}
window.onload = reloadPage

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

    localStorage.setItem(cdObject.id, cdObject.name.substring(7) + ":" + cdObject.hour + ":" + cdObject.min + ":" +cdObject.sec)

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

    cdss = localStorage.getItem("cds")
    
    cdss = cdss.replace(noofID+"-id:","")
    cdss = cdss.replace(noofID+"-id","")
    localStorage.setItem("cds",cdss)
    

    temp = document.getElementById(id.id).parentNode
    temp.parentNode.removeChild(temp)

    window.clearInterval(intervals[noofID])
}

function addCountDown(name, hour, minute, second){
    division = document.getElementById("warning").innerHTML= ""
    var CDdiv = document.createElement("div")
    var pCountDown = document.createElement("pre")
    pCountDown.setAttribute("id", (globalID+"-id"))

    if (!name && !hour && !minute && !second){
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
    }
    if (!isNaN(hour) && !isNaN(minute) && !isNaN(second) && (name!=="") && minute<60 && second <60){
        const cdObject = new countDown(name,hour,minute,second,globalID)
        
        deleter = document.createElement("button")
        deleter.setAttribute("id","div"+globalID)
        deleter.innerHTML = "DELETE"
        deleter.setAttribute("onclick","deleteClick(div"+globalID+")")
        deleter.classList.add("deleteButton")
        CDdiv.appendChild(deleter)

        globalID++        
        localStorage.setItem("globalID",globalID)
        CDdiv.appendChild(pCountDown)
        CDdiv.classList.add("countDownStyle")
        document.body.appendChild(CDdiv)

        cds = localStorage.getItem("cds")
        if (cds)
            localStorage.setItem("cds", cds + ":" + cdObject.getID())
        else
            localStorage.setItem("cds", cdObject.getID())
        

        interval = window.setInterval(function(){update(cdObject)}, 1000);
        intervals[globalID-1] = interval 
    }
    else{
        division = document.getElementById("warning").innerHTML= "One of the input is wrong, or more!"
    }
}


function reloadPage(){
    ids = localStorage.getItem("cds")

    if (ids.length >0)
        ids = ids.split(":")
    else return

    if (ids.length > 0)
        for (i = 0; i < ids.length; ++i){
            existing = ids[i]
            if (!existing||existing==="") continue
            enumber = existing.substring(0,existing.length-3)

            var CDdiv = document.createElement("div")
            var pCountDown = document.createElement("pre")
            pCountDown.setAttribute("id", (enumber+"-id"))
            
            content = localStorage.getItem(existing).split(":")
            
            const cdObject = new countDown(content[0],content[1],content[2],content[3],enumber)
            
            deleter = document.createElement("button")
            deleter.setAttribute("id","div"+enumber)
            deleter.innerHTML = "DELETE"
            deleter.setAttribute("onclick","deleteClick(div"+enumber+")")
            deleter.classList.add("deleteButton")
            CDdiv.appendChild(deleter)
        
            CDdiv.appendChild(pCountDown)
            CDdiv.classList.add("countDownStyle")
            document.body.appendChild(CDdiv)

            interval = window.setInterval(function(){update(cdObject)}, 1000);
            intervals[enumber] = interval 
        }

}
