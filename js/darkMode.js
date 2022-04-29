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
    document.body.classList.add("text-white");
}

function lightMode(){
    var label = document.getElementById('darkModeLabel');
    label.innerHTML = 'Light';
    document.querySelectorAll(".bg-dark").forEach((element) => {
    element.className = element.className.replace(/-dark/g, "-light");
    });
    document.body.classList.add("bg-light");
    document.body.classList.replace("text-white","text-black");
}