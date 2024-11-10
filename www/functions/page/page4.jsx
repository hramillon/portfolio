import MenuBar from '../MenuBar.jsx';
import Timeline from '../Timeline.jsx';

var formation1 = ["2024-2026","2021-2024","2019-2021","2018-2019"];
var formation2 = ["Licence 2, mention informatique à l'université de Bordeaux.",
                "CPGE ECG & littérature Sciences sociales, options mathématiques expertes et géopolitique.",
                "Première et terminale option Maths expertes et cinéma, spécialités physique chimie et mathématiques.",
                "2nde générale avec spécialités SES et informatique."];
var formation3 = ["license","CPGE","lycee","seconde"];

var exp1 = ["août 2023 et août 2022","Juillet 2020"];
var exp2 = ["Centre de recherche poste: pour l’ouverture de colis au centre de recherche des colis perdus à Libourne, Gironde.",
            "Vignoble : au poste d’ouvrier viticole au sein du Château Pavie à Saint-Emilion."];
var exp3 = ["recherche","vigne"]

export default function Page4(){
    return(
        <div className='page4'>
            <MenuBar home='true' />

            <div className='CV'>
                <div className='CVtop'>
                    <div className='formation'>
                        <h2 translation="Formation">Formation</h2>
                        <Timeline tab1={formation1} tab2={formation2} tab3={formation3}/>
                    </div>

                    <div className='exp'>
                        <h2 translation="pro">Expériences professionelles</h2>
                        <Timeline tab1={exp1} tab2={exp2} tab3={exp3}/>
                    </div>
                </div>
                <div>
                    <div className='langues'>
                        <h2 translation="language">Langues</h2>
                        <ul>
                            <li className='box'>
                                <div>
                                    <img src='france.png'/>
                                </div>
                                <div className='containers'>
                                    <div className='skill green1' translation="french">Français :Maternal Language</div>
                                </div>
                            </li>
                            <li className='box'>
                                <div>
                                    <img src='english.png'/>
                                </div>
                                <div className='containers'>
                                    <div className='skill green2' translation="english">Anglais : B2</div>
                                </div>
                            </li>
                            <li className='box'>
                                <div>
                                    <img src='spain.png'/>
                                </div>
                                <div className='containers'>
                                    <div className='skill yellow'  translation="spanish">Espagnol : B1</div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}