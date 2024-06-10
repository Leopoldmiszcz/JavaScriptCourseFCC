// const numbers = [1, 2, 3, 4, 5];
// const joinedNumbers = numbers.join(', ');
// console.log(joinedNumbers);

const courseName = "Javascript for Beginners";
const lowerCaseCourseName = courseName.toLowerCase();
const parts = lowerCaseCourseName.split(' ');
const urlSlug = parts.join('-');


console.log(urlSlug);