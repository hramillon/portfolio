/* page JS */
import toSection from '../functionsJs/onClick.js';

export default function MenuBar(home){
    if(Object.values(home)[0] == 'true'){
        var HTMLHome = <div><img src='home.png'  className="enlightMode homeIcon" onClick={() => toSection(1)}/></div>;
    }else{var HTMLHome ='';}

    return(
        <div className='tabMenu box'>
            {HTMLHome}
            <div>
                <img src='france.png'  className="languageFlag french checkedLanguage"/>
                <img src='english.png' className="languageFlag english"/>
                <img src='spain.png' className="languageFlag spanish"/>
            </div>

            <div>
                <input type="checkbox" id="toggle" className="checkbox" />
            </div>

        </div>
    );
}