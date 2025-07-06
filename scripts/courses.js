const courseList = document.querySelector("#courses-list");
const allBtn = document.querySelector("#all");
const wddBtn = document.querySelector("#wdd");
const cseBtn = document.querySelector("#cse");

function renderCourses(array) {
    courseList.innerHTML = ""; // limpia el contenido anterior

    array.forEach(course => {
        const card = document.createElement("div");
        card.classList.add("course-card");
        if (course.completed) card.classList.add("completed");

        card.innerHTML = `
            <h3>${course.subject} ${course.number}: ${course.title}</h3>
            <p><strong>Credits:</strong> ${course.credits}</p>
            <p><strong>Certificate:</strong> ${course.certificate}</p>
            <p><strong>Description:</strong> ${course.description}</p>
            <p><strong>Technologies:</strong> ${course.technology.join(", ")}</p>
        `;
        courseList.appendChild(card);
    });
}
allBtn.addEventListener("click", () => {
    renderCourses(courses);
});

wddBtn.addEventListener("click", () => {
    const wddCourses = courses.filter(course => course.subject === "WDD");
    renderCourses(wddCourses);
});

cseBtn.addEventListener("click", () => {
    const cseCourses = courses.filter(course => course.subject === "CSE");
    renderCourses(cseCourses);
});
