/*### Elementos ###*/
var triggerOpen = '#menu-trigger-open',
    triggerClose = '#menu-trigger-close',
    nav = '.nav-meicons';
/*### Medidas ###*/
var _mobile = '480',
    _tablet = '768',
    _desktop = '1024',
    _fullScreen = '1280';

window.onload = function(){
    mediaQueryResponse(_tablet);
    document.querySelector(triggerOpen).onclick = function(){
        if (calculateWidthWindow() > _tablet){
            document.querySelector(nav).classList.remove('nav-open');
            document.querySelector(nav).classList.add('nav-open-tablet');
        }
        else{
            document.querySelector(nav).classList.add('nav-open');
        }
    }
    document.querySelector(triggerClose).onclick = function(){
        document.querySelector(nav).classList.remove('nav-open');
        document.querySelector(nav).classList.remove('nav-open-tablet');
    }
}

function mediaQueryResponse(limit){
    var condition = window.matchMedia("(min-width: " + limit + "px)");
    condition.addListener(handleOrientationChange);
}
function handleOrientationChange(condition){
    if (condition.matches) {
        if(hasClass(nav, 'nav-open')){
            document.querySelector(nav).classList.remove('nav-open');
            document.querySelector(nav).classList.add('nav-open-tablet');
        }
    } else {
        if(hasClass(nav, 'nav-open-tablet')){
            document.querySelector(nav).classList.remove('nav-open-tablet');
            document.querySelector(nav).classList.add('nav-open');
        }
    }
}
function calculateWidthWindow() {
    var tam = [0, 0];
    if (typeof window.innerWidth != 'undefined')
    {
      tam = [window.innerWidth,window.innerHeight];
    }
    else if (typeof document.documentElement != 'undefined'
        && typeof document.documentElement.clientWidth !=
        'undefined' && document.documentElement.clientWidth != 0)
    {
      tam = [
          document.documentElement.clientWidth,
          document.documentElement.clientHeight
      ];
    }
    else   {
      tam = [
          document.getElementsByTagName('body')[0].clientWidth,
          document.getElementsByTagName('body')[0].clientHeight
      ];
    }
    return tam[0];
}

function hasClass(element, cls) {
    return (' ' + document.querySelector(element).className + ' ').indexOf(' ' + cls + ' ') > -1;
}