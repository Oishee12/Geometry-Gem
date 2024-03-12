function calculateEllipseArea(){
    // get a
    const ellipseAInput = document.getElementById('Ellipse-a');
    const ellipseAInputValue = ellipseAInput.value;
    const a = parseFloat(ellipseAInputValue);

    // get b
    const ellipseBInput = document.getElementById('Ellipse-b');
    const ellipseBInputValue = ellipseBInput.value;
    const b = parseFloat(ellipseBInputValue);

    // calculate area
    area = 3.1416 * a * b

    // display area
    const ellipseArea = document.getElementById('Ellipse-area');
    ellipseArea.innerText = area;
}