/**
 * Date specifics
 */
let date = new Date(),
    day = date.getDay();

let isTouchDevice = function () {
    return (
        !!(typeof window !== 'undefined' &&
            ('ontouchstart' in window ||
                (window.DocumentTouch &&
                    typeof document !== 'undefined' &&
                    document instanceof window.DocumentTouch))) ||
        !!(typeof navigator !== 'undefined' &&
            (navigator.maxTouchPoints || navigator.msMaxTouchPoints))
    );
};

function randomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}

function init() {
    /**
    * DOM elements
    */    

    document.body.setAttribute("data-touch", isTouchDevice());

    //Horizontal swipers
    if(document.getElementsByClassName('horiswiper').length > 0){
        horiswiper('horiswiper', 30);
    }

    //Medium posts
    if(document.getElementById('medium-posts')){
        console.log('kjører..')
        mediumPosts('medium-posts');
    }
    
}

/**
 * Wait for document ready to fire dom dependent stuf
 */

window.addEventListener('load', function () {
    init();
});

