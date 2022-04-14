fetch('https://rodrigoacs.github.io/projects/livros.json').then(response => response.json()).then(data => {
    for (let i = 2020; i <= 2022; i++) {
        // cria a tabela e da o ID referente ao ano
        const table = document.body.appendChild(document.createElement('table'));
        table.id = i;

        // cria o cabeçalho com o ano 
        const tableYear = document.createElement('th')
        tableYear.innerHTML = i
        tableYear.setAttribute('colspan', '99')
        table.appendChild(tableYear)

        // cria cada linha com o mês e os livros lidos
        for (let j = 0; j <= 11; j++) {
            const tableRow = table.appendChild(document.createElement('tr'));
            Object.values(data[i][j]).forEach(livro => {
                if (livro != null && typeof livro != 'number') {
                    var elem = document.createElement('td');
                    elem.innerHTML = livro;
                    tableRow.appendChild(elem);
                }
            })
        }
    }
})


