function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({ behavior: "smooth" });
}

// ========== INFINITE CAROUSEL (NO GAP, SEAMLESS) ==========
function initInfiniteCarousel(sliderId, trackId, direction = 'rtl') {
  const slider = document.getElementById(sliderId);
  const track = document.getElementById(trackId);
  if (!slider || !track) return;

  let originalCards = Array.from(track.children);
  if (originalCards.length === 0) return;

  // For seamless loops, we clone the set. 
  // 3 sets (Original + 2 Clones) is usually sufficient for most screen widths.
  for (let i = 0; i < 2; i++) {
    originalCards.forEach(card => {
      track.appendChild(card.cloneNode(true));
    });
  }

  let gap = 20; 
  let allCards = Array.from(track.children);
  let cardWidth = allCards[0].offsetWidth;
  let originalSetWidth = originalCards.length * (cardWidth + gap);
  
  // STARTING POSITION: 
  // If LTR, we start "tucked" to the left so we have room to move right.
  let currentPosition = direction === 'ltr' ? -originalSetWidth : 0;
  
  let speed = 0.8;
  let isPaused = false;

  function updateTrack() {
    if (!isPaused) {
      if (direction === 'rtl') {
        // Right to left: move negative (0 -> -1000)
        currentPosition -= speed;
        if (Math.abs(currentPosition) >= originalSetWidth) {
          currentPosition = 0; // Reset to start
        }
      } else {
        // Left to right: move positive (-1000 -> 0)
        currentPosition += speed;
        
        // The Magic Reset:
        // When the position hits 0, it means the first set is fully visible.
        // We jump back to -originalSetWidth instantly to keep the loop going.
        if (currentPosition >= 0) {
          currentPosition = -originalSetWidth;
        }
      }
      track.style.transform = `translateX(${currentPosition}px)`;
    }
    requestAnimationFrame(updateTrack);
  }

  function recalcDimensions() {
    cardWidth = allCards[0].offsetWidth;
    originalSetWidth = originalCards.length * (cardWidth + gap);
    
    // Ensure we aren't out of bounds after a resize
    if (direction === 'ltr' && currentPosition > 0) {
      currentPosition = -originalSetWidth;
    }
  }

  window.addEventListener('resize', recalcDimensions);
  slider.addEventListener('mouseenter', () => { isPaused = true; });
  slider.addEventListener('mouseleave', () => { isPaused = false; });
  slider.addEventListener('touchstart', () => { isPaused = true; });
  slider.addEventListener('touchend', () => { setTimeout(() => { isPaused = false; }, 1000); });

  // Initial set
  track.style.transform = `translateX(${currentPosition}px)`;
  requestAnimationFrame(updateTrack);
}
// Initialize both carousels
initInfiniteCarousel('commercialSlider', 'commercialTrack', 'ltr');   // Left to Right
initInfiniteCarousel('residentialSlider', 'residentialTrack', 'rtl'); // Right to Left

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});




