function calculateRectangleArea(){
    // get the rectangle length
    const lengthInput = document.getElementById('rectangle-length');
    const lengthValue = lengthInput.value;
    const length = parseFloat(lengthValue);

    // get the rectangle width
    const rectangleWidth = document.getElementById('rectangle-width');
    const widthValue = rectangleWidth.value;
    const width = parseFloat(widthValue);

    // calculate rectangle area
    const area = length * width;
    
    // display rectangle area
    const rectangleSpanArea = document.getElementById('rectangle-area');
    rectangleSpanArea.innerText = area;
}