const button = document.getElementById("day-mode")
const header = document.querySelector("header")
const linksMenu = document.querySelectorAll(".links")
const nome = document.querySelector(".nome")
const degradeClaro = document.querySelector(".degrade-topo")
const body = document.querySelector("body")
const texto1 = document.querySelector(".nome-2")
const texto2 = document.querySelector(".profissão")
const texto3 = document.querySelector(".h2-sobre-mim")
const texto4 = document.querySelector(".texto")
const caixa1 = document.querySelector(".sobre-mim")
const texto5 = document.querySelector(".tecnologias")
const texto6 = document.querySelector(".NOMES")
const texto7 = document.querySelector(".NOMES-2")
const texto8 = document.querySelector(".NOMES-3")
const texto9 = document.querySelector(".projetos-p")
const caixa2 = document.querySelector(".projeto")
const texto10 = document.querySelector(".nomes")
const texto11 = document.querySelector(".tecnologias-usadas")
const texto12 = document.querySelector(".resumo")
const caixa3 = document.querySelector(".caixa-atualmente")
const texto13 = document.querySelector(".texto-atualmente")
const texto14 = document.querySelector(".atualmente")
const texto15 = document.querySelector(".contatos")
const texto16 = document.querySelector("h3")
const texto17 = document.querySelectorAll(".footer-links")
const caixa4 = document.querySelector("footer")
const texto18 = document.querySelector(".menu-toggle")
const caixa5 = document.querySelector(".menu")


button.addEventListener("click", () => {

    if (header.classList.contains("escuro")) {
        button.textContent = "Modo Noturno"
    } else {
        button.textContent = "Modo Diurno"
    }
})

button.addEventListener("click", () => {

    button.classList.toggle("active")
    header.classList.toggle("escuro")

    linksMenu.forEach(link => {
        link.classList.toggle("link-claro")
    })

    nome.classList.toggle("nome-claro")
    innertext = button.innerText === "Modo Diurno" ? "Modo Noturno" : "Modo Diurno"

    degradeClaro.classList.toggle("degrade-claro")
    body.classList.toggle("body-claro")
    texto1.classList.toggle("paragrafos-claro")
    texto2.classList.toggle("paragrafos-claro")
    texto3.classList.toggle("paragrafos-claro")
    texto4.classList.toggle("paragrafos-claro")
    caixa1.classList.toggle("caixa-claro")
    texto5.classList.toggle("paragrafos-claro")
    texto6.classList.toggle("paragrafos-claro")
    texto7.classList.toggle("paragrafos-claro")
    texto8.classList.toggle("paragrafos-claro")
    texto9.classList.toggle("paragrafos-claro")
    caixa2.classList.toggle("caixa-claro")
    texto10.classList.toggle("paragrafos-claro")
    texto11.classList.toggle("nome-claro")
    texto12.classList.toggle("paragrafos-claro")
    caixa3.classList.toggle("caixa-claro")
    texto13.classList.toggle("paragrafos-claro")
    texto14.classList.toggle("paragrafos-claro")
    texto15.classList.toggle("paragrafos-claro")
    texto16.classList.toggle("paragrafos-claro")
    texto17.forEach(link => {
        link.classList.toggle("link-claro")
    })
    caixa4.classList.toggle("caixa-claro")
    texto18.classList.toggle("menu-claro")
    caixa5.classList.toggle("menuzim-claro")


})


document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('menu-toggle');
    const menu = document.getElementById('menu');
    const links = document.querySelectorAll('.links');

    menuToggle.addEventListener('click', () => {
        menu.classList.add('open');
    });

    links.forEach(link => {
        link.addEventListener('click', () => {
            menu.classList.remove('open');
        });
    });
});




