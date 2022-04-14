fetch('https://rodrigoacs.github.io/projects/livros.json').then(response => response.json()).then(data => {
    Object.entries(data).forEach(([year, months]) => {
        const table = document.body.appendChild(document.createElement('table'));
        table.appendChild(document.createElement('tr')).innerHTML = `<th colspan="99">${year}</th>`;
        table.appendChild(document.createElement('tr')).innerHTML = `<th>Mês</th><th>Qtde</th><th colspan="99">Livros</th>`;

        months.forEach(month => {
            const tr = table.appendChild(document.createElement('tr'));
            Object.values(month).forEach(book => {
                tr.appendChild(document.createElement('td')).innerHTML = book;
            })
        })
    })
})