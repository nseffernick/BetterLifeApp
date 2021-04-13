'use strict';

 export class Cell {
    constructor(activity="none", infoArr=[]) {

        const ACTIVITY = Object.freeze({
            EXERCISE: {name: "red", colorHex: "ff0000"},
            VIDEOGAMES: {name: "green", colorHex: "00ff00"},
            SOCIAL: {name: "blue", colorHex: "0000ff"},
            WORK: {name: "yellow", colorHex: "ffff00"},
            ORANGE: {name: "orange", colorHex: "ffa500"},
            GREY: {name: "grey", colorHex: "080808"},
            PURPLE: {name: "purple", colorHex: "800080"},
            NOTHING: {name: "none", colorHex: "ffffff"}
        });

        this.infoArr = infoArr;
        this.activity = assignActivity(activity);
    }

    getInfoArr() {
        return this.infoArr;
    }

    getActivity() {
        return this.activity;  
    }

    assignActivity(activityString) {
        /*
        if (activityString == "none") {
            this.activity = ACTIVITY.NOTHING;
        }
        else {
            const activityName = Object.keys(fruit).find(name => fruit[name] === myFruit);
        }
        */
    }
}