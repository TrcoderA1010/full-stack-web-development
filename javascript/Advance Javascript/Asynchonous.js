// console.log("hello")
// setTimeout(function(){
//     console.log("set time function")
// },5000);
// // Asynchonous javascript does not wait for excution of code in the function settimeout the code run after below line
// console.log("hi.......")

setTimeout(()=>{
    console.log("set time out function in Arrow")

},5000)
for (var i = 0; i<=6;i++){
    console.log(i)
}