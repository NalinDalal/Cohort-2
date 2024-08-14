enum Direction{ 
    Up, //1
    Down, //2
    Left,   //3
    Right   //4
}
function doSomething(keyPressed: Direction){
    if(keyPressed == Direction.Up){
        //console.log("Moving Up");
    }
}


doSomething (Direction.Right); 
doSomething (Direction.Down); 
console.log (Direction.Down); 
console.log (Direction.Up);