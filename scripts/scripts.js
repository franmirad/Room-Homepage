/*//----------------------------------------// GALLERY //----------------------------------------//*/
let furniture = [
  {
    "title": "Discover innovative ways to decorate",
    "image": "./images/desktop-image-hero-1.jpg",
    "description": "We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love."
  },
  {
    "title": "We are always available for across the globe",
    "image": "./images/desktop-image-hero-2.jpg",
    "description": "With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we’re in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today."
  },
  {
    "title": "Manufactured with the best materials",
    "image": "./images/desktop-image-hero-3.jpg",
    "description": "Our modern furniture store provide a high level of quality to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office."
  }
]

let currentIndex = 0;
let totalFurniture = furniture.length;

function updateContent() {
  let currentFurniture = furniture[currentIndex];
  document.getElementById("image").src = currentFurniture.image;
  document.getElementById("title").textContent = currentFurniture.title;
  document.getElementById("description").textContent = currentFurniture.description;
}

updateContent();

document.getElementById("next-button").addEventListener("click", function() {
  if (currentIndex < totalFurniture - 1) {
    currentIndex++;
  } else {
    currentIndex = 0; // reset to first item
  }
  updateContent();
});

document.getElementById("previous-button").addEventListener("click", function() {
  if (currentIndex > 0) {
    currentIndex--;
  } else {
    currentIndex = totalFurniture - 1; // reset to last item
  }
  updateContent();
});

/*//----------------------------------------// SIDENAV //----------------------------------------//*/
function openNav() {
  const sidenav = document.getElementById("mySidenav");
  const overlay = document.createElement("div");
  overlay.classList.add("overlay");
  document.body.appendChild(overlay);
  if (window.innerWidth <= 425) {
    sidenav.style.minHeight = "160px";
  } else {
    sidenav.style.minHeight = "100px";
  }
  document.getElementById("navbar").style.display = "none";
  document.getElementById("navbar2").style.display = "none";
  document.body.style.overflow = "hidden";
  setTimeout(() => {
    overlay.style.opacity = "0.5";
  }, 10);
}

function closeNav() {
  const overlay = document.querySelector(".overlay");
  if (overlay) {
    overlay.style.opacity = "0";
    setTimeout(() => {
      overlay.remove();
    }, 500);
  }
  document.getElementById("mySidenav").style.minHeight = "0";
  document.getElementById("navbar").style.display = "block";
  document.getElementById("navbar2").style.display = "none";
  document.body.style.overflow = "auto";
}