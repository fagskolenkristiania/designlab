function bookingStrip(className){

    let bookingStrips = document.getElementsByClassName(className);
    let bookingStrip, bookingStripText;

    for(let i = 0; i < bookingStrips.length; i++){
        
        bookingStrip = bookingStrips[i];
        bookingStripText = bookingStrip.getElementsByClassName('booking-strip__text')[0].textContent;

        for(let t = 0; t < 50; t++){
            bookingStrip.getElementsByClassName('booking-strip__repeater')[0].innerHTML += ` ${bookingStripText} •`;
        }
        
    }
}