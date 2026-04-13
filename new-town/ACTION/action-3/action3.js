
const projects = [
  {
    name: "Elita Garden Vista",
    dev: "JB Group & 2 More",
    location: "Action Area III, New Town",
    price: "₹ 62L - 1.05Cr",
    img: "https://www.propvestors.in/wp-content/uploads/2021/05/shapoorji-pallonji-elita-garden-vista-banner.webp"
  },
  {
    name: "Primarc The Soul",
    dev: "Primarc",
    location: "Action Area III, New Town",
    price: "₹ 1.30Cr onwards",
    img: "https://www.propvestors.in/wp-content/uploads/2021/05/the-soul-banner.webp"
  },
  {
    name: "DTC Still Waters",
    dev: "DTC Group",
    location: "Action Area III, New Town",
    price: "₹ 88L - 1.48Cr",
    img: "https://www.propvestors.in/wp-content/uploads/2025/10/dtc-still-waters-banner.webp"
  },
  {
    name: "Shrachi Newtown Villas",
    dev: "Shrachi Realty & 1 More",
    location: "Action Area III, New Town",
    price: "₹ 1.45Cr - 2.75Cr",
    img: "https://www.propvestors.in/wp-content/uploads/2023/03/shrachi-keventer-newtown-villas-project-1.webp"
  },
  {
    name: "Merlin Lakescape",
    dev: "Merlin Group",
    location: "Action Area III, New Town",
    price: "₹ 60L - 1.20Cr",
    img: "https://www.propvestors.in/wp-content/uploads/2021/11/merlin-lakescape-banner.webp"
  }

];

const container = document.getElementById("projects");

projects.forEach(p => {
  container.innerHTML += `
    <div class="col-md-4">
      <div class="project-card">
        <div class="project-img">
          <img src="${p.img}">
        </div>
        <div class="project-info">
          <h5>${p.name}</h5>
          <p>${p.dev}</p>
          <p>${p.location}</p>
          <p class="price">${p.price}</p>
        </div>
      </div>
    </div>
  `;
});



const projects1 = [
  
   {
    name: "Elita Chambers",
    dev: "Merlin Group",
    location: "Action Area III, New Town",
    price: "₹ 79L onwards",
    img: "https://www.propvestors.in/wp-content/uploads/2023/06/Elita-Chambers-Action-Area-III-New-Town-Project-Image.webp"
  }

];

const container1 = document.getElementById("projects1");

projects1.forEach(p => {
  container1.innerHTML += `
    <div class="col-md-4">
      <div class="project1-card">
        <div class="project1-img">
          <img src="${p.img}">
        </div>
        <div class="project1-info">
          <h5>${p.name}</h5>
          <p>${p.dev}</p>
          <p>${p.location}</p>
          <p class="price">${p.price}</p>
        </div>
      </div>
    </div>
  `;
});

