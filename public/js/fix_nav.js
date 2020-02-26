
window.addEventListener('DOMContentLoaded', function()
{

    //클릭이벤트

    //아이콘 클릭
    var icon_b = document.querySelector('.wrap_nav li:first-child'); //blog
    var icon_f = document.querySelector('.wrap_nav li:last-child i'); //facebook
    var icon_l = document.querySelector('.wrap_nav li:nth-child(2) i'); //linkedin

    icon_b.onclick = function() {location.href="/"}
    icon_f.onclick = function() { location.href="https://www.facebook.com/aplonie"; }
    icon_l.onclick = function() {location.href="https://www.linkedin.com/in/duri-kim-06b10b1a0/"; }

    //클릭이벤트 끝
});
