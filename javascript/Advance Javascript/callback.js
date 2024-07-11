function logeinuser(x){
    console.log(" loged in successful");
    x();
}

function display(){
    console.log(" hello shubham");
}

logeinuser(display);