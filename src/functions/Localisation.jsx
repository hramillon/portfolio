export default function Localisation(){
    return(
        <div className='location box' id="locationBox">
                            
            <p>Talence, France</p>
            <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d22646.063323785438!2d-0.630810863652254!3d44.80612202343756!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd552770a6d8990b%3A0x40665174816d120!2s33400%20Talence!5e0!3m2!1sen!2sfr!4v1730138895839!5m2!1sen!2sfr" 
                width="350" 
                height="150" 
                style={{ border: 0 }}
                allowfullscreen="" 
                loading="lazy" 
                referrerpolicy="no-referrer-when-downgrade"
                id="maps">
            </iframe>   
        </div>
    );
}