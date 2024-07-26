// const t=document.getElementsByClassName("heding1");
// const y=document.getElementsByTagName("p");
// const adsdd=document.querySelector("#heding")
// // queryselector madhi class (.)and id(#) or tag name 
// // queryselector chi class same rahili tari te top varchi class gheil ager multiple class access karachi asel tr in blow
// const p=document.querySelectorAll(".abc")


// const x=document.getElementById("heding");
// x.style.color="red";

// setTimeout(()=>{
//     const x=document.getElementById("heding");
// x.style.color="white";
// x.style.backgroundColor="royalblue"
// },5000);

function changeText(){
   const x = document.getElementById("hd");
   x.style.color="white"
   x.innerHTML="we learn javascript"
   x.style.backgroundColor="royalblue";

}


// document.getElementById("btn").onclick = changeText; another syntax to do onclick on function


function onmousedown(){
    setTimeout(() => {
        document.getElementById("box").style.backgroundColor="green"
        
    }, 1000);
}

function mouseup(){
    setTimeout(() => {
        document.getElementById("box").style.backgroundColor="yellow"
        
    }, 2000);
}

function clickChange(){
    setTimeout(() => {
        document.getElementById("box").style.backgroundColor="blue"
        
    }, 4000);
}

function change(){
    const text = document.querySelector("#text1");
    console.log(text.value)
}

function load(){
    console.log(" the page is reload")
}


// in this upper addEvent function can not run multiple function on one click that can be override
// but useing addEventListener we run mulitple function 

document.querySelector("#btn2").addEventListener("click",()=>{
    console.log("eventlistener1")
})

document.querySelector("#btn2").addEventListener("click",()=>{
    console.log("eventlistener2")
})


function addtext(){
    const pera = document.createElement("p");
    const node = document.createTextNode("the quick brown fox jumps over the lazy dog .")
    pera.appendChild(node);
    const box = document.querySelector("#box1")
    box.appendChild(pera)
}