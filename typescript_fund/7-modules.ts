//Modules: In TypeScript you can think of each file as a module.

class Point7 { 
    constructor(private _x?: number, private _y?: number) {
    }
    draw() {

    }
}
let point7 = new Point7(1,2);
point7.draw();
//so ideally you want this to be it's own module
//so you would move this code:
class Point8 { 
    constructor(private _x?: number, private _y?: number) {
    }
    draw() {

    }
}
//to it's own file point.ts
//this file defines it's own scope, in order to make it accessible outside this file
//we have to export it. 
export class Point9 { 
    constructor(private _x?: number, private _y?: number) {
    }
    draw() {

    }
}
// now in main.ts we import our module
import { Point } from '6-classes'; 
let point9 = new Point7(1,2);
point9.draw();