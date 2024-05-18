import React from 'react';
import './app.css'; // Assumindo que o CSS está no arquivo App.css
import backgroundImage from '../../resources/images/policia.jpg';

function Menu() {
  return (
    <div className="App" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <main className="App-content">

        <section className="InfoBox">
        <h1 id='construcao'>Este site encontra-se em construção</h1>
          <h1>Bem-vindo!</h1>
          <p>Esta plataforma é dedicada aos candidatos que se prepararam para as provas das forças policiais. <br /><br />
                Escolhe entre os exercícios para a PSP ou GNR e começa a treinar agora!
            </p>

            <nav className="Menu">
          <ul>
            <li><a href="/pspmenu" className="btn">Exercícios PSP</a></li>
            <li><a href="/gnrmenu" className="btn">Exercícios GNR</a></li>
          </ul>
        </nav>
        </section>
      </main>
    </div>
  );
}

export default Menu;



/*
import backgroundImage from '../../resources/images/policia.jpg';

<p>Este site é dedicado aos candidatos que se prepararam para as provas das forças policiais. 
Escolha entre os exercícios para a PSP ou GNR e começa a treinar agora!
</p>


*/