function PortfolioSection({name, src, description, ide,classe,number,translation1,translation2}){
    return(
    <li id={ide} className='portfolioBox' filepoint={number}>

        <div className='imagePortfolioSection'>
            <img src={src} className={classe}/>
        </div>
        <div className='portfolioSection'>
            <h2 translation={translation1}>{name}</h2>
            <p translation={translation2}>{description}</p>
        </div>

    </li>
    );
}

export default function ListPortfolioSection(){
    return(
        <div className='contentPortfolio'>
            <ul className='contentPortfolioContent' id='checkedContent'>
                <PortfolioSection src="deltatech.jpg" description="site d'information DeltaTech 2018" name="Deltatech" ide='checkedPortfolioSection' number={0} translation2="image1Ports"/>
                <PortfolioSection src="Hugo.jpg" description="Premier site personnelle 2019" name="Blog Hugo" number={1} translation2="image2Ports"/>
                <PortfolioSection src="calideo.png" description="Web TV pour la Cali" name="Calideo" number={2} translation2="image3Ports"/>
                <PortfolioSection src="speatch.png" description="Réseau social complet" name="Speatch" number={3} translation2="image4Ports"/>
                <PortfolioSection src="dashboard.png" description="Liste de site réalisé pour s'entraîner" name="Sites d'entraînement" number={4} translation1="entraînement" translation2="image5Ports"/>
                <PortfolioSection src="countryquiz.jpg" description="Première application Android" id="lastImage" name="CountryQuiz" classe='androidPortfolioList' number={5} translation2="image6Ports"/>
            </ul>

            <div className='contentPortfolioContent infoOnProject'>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis sequi ut laborum, nam illum magni soluta dolorum atque doloribus repellendus illo quos, quisquam voluptate quod quas eum est adipisci porro.</p>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores accusamus, consequatur, porro libero recusandae, delectus explicabo unde corrupti autem amet animi quidem in provident numquam esse. Quis est officia repudiandae!</p>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa, delectus. Excepturi ratione incidunt eligendi nostrum, iure commodi ut facere harum repellendus aut voluptatibus, dolorem nihil? Quam officia magnam ut porro!</p>
            </div>
        </div>
    );
}