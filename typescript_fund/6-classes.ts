//Class: Groups variables (properties) and functions 
//(methods) that are highly related. instead of an interface in the prev lesson
//we make it a class
//this point here is a class
class Point { 
    private x: number;
    y: number;
    
    //if we dont know the param values the solution is to
    //make the params options using the ? mark
    constructor(x?: number, y?: number) {
        this.x = x;
        this.y = y;
    }

    draw() {
        console.log('x is: ' + this.x);
    }


}

let point = new Point(1, 2);//here we supply the parameters in the constructor x, y
//because the params are optional with "?" we can supply no params
let point2 = new Point();

//^^this point here is an object, an object is an instance
//of a class
// point.x = 1;
// point.y = 2;
//^^instead of doing this we use a constructor
point.draw();

//-----access modifiers-----
//if we do not want to be able to change the x and y values 
//we can use access modifiers to prevent this:
let point3= new Point(1, 2);
point.x = 3;
// in typescript there are 3 access modifiers
//public: by default all members are public.
//private
//protected
//if we set x to private: private x: number;
//we get an error when we try changing it's value
point.x = 3;
//once you initalize it, you can no longer change its value

//-----access modifiers in constructor parameters-------
class Point2 { 
    private x: number;
    private y: number;
    
    //this looks a little redundant with x and y
    constructor(x?: number, y?: number) {
        this.x = x;
        this.y = y;
    }

    draw() {
        console.log('x is: ' + this.x);
    }
}
class Point3 { 
    //this looks a little redundant with x and y
    //so we'll delete them and add the access modifiers to the constctr
    //parameter
    constructor(private x?: number, private y?: number) {
        //if you a prefix a constrctr parameter w/ an access modifier in TS
        // it automatically initilizes the fields in params, so you don't need this anymore:
        // this.x = x;
        // this.y = y;
    }

    draw() {
        console.log('x is: ' + this.x);
    }
}
//-----Properties-------
class Point4 { 
    constructor(private x?: number, private y?: number) {
    }

    draw() {
        console.log('x is: ' + this.x);
    }
    get X() {
        return this.x;
    }
    set X(value) {
        if (value < 0) {
            throw new Error('Error');
        } else {
            this.x = value;
        }
    }
}
let point5 = new Point4(1,2);
//a probelem with this is we cannot access point.x to display to 
//the user
point.x = 1;
point.draw();

// a solution is to add a method in the class to access x
getX() {
    return this.x;
}
//now we can do this
let x = point5.getX();

//if we want to allow the user to change x we can make another
//method
setX() {
    if (value < 0) {
        throw new Error('Error');
    } else {
        this.x = value;
    }
}
point5.setX(1);
//for this use case we can use a property, and change the get 
// and set functions to the following:
set X() {
    if (value < 0) {
        throw new Error('Error');
    } else {
        this.x = value;
    }
}
get X() {
    return this.x;
}
//the difference between these two is we can use these props as 
//fields.
//so we can read x like this now:
let x2 = point5.X;
//and set it
point5.X = 10;

//we always use camel case for fields, since set and get methods are fields
//we want them to be camel case, but naming them x() could clash.
//so avoid this we use a convention of underscore _x on our fields
// so exampe:
class Point6 { 
    constructor(private _x?: number, private _y?: number) {
    }
    set x(values {
        if (value < 0) {
            throw new Error('Error');
        } else {
            this._x = value;
        }
    }
    get x() {
        return this._x;
    }
}