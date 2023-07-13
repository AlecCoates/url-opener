function submitURLs() {
    let inputURLs = document.getElementById('inputURLs').value.split('\n');
    document.getElementById('outputURL').value = window.location.href.slice(0, window.location.href.lastIndexOf("/")+1) + 'open.html?urls=' + encodeURIComponent(JSON.stringify(inputURLs));
}

function copyOutputURL() {
    let outputURL = document.getElementById('outputURL').value;
    navigator.clipboard.writeText(outputURL);
}

function openOutputURL() {
    let outputURL = document.getElementById('outputURL').value;
    window.open(outputURL, '_blank');
}