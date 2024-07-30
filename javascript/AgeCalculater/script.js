

function claculate(){
    let currentDay = parseInt(cd.value.slice(8,10),10);
    let currentMonth = parseInt(cd.value.slice(5,7),10);
    let currentYear = parseInt(cd.value.slice(0,4),10);
    console.log("current date :-",currentYear,currentMonth,currentDay)
    let dobDay = parseInt(dob.value.slice(8,10),10);
    let dobMonth = parseInt(dob.value.slice(5,7),10);
    let dobYear = parseInt(dob.value.slice(0,4),10);
    console.log("dob  date :-",dobYear,dobMonth,dobDay)

    if(currentDay>=dobDay){
        day=currentDay-dobDay;
    }
    else{
        day=currentDay + new Date(currentYear,currentMonth).getDate() - dobDay;
        currentMonth --; 
    }
    if(currentMonth>= dobMonth){
        month = currentMonth + dobMonth;
    }
    else{
        month = currentMonth+ 12 - dobMonth;
       currentYear --;
    }
    year = currentYear - dobYear;

    if(year<0){
        ageText.innerHTML="kay mazak kr rahe ho yar , sahi date dalo "

    }
    else{
        ageText.innerHTML = year + "years,"+ month +"months,"+ day+"days";
    }
    
}
