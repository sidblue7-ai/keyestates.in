
const projects = [
{
    name: "PS Amistad",
    dev: "PS Group",
    location: "Action Area II, New Town",
    price: "₹ 80L - 1.10Cr",
    img: "https://www.propvestors.in/wp-content/uploads/2021/05/ps-amistad-project.webp"
  },
  {
    name: "Realtech Curiocity",
    dev: "Realtech Nirman",
    location: "Action Area II, New Town",
    price: "₹ 80L - 95L",
    img: "https://www.propvestors.in/wp-content/uploads/2021/05/realtech-curiocity-project-1.webp"
  },
  {
    name: "Rishi Pranaya",
    dev: "Rishi Group",
    location: "Action Area II, New Town",
    price: "₹ 70L - 1Cr",
    img: "https://www.propvestors.in/wp-content/uploads/2021/05/rishi-pranaya-banner.webp"
  },
  {
    name: "Kappa Alpha Beta Gamma",
    dev: "Kappa Group",
    location: "Action Area II, New Town",
    price: "₹ 75L - 1.90Cr",
    img: "https://www.propvestors.in/wp-content/uploads/2025/06/alpha-beta-ghama-banner.webp"
  },
  {
    name: "Shree Miraya",
    dev: "Shree Realtech",
    location: "Action Area II, New Town",
    price: "₹ 1.05Cr - 1.65Cr",
    img: "https://www.propvestors.in/wp-content/uploads/2025/04/Shree-Miraya-Action-Area-II-New-Town-Project-Image.webp"
  },
  {
    name: "Prabha Axor",
    dev: "Prabha Realty",
    location: "Action Area II, New Town",
    price: "₹ 2.55Cr - 3.10Cr",
    img: "https://www.propvestors.in/wp-content/uploads/2025/02/Prabha-Axor-Action-Area-II-New-Town-Project-Image.webp"
  },
  {
    name: "Adi Guru Residency",
    dev: "Diganta Construction",
    location: "Action Area II, New Town",
    price: "₹ 59L onwards",
    img: "https://www.propvestors.in/wp-content/uploads/2024/09/Adi-Guru-Residency-Action-Area-II-New-Town-Project-Image-7.webp"
  },
  {
    name: "Vinayak Amara",
    dev: "Vinayak Group",
    location: "Action Area II, New Town",
    price: "₹ 1.73Cr - 2.52Cr",
    img: "https://www.propvestors.in/wp-content/uploads/2023/05/shristi-the-v-project.webp"
  },
  {
    name: "Forum Estates Bungalows",
    dev: "Forum Group",
    location: "Action Area II, New Town",
    price: "₹ 4.54Cr - 12.36Cr",
    img: "https://www.propvestors.in/wp-content/uploads/2024/04/forum-estates-banner.webp"
  },
  {
    name: "Priva",
    dev: "Manor Realty",
    location: "Action Area II, New Town",
    price: "₹ 1.15Cr - 1.60Cr",
    img: "https://www.propvestors.in/wp-content/uploads/2023/12/priva-banner.webp"
  },
  {
    name: "The V",
    dev: "Shristi Group",
    location: "New Town",
    price: "₹ 2.60Cr - 4.50Cr",
    img: "https://www.propvestors.in/wp-content/uploads/2023/05/shristi-the-v-project.webp"
  },
  {
    name: "PS Vaanya",
    dev: "PS Group",
    location: "Action Area II, New Town",
    price: "₹ 2.20Cr - 5.10Cr",
    img: "https://www.propvestors.in/wp-content/uploads/2022/11/ps-vaanya-banner.webp"
  },
  {
    name: "Mani Casa",
    dev: "Shivom Realty",
    location: "Action Area II, New Town",
    price: "₹ 1.05Cr - 1.80Cr",
    img: "https://www.propvestors.in/wp-content/uploads/2022/09/mani-casa-2-banner.webp"
  },
  {
    name: "Orbit Urban Park",
    dev: "Orbit Group",
    location: "Action Area II, New Town",
    price: "₹ 1.58Cr - 2.62Cr",
    img: "https://www.propvestors.in/wp-content/uploads/2022/04/Orbit-Urban-Park-Action-Area-II-New-Town-Project-Image.webp"
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
    name: "Orbit Urban Park",
    dev: "Orbit Group",
    location: "Action Area II, New Town",
    price: "₹ 60L - 1.71Cr",
    img: "https://www.propvestors.in/wp-content/uploads/2026/03/orbit-urban-park-banner.webp"
  },
  {
    name: "PS Qube",
    dev: "PS Group",
    location: "Action Area II, New Town",
    price: "₹ 91L onwards",
    img: "https://www.propvestors.in/wp-content/uploads/2026/02/ps-cube-banner.webp"
  },
  {
    name: "Tata Boulevard",
    dev: "Tata Housing",
    location: "Action Area II, New Town",
    price: "₹ 29L - 82L",
    img: "https://www.propvestors.in/wp-content/uploads/2024/09/Tata-Bolevard-Action-Area-II-New-Town-Project-Image-1.webp"
  },
  {
    name: "Soham Syner G",
    dev: "Soham Group",
    location: "Action Area II, New Town",
    price: "₹ 82L - 1.17Cr",
    img: "https://www.propvestors.in/wp-content/uploads/2024/05/Soham-SynerG-Action-Area-II-New-Town-Projct-Image-.webp"
  },
  {
    name: "Tata Avenida Plaza",
    dev: "Tata Housing",
    location: "Action Area II, New Town",
    price: "On Request",
    img: "https://www.propvestors.in/wp-content/uploads/2023/12/Tata-Avenida-Plaza-New-Town-Action-Area-II-Prop-Vestors-Project-Image.webp"
  },
  {
    name: "Shree RSH Crest",
    dev: "Shree RSH Group",
    location: "Action Area II, New Town",
    price: "₹ 36L onwards",
    img: "https://www.propvestors.in/wp-content/uploads/2023/08/rsh-crest-project.webp"
  },
  {
    name: "Astra Tower",
    dev: "Bharti Group",
    location: "Action Area II, New Town",
    price: "₹ 1.45Cr - 3Cr",
    img: "https://www.propvestors.in/wp-content/uploads/2023/07/bharti-astra-tower-project.webp"
  },
  {
    name: "PS Abacus",
    dev: "PS Group",
    location: "Action Area II, New Town",
    price: "₹ 70L - 1.45Cr",
    img: "https://www.propvestors.in/wp-content/uploads/2023/06/ps-abacus-project.webp"
  },
  {
    name: "Mani Casadona",
    dev: "Mani Group",
    location: "Action Area II, New Town",
    price: "₹ 53L - 1.22Cr",
    img: "https://www.propvestors.in/wp-content/uploads/2023/06/mani-casadona-banner.webp"
  },
  {
    name: "Ecospace Business Towers",
    dev: "Ambuja Neotia",
    location: "Action Area II, New Town",
    price: "₹ 53L - 1.37Cr",
    img: "https://www.propvestors.in/wp-content/uploads/2023/06/ambuja-eco-space-business-towers-project.webp"
  },
  {
    name: "Ambuja Ecospace Business Park",
    dev: "Ambuja Neotia",
    location: "Action Area II, New Town",
    price: "₹ 55L onwards",
    img: "https://www.propvestors.in/wp-content/uploads/2023/05/ecospace-3-1.webp"
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

