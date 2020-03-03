let boxTop = 200;
let boxLeft = 200;

let box = document.getElementById('box');
box.style.top = boxTop + "px";
box.style.left = boxLeft + "px";

window.addEventListener("keydown", event => {
    console.log(event.key);
    switch (event.key){
        case 'ArrowUp':
            boxTop -= 10;
            box.style.top = boxTop + "px";
        break;
        
        case 'ArrowDown':
            boxTop += 10;
            box.style.top = boxTop + "px";
        break;
        
        case 'ArrowLeft':
            boxLeft -= 10;
            box.style.left = boxLeft + "px";
        break;
        
        case 'ArrowRight':
            boxLeft += 10;
            box.style.left = boxLeft + "px";
        break;
    }
  });