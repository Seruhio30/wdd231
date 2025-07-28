const coursesButton = document.querySelector("#courses-button");
const allBtn = document.querySelector("#all");
const wddBtn = document.querySelector("#wdd");
const cseBtn = document.querySelector("#cse");
const courseDetails = document.querySelector("#courses-details");


function coursesinfo(courseList) {
  coursesButton.innerHTML = "";

  courseList.forEach(course => {
    const button = document.createElement("button");
    button.innerHTML = `<span class="subject">${course.subject}</span> ${course.number}`;
    button.addEventListener("click", () => {
      displayCourseDetails(course);
    });
    coursesButton.appendChild(button);
  });
}


coursesinfo(courses);

allBtn.addEventListener("click", () => {
    coursesinfo(courses);
});

wddBtn.addEventListener("click", () => {
    const wddCourses = courses.filter(course => course.subject === "WDD");
    coursesinfo(wddCourses);
});

cseBtn.addEventListener("click", () => {
    const cseCourses = courses.filter(course => course.subject === "CSE");
    coursesinfo(cseCourses);
});





function displayCourseDetails(course) {
  const courseDetails = document.createElement("dialog");
  courseDetails.classList.add("course-card");
  if (course.completed) courseDetails.classList.add("completed");

  courseDetails.innerHTML = `
    <button id="closeModal">❌</button>
    <h2>${course.subject} ${course.number}</h2>
    <h3>${course.title}</h3>
    <p><strong>Credits</strong>: ${course.credits}</p>
    <p><strong>Certificate</strong>: ${course.certificate}</p>
    <p>${course.description}</p>
    <p><strong>Technologies</strong>: ${course.technology.join(', ')}</p>
  `;

  document.body.appendChild(courseDetails);
  courseDetails.showModal();

  const closeModal = courseDetails.querySelector("#closeModal");
  closeModal.addEventListener("click", () => {
    courseDetails.close();
    courseDetails.remove(); // limpia el DOM
  });
}




