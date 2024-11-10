/* page JS */
import toSection from '../functionsJs/onClick.js';


function ImagePortfolio(props){
    return (
        <div id={props.id} className="portfolioHomeListclass" 
        onClick={() => toSection(2, { src: props.src })}>
            <img src={props.src} className="imageOfPortfolio"/>
            <p translation={props.translation1}>{props.description}</p>
        </div>
    );
}

export default function Portfolio(){
    return(
        <div className='portFolio box'>

            <h1 translation="portfolioTitle">portfolio</h1>
            <div id="portfolioHomeList">
                <ImagePortfolio src="deltatech.jpg" description="site d'information DeltaTech 2018" translation1="image1Port"/>
                <ImagePortfolio src="Hugo.jpg" description="Premier site personnelle 2019" translation1="image2Port"/>
                <ImagePortfolio src="calideo.png" description="Web TV pour la Cali" translation1="image3Port"/>
                <ImagePortfolio src="speatch.png" description="Réseau social complet" translation1="image4Port"/>
                <ImagePortfolio src="dashboard.png" description="Liste de site réalisé pour s'entraîner" translation1="image5Port"/>
                <ImagePortfolio src="countryquiz.jpg" description="Première application Android" id="lastImage" translation1="image6Port"/>
            </div>

        </div>
    );
}