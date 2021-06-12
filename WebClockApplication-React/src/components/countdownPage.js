import React, {Component} from 'react';
import '../Styles/countdownStyles.css'
import { Link } from "react-router-dom";
import axios from 'axios'
import ReactDOM from 'react-dom'
import { Container, Row, Col } from 'reactstrap'

var globalID = localStorage.getItem("globalID") ? localStorage.getItem("globalID"): 0
var intervals = {}


class countDown{
    constructor(name,hour,min,sec,id){
        this.name = "Title: " + name
        this.hour = hour
        this.min = min
        this.sec = sec
        this.id = id.toString() + "-id"
    }
    getID = () =>{
        return this.id
    }

}

class CountdownPage extends React.Component{
    
    getExampleCountdowns = () =>{

    axios.get(`https://608dc26ffe2e9c00171e1f61.mockapi.io/api/v1/countdowns`)
        .then(res => {
            
            var examples = res.data;
            examples.map((item) => {
                var name = item.name;
                var hour = parseInt(item.hour);
                var minute = parseInt(item.minute);
                var second = parseInt(item.second);
                
                this.addCountDown(name,hour,minute,second)
            })
        })
    }
    
update = (cdObject) => {
    var toWrite = document.getElementById(cdObject.id)

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
deleteClick = (id) => {
    var noofID = id.toString()
    noofID = parseInt(noofID.substring(3),10)

    var cdss = localStorage.getItem("cds")
    
    cdss = cdss.replace(noofID+"-id:","")
    cdss = cdss.replace(noofID+"-id","")
    localStorage.setItem("cds",cdss)
    
    var x = document.getElementById(id)
    console.log(id)
    var temp = ReactDOM.findDOMNode(document.getElementById(id)).parentNode
    temp.parentNode.removeChild(temp)

    window.clearInterval(intervals[noofID])
}
check = () =>{
        var name = document.getElementById("countdown-name").value
        document.getElementById("countdown-name").value = ""
        

        var hour = document.getElementById("hour").value
        document.getElementById("hour").value = ""

        var minute = document.getElementById("minute").value
        document.getElementById("minute").value = ""

        var second = document.getElementById("second").value
        document.getElementById("second").value = ""

        hour = parseInt(hour,10)
        minute = parseInt(minute,10)
        second = parseInt(second,10)
        this.addCountDown(name,hour,minute,second)
}

addCountDown = (name,hour,minute,second) => {
    var CDdiv = document.createElement("div")
    var pCountDown = document.createElement("pre")
    pCountDown.setAttribute("id", (globalID+"-id"))
    
    if (!isNaN(hour) && !isNaN(minute) && !isNaN(second) && (name!=="") && minute<60 && second <60){
        const cdObject = new countDown(name,hour,minute,second,globalID)
        var division = document.getElementById("warning").innerHTML= ""
        var deleter = document.createElement("button")
        deleter.setAttribute("id","div"+globalID)
        deleter.innerHTML = "DELETE"
        var deleteId = globalID
        deleter.onclick = () => {
            this.deleteClick("div"+(deleteId));
        }
        deleter.classList.add("deleteButton")
        CDdiv.appendChild(deleter)

        globalID++        
        localStorage.setItem("globalID",globalID)
        CDdiv.appendChild(pCountDown)
        CDdiv.classList.add("countDownStyle")
        document.body.appendChild(CDdiv)

        var cds = localStorage.getItem("cds")
        if (cds)
            localStorage.setItem("cds", cds + ":" + cdObject.getID())
        else
            localStorage.setItem("cds", cdObject.getID())
        

        var interval = window.setInterval(()=>{this.update(cdObject)}, 1000);
        intervals[globalID-1] = interval 
    }
    else{
        division = document.getElementById("warning").innerHTML= "One of the input is wrong, or more!"
    }
}


reloadPage = () => {
    var ids = localStorage.getItem("cds")

    if (ids.length >0)
        ids = ids.split(":")
    else return

    if (ids.length > 0)
        for (var i = 0; i < ids.length; ++i){
            var existing = ids[i]
            if (!existing||existing==="") continue
            var enumber = existing.substring(0,existing.length-3)

            var CDdiv = document.createElement("div")
            var pCountDown = document.createElement("pre")
            pCountDown.setAttribute("id", (enumber+"-id"))
            
            var content = localStorage.getItem(existing).split(":")
            
            const cdObject = new countDown(content[0],content[1],content[2],content[3],enumber)
            
            var deleter = document.createElement("button")
            deleter.setAttribute("id","div"+enumber)
            deleter.innerHTML = "DELETE"

            deleter.onclick = () => {
                this.deleteClick("div"+enumber);
            }
            deleter.classList.add("deleteButton")
            CDdiv.appendChild(deleter)
        
            CDdiv.appendChild(pCountDown)
            CDdiv.classList.add("countDownStyle")
            document.body.appendChild(CDdiv)

            var interval = window.setInterval(function(){this.update(cdObject)}, 1000);
            intervals[enumber] = interval 
        }

}

    componentDidMount() {
        window.addEventListener('load', this.reloadPage);
    }
    componentWillUnmount() { 
        window.removeEventListener('load', this.reloadPage)  
    }
     
    render(){
        return(
            
            <div class="bgcountdownpage">
                <Container fluid={true}>
                    <Row>
                        <Link to={{ pathname: "/home" }}>
                        <a class="homebutton">HOME</a>
                        </Link>
                    </Row>
                <Row>
                    <Col>
                <div class="formClass" id="inputdiv">
                    <nobr class="textGeneral"> Countdown Name</nobr>
                    <input class="inputStyle" id="countdown-name" type="text"  name="cd-name"/>
                    <br/>
                    <nobr class="textGeneral"> Hour </nobr>
                    <input class="inputStyle" id="hour" type="number" min="0" max="99" name="Hour"/>
                    <br/>
                    <nobr class="textGeneral"> Minute </nobr>
                    <input class="inputStyle" id="minute" type="number"min="0" max="59" name="Minute"/>
                    <br/>
                    <nobr class="textGeneral"> Second </nobr>
                    <input class="inputStyle" id="second" type="number"min="0" max="59" name="Second"/>
                    <br/>
                    <p id="warning" class="textGeneral"/>
                </div>
                    </Col>
                </Row>
                </Container>
                <br/>
                <button class="plusButton" onClick={this.check}>Add Countdown</button>
                <button class="plusButton" onClick={this.getExampleCountdowns}>Example Countdown</button>
                
            </div>

        );
    }

}


export default CountdownPage