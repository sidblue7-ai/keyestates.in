// ==========================
// PROJECT DATABASE
// ==========================
const projects = [
  {
  name:"Urban Greens",
  builder: "Loharuka Group",
  location:"Chinar Park, Rajarhat",
  price:"₹72 L Onwards",
  bhk:"2 BHK",
  status:"Under Construction",
  image:"https://www.propvestors.in/wp-content/uploads/2021/05/urban-greens-banner.webp"
},
{
  name:"Freshia",
  builder: "Loharuka Group",
  location:"Narayanpur, Gopalpur, Rajarhat",
  price:"₹65 L Onwards",
  bhk:"3 BHK",
  status:"Ready to Move",
  image:"https://www.propvestors.in/wp-content/uploads/2021/05/loharuka-freshia-project.webp"
},
{
  name:"Siddha Happyville",
  builder: "Siddha Group",
  location:"Rajarhat Chowmatha, Rajarhat Main Road, Rajarhat",
  price:"₹64 L - 74 L",
  bhk:"2, 2.5 BHK",
  status:"Ready to Move",
  image:"https://www.propvestors.in/wp-content/uploads/2021/05/siddha-happyville-banner.webp"
},
{
  name:"DTC Downtown",
  builder: "DTC Group",
  location:"Rajarhat Main Road, Rajarhat",
  price:"₹ 55 L - 1.17 Cr",
  bhk:"2, 3, 4 BHK",
  status:"New Launch",
  image:"https://www.propvestors.in/wp-content/uploads/2026/03/dtc-downtown-banner.webp"
},
{
  name:"Bhawani Paraiso",
  builder: "Bhawani  Group",
  location:"Jogardanga More, Rajarhat",
  price:"₹ 96 L - 2.06 Cr",
  bhk:"2, 3, 4 BHK",
  status:"New Launch",
  image:"https://www.propvestors.in/wp-content/uploads/2026/02/bhawani-paraiso-banner.webp"
},
{
  name:"Pravya",
  builder: "Soham   Group",
  location:"Jogardanga More, Rajarhat",
  price:"₹ 1.15 Cr Onwards",
  bhk:"2, 3, 4 BHK",
  status:"New Launch",
  image:"https://www.propvestors.in/wp-content/uploads/2026/03/pravya-banner-scaled.webp"
},
{
  name:"Purti Tatsam",
  builder: "Purti Realty",
  location:"Jogardanga More, Rajarhat",
  price:"₹1.12 Cr - 1.57 Cr",
  bhk:"3, 4 BHK",
  status:"New Launch",
  image:"https://www.propvestors.in/wp-content/uploads/2026/01/purti-tatsam-banner.webp"
},
{
  name:"Bellagio Level Next",
  builder: "Team Taurus",
  location:"Jogardanga More, Rajarhat",
  price:"₹ 80 L - 1.40 Cr",
  bhk:"2, 3, 3.5, 4 BHK",
  status:"Ready to Move",
  image:"https://www.propvestors.in/wp-content/uploads/2025/04/Bellagio-Level-Next-Rajarhat-Jogardanga-More-Project-Image-4.webp"
},
{
  name:"Saltee Splendora",
  builder: "Saltee Group",
  location:"Rajarhat Main Road, Rajarhat",
  price:"₹80 L - 1.05 Cr",
  bhk:"3, 3.5, 4 BHK",
  status:"Ready to Move",
  image:"https://www.propvestors.in/wp-content/uploads/2025/04/Saltee-Splendora-Rajarhat-Main-Road-Project-Image.webp"
},
{
  name:"Silveroak Estate",
  builder: "Salarpuria  Group",
  location:"Rajarhat Main Road, Rajarhat",
  price:"₹1.20 Cr - 2 Cr",
  bhk:"2, 3 BHK",
  status:"Ready to Move",
  image:"https://www.propvestors.in/wp-content/uploads/2025/04/Silver-Oak-Rajarhat-Main-Road-Rajarhat-Project-Image.webp"
},
{
  name:"Siddha Pines",
  builder: "Siddha  Group",
  location:"Rajarhat Main Road, Rajarhat",
  price:"₹60 L - 1.40 Cr",
  bhk:"2, 3, 4 BHK",
  status:"Ready to Move",
  image:"https://www.propvestors.in/wp-content/uploads/2025/04/Siddha-Pines-Rajarhat-Main-Road-Rajarhat-Project-Image-2.webp"
},
{
  name:"Ideal Enclave",
  builder: "Ideal   Group",
  location:"Gopalpur, Rajarhat",
  price:"₹75 L - 1.70 Cr",
  bhk:"2, 3, 4 BHK",
  status:"Ready to Move",
  image:"https://www.propvestors.in/wp-content/uploads/2025/04/Ideal-Enclave-Gopalpur-Rajarhat-Project-Image-2.webp"
},
{
  name:"Srijan Optima",
  builder: "Srijan Realty",
  location:"Rajarhat Chowmatha, Rajarhat",
  price:"₹65 L - 75 L",
  bhk:"2, 3 BHK",
  status:"New Launch",
  image:"https://www.propvestors.in/wp-content/uploads/2024/11/srijan-optima-banner.webp"
},
{
  name:"F Residences",
  builder: "Merlin Group",
  location:"Jogardanga More, Rajarhat",
  price:"₹1.60 Cr - 2.01 Cr",
  bhk:"3, 4 BHK",
  status:"New Launch",
  image:"https://www.propvestors.in/wp-content/uploads/2024/10/F-Residences-Jogardanga-More-Rajarhat-Project-Image-1.webp"
},
{
  name:"Green Vega",
  builder: "Loharuka Group",
  location:" Rajarhat Main Road, Rajarhat",
  price:"₹ 50 L - 68 L",
  bhk:"2, 3 BHK",
  status:"New Launch",
  image:"https://www.propvestors.in/wp-content/uploads/2024/03/Green-Vega-Rajarhat-Main-Road-Prop-Vestors-Project-Image.webp"
},
{
  name:"Kosmic Essence",
  builder: "Kosmic Estate",
  location:" Bishnupur, Rajarhat",
  price:"₹35 L Onwards",
  bhk:"1, 2, 3 BHK",
  status:"Ready to Move",
  image:"https://www.propvestors.in/wp-content/uploads/2024/02/Kosmic-Essence.webp"
},
{
  name:"AV Courtyard",
  builder: "Astha Vinayak Group",
  location:" Bishnupur, Rajarhat",
  price:"₹30 L Onwards",
  bhk:"2, 3 BHK",
  status:"New Launch",
  image:"https://www.propvestors.in/wp-content/uploads/2023/06/astha-vinayak-av-courtyard-project.webp"
},
{
  name:"Purti Aroma",
  builder: "Purti Realty",
  location:"Gopalpur, Rajarhat",
  price:"₹55 L - 75 L",
  bhk:"2, 3 BHK",
  status:"Ready to Move",
  image:"https://www.propvestors.in/wp-content/uploads/2023/05/Purti-Aroma-Gopalpur-Rajarhat-Project-Image.webp"
},
{
  name:"Vedic Wellness Villas",
  builder: "Vedic Realty",
  location:" Lauhati, Rajarhat",
  price:"₹1.15 Cr Onwards",
  bhk:"4, 5 BHK",
  status:"Under Construction",
  image:"https://www.propvestors.in/wp-content/uploads/2023/05/vedic-wellness-villas-project.webp"
},
{
  name:"Amazonia",
  builder: "Kosmic Estate",
  location:" Rajarhat Main Road, Rajarhat",
  price:"₹57 L - 1.08 Cr",
  bhk:"2, 3, 4 BHK",
  status:"New Launch",
  image:"https://www.propvestors.in/wp-content/uploads/2022/11/kosmic-the-amazonia-project.webp"
},
{
  name:"DTC Capital City",
  builder: "DTC Group",
  location:" Rajarhat Main Road, Rajarhat",
  price:"₹57 L - 1.25 Cr",
  bhk:"2, 3, 4 BHK",
  status:"Under Construction",
  image:"https://www.propvestors.in/wp-content/uploads/2022/09/dtc-rajarhat-banner.webp"
},
{
  name:"Unimark Springfield",
  builder: "Unimark Group",
  location:"Gopalpur, Rajarhat",
  price:"₹ 75 L - 85 L",
  bhk:"3 BHK",
  status:"Ready to Move",
  image:"https://www.propvestors.in/wp-content/uploads/2022/05/springfield-banner.webp"
},
{
  name:"Green Heights",
  builder: "Loharuka Group",
  location:" Rajarhat Main Road, Rajarhat",
  price:"₹ 65 L Onwards",
  bhk:"2 BHK",
  status:"Near Possession",
  image:"https://www.propvestors.in/wp-content/uploads/2021/12/green-heights-banner.webp"
},
{
  name:"Urban Vista",
  builder: "Loharuka Group",
  location:" Rajarhat Main Road, Rajarhat",
  price:"₹ 67 L - 88 L",
  bhk:"2, 2.5, 3 BHK",
  status:"Under Construction",
  image:"https://www.propvestors.in/wp-content/uploads/2021/12/urban-vista-banner.webp"
},
{
  name:"Merlin Rise",
  builder: "Merlin Group",
  location:" Rajarhat Main Road, Rajarhat",
  price:"₹ 62 L - 1.55 Cr",
  bhk:"2, 3 BHK",
  status:"Under Construction",
  image:"https://www.propvestors.in/wp-content/uploads/2021/12/merlin-rise-banner.webp"
},
];


