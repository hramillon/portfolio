
const contentOrList = () => {
    var menuPickPortfolioInner = document.getElementsByClassName('menuPickPortfolioInner');
    var checkedContent = document.getElementsByClassName('contentPortfolioContent');
    for (let int = 0; int < menuPickPortfolioInner.length; int++) {
        let element = menuPickPortfolioInner[int];
        
        // Ajoute l'écouteur d'événement si ce n'est pas déjà fait
        if (!element.dataset.listenerAdded) {
            element.addEventListener('click', function(e) {
                var el = e.target;
                if(el.id == "" && el == menuPickPortfolioInner[0]){
                    menuPickPortfolioInner[1].id = ""
                    menuPickPortfolioInner[0].id = "checkedPortfolioWay"
                }
                else if(el.id == "" && el == menuPickPortfolioInner[1]){
                    menuPickPortfolioInner[0].id = ""
                    menuPickPortfolioInner[1].id = "checkedPortfolioWay"
                }

                if(checkedContent[0].id  == 'checkedContent'){
                    checkedContent[0].id = ''
                    checkedContent[1].id = 'checkedContent'
                }else{
                    checkedContent[1].id = ''
                    checkedContent[0].id = 'checkedContent'
                }
            });
            element.dataset.listenerAdded = true; // Marque comme ajouté
        }
    }
}

export default contentOrList