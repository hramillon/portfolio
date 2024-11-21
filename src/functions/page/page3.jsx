import MenuBar from '../MenuBar.jsx';
import Technologies from '../Technologies.jsx';

/* const */

var languages = ["C","Python", "JS", "PHP", "HTML", "CSS", "Arduino"]
var technos = ["React","Symfony", "SQL","Cordova"]
var others = ["Wordpress","Git", "MySQL"]

/* functions */
export default function Page3(){
    return( 
        <div className='page3'>
            <MenuBar home='true' />

            <div className='technos' >

                <Technologies titre="Langages de programmation" classes="Langages" tab={languages} translation1="programmationLanguage"/>
                <Technologies titre="Frameworks et autres technologies liées aux langages de programmation" classes="technos" tab={technos} translation1="framework"/>
                <Technologies titre="Autres technologies ou plateformes" classes="others" tab={others} translation1="othersTechnologies"/>

            </div>
        </div>
    );
}