import Name from './Name.jsx';

export default function PhotoPro(name){
    let add = "";
    if(name == "true"){
        add = <Name/>;
    }

    return(
        <div className='photo box'>
            {add}
            <img src="protranspa.png" />
        </div>
    );
}