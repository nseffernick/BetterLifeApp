'use strict';
import {Cell} from './cell.js';
//import {calendarCell} from './calendarCell.js';
//import {routineCell} from './routineCell.js';

export class schedule {
    constructor(height, width, wrapper) {
        this.height = height;
        this.width = width;
        this.wrapper = document.getElementById(wrapper);

        this.grid = [];
        this.initializeGrid(this.height, this.width, this.grid);
        this.constructSchedule(this.wrapper, this.grid, this.height, this.width)
    }

    getElementAtIndex(hIndex, wIndex, wrapper) {
        return wrapper.children[hIndex+1].children[wIndex];
    }

    getCellAtIndex(height, width, grid) {
        return grid[height][width];
    }

    initializeGrid(height, width, grid) {
    }

    constructSchedule(wrapper, grid, height, width) {
    }

}


