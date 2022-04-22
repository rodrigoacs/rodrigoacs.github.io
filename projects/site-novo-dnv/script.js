document.querySelectorAll("a").forEach(function (link) {
    link.addEventListener('click', (e) => {
        document.title = `Rodrigo | ${e.target.innerText[0].toUpperCase() + e.target.innerText.slice(1)}`;
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