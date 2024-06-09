const course = {
    name: "JavaScript for Beginners",
    duration: 3,
    sections: 7
};

// console.log(course.name);
// console.log(course['duration']);
// console.log(course.sections);

for (const key in course) {
    console.log(course[key])
}

//! Used when we want to iterate thorugh an object!
