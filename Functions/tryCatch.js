const course = {
    name: "JavaScript for Beginners",
    duration: "3 hours",

    get details() {
        return `${this.name} is ${this.details}`;
    },

    set details(value) {
        if (typeof value !== String) {
            throw new Error(`Value, ${value} is not a string`);
        }
        
        let parts = value.split("is");
        this.name = parts[0];
        this.details = parts[1];
    }
};

try {
    course.details = 32;
} catch (e) {
    console.log(e.message);
}