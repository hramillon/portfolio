/* page JS */
import toSection from '../functionsJs/onClick.js';

export default function Figure({figure,text,id,section, translation1, transltaion2}){
    return(
        <div className='figure box ' id={id} onClick={() => toSection({section}.section)}>
                <p className='wroteFigure' translation={transltaion2}>
                    {figure}
                </p>
                <p className='textFigure' translation={translation1}>
                    {text}
                </p>
        </div>
    );
}