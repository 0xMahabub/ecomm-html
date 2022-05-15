(function(){
    "use strict";
    /** App scripts written below */
    // close cart area
    var cartOpen1 = document.getElementById('cartOpen');
    var cartOpener = document.getElementById('cartOpener');
    var cartClose = document.getElementById('closeCartArea');
    var cartArea = document.getElementById('cartArea');
    // cartOpener
    cartOpen1.addEventListener('click', function() {
        if (cartArea.classList.contains('hidden')) {
            cartArea.classList.remove('hidden');
        }
        cartArea.classList.add('fade-in-right');
        setTimeout(function() {
            cartArea.classList.add('flex');
            cartArea.classList.remove('fade-in-right');
        }, 299);
    });
    cartOpener.addEventListener('click', function() {
        if (cartArea.classList.contains('hidden')) {
            cartArea.classList.remove('hidden');
        }
        cartArea.classList.add('fade-in-right');
        setTimeout(function() {
            cartArea.classList.add('flex');
            cartArea.classList.remove('fade-in-right');
        }, 300);
    });
    // cartCloser function
    cartClose.addEventListener('click', function() {
        cartArea.classList.add('fade-out-right');
        setTimeout(function() {
            cartArea.classList.add('hidden');
            cartArea.classList.remove('fade-out-right');
        }, 299);
    });


    /** End of the File :: EOF */
})();