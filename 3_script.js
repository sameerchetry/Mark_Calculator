window.onload = function() {
    const saved = JSON.parse(localStorage.getItem("marks"));

    if(saved){
        document.getElementById("math").value = saved[0];
        document.getElementById("science").value = saved[1];
        document.getElementById("english").value = saved[2];
        document.getElementById("ss").value = saved[3];
        document.getElementById("geo").value = saved[4];
        document.getElementById("hindi").value = saved[5];
        document.getElementById("e3").value = saved[6];
    }
}

function calculate(){

    const marks = [
        Number(document.getElementById("math").value),
        Number(document.getElementById("science").value),
        Number(document.getElementById("english").value),
        Number(document.getElementById("ss").value),
        Number(document.getElementById("geo").value),
        Number(document.getElementById("hindi").value),
        Number(document.getElementById("e3").value)
    ];

    for(let i=0;i<5;i++){
        if(marks[i] < 0 || marks[i] > 100){
            alert("First 5 subjects must be between 0 and 100");
            return;
        }
    }

    if(marks[5] < 0 || marks[5] > 50){
        alert("Hindi must be between 0 and 50");
        return;
    }

    if(marks[6] < 0 || marks[6] > 50){
        alert("English 3rd must be between 0 and 50");
        return;
    }

    localStorage.setItem("marks", JSON.stringify(marks));

    const total = marks.reduce((a,b)=>a+b,0);
    const percentage = (total/600)*100;

    let division;

    if(percentage >= 80)
        division = "Distinction";
    else if(percentage >= 75)
        division = "Star Mark";
    else if(percentage >= 60)
        division = "First Division";
    else if(percentage >= 40)
        division = "Second Division";
    else if(percentage >= 30)
        division = "Third Division";
    else
        division = "Fail";

    document.getElementById("result").innerText =
        `Total Marks: ${total}/600
Percentage: ${percentage.toFixed(2)}%
Division: ${division}`;
}