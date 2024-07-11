const MyPromise = new Promise((reslove,reject)=>{
    let x =1;
    if(x==1){
        reslove("success")
    }
    else{
        reject("sorry fail")
    }
});

MyPromise.then((res)=>{
  console.log(res);
})
.catch((err)=>{
    console.log(err)

})
