function show() {
    fetch("https://raw.githubusercontent.com/fserb/pt-br/master/dicio")
        .then(response => response.text())
        .then(dictionary => {
            const inputs = document.querySelectorAll("input")
            document.getElementById("result").innerHTML = '';
            dictionary = dictionary.split("\n").filter(word => word.length == 5);

            for (let i = 0; i < inputs.length; i++) {
                if (inputs[i].value) {
                    dictionary = dictionary.filter(word => word[i] == inputs[i].value)
                }
            }

            dictionary.forEach(word => {
                document.getElementById("result").innerHTML += `${word.toUpperCase()} `;
            });
        })
}

function info() {
    const info = document.getElementById("info");
    info.style.display = info.style.display == "none" ? "block" : "none";
}
