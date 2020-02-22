document.addEventListener('DOMContentLoaded', function () {
    var btn = document.getElementById('click-btn');
    var menu = document.querySelector('.menu');
    var btn_close = document.querySelector('.btn-close');
    var black = document.querySelector('.black');
    var parent_item = document.getElementsByClassName('parent_item');
    var sub_menu = document.getElementsByClassName('sub-menu');
    btn.onclick = function () {
        menu.style.display = "block";
        black.style.display = "block";
    }
    btn_close.onclick = function () {
        menu.style.display = "none";
        black.style.display = "none";
    }
    for (let i = 0; i < parent_item.length; i++) {
        parent_item[i].onclick = function () {
            if (sub_menu[i].style.display === "none") {
                sub_menu[i].style.display = "block";
            }
            else {
                sub_menu[i].style.display = "none";
            }
        }
    }
})