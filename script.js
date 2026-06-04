let displayValue = '';

function append(value) {
    displayValue += value;
    updateDisplay();
}

function clearDisplay() {
    displayValue = '';
    updateDisplay();
}

function updateDisplay() {
    document.getElementById('display').innerText = displayValue || '0';
}

function calculate() {
    try {
        // eval realiza o cálculo da string matemática
        displayValue = eval(displayValue).toString();
        updateDisplay();
    } catch (e) {
        document.getElementById('display').innerText = 'Erro';
        displayValue = '';
    }
}
