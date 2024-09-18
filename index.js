document.addEventListener("DOMContentLoaded", function() {
    const searchForm = document.getElementById("searchForm");
    const searchBox = document.getElementById("searchBox");
    const searchEngineSelect = document.getElementById("searchEngine");
    const toggleButton = document.getElementById("darkModeToggle");
    const body = document.body;

    // 1. Apply dark mode instantly before page render to avoid flickering
    const darkMode = localStorage.getItem('darkMode');
    if (darkMode === 'enabled') {
        body.classList.add('dark-mode');
    }

    // 2. Focus the search box
    searchBox.focus();

    // 3. Load the previously selected search engine from localStorage
    const savedSearchEngine = localStorage.getItem('searchEngine');
    if (savedSearchEngine) {
        searchEngineSelect.value = savedSearchEngine;
    }

    // 4. Toggle dark mode and save preference to localStorage
    toggleButton.addEventListener("click", () => {
        body.classList.toggle("dark-mode");

        if (body.classList.contains("dark-mode")) {
            localStorage.setItem('darkMode', 'enabled');
        } else {
            localStorage.setItem('darkMode', 'disabled');
        }
    });

    // 5. Save the selected search engine in localStorage
    searchEngineSelect.addEventListener("change", function() {
        localStorage.setItem('searchEngine', searchEngineSelect.value);
    });

    // 6. Handle form submission, open search in the current tab
    searchForm.addEventListener("submit", function(e) {
        e.preventDefault(); // Prevent the default form submission
        
        const query = searchBox.value.trim();
        const engine = searchEngineSelect.value;

        if (query) {
            const searchUrl = engine + encodeURIComponent(query);
            window.location.href = searchUrl; // Open results in the same tab
        }
    });
});