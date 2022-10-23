import axios from 'axios';
import * as dotenv from 'dotenv';
dotenv.config();

const notionToken = process.env.NOTION_TOKEN;
const databaseId = "4780343c6bfa45e2bb9299516cf05e3c";

const options = {
    method: 'POST',
    url: `https://api.notion.com/v1/databases/${databaseId}/query`,
    headers: {
        accept: 'application/json',
        'Notion-Version': '2022-06-28',
        'content-type': 'application/json',
        'Authorization': `${notionToken}`
    },
    data: { page_size: 100 }
};

axios
    .request(options)
    .then((response) => {
        response.data.results.forEach(page => {
            console.log(page.properties["Data"].date.start);
            console.log(page.properties["Livro"].title[0].plain_text);
            console.log(page.properties["Autor"]["multi_select"][0].name);
            console.log(page.properties["Gênero"]["multi_select"][0].name);
            console.log(page.properties["Nota"].number);
            console.log(page.properties["Favorito"]["select"].name)
            console.log();
        })
    })
    .catch(function (error) {
        console.error(error);
    });

function makeTable(page) {
    let tr = document.createElement("tr");
    let tdData = document.createElement("td");
    let tdLivro = document.createElement("td");
    let tdAutor = document.createElement("td");
    let tdGenero = document.createElement("td");
    let tdNota = document.createElement("td");
    let tdFavorito = document.createElement("td");

    tdData.innerHTML = page.properties["Data"].date.start;
    tdLivro.innerHTML = page.properties["Livro"].title[0].plain_text;
    tdAutor.innerHTML = page.properties["Autor"]["multi_select"][0].name;
    tdGenero.innerHTML = page.properties["Gênero"]["multi_select"][0].name;
    tdNota.innerHTML = page.properties["Nota"].number;
    tdFavorito.innerHTML = page.properties["Favorito"]["select"].name;

    tr.appendChild(tdData);
    tr.appendChild(tdLivro);
    tr.appendChild(tdAutor);
    tr.appendChild(tdGenero);
    tr.appendChild(tdNota);
    tr.appendChild(tdFavorito);

    document.getElementById("table").appendChild(tr);
}

// // 0 data, 1 livro, 2 autor, 3 genero, 4 nota, 5 favorito;
// function createTable(bookInfos) {
//     bookInfos = bookInfos.split(";");
//     let tr = document.createElement("tr");

//     for (let i = 0; i < 6; i++) {
//         let td = document.createElement("td");
//         td.innerHTML = bookInfos[i];
//         td.id = `${bookInfos[i]}`;
//         tr.appendChild(td);
//     }

//     document.getElementById("table").appendChild(tr);
// }

// fetch("./Biblioteca-4780343c6bfa45e2bb9299516cf05e3c-2.csv")
//     .then(response => response.text())
//     .then(csv => csv.split(/\n/))
//     .then(books => books.slice(1).forEach(createTable))

// document.querySelectorAll('input').forEach(input => {
//     input.addEventListener("keyup", function (event) {
//         if (event.keyCode === 13) {
//             event.preventDefault();
//             search(this);
//         }
//     })
// }
// )

// // reference.id = id que representa o que deve ser pesquisado
// // 0 data, 1 livro, 2 autor, 3 genero, 4 nota, 5 favorito;
// // reference.value = value do input que chamou a função
// function search(reference) {
//     document.querySelectorAll(`tr:not(#header)`).forEach(element => {
//         if (element.children[reference.id].id.toLowerCase().includes(reference.value.toLowerCase())) {
//             element.style.display = "table-row";
//         } else {
//             element.style.display = "none";
//         }
//     });
// }