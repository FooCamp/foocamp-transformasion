const header_button = document.querySelector('.header__hamburger-checkbox');
header_button.addEventListener('change',function(ele){
    const isChecked = ele.target.checked;
    if (isChecked){
        document.body.style.overflow = 'hidden';
    }
    else {
        document.body.style.overflow = 'initial';
    }
}); 