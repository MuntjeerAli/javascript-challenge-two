let weightMark = 95;
let heightMark = 1.88;
let weightJohn = 85;
let heightJohn = 1.76;

let bmiMark = weightMark / heightMark ** 2;

let bmiJohn = weightJohn / heightJohn ** 2;

const markHigherBMI = bmiMark > bmiJohn;

if(bmiMark > bmiJohn){
    console.log("Mark's BMI is higher than John")
}else {
    console.log("John's BMI is higher than Mark's")
}

if (bmiMark > bmiJohn) {
    console.log(`Mark's BMI (${bmiMark}) is higher than John's (${bmiJohn})!`)
} else {
    console.log(`John's BMI (${bmiJohn}) is higher than Marks's (${bmiMark})!`)
}
