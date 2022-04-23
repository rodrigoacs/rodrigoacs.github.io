document.querySelectorAll("a").forEach(function (link) {
    link.addEventListener('click', (e) => {
        // navegação via AJAX
        const url = window.location.href.split("/");
        url.pop()
        const destination = e.target.attributes["nav-id"].value;
        fetch(url.join('/').concat(`/${destination}.html`))
            .then(response => response.text())
            .then(content => {
                document.getElementById("link-area").innerHTML = content
            })

        // mudança do titulo da página
        document.title = `Rodrigo | ${e.target.innerText}`;

        // estilo dos botões de navegação
        document.querySelectorAll("a").forEach(function (link) {
            link.classList.remove("ativado");
        })
        if (e.target.tagName == "SPAN") {
            e.target.parentNode.classList.add("ativado");
        } else {
            e.target.classList.add("ativado");
        }

    });
});