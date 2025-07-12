const container = document.querySelector('#directory');
const url = "data/members.json";
const gridBtn = document.querySelector("#gridBtn");
const listBtn = document.querySelector("#listBtn");


gridBtn.addEventListener("click", () => {
  container.classList.add("grid-view");
  container.classList.remove("list-view");
});
listBtn.addEventListener("click", () => {
  container.classList.add("list-view");
  container.classList.remove("grid-view");
});

async function getMembers() {
    try {
    const response = await fetch(url);
    if (!response.ok) throw new Error("Failed to fetch members");
    const data = await response.json();
    displayMembers(data);
  } catch (err) {
    container.innerHTML = `<p>Error: ${err.message}</p>`;
  }   
}

function displayMembers(members) {
  container.innerHTML = ""; 

  members.forEach(member => {
    const card = document.createElement("div");
    card.classList.add("member");

    card.innerHTML = `
      <img src="images/${member.image}" alt="${member.name} logo">
      <h3>${member.name}</h3>
      <p>${member.address}</p>
      <p>${member.phone}</p>
      <a href="${member.website}" target="_blank">${member.website}</a>
      <p>Level: ${['Member','Silver','Gold'][member.membershipLevel - 1]}</p>
      <p>${member.description}</p>
    `;

    container.appendChild(card);
  });
}

getMembers();
