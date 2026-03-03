function bmiCalc(w,h){
    let bmi = w / (h * h);
    return bmi;
}

var w=prompt("Please enter you weight in kg");
var h=prompt("Please enter your height in m");
let bmi=bmiCalc(w,h);
alert("Your bmi is "+bmi);