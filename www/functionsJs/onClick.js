function changePortfolio(kind){
}

export default function toSection(section,more =null) {
    window.location.href = "#section" + section;
    if(more != null){
        changePortfolio(more);
    }
}

