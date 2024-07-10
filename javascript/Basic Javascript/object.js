let obj={
    name:"shubham",
    age :18,
    dob:"15-09-2003",
    // function inside in object
    allInfo:function(){
        console.log(`name = ${obj.name} age = ${obj.age} dob = ${obj.dob}`)
    }  
}

// console.log(obj.name); console.log(obj["name"]);  both are same 

console.log(obj)
console.log(obj.allInfo());

obj.allInfo();