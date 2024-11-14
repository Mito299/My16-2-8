function convertBinaryToText(event) {
    event.preventDefault();

    const binaryString = document.getElementById('binaryInput').value;
    const base = document.getElementById('baseSelect').value;
    const values = binaryString.split(' ');
    let result = '';

    values.forEach(value => {
        const decimalValue = parseInt(value, base);
        result += String.fromCharCode(decimalValue);
    });

    document.getElementById('result').innerText = `ຂໍ້ຄວາມ: ${result}`;
}