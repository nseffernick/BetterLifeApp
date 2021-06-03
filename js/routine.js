'use strict';
import {Cell} from './cell.js';
import {schedule} from './schedule.js';

class routine extends schedule {
    constructor(height, width, wrapper) {
        super(height, width, wrapper);
    }

    getElementAtIndex(hIndex, wIndex, wrapper) {
        return wrapper.children[hIndex+1].children[wIndex];
    }

    getCellAtIndex(height, width, grid) {
        return grid[height][width];
    }

    initializeGrid(height, width, grid) {
        for (let hIndex = 0; hIndex <= height; hIndex++) {
            grid.push([]);   
        }
        for (let hIndex = 0; hIndex <= height; hIndex++) {
            for (let wIndex = 0; wIndex < width; wIndex++) {
                grid[hIndex].push(new Cell());
            }
        }
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

const routineSchedule = new routine(8, 19, "routine");
