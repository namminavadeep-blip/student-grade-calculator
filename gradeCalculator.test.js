const {
    calculateAverage,
    getLetterGrade,
    isPassing
} = require("./gradeCalculator");



test("calculates the average grade correctly", () => {

    const grades = [80, 90, 100];

    expect(calculateAverage(grades))
        .toBe(90);

});



test("returns correct letter grade A", () => {

    expect(getLetterGrade(95))
        .toBe("A");

});



test("returns correct letter grade B", () => {

    expect(getLetterGrade(85))
        .toBe("B");

});



test("checks if student is passing", () => {

    expect(isPassing(75))
        .toBe(true);

});



test("checks if student is failing", () => {

    expect(isPassing(50))
        .toBe(false);

});