function calculateGrade() {

    let grade1 = Number(document.getElementById("grade1").value);
    let grade2 = Number(document.getElementById("grade2").value);
    let grade3 = Number(document.getElementById("grade3").value);

    let average = (grade1 + grade2 + grade3) / 3;

    let result = document.getElementById("result");

    if (average >= 90) {
        result.innerHTML = "Grade: A";
    } 
    else if (average >= 80) {
        result.innerHTML = "Grade: B";
    } 
    else if (average >= 70) {
        result.innerHTML = "Grade: C";
    } 
    else if (average >= 60) {
        result.innerHTML = "Grade: D";
    } 
    else {
        result.innerHTML = "Grade: F";
    }

}