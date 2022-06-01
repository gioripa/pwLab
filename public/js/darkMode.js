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

    const objMode={
        darkMode:true,
        date: new Date().getTime()
    }
    localStorage.setItem("darkMode",JSON.stringify(objMode));
}

function lightMode(){
    var label = document.getElementById('darkModeLabel');
    label.innerHTML = 'Light';
    document.querySelectorAll(".bg-dark").forEach((element) => {
    element.className = element.className.replace(/-dark/g, "-light");
    });
    document.body.classList.add("bg-light");
    document.body.classList.replace("text-white","text-black");

    const objMode={
        darkMode:false,
        date: new Date().getTime()
    }
    localStorage.setItem("darkMode",JSON.stringify(objMode));
}


document.addEventListener('DOMContentLoaded', init());

function init(){
    var m = localStorage.getItem("darkMode");
    if(m != null){
        m = JSON.parse(m);
        var now = new Date().getTime();
        if(now-m.date < 86400000){
            if(m.darkMode){
                darkMode();
                document.getElementById('darkMode').checked = true;
            }else{
                lightMode();
                document.getElementById('darkMode').checked = false;
            }
        }else{
            localStorage.clear();
        }
    }
    
}