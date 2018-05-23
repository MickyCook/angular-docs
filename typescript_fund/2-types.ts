let count = 5;
count = 'a';
//count has been set to type number
let a;
//declare a var w/o a type and type is any
a = 1;
a = true;
a = 'a';
//now you can assign any type
let b: number;
//the best solution if you don't know the var value is to assign a type.

//different types in typescript
let c: number;//number
let d: boolean;//boolean
let e: any;//any
let f: any[];//array

//enums
//in oop langs we have the concept called enums
//where you can put related constants in a container
//instead of doing this:
const ColorRed = 0;
const colorGreen = 1;
const colorBlue = 2;
//we can do this:

enum Color {
    //for values they automatically get values set
    //Red gets set to 0
    //Green gets set to 1
    //Blue gets set to 2
    //but it's best to explic set them
    Red = 0, 
    Green = 1, 
    Blue = 2
}
let backgroundColor = Color.Red;