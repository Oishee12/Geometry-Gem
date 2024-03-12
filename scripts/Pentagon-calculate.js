function calculatePentagonArea() {
    // get p
    const pentagonPInput = document.getElementById('Pentagon-p');
    const pentagonPInputValue = pentagonPInput.value;
    const p = parseFloat(pentagonPInputValue);
    console.log(p);

    // get b
    const pentagonBInput = document.getElementById('Pentagon-b');
    const pentagonBInputValue = pentagonBInput.value;
    const b = parseFloat(pentagonBInputValue);
    console.log(b);

    // calculate pentagon area
    area = 0.5 * p * b;
    console.log('area of the pentagon is : ', area);

    // display area
    const spanPentagonArea = document.getElementById('Pentagon-area');
    spanPentagonArea.innerText = area;
} 