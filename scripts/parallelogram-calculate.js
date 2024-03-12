function calculateParallelogramArea(){
    // get parallelogram base
    const parallelogramBaseInput = document.getElementById('parallelogram-base');
    const InputValue = parallelogramBaseInput.value;
    const base = parseFloat(InputValue);

    // get parallelogram height
    const parallelogramHeightInput = document.getElementById('parallelogram-height');
    const heightInputValue = parallelogramHeightInput.value;
    height = parseFloat(heightInputValue);

    // calculate parallelogram area
    const area = base * height;

    // display the area
    const parallelogramArea = document.getElementById('parallelogram-area');
    parallelogramArea.innerText = area;
}