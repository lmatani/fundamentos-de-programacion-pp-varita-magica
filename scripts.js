
let imgDefault;
let altDefault;
let colorPDefault;
let BGColorPDefault;
let BGColorOthersDefault;

document.body.addEventListener("click", function(event) {
    event.preventDefault();
});

document.body.addEventListener("click", function(event) {
    let target = event.target;   
    let nombreTag = target.tagName.toLowerCase();

    magic(nombreTag, target, false);
});

document.body.addEventListener('mouseover', function (event) {
    let target = event.target;   
    let nombreTag = target.tagName.toLowerCase();
    magic(nombreTag, target, true);

});
  
function magic(tag, target, restaurar)
{
    if (tag === 'img'){
        changeImg(target, restaurar);
    }
    else if (tag === 'p') {
        changeParrafo(target, restaurar);
    }
    else if (tag === 'article' && nombreTag === 'section') {
        changeOthers(target, restaurar);
    }
    
}

function changeImg(target, restaurar)
{

    if (imgDefault === undefined && altDefault === undefined) {
        imgDefault =  target.src;
        altDefault =  target.alt;
    }

    if (restaurar){
        target.src =  imgDefault;
        target.alt =  altDefault;
    }
    else {
        let numRandom = Math.floor(Math.random() * 5) + 1;
        let magic = `magic-${numRandom}`;
        target.src = `./assets/${magic}.gif`;
        target.alt = magic;
    }

}

function changeParrafo(target, restaurar)
{
    
    if (colorPDefault === undefined && BGColorPDefault=== undefined) {
        colorPDefault =  target.style.color;
        BGColorPDefault =  target.style.background;
    }

    if (restaurar){
        target.style.color = colorPDefault;
        target.style.background = BGColorPDefault;
    } else {
        target.style.color = 'red';
        target.style.background = 'blue';
    }
}

function changeOthers(target, restaurar)
{
    if (BGColorOthersDefault === undefined ) {
        BGColorOthersDefault =  target.style.background;
    }
    if (restaurar){
        target.style.background = BGColorPDefault;
    }
    else {
        target.style.background = 'green';
    }
}
