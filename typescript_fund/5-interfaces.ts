//some times when you're making a function it 
//ends up with a lot of params like this;
let drawPoint = (x, y, a, b, d, e) => {}
//this is bad, avoid it. 
//to avoid it, it is likely that a group of these parameters belong
//to a single concept. So we want to encapsulate the related params into 
//an object and pass that 1 obj in as a param.
//so instead of this
let drawPoint2 = (x, y) => {}
//passs in a point object
let drawPoint3 = (point) => {}
//and call your function like this:
drawPoint3({
    x: 1,
    y: 2
});
//to assert what should go in as params we use inline annotation:
let drawPoint4 = (point: { x:number, y: number}) => {}
//this works fine for simple cases this is fine but for more complex situations 
//we want to use an interface:
interface Point { 
    x:number, 
    y: number
}
//here we define the shape of an object
let drawPoint5 = (point: Point) => {}
//an intereface is just a custom type, it's first letter should always be cap