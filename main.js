var typed = new Typed(".text", {
    strings: ["Frontend Developer", "Graphic Designer", "Web Developer"], 
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 100, 
    loop: true
  });
  // Set the progress bar percentage dynamically on page load
window.onload = function() {
    setProgressBar('.html', 90); // Set 90% for HTML
    setProgressBar('.css', 100); // Set 100% for CSS
    setProgressBar('.javascript', 90); // Set 90% for JavaScript
    setProgressBar('.php', 90); // Set 90% for PHP
};

function setProgressBar(selector, percentage) {
    const progressBar = document.querySelector(selector + ' span');
    const tooltip = document.querySelector(selector + ' span::after');
    
    // Set the progress width dynamically
    if (progressBar) {
        progressBar.style.width = percentage + '%';
    }
    
    // Set the tooltip position dynamically based on the percentage
    const tooltipElement = document.querySelector(selector + ' span');
    if (tooltipElement) {
        tooltipElement.style.setProperty('--tooltip-position', percentage + '%');
    }
}
