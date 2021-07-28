let counter = 1;
let slider_container = document.querySelector('.slider_container');

setInterval(() => {
    counter++;
    if(counter>6)
        counter=1;
        
    setStyles(slider_container,{
        'background':`url('images/${counter}.jpg')`,
        'background-size':'cover'
    })
}, 5000);

const setStyles = (element,styles) => {
    Object.assign(element.style,styles);
}

const next_img = () => {
    counter++;
    if(counter>6)
        counter=1;
    setStyles(slider_container,{
        'background':`url('images/${counter}.jpg')`,
        'background-size':'cover'
    })

}

const previous_img = () => {
    counter--;
    if(counter<1)
        counter=6;
    
    setStyles(slider_container,{
        'background':`url('images/${counter}.jpg')`,
        'background-size':'cover'
    })
}