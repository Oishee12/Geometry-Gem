function calculateRhombusArea(){
    // get d1
    const rhombusd1Input = document.getElementById('Rhombus-d1');
    const rhombusd1InputValue = rhombusd1Input.value;
    const d1 = parseFloat(rhombusd1InputValue);
    
    // get d2
    const rhombusd2Input = document.getElementById('Rhombus-d2');
    const rhombusd2InputValue = rhombusd2Input.value;
    const d2 = parseFloat(rhombusd2InputValue);

    // calculate rhombus area
    const area = 0.5 * d1 * d2

    // display area
    const RhombusArea = document.getElementById('Rhombus-area');
    RhombusArea.innerText = area;
}