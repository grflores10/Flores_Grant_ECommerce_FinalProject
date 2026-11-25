let totalWishlist = 0;
const countDisplay = document.getElementById("wishlist-count");

document.querySelectorAll(".wishlist-btn").forEach(btn => {
    btn.addEventListener("click", () => {
        const img = btn.querySelector("img");
        
        btn.classList.toggle("active");

        if (img.src.includes("HEARTNORM.png")) {
            img.src = "IMAGES/HEARTFAV.png";
            totalWishlist++;
        } else {
            img.src = "IMAGES/HEARTNORM.png";
            totalWishlist--;
        }

        countDisplay.innerText = totalWishlist;
    });
});

const contactForm = document.getElementById("contact-form");

if (contactForm) {
    contactForm.addEventListener("submit", function(event) {
        event.preventDefault();
        const name = document.getElementById("text-name").value;
        const email = document.getElementById("text-email").value;
        const message = document.getElementById("text-message").value;
        const errormsg = document.getElementById("error-message");
        const successmsg = document.getElementById("successcontact");

        errormsg.style.display = "none";
        successmsg.style.display = "none";

        if (name.trim() === "" || !email.includes("@") || message.trim().length < 10) {
            errormsg.style.display = "block";
            return;
        }

        successmsg.innerText = "Thank you your message has been sent to the Crunch Team!";
        successmsg.style.display = "block";
        contactForm.reset();
    });
}