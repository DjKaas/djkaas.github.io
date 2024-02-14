document.addEventListener("DOMContentLoaded", function() {
    fetch("projecten.json")
    .then(response => response.json())
    .then(data => {
        const projectenLijst = document.getElementById("projecten-lijst");
        data.projecten.forEach(project => {
            const listItem = document.createElement("li");
            listItem.innerHTML = `
                <h2>${project.titel}</h2>
                <p>${project.omschrijving}</p>
                <p>Technologieën: ${project.technologieen.join(', ')}</p>
                <img src="${project.afbeelding}" alt="${project.titel}" width="200">
            `;
            projectenLijst.appendChild(listItem);
        });
    })
    .catch(error => {
        console.error("Er is een fout opgetreden bij het ophalen van de projecten:", error);
    });
});