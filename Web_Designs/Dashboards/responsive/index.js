const color={
    color_60:"#1A1C22",
    color_30:"#282C35",
    color_10:"#1FCB4F",
    color_focus:"#FFC01E",
}

function menu(status) {
    const side_bar = document.getElementById('side_bar');
    const main = document.getElementById('main_container');
    const open_menu = document.getElementById('open_menu');
    const close_menu = document.getElementById('close_menu');


    if (status === "close_menu") {
        side_bar.style.display = "none";
        main.style.width = "100%";
        open_menu.style.display = "flex";
    }
    if (status === "open_menu") {
        side_bar.style.display = "flex";
        main.style.width = "85%";
        open_menu.style.display="none"
        close_menu.style.display = "flex";
    }
}

function navigate(a){
    a.classList.add(" active");
}