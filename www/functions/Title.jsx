/* page JS */
import toSection from '../functionsJs/onClick.js';

export default function Title(){

    return(
      <div className='title box'>
        <div>
                <h1 className='wroteTitle' translation="h1">Étudiant en informatique curieux et passioné</h1>
                <button className='mailMe' onClick={() => toSection(5)} translation="buttonH1">Contacte-moi</button>
        </div>
      </div>
    );
  }