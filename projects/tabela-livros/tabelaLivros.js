
// 0 liro, 1 autor, 2 data, 3 genero, 4 nota;
function logBook(book) {
    book = book.split(";");
    console.log(`nome do livro: ${book[0]}`);
    console.log(`nome do autor: ${book[1]}`);
    console.log(`data da leitura: ${book[2]}`);
    console.log(`genero: ${book[3]}`);
    console.log(`nota: ${book[4]}`);
    let tr = document.createElement("tr");
    let td = document.createElement("td");

    td.innerHTML = book[0];
    tr.appendChild(td);
    td = document.createElement("td");
    td.innerHTML = book[1];
    tr.appendChild(td);
    td = document.createElement("td");
    td.innerHTML = book[2];
    tr.appendChild(td);
    td = document.createElement("td");
    td.innerHTML = book[3];
    tr.appendChild(td);
    td = document.createElement("td");
    td.innerHTML = book[4];
    tr.appendChild(td);
    document.getElementById("table").appendChild(tr);


}

fetch("./Biblioteca-4780343c6bfa45e2bb9299516cf05e3c.csv")
    .then(response => response.text())
    .then(csv => csv.split(/\n/))
    // .then(lines => {
    //     lines.forEach(line => {
    //         let lineElement = document.createElement("div");
    //         lineElement.innerText = line;
    //         document.body.append(lineElement);
    //     })
    // })
    .then(books => books.forEach(logBook))