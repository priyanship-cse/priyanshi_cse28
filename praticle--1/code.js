

function calculateResult(){
    let n = parseInt(document.getElementById("subject").value);
    let total = 0;

    for (let i = 1; i <= n; i++) {
        let marks = parseFloat(prompt("Enter marks for subject " + i));
        if(isNaN(marks)){
            marks = 0;
        }
        total += marks;
    }

    let avg = total / n;
    let grade;
    let result;

    if(avg >= 90){
        grade = "A++";
    }
    else if(avg >= 80){
        grade = "A+";
    }
    else if(avg >= 70){
        grade = "A";
    }
    else if(avg >= 60){
        grade = "B";
    }
    else if(avg >= 50){
        grade = "C";
    }
    else{
        grade = "F";
    }

    if(avg >= 40){
        result = "Pass";
    }else{
        result = "Fail";
    }

    document.getElementById("result").innerHTML =
    "Total Marks : " + total + "<br>" +
    "Average Marks : " + avg.toFixed(2) + "<br>" +
    "Grade : " + grade + "<br>" +
    "Result : " + result;
}


// function calculateResult(){

// let n = parseInt(document.getElementById("subject").value);

// if(!n || n <= 0){
// alert("Enter valid number of subjects");
// return;
// }

// let total = 0;

// for(let i = 1; i <= n; i++){

// let marks = parseFloat(prompt("Enter marks for subject " + i));

// if(isNaN(marks)){
// marks = 0;
// }

// total += marks;

// }

// let avg = total / n;

// let grade;
// let result;

// if(avg >= 90){
// grade = "A++";
// }
// else if(avg >= 80){
// grade = "A+";
// }
// else if(avg >= 70){
// grade = "A";
// }
// else if(avg >= 60){
// grade = "B";
// }
// else if(avg >= 50){
// grade = "C";
// }
// else{
// grade = "F";
// }

// if(avg >= 40){
// result = "Pass";
// }
// else{
// result = "Fail";
// }

// document.getElementById("result").innerHTML =
// "Total Marks : " + total + "<br>" +
// "Average Marks : " + avg.toFixed(2) + "<br>" +
// "Grade : " + grade + "<br>" +
// "Result : " + result;

// }
