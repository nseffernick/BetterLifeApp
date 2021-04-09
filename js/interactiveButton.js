'use strict';
class interactiveButton {
    constructor(id) {
        this.wrapper = document.getElementById(id);
        this.button = this.wrapper.querySelector(".add_form_field");
        this.x = 0;
        
        let myButton = this;

        this.button.addEventListener('click', function() {
    
            let form1 = document.createElement("div");
            form1.className = "row";
            
            let form2 = document.createElement("div");
            form2.className = "activity";
            let inputActivity = document.createElement("input");
            inputActivity.className = "input-activity";
            inputActivity.setAttribute("placeholder", "Activity");
            inputActivity.setAttribute("type", "text")
            inputActivity.setAttribute("name", "mytext[]")
            form2.appendChild(inputActivity);

            let form3 = document.createElement("div");
            form3.className = "time";
            let inputTime = document.createElement("input");
            inputTime.className = "input-time";
            inputTime.setAttribute("placeholder", "Time");
            inputTime.setAttribute("type", "text")
            inputTime.setAttribute("name", "mytext[]")
            form3.appendChild(inputTime);

            let del = document.createElement("a")
            //del.setAttribute("href", "#")
            del.className = "delete"
            del.innerText = "Delete"
            del.addEventListener('click', function() {
                del.parentNode.remove(0);
                this.x--;
            })

            form1.appendChild(form2);
            form1.appendChild(form3);
            form1.appendChild(del);

            //let form1 = document.createElement('<div class=row><div class=activity>Activity<input class=input-activity type="text" name="mytext[]"/></div><div class=time>Time (Minutes)<input class=input-time type="text" name="mytext[]"/></div><a href="#" class="delete">Delete</a></div>')
            myButton.wrapper.appendChild(form1); //add input box
        })
    }
}

const exceriseButton = new interactiveButton("exercise");
const funButton = new interactiveButton("fun");
const sleepButton = new interactiveButton("sleep");