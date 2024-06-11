// const course = {
//     name: "JavaScript for Beginners",
//     start() {
//         console.log(this.name);
//     },
// }

// function startVideo() {
//     console.log(this);
// }

// startVideo();



// const course = {
//     name: "ES6 syntax",
//     start: () => {
//         console.log(this.name);
//     }
// }

// course.start();

function introduce(language) {
    console.log(this.name + " teaches" + language);
}

const instructor = { name: "Leo" };
const introduction = introduce.bind(instructor);
introduction(" JavaScript ");