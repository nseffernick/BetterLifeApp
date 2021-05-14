'use strict';
import {Cell} from './cell.js';
//import {calendarCell} from './calendarCell.js';
//import {routineCell} from './routineCell.js';

class schedule {
    constructor(height, width, wrapper) {
        this.height = height;
        this.width = width;
        this.wrapper = document.getElementById(wrapper);

        this.grid = [];
        this.initializeGrid(this.height, this.width, this.grid);
        this.constructSchedule(this.wrapper, this.grid, this.height, this.width)
    }

    initializeGrid(height, width, grid) {
        for (let hIndex = 0; hIndex < height; hIndex++) {
            grid.push([]);   
        }
        for (let hIndex = 0; hIndex < height; hIndex++) {
            for (let wIndex = 0; wIndex < width; wIndex++) {
                grid[hIndex].push(new Cell());
            }
        }
    }

    getElementAtIndex(hIndex, wIndex, wrapper) {
        return wrapper.children[hIndex+1].children[wIndex];
    }

    getCellAtIndex(height, width, grid) {
        return grid[height][width];
    }

    constructSchedule(wrapper, grid, height, width) {
        for (let hIndex = 0; hIndex < height; hIndex++) {
            for (let wIndex = 0; wIndex < width; wIndex++) {
                let element = this.getElementAtIndex(hIndex, wIndex, wrapper);
                let cellData = this.getCellAtIndex(hIndex, wIndex, grid);

                element.className += " " + cellData.activity.name;
                element.innerText = cellData.activity.name;
            }
        }
    }

}

const routineSchedule = new schedule(8, 19, "routine");
