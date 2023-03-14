const window_size = {
    innerwidth: window.innerWidth,
    innerhidth: window.innerHeight,
    clientwidth: document.documentElement.clientWidth,
    clientheight: document.documentElement.clientHeight,
}
const color = {
    color_60: "#1A1C22",
    color_30: "#282C35",
    color_10: "#1FCB4F",
    color_focus: "#FFC01E",
}
// side bar contents
const side_bar_content = {
    side_bar: document.getElementById('side_bar'),
    open_menu: document.getElementById('open_menu'),
    close_menu: document.getElementById('close_menu'),
    bar_head: document.getElementById(' bar_head'),
    logo: document.getElementById('logo'),
    content: document.getElementsByClassName('side_bar_content'),
    icon: document.getElementsByClassName('side_bar_icon'),
}
//maain container
const main_container={
    header: document.getElementById('header'),
    main_content: document.getElementById('main_content'), 
}




if((window_size.innerwidth || window_size.innerWidth)>768){
menu();
// side bar
function menu(status = 'close_menu') {
    if (status === "close_menu") {
        side_bar_content.side_bar.style.width = '70px';
        setTimeout(() => {
            side_bar_content.open_menu.style.display = 'flex';
            side_bar_content.close_menu.style.display = 'none';
            side_bar_content.logo.style.visibility = 'hidden';
            side_bar_content.logo.style.display = 'none';
            for (let i = 0; i < side_bar_content.content.length; i++) {
                side_bar_content.content[i].style.visibility = 'hidden';
                side_bar_content.content[i].style.display = 'none';
            }
        }, 200);
    }

    else if (status === "open_menu") {
        side_bar_content.open_menu.style.display = 'none';
        side_bar_content.side_bar.style.width = '250px';
        setTimeout(() => {
            side_bar_content.close_menu.style.display = 'flex';
            side_bar_content.logo.style.visibility = 'visible';
            side_bar_content.logo.style.display = 'flex';
            for (let i = 0; i < side_bar_content.content.length; i++) {
                side_bar_content.content[i].style.visibility = 'visible';
                side_bar_content.content[i].style.display = 'flex';
            }
        }, 800);
    }
}
}   



//Side bar Navigation
navigate();
function navigate(title = "Dashboard") {

    start_loader();

    setTimeout(() => {
        stop_loader();
        const tab = {
            show_card: document.querySelectorAll('.show_card'),
            bar_list: document.querySelectorAll(".bar_options"),
            head_title: document.getElementById('head_title'),
            opt: document.getElementById(title),
            card: document.getElementById(title + "_card"),
            opt_container: document.querySelector('bar_caontent_elements'),
        }
        head_title.innerHTML = title;
        tab.bar_list.forEach(element => {
            element.classList.remove('active')
        });
        tab.opt.classList.add('active');
        // if ((window.innerWidth || document.documentElement.clientWidth) < 1025) {
        //     menu("close_menu");
        // }
        tab.show_card.forEach(element => {
            element.style.display = "none";
        });
        tab.card.style.display = "flex";
    }, 1000);
}

function start_loader() {
    const loader = document.getElementById('loader_background');
    loader.style.display = 'flex';
}
function stop_loader() {
    const loader = document.getElementById('loader_background');
    loader.style.display = 'none';
}





//Pop up container
const outside_container = document.getElementById('shaded_background');

const container_contents = {
    icon: document.getElementById('notify_icon'),
    icon_div: document.getElementById('notify'),
    container: document.getElementById('notification'),
    container_head: document.getElementById('notify_head'),
    container_data: document.getElementsByClassName('notify_list_content'),
}

container_contents.icon.addEventListener("click", open_container);
function open_container() {
    outside_container.style.display = 'block';

    container_contents.icon.innerHTML = "close";
    container_contents.container.style.border = '.1vh solid #9a9a9a73';
    container_contents.container.style.height = '30vh';
    container_contents.container.style.boxShadow = '0 5px 5px 2px #00000079';
    setTimeout(() => {
        container_contents.container_head.style.display = 'flex';
        for (let i = 0; i < container_contents.container_data.length; i++) {
            container_contents.container_data[i].style.display = 'flex';
        }

    }, 400);
    container_contents.icon.removeEventListener("click", open_container);
    container_contents.icon.addEventListener("click", close_container)
}
function close_container() {
    outside_container.style.display = 'none';


    container_contents.icon.innerHTML = "notifications";
    container_contents.container.style.height = '0vh';
    container_contents.container.style.border = 'none';
    container_contents.container.style.boxShadow = 'none';
    container_contents.container_head.style.display = 'none';
    for (let i = 0; i < container_contents.container_data.length; i++) {
        container_contents.container_data[i].style.display = 'none';
    }




    container_contents.icon.removeEventListener("click", close_container);
    container_contents.icon.addEventListener("click", open_container)
}

outside_container.addEventListener('click', close_container);





// Line chart

// var xValues = [100,200,300,400,500,600,700,800,900,1000];

// new Chart("lineChart", {
//   type: "line",
//   data: {
//     labels: xValues,
//     datasets: [{
//       data: [860,1140,1060,1060,1070,1110,1330,2210,7830,2478],
//       borderColor: "#FFC01E",
//       fill: false
//     }, {
//       data: [1600,1700,1700,1900,2000,2700,4000,5000,6000,7000],
//       borderColor: "#1FCB4F",
//       fill: false
//     },]
//   },
//   options: {
//     legend: {display: false}
//   }
// });