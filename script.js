const form = document.querySelector("form");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    const nome = document.querySelector("#nome").value;
    const email = document.querySelector("#email").value;
    const mensagem = document.querySelector("#mensagem").value;

    if (nome && email && mensagem) {
        alert("Formulário enviado com sucesso!");
    } else {
        alert("Preencha todos os campos!");
    }
});

const projetos = [
    {
        titulo: "House of the Dragon - Site Temático",
        descricao: "Projeto inspirado na série, feito com HTML e CSS.",
        link: "https://github.com/GabrielMessias-22/Projeto-HOD"
    },
    {
        titulo: "Portfólio Pessoal",
        descricao: "Site pessoal desenvolvido durante os estudos.",
        link: "#"
    }
];

const container = document.querySelector(".cards");

projetos.forEach(projeto => {
    container.innerHTML += `
        <article>
            <h3>${projeto.titulo}</h3>
            <p>${projeto.descricao}</p>
            <a href="${projeto.link}" target="_blank">Ver no GitHub</a>
        </article>
    `;
});