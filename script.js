// Dark mode toggle functionality
const darkModeToggle = document.getElementById('darkModeToggle');
const searchEngineSelect = document.getElementById('engine');
let isDarkMode = localStorage.getItem('darkMode') === 'true';

// Function to set dark mode
function setDarkMode(isDark) {
    if (isDark) {
        document.body.style.backgroundColor = '#121212';
        document.body.style.color = '#fff';
        darkModeToggle.style.backgroundColor = '#333';
        darkModeToggle.style.color = '#fff';
    } else {
        document.body.style.backgroundColor = '#fff';
        document.body.style.color = '#000';
        darkModeToggle.style.backgroundColor = '#ddd';
        darkModeToggle.style.color = '#000';
    }
    localStorage.setItem('darkMode', isDark);
    isDarkMode = isDark;
}

// Set initial dark mode state
setDarkMode(isDarkMode);

// Toggle dark mode
darkModeToggle.addEventListener('click', () => {
    setDarkMode(!isDarkMode);
});

// Load preferred search engine on page load
window.addEventListener('load', () => {
    const savedEngine = localStorage.getItem('preferredSearchEngine');
    if (savedEngine) {
        searchEngineSelect.value = savedEngine;
    }
});

// Save selected search engine to localStorage
searchEngineSelect.addEventListener('change', () => {
    localStorage.setItem('preferredSearchEngine', searchEngineSelect.value);
});

// Search functionality
document.getElementById('searchForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const query = document.getElementById('searchBox').value;
    const engine = document.getElementById('engine').value;
    let url = '';
    switch (engine) {
        case 'google':
            url = `https://www.google.com/search?q=${encodeURIComponent(query)}`;
            break;
        case 'bing':
            url = `https://www.bing.com/search?q=${encodeURIComponent(query)}`;
            break;
        case 'duckduckgo':
            url = `https://duckduckgo.com/?q=${encodeURIComponent(query)}`;
            break;
        case 'yahoo':
            url = `https://search.yahoo.com/search?p=${encodeURIComponent(query)}`;
            break;
        case 'baidu':
            url = `https://www.baidu.com/s?wd=${encodeURIComponent(query)}`;
            break;
        case 'yandex':
            url = `https://yandex.com/search/?text=${encodeURIComponent(query)}`;
            break;
        case 'ecosia':
            url = `https://www.ecosia.org/search?q=${encodeURIComponent(query)}`;
            break;
        case 'brave':
            url = `https://search.brave.com/search?q=${encodeURIComponent(query)}`;
            break;
        case 'searx':
            url = `https://searx.be/search?q=${encodeURIComponent(query)}`;
            break;
        default:
            url = `https://www.google.com/search?q=${encodeURIComponent(query)}`;
    }
    
    // Redirect to the search results page
    if (query) {
        window.location.href = url;
    }
});
