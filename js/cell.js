'use strict';

 export class Cell {
    constructor(activity=ACTIVITY.NOTHING, text="") {

        const ACTIVITY = Object.freeze({
            EXERCISE: {name: "red", colorHex: "ff0000"},
            VIDEOGAMES: {name: "green", colorHex: "00ff00"},
            SOCIAL: {name: "blue", colorHex: "0000ff"},
            WORK: {name: "yellow", colorHex: "ffff00"},
            GUITAR: {name: "orange", colorHex: "ffa500"},
            SLEEP: {name: "grey", colorHex: "080808"},
            PASSION: {name: "purple", colorHex: "800080"},
            NOTHING: {name: "none", colorHex: "ffffff"}
        });

        this.activity = activity;
        this.text = text;
    }

    getActivity() {
        return this.activity;  
    }

    getText() {
        return this.text;
    }
}