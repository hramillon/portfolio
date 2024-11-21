/* page JS */
import toSection from '../functionsJs/onClick.js';

export default function SummaryPro(){
    return(
        <div className='presentation box'>

            <div>
                <p className='aboutMe' translation="about">À propos de moi :</p>
                <p onClick={() => toSection(4)} translation="CV" className='CvLink'>Mon CV</p>
            </div>
            <div>
                <p className='resume' translation="CVcontent">
                Jeune étudiant en informatique, passioné par les nouvelles technologies depuis le collège, j'ai toujours essayé de m'approprier les connaissances liées. Apprentissage de langages web comme PHP JavaScript et SQL ainsi que les langages de balises comme HTML et CSS. Dans le même temps j'ai tenté d'apprendre le fonctionnement des ordinateurs notamment en les réparent et en les montants mais aussi par la suite par la lecture de livre sur l'architecture des ordinateurs. Par la suite ...
                </p>
            </div>

        </div>
    );
}