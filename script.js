document.addEventListener("DOMContentLoaded", function() {
    // Get references to DOM elements
    const searchBox = document.getElementById('searchBox');
    const searchForm = document.getElementById('searchForm');
    const searchEngineSelect = document.getElementById('engine');
    const customEngineInput = document.getElementById('customEngine');
    const saveCustomEngineCheckbox = document.getElementById('saveCustomEngine');
    const saveCustomEngineContainer = document.getElementById('saveCustomEngineContainer');
    const darkModeToggle = document.getElementById('darkModeToggle');

    // Function to apply dark mode
    const applyDarkMode = (isDark) => {
        if (isDark) {
            document.body.style.backgroundColor = '#121212';
            document.body.style.color = '#fff';
        } else {
            document.body.style.backgroundColor = '#fff'; // Light background
            document.body.style.color = '#000'; // Dark text
        }
    };

    // Load preferred search engine and custom engine from localStorage on page load
    window.addEventListener('load', () => {
        const savedEngine = localStorage.getItem('preferredSearchEngine');
        const savedCustomEngine = localStorage.getItem('customSearchEngine');
        const isDarkMode = localStorage.getItem('darkMode') === 'true';

        // Apply dark mode
        applyDarkMode(isDarkMode);

        if (savedEngine) {
            searchEngineSelect.value = savedEngine;
            if (savedEngine === 'custom' && savedCustomEngine) {
                customEngineInput.style.display = 'inline-block';
                customEngineInput.value = savedCustomEngine;
                saveCustomEngineContainer.style.display = 'inline-block';
            }
        }
    });

    // Show custom engine input and option to save when 'Custom' is selected
    searchEngineSelect.addEventListener('change', () => {
        if (searchEngineSelect.value === 'custom') {
            customEngineInput.style.display = 'inline-block';
            saveCustomEngineContainer.style.display = 'inline-block';
            customEngineInput.required = true;
        } else {
            customEngineInput.style.display = 'none';
            saveCustomEngineContainer.style.display = 'none';
            customEngineInput.required = false;
        }
    });

    // Save selected search engine and custom engine to localStorage
    searchEngineSelect.addEventListener('change', () => {
        localStorage.setItem('preferredSearchEngine', searchEngineSelect.value);
    });

    saveCustomEngineCheckbox.addEventListener('change', () => {
        if (saveCustomEngineCheckbox.checked) {
            localStorage.setItem('customSearchEngine', customEngineInput.value);
        } else {
            localStorage.removeItem('customSearchEngine');
        }
    });

    // Search functionality
    searchForm.addEventListener('submit', function (e) {
        e.preventDefault();
        const query = searchBox.value;
        const engine = searchEngineSelect.value;
        let url = '';

        if (engine === 'custom') {
            const customUrl = customEngineInput.value;
            if (!customUrl) {
                alert('Please enter a valid custom engine URL scheme. ex. https://google.com/search?q=');
                return;
            }
            url = `${customUrl}${encodeURIComponent(query)}`;
        } else {
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
        }

        // Save custom engine URL if the checkbox is checked
        if (saveCustomEngineCheckbox.checked) {
            localStorage.setItem('customSearchEngine', customEngineInput.value);
        }

        // Redirect to the search results page
        if (query) {
            window.location.href = url;
        }
    });

    // Toggle dark mode
    darkModeToggle.addEventListener('click', () => {
        const isDarkMode = document.body.style.backgroundColor === 'rgb(18, 18, 18)';
        const newMode = !isDarkMode;
        localStorage.setItem('darkMode', newMode);
        applyDarkMode(newMode);
    });
});
