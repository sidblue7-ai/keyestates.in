// ==========================
// RUN AFTER PAGE LOAD
// ==========================
document.addEventListener("DOMContentLoaded", () => {

    // ==========================
    // PROJECT DATA
    // ==========================
    const allProjects = [
      {
        name: "PS One 10",
        type: "5 bhk apartment",
        price: "₹ 4.8 Cr+",
        image: "https://via.placeholder.com/400x250"
      },
      {
        name: "Purti Veda",
        type: "2 bhk apartment",
        price: "₹ 90 L+",
        image: "https://via.placeholder.com/400x250"
      },
      {
        name: "PS Amistad",
        type: "3 bhk apartment",
        price: "₹ 80 L+",
        image: "https://via.placeholder.com/400x250"
      }
    ];
  
    let filteredProjects = [...allProjects];
    let visibleCount = 6;
  
    const grid = document.getElementById("projectGrid");
    const loadMoreBtn = document.getElementById("loadMoreBtn");
  
    const configFilter = document.querySelector("select:nth-child(1)");
    const budgetFilter = document.querySelector("select:nth-child(2)");
    const searchBtn = document.querySelector(".search-btn");
  
    // ==========================
    // RENDER
    // ==========================
    function renderProjects() {
      grid.innerHTML = "";
  
      let visible = filteredProjects.slice(0, visibleCount);
  
      if (visible.length === 0) {
        grid.innerHTML = `<p>No projects found</p>`;
        loadMoreBtn.style.display = "none";
        return;
      }
  
      visible.forEach(p => {
        grid.innerHTML += `
          <div class="card">
            <div class="image-wrap">
              <img src="${p.image}">
            </div>
            <div class="content">
              <h3>${p.name}</h3>
              <p>${p.type}</p>
              <span>${p.price}</span>
              <button>View Details</button>
            </div>
          </div>
        `;
      });
  
      loadMoreBtn.style.display =
        visibleCount >= filteredProjects.length ? "none" : "block";
    }
  
    // ==========================
    // FILTER
    // ==========================
    function applyFilters() {
      const config = configFilter.value.toLowerCase();
      const budget = budgetFilter.value;
  
      filteredProjects = allProjects.filter(p => {
        let matchConfig = config === "all configurations" || p.type.includes(config);
  
        let price = extractPrice(p.price);
        let matchBudget = true;
  
        if (budget === "50L - 1Cr") matchBudget = price >= 50 && price <= 100;
        if (budget === "1Cr - 2Cr") matchBudget = price >= 100 && price <= 200;
        if (budget === "2Cr+") matchBudget = price >= 200;
  
        return matchConfig && matchBudget;
      });
  
      visibleCount = 6;
      renderProjects();
    }
  
    function extractPrice(str) {
      let num = str.replace(/[^\d]/g, "");
      return str.includes("Cr") ? parseInt(num) * 100 : parseInt(num);
    }
  
    // ==========================
    // EVENTS
    // ==========================
    loadMoreBtn.addEventListener("click", () => {
      visibleCount += 3;
      renderProjects();
    });
  
    searchBtn.addEventListener("click", applyFilters);
  
    // INITIAL LOAD
    renderProjects();
  
  });
  