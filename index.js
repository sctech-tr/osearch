// Dark mode toggle functionality
const toggleDarkModeBtn = document.getElementById('toggleDarkMode');
const searchEngineSelect = document.getElementById('engine');
let isDarkMode = true;

// Toggle dark mode
toggleDarkModeBtn.addEventListener('click', () => {
    if (isDarkMode) {
        document.body.style.backgroundColor = '#fff';
        document.body.style.color = '#000';
        toggleDarkModeBtn.style.backgroundColor = '#ddd';
        toggleDarkModeBtn.style.color = '#000';
    } else {
        document.body.style.backgroundColor = '#121212';
        document.body.style.color = '#fff';
        toggleDarkModeBtn.style.backgroundColor = '#333';
        toggleDarkModeBtn.style.color = '#fff';
    }
    isDarkMode = !isDarkMode;
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
    const query = document.getElementById('query').value;
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

    // Open the search URL in a new tab
    if (query) {
        window.open(url, '_blank');
    }
});