// ==========================
// RENDER PROJECTS
// ==========================
function renderProjects(data) {
  const container = document.getElementById("projectContainer");

  if (!container) return; // safety check

  container.innerHTML = "";

  data.forEach(function (p) {
    const card = `
      <div class="project-card" onclick="sendLead('${p.name}')">
        <img src="${p.image}">
        <div class="tag">CERTIFIED</div>
        <div class="content">
          <h3>${p.name}</h3>
          <p>by ${p.builder}</p>
          <p>📍 ${p.location}</p>
          <h4>₹ ${p.price}</h4>
          <p>${p.bhk}</p>
          <div class="status ${p.status === 'Ready' ? 'green' : 'orange'}"></div>
        </div>
      </div>
    `;

    container.innerHTML += card;
  });
}


// ==========================
// FILTER FUNCTION
// ==========================
function applyFilters() {
  const bhkValue = document.getElementById("bhkFilter").value;
  const budgetValue = document.getElementById("budgetFilter").value;

  const filteredProjects = projects.filter(function (p) {
    const matchBhk = !bhkValue || p.bhk.includes(bhkValue);
    const matchBudget = !budgetValue || p.price <= parseInt(budgetValue);

    return matchBhk && matchBudget;
  });

  renderProjects(filteredProjects);
}


