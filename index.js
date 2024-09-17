document.addEventListener("DOMContentLoaded", function() {
    const searchForm = document.getElementById("searchForm");
    const searchBox = document.getElementById("searchBox");
    const searchEngineSelect = document.getElementById("searchEngine");
    const toggleButton = document.getElementById("darkModeToggle");
    const body = document.body;

    // Auto-focus the search box
    searchBox.focus();

    // Check if dark mode was previously enabled
    if (localStorage.getItem('darkMode') === 'enabled') {
        body.classList.add('dark-mode');
    }

    // Load the previously selected search engine from localStorage
    const savedSearchEngine = localStorage.getItem('searchEngine');
    if (savedSearchEngine) {
        searchEngineSelect.value = savedSearchEngine;
    }

    // Toggle dark mode on button click
    toggleButton.addEventListener("click", () => {
        body.classList.toggle("dark-mode");

        if (body.classList.contains("dark-mode")) {
            localStorage.setItem('darkMode', 'enabled');
        } else {
            localStorage.setItem('darkMode', 'disabled');
        }
    });

    // Remember the selected search engine
    searchEngineSelect.addEventListener("change", function() {
        localStorage.setItem('searchEngine', searchEngineSelect.value);
    });

    // Handle the search form submission
    searchForm.addEventListener("submit", function(e) {
        e.preventDefault(); // Prevent form submission
        
        let query = searchBox.value;
        let engine = searchEngineSelect.value;

        if (query) {
            let searchUrl = engine + encodeURIComponent(query);
            window.location.href = searchUrl; // Open search results in the current tab
        }
    });
});
