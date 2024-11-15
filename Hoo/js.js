function convertBinaryToText(event) {
    event.preventDefault();

    const binaryString = document.getElementById('binaryInput').value;
    const base = document.getElementById('baseSelect').value;
    const values = binaryString.split(' ');
    let result = '';

    values.forEach(value => {
        const decimalValue = parseInt(value, base);
        if (!isNaN(decimalValue)) {
            result += String.fromCharCode(decimalValue);
        } else {
            result += '?';
        }
    });

    document.getElementById('result').innerText = `ຂໍ້ຄວາມ: ${result}`;
}

function clearInput() {
    document.getElementById('binaryInput').value = '';
    document.getElementById('result').innerText = 'ຂໍ້ຄວາມ: ';
}
