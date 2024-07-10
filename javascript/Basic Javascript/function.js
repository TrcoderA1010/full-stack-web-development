function demo(){

    console.log(" hello world");

   
}
demo();


function sum(x,y){
    var z = x+y;

    return z;

}

console.log(sum(10,20))


function table(y){
    for(var i =1;i<=10;i++){
        console.log(y,"X",i,"=",y*i)
    }
}

table(5)

// Arrow function 

const mul =()=>{
    console.log("Arrow function")
}

mul();