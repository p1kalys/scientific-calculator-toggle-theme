let darkMode = false;

function appendValue(value) {
    document.getElementById('input').value += value;
}

function clearDisplay() {
    document.getElementById('input').value = '';
}

function deleteCharacter() {
    let input = document.getElementById('input');
    input.value = input.value.slice(0, -1);
}

function calculate() {
    let input = document.getElementById('input').value;
    let output = document.getElementById('output');

    try {
        let result = eval(input);
        document.getElementById('input').value = result;
        output.innerText = '';
    } catch (error) {
        output.innerText = 'Invalid input';
    }
}

function toggleMode() {
    let calculator = document.querySelector('.calculator');

    darkMode = !darkMode;

    if (darkMode) {
        calculator.classList.add('dark-mode');
    } else {
        calculator.classList.remove('dark-mode');
    }
}