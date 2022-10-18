// 0 data, 1 livro, 2 autor, 3 genero, 4 nota, 5 favorito;
function createTable(bookInfos) {
    bookInfos = bookInfos.split(";");
    let tr = document.createElement("tr");
    let td = document.createElement("td");

    td.innerHTML = bookInfos[0];
    tr.appendChild(td);
    td = document.createElement("td");
    td.innerHTML = bookInfos[1];
    tr.appendChild(td);
    td = document.createElement("td");
    td.innerHTML = bookInfos[2];
    td.id = bookInfos[2];
    tr.appendChild(td);
    td = document.createElement("td");
    td.innerHTML = bookInfos[3];
    tr.appendChild(td);
    td = document.createElement("td");
    td.innerHTML = bookInfos[4];
    tr.appendChild(td);
    td.innerHTML = bookInfos[5];
    tr.appendChild(td);
    document.getElementById("table").appendChild(tr);


}

fetch("./Biblioteca-4780343c6bfa45e2bb9299516cf05e3c-2.csv")
    .then(response => response.text())
    .then(csv => csv.split(/\n/))
    .then(books => books.forEach(createTable))

let query = document.getElementById("query");
query.addEventListener("keyup", function (event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        document.getElementById("search").click();
    }
});

document.querySelector("#search").addEventListener("click", searchAuthor);

function searchAuthor() {
    document.querySelectorAll(`tr`).forEach(element => {
        if (element.children[2].id.toLowerCase() != query.value.toLowerCase()) {
            element.style.display = "none";
        } else {
            element.style.display = "table-row";
        }
    });
}