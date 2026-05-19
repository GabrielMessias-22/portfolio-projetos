import ProjetoCard from './ProjetoCard';

function Projetos() {

    const projetos = [
        {
            titulo: "House of the Dragon - Site Temático",
            descricao: "Projeto inspirado na série House of the Dragon utilizando HTML e CSS.",
            link: "https://github.com/GabrielMessias-22/Projeto-HOD"
        },
        {
            titulo: "Portfólio de Projetos",
            descricao: "Portfólio pessoal desenvolvido durante os estudos de programação web.",
            link: "https://github.com/GabrielMessias-22/portfolio-projetos"
        }
    ];

    return (
        <section id="projetos">
            <h2>Meus Projetos</h2>

            <div className="cards">
                {projetos.map((projeto, index) => (
                    <ProjetoCard projeto={projeto} key={index} />
                ))}
            </div>
        </section>
    );
}

export default Projetos;