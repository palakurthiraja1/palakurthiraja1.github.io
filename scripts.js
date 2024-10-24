window.onload = function() {
    // Console message and progress bar animation
    let consoleMessage = document.getElementById('console-message');
    let progressBar = document.querySelector('#progress-bar div');
    let bars = [
        document.querySelector('#bar-1 div'),
        document.querySelector('#bar-2 div'),
        document.querySelector('#bar-3 div')
    ];

    // Initialize console messages and progress bars
    let messages = [
        "Initializing AI Agent...",
        "Loading LLM Core Models...",
        "NLP Module Initialization Complete",
        "LLMs Ready. Agent Activated."
    ];

    let i = 0;
    let interval = setInterval(function() {
        if (i < messages.length) {
            consoleMessage.textContent = messages[i];
            if (i > 0) {
                bars[i - 1].style.animation = 'loadProgress 3s linear forwards';
            }
            i++;
        } else {
            clearInterval(interval);
            finishLoading();
        }
    }, 3000);
    
    function finishLoading() {
        // Hide loading screen and show main content
        document.getElementById('loading-screen').style.display = 'none';
        document.getElementById('main-content').style.display = 'block';
    }
};
