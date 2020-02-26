
window.addEventListener('DOMContentLoaded', function()
{

      //해상도
      var mql = window.matchMedia("(max-width: 768px)");

      //네비게이션 메뉴 스크롤
      var lastY = 0;
      var delta = 5;
      var fixBox = document.querySelector('.topnav');
      var fixBoxHeight = 50;
      var didScroll;
      var uptick = 0;
      var downtick =0;
      window.onscroll = function(e) {
        //모바일
        if(mql.matches) {
          fixBox.style.position = 'absolute';
          fixBox.classList.remove('vanish');
        }
        //데스크탑
        else {
        var nowY = window.scrollY;
        if(nowY <= 50) {
          lastY = nowY;
          return;
        }
        if(nowY < lastY) {
          uptick++;
            if(uptick > delta-1) {
            fixBox.classList.remove('vanish');
              fixBox.style.position = 'fixed';
              uptick = 0;
          }
          downtick=0;
        }
        if(nowY > lastY) {
          downtick++;
            if(downtick > delta-1) {
              fixBox.classList.add('vanish');
              downtick = 0;
            }
          uptick = 0;
        }
          lastY=nowY;
      }
      //네비게이션 메뉴 스크롤 끝
    }

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
