function searchParent(el, elSearch){
    while(el.tagName != elSearch){
        el = el.parentElement
    }
    return el
}

const portfolioBox = () => {
    var portfolioBox = document.getElementsByClassName('portfolioBox');
        for (let int = 0; int < portfolioBox.length; int++) {
            var element = portfolioBox[int];

            // Ajoute l'écouteur d'événement si ce n'est pas déjà fait
            if (!element.dataset.listenerAdded) {
                element.addEventListener('click', function(e) {
                    e.stopPropagation(); 
                    var el =searchParent(e.target, 'LI')
                    if(el.id == ""){
                        var checkedElement = document.getElementById('checkedPortfolioSection');
                        checkedElement.id = ""
                        el.id = "checkedPortfolioSection"
                    }
                });
                element.dataset.listenerAdded = true; // Marque comme ajouté
        }
    }
}

export default portfolioBox