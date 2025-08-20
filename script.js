let isDark=0;
let iconForModes=document.getElementById("iconForModes");
function changeMode(){
    isDark=!isDark;
    if(isDark){
        darkMode();
        iconForModes.style.left="23px";
        iconForModes.textContent="🌔";
    }
    else{
        lightMode();
        iconForModes.style.left="0px";
        iconForModes.textContent="🌤️";
    }
}
function darkMode(){
        // Main elements
        document.body.style.backgroundColor = '#121212';
        // Header and Footer
        const header = document.querySelector('header');
        header.style.backgroundColor = ' #121212';
        const footer = document.querySelector('footer');
        footer.style.backgroundColor=" #121212";

        // Logo
        const logo = document.querySelector('.logo');
            logo.style.color = 'lightgreen';
        //Booking section
        const trip1=document.querySelector('.trip1');
        trip1.style.backgroundColor="rgb(43, 43, 43)";

        const trip2=document.querySelector('.trip2');
        trip2.style.backgroundColor="rgb(43, 43, 43)";

        const testimonial1=document.querySelector('.testimonial-section');
        testimonial1.style.backgroundColor="rgb(43, 43, 43)";

        }

function darkMode(){
        // Main elements
        document.body.style.backgroundColor = '#121212';
        // Header and Footer
        const header = document.querySelector('header');
        header.style.backgroundColor = ' #121212';
        const footer = document.querySelector('footer');
        footer.style.backgroundColor=" #121212";

        //Booking section
        const trip1=document.querySelector('.trip1');
        trip1.style.backgroundColor="rgb(43, 43, 43)";

        const trip2=document.querySelector('.trip2');
        trip2.style.backgroundColor="rgb(43, 43, 43)";

        const testimonial1=document.querySelector('.testimonial-section');
        testimonial1.style.backgroundColor="rgb(43, 43, 43)";
}
function lightMode(){
    // Main elements
    document.body.style.backgroundColor = 'white';
    // Header and Footer
    const header = document.querySelector('header');
    header.style.backgroundColor = 'white';
    const footer = document.querySelector('footer');
    footer.style.backgroundColor='white';
    //Booking section
    const trip1=document.querySelector('.trip1');
    trip1.style.backgroundColor='white';

    const trip2=document.querySelector('.trip2');
    trip2.style.backgroundColor='white';
    //testimonials
    const testimonial1=document.querySelector('.testimonial-section');
    testimonial1.style.backgroundColor='white';

}
    
    
