red.oninput = green.oninput = blue.oninput = fieldValidation;
generated = document.getElementById('generated')

fieldValidation()

function fieldValidation(gen) {
    let r = document.getElementById('red').value || 0;
    let g = document.getElementById('green').value || 0;
    let b = document.getElementById('blue').value || 0;

    r = (r >= 0 && r <= 255) && r !== "" ? r : 0;
    g = (g >= 0 && g <= 255) && g !== "" ? g : 0;
    b = (b >= 0 && b <= 255) && b !== "" ? b : 0;

    const rgb = `rgb(${r}, ${g}, ${b})`;

    gen != 'gen' ? swapColorContainer(rgb) : addColorBox(rgb);

}


function swapColorContainer(rgb) { 
    document.getElementById('color-container').style.backgroundColor = rgb;
}

function addColorBox(rgb) {
    const colorBox = document.createElement('div');
    colorBox.style.backgroundColor = rgb;
    colorBox.className = 'color-container';
    overflow = document.getElementById('generated').childElementCount
    overflow < 6 ? generated.appendChild(colorBox) : 0;
}


