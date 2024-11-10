function ListTechnologies({name, src}){
    return(
        <li className='box'>
            <img src={src}/>
            <h3>{name}</h3>
        </li>
    );
}

export default function Technologies({titre, classes, tab,translation1}){
    var list = [];
    for (let int = 0; int < tab.length; int++) {
        var element = tab[int];
        var src = "logo/" + element + ".png"


        list.push(<ListTechnologies name={element} src={src}/>);
    }

    return(
        <div className={classes}>
            <h2 translation={translation1}>{titre}</h2>
            <ul>
                {list}
            </ul>
        </div>
    );
};