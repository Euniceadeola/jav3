// Question 1
let score = 80;
console.log(score);

if ((score >= 70) && (score <= 100) ){
    result = 'A';
    console.log(result);
}
else if  ((score >= 60) && (score <= 69) ){
    result = 'B';
    console.log(result);
}
else if  ((score >= 50) && (score <= 59) ){
    result = 'C';
    console.log(result);
}
else if ((score >= 0) && (score <= 49) ){
    result = 'F';
    console.log(result);
}
// Question 2
function greet (firstname){
    console.log( firstname  + " welcome to code learn grow," + " " + "how can we help you");    
}
let firstname = prompt("enter firstname");
let lastname = prompt("enter lastname");

greet(firstname);


// Question 1
function bmiCalculator(weight,height) {
    var bmi = weight /(height * height);
    //  var bmi = weight /math.pow(height,2);
    return Math.round(bmi); 
}
var bmi = bmiCalculator(60,1.8);
console.log(bmi);

if ((bmi >= 18.5) && (bmi <= 24.9) ){
    result = 'normal';
    console.log(result);
}
else if ((bmi >=25)&& (bmi <= 29.9)){
    result = 'overweight';
    console.log(result);
    
}
else if ((bmi >=0)&& (bmi <= 18.4)){
    result = 'underweight';
    console.log(result);
}

// Question 2
function bpCalculator(millimeters,diastolic) {
    var bp = millimeters / diastolic ;
    return (bp); 
}
var bp = bpCalculator(120,80);
console.log(bp);

    if ((bp >= 1.5) && (bp <=1.61 )) {
        result = 'normal';
        console.log(result);
    }
    else if ((bp >= 1.62) && (bp <=1.73)) {
        result = 'high';
        console.log(result);
    }
    else if ((bp >=1) && (bp <=1.49 )) {
        result = 'low';
        console.log(result);
    }
