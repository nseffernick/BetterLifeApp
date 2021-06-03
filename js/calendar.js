'use strict';
import {Cell} from './cell.js';
import {schedule} from './schedule.js';

class calendar extends schedule {
    constructor(height, width, wrapper) {
        super(height, width, wrapper);
    }

    getElementAtIndex(hIndex, wIndex, wrapper) {
        return wrapper.children[hIndex].children[wIndex];
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
        let today = new Date("06/03/2021");
        for (let hIndex = 0; hIndex < height; hIndex++) {
            for (let wIndex = 0; wIndex < width; wIndex++) {
                let element = this.getElementAtIndex(hIndex, wIndex, wrapper);
                let cellData = this.getCellAtIndex(hIndex, wIndex, grid);

                element.className += " " + cellData.activity.name;
                element.innerText = today.getDate();
                let newDate = today.setDate(today.getDate() + 7);
                today = new Date(newDate);

            }
            let newDate = today.setDate(today.getDate() - (width*7) + 1);
            today = new Date(newDate);
        }
    }
}

const calendarSchedule = new calendar(7, 5, "calendar");
