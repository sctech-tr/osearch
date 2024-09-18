document.addEventListener('DOMContentLoaded', function () {
    const searchForm = document.getElementById('searchForm');
    const searchBox = document.getElementById('searchBox');
    const searchEngine = document.getElementById('searchEngine');
    const darkModeToggle = document.getElementById('darkModeToggle');

    // Load dark mode preference from localStorage
    if (localStorage.getItem('darkMode') === 'enabled') {
        document.body.classList.add('dark-mode');
    }

    // Dark Mode Toggle
    darkModeToggle.addEventListener('click', function () {
        document.body.classList.toggle('dark-mode');
        // Save preference to localStorage
        if (document.body.classList.contains('dark-mode')) {
            localStorage.setItem('darkMode', 'enabled');
        } else {
            localStorage.removeItem('darkMode');
        }
    });

    // Handle form submission
    searchForm.addEventListener('submit', function (e) {
        e.preventDefault();
        const query = searchBox.value.trim();
        if (!query) {
            alert('Please enter a search query.');
            return;
        }
        const engineURL = searchEngine.value;
        const searchURL = engineURL + encodeURIComponent(query);
        window.open(searchURL, '_blank');
    });
});
