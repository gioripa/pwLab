function mode(){
    var mode = document.getElementById('darkMode').checked;
    if(mode){
        darkMode();
    }else{
        lightMode();
    }
}

function darkMode(){
    var label = document.getElementById('darkModeLabel');
    label.innerHTML = 'Dark';
    document.querySelectorAll(".bg-light").forEach((element) => {
    element.className = element.className.replace(/-light/g, "-dark");
    });
    document.body.classList.add("bg-dark");
    var btn= document.getElementById('divDark');
    btn.style.color= 'white';
    btn.style.backgroundColor='black';
}

function lightMode(){
    var label = document.getElementById('darkModeLabel');
    label.innerHTML = 'Light';
    document.querySelectorAll(".bg-dark").forEach((element) => {
    element.className = element.className.replace(/-dark/g, "-light");
    });
    document.body.classList.add("bg-light");
    var btn= document.getElementById('divDark');
    btn.style.color= 'white';
    btn.style.backgroundColor='black';
}