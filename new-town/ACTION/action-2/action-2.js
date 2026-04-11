
const projects = [
  {
    name: "Purti Veda",
    dev: "Purti Realty",
    location: "Action Area I, New Town",
    price: "₹ 90L - 1.3Cr",
    img: "https://www.propvestors.in/wp-content/uploads/2021/05/purti-realty-purti-veda-elevation.webp"
  },
  {
    name: "PS One 10",
    dev: "PS Group",
    location: "Action Area I, New Town",
    price: "₹ 4.8Cr - 5.2Cr",
    img: "https://www.propvestors.in/wp-content/uploads/2021/05/one-10-banner-1.webp"
  },
  {
    name: "sattvik gateway",
    dev: "JB Group",
    location: "Action Area III",
    price: "₹ 93L - 1.30cr",
    img: "https://www.propvestors.in/wp-content/uploads/2025/10/sattvik-gateway-banner.webp"
  },
  {
    name: "Peerless Trayam",
    dev: "peerless group",
    location: "Action Area I, New Town",
    price: "₹ 2.50Cr",
    img: "https://www.propvestors.in/wp-content/uploads/2025/06/peerless-trayam-banner.webp"
  },
  {
    name: "Ruchi one victoria",
    dev: "Ruchi Reality",
    location: "Action Area I, New Town",
    price: "₹ 3cr - 3.80Cr",
    img: "https://www.propvestors.in/wp-content/uploads/2021/05/shapoorji-pallonji-elita-garden-vista-banner.webp"
  },
  {
    name: "GLS Ruposi Bangla",
    dev: "GLS group",
    location: "Action Area I, New Town",
    price: "₹ 71L - 1.30Cr",
    img: "https://www.propvestors.in/wp-content/uploads/2023/09/gls-ruposi-bangla-project.webp"
  },
  {
    name: "Shrachi Greenwood Nest",
    dev: "Shrachi Reality",
    location: "Action Area I, New Town",
    price: "₹ 90L onwards",
    img: "https://www.propvestors.in/wp-content/uploads/2023/09/shrachi-greenwood-nest-project.webp"
  },
  {
    name: "Srijan Town Square",
    dev: "Srijan Realty",
    location: "Action Area I, New Town",
    price: "₹ 3.10Cr - 4.25Cr",
    img: "https://www.propvestors.in/wp-content/uploads/2023/08/srijan-town-square-project-2.webp"
  },
  {
    name: "Sanjeeva Shree",
    dev: "Vedic Realty",
    location: "Action Area I, New Town",
    price: "₹ 95L onwards",
    img: "https://www.propvestors.in/wp-content/uploads/2023/08/vedic-sanjeeva-shree-project.webp"
  },
  {
    name: "Ambuja Urvisha",
    dev: "Ambuja Neotia",
    location: "Action Area I, New Town",
    price: "₹ 1.35Cr - 2Cr",
    img: "https://www.propvestors.in/wp-content/uploads/2022/04/ambuja-urvisha-banner.webp"
  },
  {
    name: "One Prime",
    dev: "Revera Developers LLP& 1 More",
    location: "Action Area I, New Town",
    price: "₹ 1.35Cr - 2Cr",
    img: "https://www.propvestors.in/wp-content/uploads/2021/07/revera-one-prime-project.webp"
  },
 
{
    name: "One Rajarhat",
    dev: "Anik Group",
    location: "Action Area I, New Town",
    price: "₹ 1.20Cr - 2.30Cr",
    img: "https://www.propvestors.in/wp-content/uploads/2021/07/one-rajarhat-banner.webp"
  },
  {
    name: "One Prime",
    dev: "Revera Developers LLP& 1 More",
    location: "Action Area I, New Town",
    price: "₹ 1.35Cr - 2Cr",
    img: "https://www.propvestors.in/wp-content/uploads/2021/07/revera-one-prime-project.webp"
  },
 
{
    name: "One Rajarhat",
    dev: "Anik Group",
    location: "Action Area I, New Town",
    price: "₹ 1.20Cr - 2.30Cr",
    img: "https://www.propvestors.in/wp-content/uploads/2021/07/one-rajarhat-banner.webp"
  },

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
    name: "The Nostalgia",
    dev: "Anik group",
    location: "Action Area I, New Town",
    price: "₹ 9L onwards",
    img: "https://www.propvestors.in/wp-content/uploads/2021/07/one-rajarhat-banner.webp"
  },
  
   {
    name: "The Nostalgia",
    dev: "Anik group",
    location: "Action Area I, New Town",
    price: "₹ 9L onwards",
    img: "https://www.propvestors.in/wp-content/uploads/2021/07/one-rajarhat-banner.webp"
  },
  
   {
    name: "The Nostalgia",
    dev: "Anik group",
    location: "Action Area I, New Town",
    price: "₹ 9L onwards",
    img: "https://www.propvestors.in/wp-content/uploads/2021/07/one-rajarhat-banner.webp"
  },
  
   {
    name: "The Nostalgia",
    dev: "Anik group",
    location: "Action Area I, New Town",
    price: "₹ 9L onwards",
    img: "https://www.propvestors.in/wp-content/uploads/2021/07/one-rajarhat-banner.webp"
  },
  
   {
    name: "The Nostalgia",
    dev: "Anik group",
    location: "Action Area I, New Town",
    price: "₹ 9L onwards",
    img: "https://www.propvestors.in/wp-content/uploads/2021/07/one-rajarhat-banner.webp"
  },
  
   {
    name: "The Nostalgia",
    dev: "Anik group",
    location: "Action Area I, New Town",
    price: "₹ 9L onwards",
    img: "https://www.propvestors.in/wp-content/uploads/2021/07/one-rajarhat-banner.webp"
  },
  
   {
    name: "The Nostalgia",
    dev: "Anik group",
    location: "Action Area I, New Town",
    price: "₹ 9L onwards",
    img: "https://www.propvestors.in/wp-content/uploads/2021/07/one-rajarhat-banner.webp"
  },
  
   {
    name: "The Nostalgia",
    dev: "Anik group",
    location: "Action Area I, New Town",
    price: "₹ 9L onwards",
    img: "https://www.propvestors.in/wp-content/uploads/2021/07/one-rajarhat-banner.webp"
  },
  
   {
    name: "The Nostalgia",
    dev: "Anik group",
    location: "Action Area I, New Town",
    price: "₹ 9L onwards",
    img: "https://www.propvestors.in/wp-content/uploads/2021/07/one-rajarhat-banner.webp"
  },
{
    name: "One Prime",
    dev: "Revera Developers LLP& 1 More",
    location: "Action Area I, New Town",
    price: "₹ 1.35Cr - 2Cr",
    img: "https://www.propvestors.in/wp-content/uploads/2021/07/revera-one-prime-project.webp"
  },
 
{
    name: "One Rajarhat",
    dev: "Anik Group",
    location: "Action Area I, New Town",
    price: "₹ 1.20Cr - 2.30Cr",
    img: "https://www.propvestors.in/wp-content/uploads/2021/07/one-rajarhat-banner.webp"
  },
 
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

