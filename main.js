
window.onload = () => {
    // Enable ChromeVox
    document.getElementById('enable-cvox').click();
}

function showWeather(); {
    let targetURL = 'https://cs1.converse.edu/~phbrown/CSC335/weather.php';
    let fillFn = function (request) {
        let elt = document.getElementById('showweatherdiv');
        elt.innerHTML = ""; 
    };
    handleRequestOnCompletion(fillFn, targetURL);
}