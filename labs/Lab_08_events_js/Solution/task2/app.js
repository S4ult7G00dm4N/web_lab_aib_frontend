red.oninput = green.oninput  = blue.oninput = fieldValidation;

fieldValidation();

function fieldValidation() {
    let r = document.getElementById('red').value;
    let g = document.getElementById('green').value;
    let b = document.getElementById('blue').value;

    r = (r >= 0 && r <= 255) && r !== "" ? r : 0;
    g = (g >= 0 && g <= 255) && g !== "" ? g : 0;
    b = (b >= 0 && b <= 255) && b !== "" ? b : 0;


    swapColorContainer(r, g, b);
}


function swapColorContainer(r, g, b) {  
    console.log(r, g, b);
    document.getElementById('color-container').style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
}