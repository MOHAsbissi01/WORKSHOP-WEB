
function isPerfectNumber(number) {
    let sum = 0;
    for (let i = 1; i <= number / 2; i++) {
        if (number % i === 0) {
            sum += i;
        }
    }
    return sum === number;
}

function findPerfectNumbers() {
    const inputNumber = parseInt(document.getElementById('inputNumber').value);
    const perfectNumbers = [];

    for (let i = 2; i < inputNumber; i++) {
        if (isPerfectNumber(i)) {
            perfectNumbers.push(i);
        }
    }

    const perfectNumbersDiv = document.getElementById('perfectNumbers');
    perfectNumbersDiv.innerHTML = '';

    if (perfectNumbers.length === 0) {
        perfectNumbersDiv.textContent = 'Aucun nombre parfait trouvé inférieur à ' + inputNumber;
    } else {
        perfectNumbersDiv.textContent = 'Nombres parfaits trouvés inférieurs à ' + inputNumber + ' : ' + perfectNumbers.join(', ');
    }
}
 