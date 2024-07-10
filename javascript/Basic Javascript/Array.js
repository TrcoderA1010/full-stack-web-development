// const student=["shubhan","jay","om","Roshan",12,3234.5];

// console.log(student);

// console.log(student[0])

// for(x of student){
//     console.log(x)
// }

// object inside in array

const student1 =[
    {
        name:"shubham",
        age:20,
        mark:82
    },
    {
        name:"roshan",
        age:20,
        mark:82
    },
    {
        name:"jay",
        age:20,
        mark:82
    }
]

console.log(student1)

console.log(student1[0].name)






// Array methods in javaScript

const arr2 =[1,2,45,56,6554,544]
console.log(arr2.length)
const arr3 = arr2.slice(4);
console.log(arr3)



arr2.pop()
console.log(arr2);
console.log(arr2);
arr2.push(20)
console.log(arr2);
arr2.sort()
console.log(arr2)
arr2.reverse()
console.log(arr2)

// foreach in array

arr2.forEach(function(value,index,array){
    console.log(value,index,array);
                                      // console.log(value);
                                     // console.log(index);
})

// map method is use for add some new item in a array or change the value but in new array


const arr5=[1,3,4,5,6,7,3556675757];
 const newarr =arr5.map(function(value){
    return value*2
 })
 console.log(arr5)
 console.log(newarr)