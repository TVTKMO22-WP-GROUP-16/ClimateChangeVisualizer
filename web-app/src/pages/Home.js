import React from "react";
import { Link } from "react-router-dom";
export default function Home() {

    return (
      <div className="home">
        <header>
          <h1>Ilmastonmuutoksen visualisointityökalu</h1>
          <p>Tämä projekti on suunniteltu auttamaan käyttäjiä ymmärtämään ilmastonmuutoksen vaikutuksia paremmin tarjoamalla
            käyttäjäystävällisen ja visuaalisesti houkuttelevan tavan tarkastella ilmastonmuutokseen liittyviä tietoja</p>
          <p>Sovellus mahdollistaa myös käyttäjän rekisteröitymisen, jonka avulla käyttäjä voi kirjautua sovellukseen myöhemmin
            ja luoda oman yksilöllisen visualisointinäkymänsä valitsemalla
            haluamansa visualisoinnit, asettelun ja kirjoittamalla kuvaustekstin jokaiselle visualisoinnille.
            Käyttäjä voi myös jakaa näkymän muiden kanssa antamalla sille yksilöllisen URL-tunnisteen.</p>
        </header>
        <main>
          <section>
            <article>
              <h2>Charts 1</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sed
                lorem turpis. Nam non sapien vel lectus interdum viverra eu vitae
                felis. Nam lectus massa, pellentesque vitae justo et, suscipit
                tempus purus. Curabitur pulvinar metus ut nunc dapibus, quis
                sodales neque consectetur. Fusce iaculis id lacus sed lobortis.
                Cras vitae tristique dui, mollis pellentesque diam. Suspendisse
                porttitor leo ante, vitae blandit justo tempor ut. Morbi at ante
                ante.
              </p>
              <Link to = "/Charts1">
                <button class="button-19">Avaa</button>
              </Link>
            </article>
            <article>
              <h2>Charts 2</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sed
                lorem turpis. Nam non sapien vel lectus interdum viverra eu vitae
                felis. Nam lectus massa, pellentesque vitae justo et, suscipit
                tempus purus.
              </p>
              <Link to = "/Charts2">
                <button class="button-19">Avaa</button>
              </Link>
            </article>
            <article>
              <h2>Kirjaudu/Rekisteröidy</h2>
              <p>
                Jos teillä on jo käyttäjä voitte siirtyä kirjautumiseen painamalla
                näppäintä
              </p>
              <Link to = "/Login">
                <button class="button-19">Kirjaudu</button>
              </Link>
              <p>
                Jos haluatte rekisteröityä käyttäjäksi voitte siirtyä
                rekisteröitymään painamalla näppäintä{" "}
              </p>
              <Link to= "/SignUp">
                <button class="button-19">Rekisteröidy</button>
              </Link>
            </article>
          </section>
        </main>
      </div>

  );
}
