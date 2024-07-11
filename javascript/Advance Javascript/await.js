
const login =(userName,password)=>{
    return new Promise((reslove,reject)=>{
   console.log("login the data trying");
   if(userName=="shubham" && password=="123456"){
    reslove(userName);
   }
   else{
    reject("user name is not correct")
   }

    })
}

function  displaydata(userName){
    return new Promise((res,rej)=>{
        console.log("display data");
        res("hello "+userName );

    })
}


// login("shubham","123456").then((data)=>{
//     console.log(data);
//    displaydata(data).then((res)=>{
//     console.log(res);
//    })

// })
// .catch((err)=>{
//     console.log(err);
// })

// call promise using await , await is use in only asynchonus function ( async)

async  function thedata(){
  try{
    let deta = await login('shubham','123456');
    console.log(deta);
    let res  = await displaydata(deta);
    console.log(res);
  }
  catch(err){
    console.log(err);
  }
}

thedata();