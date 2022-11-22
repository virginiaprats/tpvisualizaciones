let menu_mobile = document.getElementById("menu_mobile");
let btn_menu = document.querySelector(".btn-menu-mobile");
let menu_mobile_list = document.querySelector(".menu-mobile_list");
let btn_cerrar_menu = document.querySelector(".btn-cerrar-menu");

btn_menu.addEventListener("click", function(e){
    e.preventDefault();
    menu_mobile.classList.add("mostrar-menu");
    menu_mobile_list.classList.add("mostrar-menu_list");
    btn_menu.style.display = "none";
    btn_cerrar_menu.style.display = "flex";
})

btn_cerrar_menu.addEventListener("click", function(){
    menu_mobile.classList.remove("mostrar-menu");
    menu_mobile_list.classList.remove("mostrar-menu_list");
    btn_menu.style.display = "block";
    btn_cerrar_menu.style.display = "none";
})



