function bookingStrip(className){

    let bookingStrips = document.getElementsByClassName(className);

    const itemAmount = 50;

    let bookingStrip, 
        textEl, 
        linkEl, 
        repeaterEl;

    for(let i = 0; i < bookingStrips.length; i++){
        
        bookingStrip = bookingStrips[i];
        bookingStrip.classList.add(`${className}--initialised`);

        textEl = bookingStrip.getElementsByClassName('booking-strip__text')[0];
        linkEl = bookingStrip.getElementsByClassName('booking-strip__link')[0];
        repeaterEl = bookingStrip.getElementsByClassName('booking-strip__repeater')[0];

        const text = textEl.textContent;
        const textElWidth = textEl.offsetWidth;

        

        console.log(textElWidth);

        for(let t = 0; t < itemAmount; t++){
            if(t === 0){
                repeaterEl.innerHTML += `<span aria-hidden="false">${text}</span>`;
            }else{
                repeaterEl.innerHTML += `<span aria-hidden="true">${text}</span>`;
            }
            

            linkEl.setAttribute('title', text);
            linkEl.style.width = textElWidth*itemAmount+'px';
        }
        
    }
}

