function checked(check, HtmlCheckboxes) {
    for (let i = 0; i < HtmlCheckboxes.length; i++) {
        const element = HtmlCheckboxes[i];

        element.checked =check ;
        
    }
}

const darkMode = () => {
    var checkbox = document.getElementsByClassName("checkbox");
    checked(true, checkbox);

    for (let i = 0; i < checkbox.length; i++) {
        const element = checkbox[i];

        if (!element.dataset.listenerAdded) {

            element.addEventListener('change', function() {
                var body = document.querySelector("body");



                if (this.checked) {
                    checked(true, checkbox)
                    body.classList.remove("light");
                } else {
                    checked(false, checkbox)
                    body.classList.add("light");
                }
            });
        }
        element.dataset.listenerAdded = true; // Marque comme ajouté
        
    }
}

export default darkMode