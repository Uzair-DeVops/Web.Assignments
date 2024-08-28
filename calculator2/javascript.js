function appendCharacter(character) {
    document.getElementById("result").value += character;
}

function clearResult() {
    document.getElementById("result").value = "";
}

function deleteLast() {
    const currentValue = document.getElementById("result").value;
    document.getElementById("result").value = currentValue.slice(0, -1);
}

function calculateResult() {
    try {
        const currentValue = document.getElementById("result").value;
        document.getElementById("result").value = eval(currentValue);
    } catch (error) {
        document.getElementById("result").value = "Error";
    }
}
