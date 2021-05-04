'use strict';

 export class routineCell extends Cell {
    constructor(time, day, activity, text) {
        super(activity, text);
        this.time = time;
        this.day = day;
    }

    getTime() {
        return this.time;
    }

    getDay() {
        return this.day;
    }

    assignCell() {
    }
}