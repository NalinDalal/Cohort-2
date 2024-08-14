"use strict";
function runAfter1s(fn) { setTimeout(fn, 1000); }
runAfter1s(function () { console.log('Hello after 1s'); });
