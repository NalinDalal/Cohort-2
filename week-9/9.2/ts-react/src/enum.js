"use strict";
//import { Key } from "react";
var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 0] = "Up";
    Direction[Direction["Down"] = 1] = "Down";
    Direction[Direction["Left"] = 2] = "Left";
    Direction[Direction["Right"] = 3] = "Right";
})(Direction || (Direction = {}));
function doSomething(keyPressed) {
    //do something
    if (keyPressed === Direction.Up) {
        console.log("Moving Up");
    }
}
doSomething(Direction.Right);
