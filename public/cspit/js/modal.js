//  ------------------- Club pop-up --------------------------------
function openPopup(clubId) {
  const clubData = clubs[clubId];
  if (clubData) {
    document.getElementById("popup-title").textContent = clubData.title;
    document.getElementById("popup-image").src = clubData.image;
    document.getElementById("popup-description").textContent =
      clubData.description;
    document.getElementById("popup-members").innerHTML = clubData.members
      .map((member) => `<li>${member}</li>`)
      .join("");
    document.getElementById("popup-contact").innerHTML = clubData.contact
      .map((item) => `<li>${item}</li>`)
      .join("");
    document.getElementById("club-popup").style.display = "flex";
  }
}

// Close popup
function closePopup() {
  document.getElementById("club-popup").style.display = "none";
}

// Close popup when clicking outside the content
window.addEventListener("click", (event) => {
  const popup = document.getElementById("club-popup");
  if (event.target === popup) {
    closePopup();
  }
});
// Close popup when ESC key is pressed
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" || event.key === "Esc") {
    closePopup();
  }
});

//   ----------------------- PROJECT POPUP --------------------------------
function openProjectPopup(projectId) {
  const popup = document.getElementById("project-popup");
  const project = projects[projectId];

  if (project) {
    // Set the title
    document.querySelector(".project-popup-title").textContent = project.title;

    // Set the description
    document.querySelector(".popup-description").textContent =
      project.description;

    // Populate the contact list
    const contactList = document.querySelector(".popup-contact");
    contactList.innerHTML = project.contacts
      .map((contact) => `<li>${contact}</li>`)
      .join("");

    // Populate the slider
    const slider = document.querySelector(".popup-slider");
    slider.innerHTML = project.images
      .map(
        (img, index) =>
          `<img src="${img}" alt="Slide ${index + 1}" class="slider-image ${
            index === 0 ? "active" : ""
          }" />`
      )
      .join("");

    // Populate the thumbnails
    const thumbnailStrip = document.querySelector(".thumbnail-strip");
    thumbnailStrip.innerHTML = project.images
      .map(
        (img, index) =>
          `<img src="${img}" alt="Thumbnail ${index + 1}" class="thumbnail ${
            index === 0 ? "active" : ""
          }" onclick="showSlide(${index})" />`
      )
      .join("");

    // Display the popup
    popup.style.display = "flex";
  } else {
    console.error("Invalid projectId:", projectId);
  }
}

function showSlide(index) {
  const slides = document.querySelectorAll(".slider-image");
  const thumbnails = document.querySelectorAll(".thumbnail");

  // Update active slide
  slides.forEach((slide, i) => slide.classList.toggle("active", i === index));

  // Update active thumbnail
  thumbnails.forEach((thumb, i) =>
    thumb.classList.toggle("active", i === index)
  );
}

function prevSlide() {
  const slides = document.querySelectorAll(".slider-image");
  const thumbnails = document.querySelectorAll(".thumbnail");
  let currentIndex = Array.from(slides).findIndex((slide) =>
    slide.classList.contains("active")
  );
  const newIndex = (currentIndex - 1 + slides.length) % slides.length;

  showSlide(newIndex);
}

function nextSlide() {
  const slides = document.querySelectorAll(".slider-image");
  const thumbnails = document.querySelectorAll(".thumbnail");
  let currentIndex = Array.from(slides).findIndex((slide) =>
    slide.classList.contains("active")
  );
  const newIndex = (currentIndex + 1) % slides.length;

  showSlide(newIndex);
}

function closeProjectPopup() {
  const popup = document.getElementById("project-popup");
  popup.style.display = "none";
}

// Close popup when ESC key is pressed
window.addEventListener("click", (event) => {
  const popup = document.getElementById("project-popup");
  if (event.target === popup) {
    closeProjectPopup();
  }
});
// Close popup when ESC key is pressed
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" || event.key === "Esc") {
    closeProjectPopup();
  }
});



// --------------------------- Footer NIRF AICTE Popup-----------------------
      // Open Custom Popup
      function openCustomPopup(popupId) {
        const popup = document.getElementById(popupId);
        popup.style.display = "flex"; // Make it visible
        setTimeout(() => {
            popup.classList.add("custom-show"); // Add animation class after a small delay
        }, 10);
    }
    
    // Close Custom Popup
    function closeCustomPopup(popupId) {
        const popup = document.getElementById(popupId);
        popup.classList.remove("custom-show"); // Remove animation class
        setTimeout(() => {
            popup.style.display = "none"; // Hide popup after animation
        }, 300); // Match this delay with the transition duration in CSS
    }
    
    // Close popup when clicking outside the modal content
    window.addEventListener("click", function (event) {
        const modals = document.querySelectorAll(".custom-modal");
        modals.forEach((modal) => {
            if (event.target === modal) {
                closeCustomPopup(modal.id);
            }
        });
    });
    
    // Close popup when pressing the Escape key
    document.addEventListener("keydown", function (event) {
        if (event.key === "Escape") { // Check if the Escape key was pressed
            const modals = document.querySelectorAll(".custom-modal.custom-show"); // Select visible modals
            modals.forEach((modal) => {
                closeCustomPopup(modal.id);
            });
        }
    });
    

// ------------------- BTECH HONOS ACCORDIAN ------------------
const accordionHeaders = document.querySelectorAll(".accordion-header");

accordionHeaders.forEach((header) => {
  header.addEventListener("click", () => {
    const currentContent = header.nextElementSibling;

    // Close all other accordions
    document.querySelectorAll(".accordion-content").forEach((content) => {
      if (content !== currentContent) {
        content.style.maxHeight = null;
        content.classList.remove("open");
        content.previousElementSibling.querySelector("span").textContent = "+";
      }
    });

    // Toggle the clicked accordion
    if (currentContent.classList.contains("open")) {
      currentContent.style.maxHeight = null;
      currentContent.classList.remove("open");
      header.querySelector("span").textContent = "+";
    } else {
      currentContent.style.maxHeight = currentContent.scrollHeight + "px";
      currentContent.classList.add("open");
      header.querySelector("span").textContent = "−";
    }
  });
});
