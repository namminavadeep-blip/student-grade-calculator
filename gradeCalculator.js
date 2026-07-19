function calculateAverage(grades) {

    const total = grades.reduce((sum, grade) => sum + grade, 0);

    return total / grades.length;

}



function getLetterGrade(average) {

    if (average >= 90) {
        return "A";
    }

    else if (average >= 80) {
        return "B";
    }

    else if (average >= 70) {
        return "C";
    }

    else if (average >= 60) {
        return "D";
    }

    else {
        return "F";
    }

}



function isPassing(average) {

    return average >= 60;

}



module.exports = {
    calculateAverage,
    getLetterGrade,
    isPassing
};