let now = new Date();
console.log(now);

let Jan01_1970 = new Date(0);
console.log(Jan01_1970);

let Dec31_1969 = new Date(-24 * 3600 * 1000);
console.log(Dec31_1969);

const dateOne = new Date("December 25 2024 16:08");
console.log(dateOne);

const Jan1_2024 = new Date(2024, 0, 1);
console.log(Jan1_2024);

now.getFullYear;
now.getMonth;
now.getDate;
now.getTimezoneOffset;
