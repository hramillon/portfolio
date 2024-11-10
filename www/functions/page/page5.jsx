import { useState } from 'react';

import MenuBar from '../MenuBar.jsx';
import SocialMedia from '../SocialMedia.jsx';

export default function Page5(){

    const [objet, setObjet] = useState('');
    const [mail, setMail] = useState('');
    const [message, setMessage] = useState('');

    function validateString(input, maxLength, champs) {
        // Vérifie si la chaîne est vide
        if (!input || input.trim() === '') {
            return `Le champ ${champs} ne peut pas être vide.`;
        }
    
        // Vérifie si la longueur dépasse la limite
        if (input.length > maxLength) {
            return `Le champ ${champs} ne doit pas dépasser ${maxLength} caractères.`;
        }
    
        // Si tout est valide, retourne null ou une chaîne vide
        return null;
    }

    const handleSent = (e) => {
        e.preventDefault();
        let form = new FormData(e.target)

        
        // Validation des champs
        const newErrors = {};
        newErrors.subject = validateString(form.objet, 255, 'objet');
        newErrors.email = validateString(form.mail, 255, 'mail');
        newErrors.message = validateString(form.message, 1000, 'message');

        // Filtre les erreurs pour ne garder que celles qui sont non nulles
        const filteredErrors = Object.keys(newErrors).filter(key => newErrors[key] !== null);

        if (filteredErrors.length > 0) {
            setErrors(newErrors); // Met à jour les erreurs si présentes
        } else {
            // Pas d'erreurs, on peut soumettre le formulaire
            console.log('Données du formulaire soumises :', formData);
            // Ici, tu peux ajouter la logique pour envoyer les données au serveur
            setErrors({}); // Réinitialise les erreurs
        }
    }

    return(
        <div className='page5' >
            <MenuBar home='true' />

            <div className='contact'>
                <div className='PhotoContact'>
                    <div className='photoContainer'>
                        <img src='protranspa.png'/>
                    </div>
                </div>
                <div className='contactDiv'>
                    <div className='TitleContact'>
                        <h1 translation="conatct2">Me contacter</h1>
                    </div>
                    <SocialMedia/>
                    <form onSubmit={handleSent}>
                        <input type='text' placeholder='Objet' id='objetSent' name='objet' translation="objetPlace"/>
                        <input  type='email' placeholder='johndoe@email.com' id='mailSent' name='mail' translation="mailPlace"/>
                        <textarea id='messageSent' placeholder='message' name='message' translation="messagePlace"/>
                        <button  className='sendMessageButton' translation="conatct">Me contacter !</button>
                    </form>
                </div>
            </div>
        </div>
    );
}