function textToBinary(text) {
    return Array.from(text)
        .map(char => char.charCodeAt(0).toString(2).padStart(8, '0'))
        .join(' ');
}

function binaryToText(binary) {
    const binaryArray = binary.split(' ');
    return binaryArray.map(binaryChar => String.fromCharCode(parseInt(binaryChar, 2))).join('');
}

function translateToBinary() {
    const inputText = document.getElementById('textInput').value;
    const binaryOutput = textToBinary(inputText);
    document.getElementById('output').innerText = `${binaryOutput}`;
}

function translateToEnglish() {
    const inputText = document.getElementById('textInput').value;
    const englishOutput = binaryToText(inputText);
    document.getElementById('output').innerText = `${englishOutput}`;
}
