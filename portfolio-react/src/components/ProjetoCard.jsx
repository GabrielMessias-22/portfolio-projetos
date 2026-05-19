function ProjetoCard({ projeto }) {
    return (
        <article>
            <h3>{projeto.titulo}</h3>
            <p>{projeto.descricao}</p>
            <a href={projeto.link} target="_blank" rel="noreferrer">Ver no GitHub</a>
        </article>
    );
}

export default ProjetoCard;
