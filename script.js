let isDark=0;
let iconForModes=document.getElementById("iconForModes");
function changeMode(){
    isDark=!isDark;
    if(isDark){
        document.body.style.backgroundColor=`rgba(0, 0, 0, 0.92)`;
        iconForModes.style.left="23px";
        iconForModes.textContent="🌔";
    }
    else{
        document.body.style.backgroundColor=`white`; 
        iconForModes.style.left="0px";
        iconForModes.textContent="🌤️";
    }
}