function horiswiper(className, items){

    let horiswipers = document.getElementsByClassName(className);

    let horiswiper, 
        textEl, 
        linkEl, 
        repeaterEl;

    let containerWidth;

    for(let i = 0; i < horiswipers.length; i++){
        
        horiswiper = horiswipers[i];
        horiswiper.classList.add(`${className}--initialised`);

        textEl = horiswiper.getElementsByClassName('horiswiper__text')[0];
        linkEl = horiswiper.getElementsByClassName('horiswiper__link')[0];
        repeaterEl = horiswiper.getElementsByClassName('horiswiper__repeater')[0];

        const text = textEl.textContent;
        const textElWidth = textEl.getBoundingClientRect().width;

        linkEl.style.width = textElWidth*items+'px';

        for(let t = 0; t < items; t++){
            repeaterEl.innerHTML += `<span>${text}</span>`;
            linkEl.setAttribute('title', text);            
        }
    }
}

