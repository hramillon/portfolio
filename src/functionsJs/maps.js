const maps = () => {
    var maps = document.getElementById("maps");
    var divLocation  = document.getElementById("locationBox");

    var widthLocation = window.getComputedStyle(divLocation).width;
    var numericWidth = parseFloat(widthLocation);
    widthLocation = numericWidth * 0.95;

    maps.style.width = widthLocation + 'px';

}

export default maps