document.addEventListener("DOMContentLoaded", function() {
    const today = new Date();
    const newsArticles = document.querySelectorAll(".news-cards article");

    newsArticles.forEach(article => {
        const expiryDate = new Date(article.getAttribute("data-expiry-date"));
        
        if (!expiryDate) return;
        if (expiryDate < today) {
            article.style.display = "none";
        }
    });
});