const color={
    color_60:"#1A1C22",
    color_30:"#282C35",
    color_10:"#1FCB4F",
    color_focus:"#FFC01E",
}

function menu(status) {
    const side_bar = document.getElementById('side_bar');
    const open_menu = document.getElementById('open_menu');
    const close_menu = document.getElementById('close_menu');


    if (status === "close_menu") {
        side_bar.style.display = "none";
        open_menu.style.display = "flex";
    }
    if (status === "open_menu") {
        side_bar.style.display = "flex";
        open_menu.style.display="none"
        close_menu.style.display = "flex";
    }
}

const show_card=document.querySelectorAll('.show_card');
const bar_list=document.querySelectorAll(".bar_options");
const head_title=document.getElementById('head_title');
navigate();
function navigate(title="Dashboard"){
    head_title.innerHTML=title;
    const opt=document.getElementById(title);
    bar_list.forEach(element => {
        element.classList.remove('active')
    });
    opt.classList.add('active');
    if( (window.innerWidth || document.documentElement.clientWidth) <1025) {
        menu("close_menu");
    }
    show_card.forEach(element=>{
        element.style.display="none";
        console.log(element);
    });
    const card=document.getElementById(title+"_card");
    card.style.display="flex";
}

function show_container(name){
    const container_name=document.getElementById(name);
    var status={
        value:0,
    };
    if(status.value==1){
        container_name.style.display='none';

    }else{
        container_name.style.display='flex';
        status.value=1
    }
}