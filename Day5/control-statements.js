// if(cond){
//     //code if true
// }
// else{
//     //code if false +> 0 , null , false, '', "", empty variables, undefined
// }


let day = "Sunday"; 

if(day ==='Saturday' || day === 'Sunday'){
    console.log("Holiday")
}
else{
    if (day === 'Friday') {
        console.log("Weekend")
    } else {
        console.log("Weekday")
    }
}


let marksObtained = 300;

let per = (marksObtained/500) *100; //marksObtained/5  

if(per>=80){
        console.log("distinction")
}
else{
    if (per>=60){
        console.log("first division")
    }
    else{
        if (per>=45){
                console.log("second division")
        }
        else{
            if(per>=32){
                console.log("third division")
            }
            else{
                console.log("sorry you are failed")
            }
        }
    }
}



let totalUnitsComsumed = 100;
let amount;

if(totalUnitsComsumed <= 20){
    amount = 80;
}
else if(totalUnitsComsumed <= 30){
    amount = 80 + (totalUnitsComsumed+20) *5;
}
else if(totalUnitsComsumed <= 50){
    amount = 130 + (totalUnitsComsumed+30) *7;
}
else if(totalUnitsComsumed <= 80){
    amount = 270 + (totalUnitsComsumed+50) *10;
}
else{
    amount = 570 + (totalUnitsComsumed+80) *15;
}

console.log(amount);

let annualTax;
let annualSalary;
let monthlyTax;
let salary = 5000000;
let monthlySalary;

if(salary <= 500000){
    annualTax = (0.01*salary);
}
else if(salary <= 700000){
    annualTax = (5000) + (0.15*salary-500000 );
}
else if(salary <= 1000000){
    annualTax =  (5000) + (15*2000) + ((20/100)*salary-700000);
}
else if(salary <= 2000000){
    annualTax = (5000) + (15*2000 ) + 60000 +(30/100)*salary-100000;
}
else if(salary <= 5000000){
    annualTax = (5000) + (30000 ) + 60000 +300000 + (36/100)*salary-2000000;
}
else{
    annualTax = 5000 + (30000) + (60000) +300000 + 36*30000 + 0.39*salary-5000000;
}

annualSalary = salary -annualTax;
monthlyTax = annualTax/12;
monthlySalary = salary/12 -monthlyTax;

console.log("Total salary : ", salary);
console.log("Annual Tax : ", annualTax.toFixed(2));
console.log("Annual salary : ",annualSalary.toFixed(2));
console.log("Monthly Tax : ",monthlyTax.toFixed(2));
console.log("Monthly Salary : ",monthlySalary.toFixed(2));




let d = "sunday"
switch (d.toUpperCase()) {
    case 'SUNDAY':
    case 'SATURDAY':
        console.log("HOLIDAY")
        break;
    case 'FRIDAY':
        console.log("WEEKEND")
        break;

    default:
        console.log('WEEEKDAY')
        break;
}





