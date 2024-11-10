function ListPoint({date, desc,translation1}){
    return(
        <li className="rb-item" ng-repeat="itembx">
            <div className="timestamp">{date}</div>
            <div className="item-title" translation={translation1}>{desc}</div>
        </li>
    );
}

export default function Timeline(tab1, tab2,tab3){

    var list = [];

    var tabs2 = {tab1}.tab1.tab2;
    var tabs1 = {tab1}.tab1.tab1;
    var tabs3 = {tab1}.tab1.tab3;

    for (let int = 0; int < tabs1.length; int++) {
        var date = tabs1[int];
        var desc = tabs2[int];
        var translation1 = tabs3[int];

        list.push(<ListPoint date={date} desc={desc} translation1={translation1}/>);
    }


    return(
        <ul className="rb">
            {list}
        </ul>
    );
}