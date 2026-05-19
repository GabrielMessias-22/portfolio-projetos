const form = document.querySelector("form");

form.addEventListener("submit", function(event) {

    // Evita recarregar página
    event.preventDefault();

    // Captura os campos
    const nome = document.querySelector("#nome").value;
    const email = document.querySelector("#email").value;
    const mensagem = document.querySelector("#mensagem").value;

    // Validação
    if (nome && email && mensagem) {

        alert("Formulário enviado com sucesso!");

    } else {

        alert("Preencha todos os campos!");

    }

});


const projetos = [

    {
        titulo: "House of the Dragon - Site Temático",

        descricao:
        "Projeto inspirado na série House of the Dragon utilizando HTML e CSS.",

        link:
        "https://github.com/GabrielMessias-22/Projeto-HOD"
    },

    {
        titulo: "Portfólio de Projetos",

        descricao:
        "Portfólio pessoal desenvolvido durante os estudos de programação web.",

        link:
        "https://github.com/GabrielMessias-22/portfolio-projetos"
    }

];


// Seleciona container
const container = document.querySelector(".cards");


// Percorre os projetos
projetos.forEach(projeto => {

    container.innerHTML += `

        <article>

            <h3>${projeto.titulo}</h3>

            <p>${projeto.descricao}</p>

            <a href="${projeto.link}" target="_blank">
                Ver no GitHub
            </a>

        </article>

    `;

});