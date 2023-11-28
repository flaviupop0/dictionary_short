let words = [];

function addWord() {
    const wordInput = document.querySelector(".cutom-input:nth-of-type(1)");
    const wordValue = wordInput.value.trim().toLowerCase();
    words.push(wordValue);
}

function searchWord() {
    const wordInput = document.querySelector(".cutom-input:nth-of-type(1)");
    const searchValue = wordInput.value.trim().toLowerCase();
    if (words.includes(searchValue)) {
        alert("This word exist in your dictionary");
    } else {
        alert("This word doesn't exist in your dictionary");
    }
}
