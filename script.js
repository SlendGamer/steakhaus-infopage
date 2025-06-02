document.addEventListener("DOMContentLoaded", function() {
    const today = new Date();
    const newsArticles = document.querySelectorAll("#expiring");

    newsArticles.forEach(elem => {
        const expiryDate = new Date(elem.getAttribute("expiry-date"));
        
        if (!expiryDate) return;
        if (expiryDate < today) {
            elem.style.display = "none";
        }
    });
});