
document.querySelectorAll(".nav-buttons").forEach(function (link) {
    link.addEventListener("click", function (e) {
        ajaxNavigation(e.target);
        changeTitle(e.target);
        highligthLink(e.target);
    });
});

function ajaxNavigation(click) {
    const url = window.location.href.split("/");
    url.pop();
    const destination = click.attributes["nav-id"].value;
    fetch(`${url.join("/")}/${destination}.html`)
    .then((response) => response.text())
    .then((content) => {
        document.getElementById("link-area").innerHTML = content;
    });
}

function changeTitle(click) {
    document.title = `Rodrigo | ${click.innerText}`;
    if (click.innerText === "home") { document.title = "Rodrigo | Home";}
    if (click.innerText === "person") { document.title = "Rodrigo | Sobre";}
    if (click.innerText === "folder_open") { document.title = "Rodrigo | Projetos";}
    if (click.innerText === "mail") { document.title = "Rodrigo | Contato";}
}

function highligthLink(click) {
    document.querySelectorAll(".nav-buttons").forEach(function (link) {
        link.classList.remove("ativado");
    });
    if (click.tagName === "SPAN") {
        click.parentNode.classList.add("ativado");
    } else {
        click.classList.add("ativado");
    }
}