// ==========================
// WHATSAPP LEAD
// ==========================
function sendLead(projectName) {
  const message = `I am interested in ${projectName}`;
  const url = "https://wa.me/919875329416?text=" + encodeURIComponent(message);

  window.location.href = url;
}


// ==========================
// INIT (PAGE LOAD)
// ==========================
document.addEventListener("DOMContentLoaded", function () {

  // Initial render
  renderProjects(projects);

  // Filter listeners
  const bhkFilter = document.getElementById("bhkFilter");
  const budgetFilter = document.getElementById("budgetFilter");

  if (bhkFilter) {
    bhkFilter.addEventListener("change", applyFilters);
  }

  if (budgetFilter) {
    budgetFilter.addEventListener("change", applyFilters);
  }

});
// ==========================

  // BASIC LOCATION MAPPING (SAME COORDS FOR NOW)
  const locations = projects.map(p => ({
    name: p.name,
    lat: 22.62 + Math.random() * 0.02,
    lng: 88.44 + Math.random() * 0.02
  }));

  locations.forEach(loc => {
    
  });

// LOAD MAP
document.addEventListener("DOMContentLoaded", function () {
  const map = document.getElementById("rajarhatMap");

  if (map) {
    map.src = "https://www.google.com/maps?q=Rajarhat%20Kolkata&output=embed";
  }
});