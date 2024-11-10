const portfolio = () => {
    /* get the width */
    var portfolioHomeList = document.getElementById('portfolioHomeList');

    var width = window.getComputedStyle(portfolioHomeList).width;
    var numericWidth = parseFloat(width);

    /* if img width is too small we remove the 6th image */

    if ((numericWidth / 6 ) -15 <= 120) {
        document.getElementById('lastImage').style.display = 'none';
        var divider = 5
    }else{ 
        document.getElementById('lastImage').style.display = 'flex';
        var divider = 6 }

    width = (numericWidth / divider) -15;

    /* we get div and img */

    var portfolioHomeListclass = document.getElementsByClassName('portfolioHomeListclass');
    var imageOfPortfolio = document.getElementsByClassName('imageOfPortfolio');
    
    var length = portfolioHomeListclass.length - 1;

    // all the possibilities
    for (let i = 0; i < length ; i++) {

        const element = portfolioHomeListclass[i];
        const img = imageOfPortfolio[i];

        element.style.width = width + 'px';
        img.style.width = width+'px';
    }
    // id width is too small don't calculate the size of the 6th image
    if(divider == 6){
        portfolioHomeListclass[length].style.width = width/2+'px';
        imageOfPortfolio[length].style.width =width/2 +'px';
    }
}
export default portfolio