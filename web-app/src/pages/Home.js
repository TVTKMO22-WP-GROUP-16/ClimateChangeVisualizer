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
              <h2>Lämpötilatiedot ja CO2</h2>
              <p>
              Ensimmäinen kaavio kuvaa sekä vuosittaisia että kuukausittaisia globaaleja lämpötilapoikkeamia vuosina 1850-2020.
              </p>
              <p>
              Toinen kaavio kuvaa Mauna Loan mittauksia ilmakehän co2 pitoisuudesta alkaen vuodesta 1958.
              </p>
              <p>
              Kolmas kaavio kuvaa ilmakehän CO2 pitoisuutta 800 tuhannen vuoden takaa ja maapallon pintalämpötilan keskimuutosta 2 miljoonan vuoden takaa.
              </p>
              <Link to = "/Charts1">
                <button class="button-19">Avaa</button>
              </Link>
            </article>
            <article>
              <h2>Päästölähteet</h2>
              <p>
              Ensimmäinen kaavio kuvaa valtakunnallisia hiilidioksidipäästöjä fossiilisista polttoaineista ja teollisuusprosesseista ilman bunkkeripolttoaineita.
              </p>
              <p>
              Toinen kaavio kuvaa eri toimialojen osuutta hiilidioksidipäästöistä maailmanlaajuisesti.
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
