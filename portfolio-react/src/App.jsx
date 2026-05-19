import "./style.css";

import Projetos from './components/Projetos';

function App() {

    return (

        <>

            <header>

                <h1>Gabriel Messias</h1>

                <nav>

                    <ul>

                        <li><a href="#sobre">Sobre</a></li>

                        <li><a href="#projetos">Projetos</a></li>

                        <li><a href="#contato">Contato</a></li>

                    </ul>

                </nav>

            </header>


            <section id="sobre">

                <h2>Sobre Mim</h2>

                <img
                    src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
                    alt="Avatar"
                />

                <p>
                    Sou estudante de Ciência da Computação
                    com foco em desenvolvimento web e tecnologia.
                </p>

            </section>


            <Projetos />


            <section id="contato">

                <h2>Contato</h2>

                <form>

                    <input
                        type="text"
                        placeholder="Nome"
                    />

                    <input
                        type="email"
                        placeholder="E-mail"
                    />

                    <textarea
                        placeholder="Mensagem"
                    ></textarea>

                    <button type="submit">
                        Enviar
                    </button>

                </form>

            </section>


            <footer>
                <p>2026 - Desenvolvido por Gabriel Messias</p>
            </footer>

        </>

    );
}

export default App;
