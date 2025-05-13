import Title from '../Title.jsx';
import Figure from '../Figure.jsx';
import MenuBar from '../MenuBar.jsx';
import PhotoPro from '../PhotoPro.jsx';
import Name from '../Name.jsx';
import SocialMedia from '../SocialMedia.jsx';
import Localisation from '../Localisation.jsx';
import SummaryPro from '../SummaryPro.jsx';
import Portfolio from '../Portfolio.jsx';

function FigureList(){
    return(
        <div className='figures'>

            <Figure figure='4+' text='langages de programmation' id="color1" section="3" translation1="figure1"/>

            <Figure figure='5+' text='projets' id="color3" section="2" translation1="figure2"/>

            <Figure figure='2ème' text="année d'étude en informatique" id="color2" section="4" translation1="figure3"  transltaion2="figure3syntax"/>

        </div>
    );
}

export default function Page1(){

    return(
    <div className='page'>

        <MenuBar/>

        <div className='infoLeft'>

            <div className='Topinfo'>

                <div className='figuresOnMe'>


                    <Title/>
                    <FigureList/>

                </div>

                <PhotoPro/>

            </div>

            <div className='bottomInfo'>

                <Portfolio/>

            </div>

        </div>

        <div className='infoRight'>
            <Name/>

            <SocialMedia/>

            <SummaryPro/>

        </div>

    </div>
    );
}