const zones = [
 {
  name: "New Town",
  projects: 51,
  img: "https://www.propvestors.in/wp-content/uploads/2021/05/biswa-bangla.webp",
  link: "https://www.keyestates.in/new-town/newtown.html"
},
  {
    name: "EM Bypass",
    projects: 27,
    img: "https://www.propvestors.in/wp-content/uploads/2021/05/em-bypass-3-150x150.webp",
    link: "https://www.keyestates.in/key%20estates%20residentail/em-bypass/em-bypass.html"
  },
  {
    name: "Southern Bypass",
    projects: 23,
    img: "https://www.propvestors.in/wp-content/uploads/2021/05/southern-bypass-2-150x150.webp",
    link: "https://www.keyestates.in/key%20estates%20residentail/Southern-Bypass/Southern-Bypass.html"
  },
  {
    name: "Alipore",
    projects: 7,
    img: "https://www.propvestors.in/wp-content/uploads/2021/05/alipore-150x150.webp",
    link: "https://www.keyestates.in/key%20estates%20residentail/Alipore/Alipore.html"
  },
  {
    name: "Maheshtala",
    projects: 38,
    img: "https://www.propvestors.in/wp-content/uploads/2021/05/maheshtala-150x150.webp",
    link: "https://www.keyestates.in/key%20estates%20residentail/Maheshtala/Maheshtala.html"
  },
  {
    name: "BT Road",
    projects: 27,
    img: "https://www.propvestors.in/wp-content/uploads/2021/05/bt-road-150x150.webp",
    link: "https://www.keyestates.in/key%20estates%20residentail/bt-road/bt-road.html"
  },
  {
    name: "Dum Dum",
    projects: 23,
    img: "https://www.propvestors.in/wp-content/uploads/2021/05/dumdum-1-150x150.webp",
    link: "https://www.keyestates.in/key%20estates%20residentail/dum-dum/dum-dum.html"
  },
  {
    name: "Central",
    projects: 7,
    img: "https://www.propvestors.in/wp-content/uploads/2021/07/central-150x150.webp",
    link: "https://www.keyestates.in/key%20estates%20residentail/central/central.html"
  },
  {
    name: "Howrah",
    projects: 7,
    img: "https://www.propvestors.in/wp-content/uploads/2021/05/howrah-150x150.webp",
    link: "https://www.keyestates.in/key%20estates%20residentail/howrah/howrah.html"
  },
  {
    name: "Hooghly",
    projects: 38,
    img: "https://www.propvestors.in/wp-content/uploads/2021/05/hooghly-150x150.webp",
    link: "https://www.keyestates.in/key%20estates%20residentail/hooghly/hooghly.html"
  },
  {
    name: "Tollygunge",
    projects: 27,
    img: "https://www.propvestors.in/wp-content/uploads/2021/05/tollygunge-1-150x150.webp",
    link: "https://www.keyestates.in/key%20estates%20residentail/tollyguange/tollyguange.html"
  },
  {
    name: "Rajarhat",
    projects: 27,
    img: "https://www.propvestors.in/wp-content/uploads/2021/05/rajarhat-150x150.webp",
    link: "https://www.keyestates.in/resrajarhat/rajarhat.html"
  },
  {
    name: "Joka",
    projects: 7,
    img: "https://www.propvestors.in/wp-content/uploads/2021/05/joka-150x150.webp",
    link: "https://www.keyestates.in/key%20estates%20residentail/joka/joka.html"
  },
  {
    name: "Madhyamgram",
    projects: 38,
    img: "https://www.propvestors.in/wp-content/uploads/2021/05/madhyamgram-150x150.webp",
    link: "https://www.keyestates.in/key%20estates%20residentail/Madhyamgram/Madhyamgram.html"
  },
  {
    name: "Sector v",
    projects: 8,
    img: "https://www.propvestors.in/wp-content/uploads/2021/05/sector-v-150x150.webp",
    link: "https://www.keyestates.in/key%20estates%20residentail/sector-v/sector-v.html"
  }
];

const zoneContainer = document.getElementById("zoneContainer");

if (zoneContainer) {
  zones.forEach(zone => {
    const card = document.createElement("div");
    card.className = "zone-card";

card.onclick = () => {
  console.log(zone.link);
  window.location.href = zone.link;
};
    card.innerHTML = `
      <img src="${zone.img}" alt="${zone.name}">
      <div class="zone-info">
        <h3>${zone.name}</h3>
        <p>${zone.projects} Projects</p>
      </div>
    `;

    zoneContainer.appendChild(card);
  });
}



const rows = document.querySelectorAll(".logo-row");

rows.forEach(row => {
  let scrollAmount = 0;

  setInterval(() => {
    row.scrollBy({
      left: 150,
      behavior: "smooth"
    });

    scrollAmount += 150;

    if (scrollAmount > row.scrollWidth - row.clientWidth) {
      row.scrollTo({ left: 0, behavior: "smooth" });
      scrollAmount = 0;
    }
  }, 3000);
});
