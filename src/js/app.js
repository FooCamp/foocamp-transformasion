import '../scss/main.scss';

console.log("Hello, Webpack!");

//función para capturar el evento cuando el usuario hace scroll y asignarle la clase sticky
function sticky() {
    var header = document.getElementsByClassName('header')[0],
        top = 0;

    function scroll(event) {
        var s = document['documentElement' || 'body'].scrollTop;
        if (s > top) header.classList.add('header__sticky');
        else header.classList.remove('header__sticky');

    }
    window.addEventListener('scroll', scroll);
}

if (document.stickyState == 'complete' || document.stickyState == 'loaded') {
    sticky();
} else {
    window.addEventListener('DOMContentLoaded', sticky);
}