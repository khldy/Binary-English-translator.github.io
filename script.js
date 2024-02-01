function translateToBinary() {
    const inputText = document.getElementById("textInput").value;
    const translatedText = translateToBinaryLogic(inputText);
    displayTranslation(translatedText);
}

function translateToEnglish() {
    const inputText = document.getElementById("textInput").value;
    const translatedText = translateToEnglishLogic(inputText);
    displayTranslation(translatedText);
}

function displayTranslation(translatedText) {
    document.getElementById("output").textContent = translatedText;
}

function translateToBinaryLogic(inputText) {
    // Your translation logic here for both text and emojis
    // Example: Convert each character to its binary representation
    const binaryTextArray = inputText.split('').map(char => char.charCodeAt(0).toString(2));
    return binaryTextArray.join(' ');
}

function translateToEnglishLogic(inputText) {
    // Your translation logic here for both text and emojis
    // Example: Convert binary representation to characters
    const binaryArray = inputText.split(' ');
    const englishText = binaryArray.map(binary => String.fromCharCode(parseInt(binary, 2))).join('');
    return englishText;
}
