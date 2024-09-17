document.getElementById("searchForm").addEventListener("submit", function(e) {
    e.preventDefault(); // Prevent form submission
    
    let query = document.getElementById("searchBox").value;
    let engine = document.getElementById("searchEngine").value;
    
    if (query) {
        let searchUrl = engine + encodeURIComponent(query);
        window.open(searchUrl, "_blank"); // Open search results in a new tab
    }
});

const toggleButton = document.getElementById("darkModeToggle");
const body = document.body;

// Check if dark mode was previously enabled
if (localStorage.getItem('darkMode') === 'enabled') {
    body.classList.add('dark-mode');
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
