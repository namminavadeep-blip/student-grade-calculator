function calculateGrade() {


    let studentName = document.getElementById("studentName").value;


    let grade1 = Number(document.getElementById("grade1").value);
    let grade2 = Number(document.getElementById("grade2").value);
    let grade3 = Number(document.getElementById("grade3").value);


    let result = document.getElementById("result");



    if(studentName === "") {

        result.innerHTML = "Please enter student name.";

        return;

    }



    if(
        document.getElementById("grade1").value === "" ||
        document.getElementById("grade2").value === "" ||
        document.getElementById("grade3").value === ""
    ){

        result.innerHTML = "Please enter all grades.";

        return;

    }



    if(
        grade1 < 0 || grade1 > 100 ||
        grade2 < 0 || grade2 > 100 ||
        grade3 < 0 || grade3 > 100
    ){

        result.innerHTML = 
        "Grades must be between 0 and 100.";

        return;

    }



    let average = 
    (grade1 + grade2 + grade3) / 3;



    let letterGrade;



    if(average >= 90){

        letterGrade = "A";

    }
    else if(average >= 80){

        letterGrade = "B";

    }
    else if(average >= 70){

        letterGrade = "C";

    }
    else if(average >= 60){

        letterGrade = "D";

    }
    else{

        letterGrade = "F";

    }



    result.innerHTML =

    `
    Student: ${studentName}
    <br>
    Average Score: ${average.toFixed(2)}
    <br>
    Final Grade: ${letterGrade}
    `;


}