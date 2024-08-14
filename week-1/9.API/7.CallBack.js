function log1(){
    console.log('hello world');
}

function logPresent(fn){
    fn();
}

logPresent(log1);