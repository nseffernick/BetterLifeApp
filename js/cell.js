'use strict';
import {ACTIVITY} from './activity.js';

export class Cell {
    constructor(activity=ACTIVITY.NOTHING, text="") {
        this.activity = activity;
        this.text = text;
    }

    getActivity() {
        return this.activity;  
    }

    getText() {
        return this.text;
    }

    assignActivity(activity) {
        this.activity = activity;
    }
}