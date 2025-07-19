fetch('./data/members.json')
    .then(res => res.json())
    .then(data => {
        console.log(data);
        const destacados = data.filter(member =>
            member.membershipLevel === 2 || member.membershipLevel === 3);
        console.log(destacados);

        const selectedMembers = destacados.sort(() => Math.random() - 0.5).slice(0, 3);

        const container = document.getElementById('spotlights');
        container.innerHTML = "";
        selectedMembers.forEach(member => {
            const card = document.createElement('div');
            card.classList.add('member','spotlight-card');
            card.innerHTML = `
                <img src="../chamber/images/${member.image}" alt="${member.name} logo">
                <h3>${member.name}</h3>
                <p><strong>Membership:</strong> ${member.membershipLevel === 3 ? 'GOLD' : 'SILVER'}</p>
                <p>${member.phone}</p>
                <p>${member.address}</p>
                <a href="${member.website}" target="_blank">Visita sitio</a>
            `;
        
        container.appendChild(card);
        }); 

    });