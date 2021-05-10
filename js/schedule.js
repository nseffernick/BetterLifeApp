'use strict';
import {Cell} from './cell.js';
import {calendarCell} from './calendarCell.js';
import {routineCell} from './routineCell.js';

class schedule {
    constructor(height, width, wrapper) {
        this.height = height;
        this.width = width;
        this.wrapper = wrapper;

        this.grid = [];
        this.initializeGrid(this.height, this.width, this.grid);
    }

    static initializeGrid(height, width, grid) {
        for (let hIndex = 0; hIndex < height; index++) {
            grid.push([]);
            for (let wIndex = 0; wIndex < width; index++) {
                grid[hIndex][wIndex].push(new Cell());
            }
        }
    }

    static getElementAtIndex(hIndex, wIndex, wrapper) {
        return wrapper.children[hIndex].children[wIndex];
    }

    static addActivity(hIndex, wIndex, timeInterval, activity) {
        while(timeInterval >= 1) {
            timeInterval--;
            if (wIndex < this.width) {
                let aCell = this.grid[hIndex][wIndex];
                aCell.assignActivity(activity);
                wIndex++;
            }
            else {
                hIndex++;
                wIndex = 0;
                let aCell = this.grid[hIndex][wIndex];
                aCell.assignActivity(activity);
            }
        }
    }

    static constructGrid(wrapper, height, width) {
        for (let hIndex = 0; hIndex < height; index++) {
            for (let wIndex = 0; wIndex < width; index++) {
                this.getElementAtIndex(wrapper, height, width);
                
                //do stuff to this element to make it pretty
            }
        }
    }

}


