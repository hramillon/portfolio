/* page JS */
import toSection from '../functionsJs/onClick.js';

export default function SocialMedia(){
    return(
        <div className='socialMedia box'>
                
            <a href="https://www.linkedin.com/in/hugo-ramillon-7769381a1/" target="_blank"><img src='linkedin.png' /></a>
            <a href="https://github.com/hramillon" target="_blank"><img src='git.png' className="enlightMode"/></a>
            <img src='email.png' className="enlightMode" onClick={() => toSection(5)}/>
            <a href="https://www.instagram.com/ramillonhugo/" target="_blank"><img src='instagram.png' className="enlightMode"/></a>
                          
        </div>
    );
}