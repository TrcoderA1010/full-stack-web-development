
var s=0;
var min= 0;
var hr = 0;
var istime = true;

function start(){
    if(istime == true ){
        istime = false;
        timer();

    }
}

function timer(){
    if(istime == false){
        s  = parseInt(s);
        min = parseInt(min);
        hr = parseInt(hr)
        s++;
        console.log(s)
        if(s == 60 ){
            min++;
            s=0;
        }
        if (min == 60 ){
            hr++;
            min = 0;
        }
        if (hr == 24 ){
            hr=0;
        }
        if(s < 10){
            s="0"+s;
        }
        if(min < 10){
            min="0"+min;
        }
        if(hr < 10){
            hr="0"+hr;
        }
        arise.innerHTML= " " + hr +":"+ min +":"+ s 
        setTimeout(() => {
            timer();
        }, 1000);
    }

}

function stop(){
    istime = true;
}

function restart(){
    s=0;
   min= 0;
   hr = 0;
   istime = true;

    arise.innerHTML= "  00:00:00"
}