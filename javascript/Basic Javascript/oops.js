
// class student {

//     constructor(name1,name2){
//         this.name1=name1;
//         this.name2=name2;

        
//     }
    
//     display(){
//         console.log(`frist name is ${this.name1} \n  last name is ${this.name2}`)
//     }
// }

// const s1= new student("shubham","Nanne");
// s1.display()


// inheritance in javaScript

class person {

    constructor(frist,last){
        this.frist=frist;
        this.last=last;
    }

    personDisplay(){
        console.log(" data from class person ")
        console.log(`name =${this.frist} \n last name = ${this.last}`);
    }
}

class student1 extends person{

    constructor(frist,last){
        super(frist,last);
        this.frist=frist;
        this.last=last;
    }
    studentDisplay(){
        console.log(" data from class student ")
        console.log(`name =${this.frist} \n last name = ${this.last}`);
    }


}

const stu1 = new student1("vaishnavi" , "chaware")
stu1.personDisplay();
stu1.studentDisplay();