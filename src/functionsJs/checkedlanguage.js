function languageChange(language) {
    let langue;
    if (language == "english") {
        langue = "en";
    }else if(language == "french"){
        langue = "fr";
    }else if(language == "spanish"){
        langue = "esp";
    }
    
    fetch('json/langue.json')
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }
        return response.text(); // Récupère la réponse en texte
    })
    .then(text => {
        return JSON.parse(text); // Tente de parser le texte en JSON
    })
    .then(data => {
        data  =data[langue];
        for (let cle in data) {
            if (data.hasOwnProperty(cle)) {  // Vérifie que la clé appartient directement à l'objet
                document.querySelector("[translation='" + cle + "']").innerHTML = data[cle]
            }
        }
    })
    .catch(error => {
        console.error('Il y a eu un problème avec la récupération du fichier JSON:', error);
    });

    fetch('json/contentPortfolio.json')
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }
        return response.text(); // Récupère la réponse en texte
    })
    .then(text => {
        return JSON.parse(text); // Tente de parser le texte en JSON
    })
    .then(data => {
        let key = document.querySelector('#checkedPortfolioSection h2').innerHTML;
        data  =data[key][language];
        for (let cle in data) {
            if (data.hasOwnProperty(cle)) {  // Vérifie que la clé appartient directement à l'objet
                document.querySelector(".infoOnProject").innerHTML = data
            }
        }
    })
    .catch(error => {
        console.error('Il y a eu un problème avec la récupération du fichier JSON:', error);
    });

    fetch('json/placeholder.json')
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }
        return response.text(); // Récupère la réponse en texte
    })
    .then(text => {
        return JSON.parse(text); // Tente de parser le texte en JSON
    })
    .then(data => {
        data  =data[langue];
        for (let cle in data) {
            if (data.hasOwnProperty(cle)) {  // Vérifie que la clé appartient directement à l'objet
                document.querySelector("[translation='" + cle + "']").placeholder = data[cle]
            }
        }
    })
    .catch(error => {
        console.error('Il y a eu un problème avec la récupération du fichier JSON:', error);
    });
}

const checkedlanguage = () => {

    var language  = "french";

    var languageFlag = document.getElementsByClassName('languageFlag');
    let country;

    async function getCountry() {
        if (navigator.geolocation) {
            try {
                const position = await new Promise((resolve, reject) => {
                    navigator.geolocation.getCurrentPosition(resolve, reject);
                });

                const latitude = position.coords.latitude;
                const longitude = position.coords.longitude;

                // Utilisation d'une API tierce pour obtenir le pays (par exemple, BigDataCloud)
                const response = await fetch(`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=en`);
                const data = await response.json();
                country = data.countryCode; // Set country after API call

            } catch (error) {
                country = "Inconnu"; // Fallback if something goes wrong
            }
        } else {
            country = "Inconnu"; // Fallback if geolocation is not available
        }
    }

    getCountry().then(() => {
        let france = document.querySelectorAll('.checkedLanguage')

        if (country == "FR" || country == "FRA") {
            languageChange('french');
        }else if (country == "ES" || country == "ESP") {
            languageChange('spanish');
            let newLanguage = document.querySelectorAll('.spanish')
            for (let i = 0; i < france.length; i++) {
                france[i].classList.remove('checkedLanguage')
                newLanguage[i].classList.add('checkedLanguage')
            }
            language = "spanish";
        }else if (country == "US" || country == "USA" || country == "GB" || country == "GBR" || country == "IE" || country == "IRL") {
            languageChange('english');
            let newLanguage = document.querySelectorAll('.english')
            for (let i = 0; i < france.length; i++) {
                france[i].classList.remove('checkedLanguage')
                newLanguage[i].classList.add('checkedLanguage')
            }
            language = "english";
        }else{
            languageChange('french');
        }
    });
    for (let i = 0; i < languageFlag.length; i++) {
        const element = languageFlag[i];

        if (!element.dataset.listenerAdded) {
            element.addEventListener('click', function(e) {
                e.stopPropagation(); 
                var el  = e.target;

                var classes  = el.className;
                classes = classes.split(" ");

                if(classes[1]  != language){
                    language = classes[1]
                    var checkedlanguage =  document.getElementsByClassName("checkedLanguage");
                    var ckeckLanguage = document.getElementsByClassName(classes[1]);

                    for (let i = 0; i < checkedlanguage.length; i++) {
                        const element1 = checkedlanguage[i];
                        const element2 = ckeckLanguage[i];

                        element1.classList.remove("checkedLanguage");
                        element2.classList.add('checkedLanguage')
                        
                    }
                }

                languageChange(classes[1])
            });
        }
        element.dataset.listenerAdded = true; // Marque comme ajouté
        
    }

}

export default checkedlanguage