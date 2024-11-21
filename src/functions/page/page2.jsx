import MenuBar from '../MenuBar.jsx';
import Caroussel from '../Caroussel.jsx';
import ListPortfolioSection from '../ListPortfolioSection.jsx';
import ImageGallery from '../ImageGallery.jsx';
import Warn from '../warn.jsx';
import Modal from '../modal.jsx';
import React, { createContext, useState, useContext, useEffect} from 'react';

const allModules = {
    folder1: import.meta.glob('../../assets/portfolio/DeltaTech/*.(png|jpeg|svg|jpg)'),
    folder2: import.meta.glob('../../assets/portfolio/Blog/*.(png|jpeg|svg|jpg)'),
    folder3: import.meta.glob('../../assets/portfolio/Calideo/*.(png|jpeg|svg|jpg)'),
    folder4: import.meta.glob('../../assets/portfolio/Speatch/*.(png|jpeg|svg|jpg)'),
    folder5: import.meta.glob('../../assets/portfolio/Entraînement/*.(png|jpeg|svg|jpg)'),
    folder6: import.meta.glob('../../assets/portfolio/CountryQuiz/*.(png|jpeg|svg|jpg)'),
  };

export default function Page2(){

    function searchParent(el, elSearch){
        while(el.tagName != elSearch){
            el = el.parentElement
        }
        return el
    }
  // Créer un tableau pour stocker les images
  const [loadedImages, setLoadedImages] = useState([]);
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const loadImages = async () => {

        let keys = document.querySelector('#checkedPortfolioSection').getAttribute('filepoint')

        const images = allModules[Object.keys(allModules)[keys]];
        
        
        if (!images) {
            console.warn('No images found for the selected folder.');
            return;
          }


      // Créer un tableau de promesses
      const imagePromises = Object.keys(images).map(async (imagePath) => {
        try {
          const imgModule = await images[imagePath](); // Charger l'image
          return { path: imagePath, src: imgModule.default }; // Retourner le chemin et la source
        } catch (error) {
          console.error(`Error loading image at ${imagePath}:`, error);
          return null; // Gérer les erreurs de chargement
        }
      });

      // Attendre que toutes les promesses soient résolues
      const resolvedImages = await Promise.all(imagePromises);
      setLoadedImages(resolvedImages); // Mettre à jour l'état avec les images chargées
    };

    loadImages();

    let changeCarousel = document.querySelectorAll('.contentPortfolioContent li')
    changeCarousel.forEach(element => {
        if (!element.dataset.listenerAdded) {
            element.addEventListener('click', function(e) {
                e.stopPropagation(); 
                var el =searchParent(e.target, 'LI')
                if(el.id == ""){
                    var checkedElement = document.getElementById('checkedPortfolioSection');
                    checkedElement.id = ""
                    el.id = "checkedPortfolioSection"
                }
                loadImages();

                /**
                 * récupère le json approprié
                 */
                let langue = document.querySelector('.checkedLanguage').classList[1];
                let key = document.querySelector('#checkedPortfolioSection h2').innerHTML;
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
                    data  = data[key][langue];
                    for (let cle in data) {
                        if (data.hasOwnProperty(cle)) {  // Vérifie que la clé appartient directement à l'objet
                            document.querySelector(".infoOnProject").innerHTML = data
                        }
                    }
                })
                .catch(error => {
                    console.error('Il y a eu un problème avec la récupération du fichier JSON:', error);
                });
            })
        }
        element.dataset.listenerAdded = true; // Marque comme ajouté
    }); 

  }, []);


    return(
        <div className='page2'>
            <Warn message="Veuillez passer sur ordinateur pour pouvoir avoir accès à toutes les images du portfolio" className="warnForMobile" translation1="warn1"/>
            <div className='visualPortfolio'>
               <Caroussel slidesArray={loadedImages}> 
                    <ImageGallery loadedImages={loadedImages}/>
                </Caroussel>

            </div> 

            <div className='choosePortfolio'>
                <MenuBar home='true' />

                <div className='pickPortfolio box'>
                    <div className='menuPickPortfolio'>

                        <p id='checkedPortfolioWay' className='menuPickPortfolioInner menuPickPortfolioInnerLeft' translation="listePort">list portfolio</p>

                        <p className='menuPickPortfolioInner menuPickPortfolioInnerRight' translation="info">info</p>

                    </div>
                    <ListPortfolioSection/>
                </div>
            </div>
        </div>
    );
}