
/* PROJECT PHOTO GALLERY */

const projectCards = document.querySelectorAll(".project-card");

const projectModal = new bootstrap.Modal(
    document.getElementById("projectModal")
);

const modalTitle = document.getElementById("modalTitle");
const modalDescription = document.getElementById("modalDescription");
const modalTech = document.getElementById("modalTech");
const modalRole = document.getElementById("modalRole");
const modalYear = document.getElementById("modalYear");
const projectGallery = document.getElementById("projectGallery");

function openProject(card) {

    modalTitle.textContent = card.dataset.title;
    modalDescription.textContent = card.dataset.description;
    modalTech.textContent = card.dataset.tech;
    modalRole.textContent = card.dataset.role;
    modalYear.textContent = card.dataset.year;

    // Get the six image paths from the selected project
    const images = card.dataset.images.split(",");

    // Clear previous project's photos
    projectGallery.replaceChildren();

    // Display all six photos
    images.forEach(function(imagePath, index) {

        const photoBox = document.createElement("div");
        photoBox.className = "gallery-photo";

        const image = document.createElement("img");
        image.src = imagePath.trim();
        image.alt = `${card.dataset.title} screenshot ${index + 1}`;
        image.loading = "lazy";

        const caption = document.createElement("p");
        caption.textContent = `Screenshot ${index + 1}`;

        photoBox.appendChild(image);
        photoBox.appendChild(caption);

        projectGallery.appendChild(photoBox);
    });

    projectModal.show();
}

projectCards.forEach(function(card) {

    card.addEventListener("click", function() {
        openProject(card);
    });

    card.addEventListener("keydown", function(event) {

        if (event.key === "Enter" || event.key === " ") {
            event.preventDefault();
            openProject(card);
        }

    });

});


/* CONTACT FORM */
const contactForm = document.getElementById("contactForm");
const formResult = document.getElementById("formResult");

contactForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("fullName").value.trim();

    formResult.textContent =
        `Thank you, ${name}! Your message has been entered successfully.`;

    formResult.style.color = "#6651b0";

    contactForm.reset();
});