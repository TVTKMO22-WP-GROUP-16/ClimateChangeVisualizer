import React from "react";

export default function Home() {
  return (
    <div className="home">
      <h1>Ilmastonmuutoksen visualisointityökalu</h1>
      <p>Tämä projekti on suunniteltu auttamaan käyttäjiä ymmärtämään ilmastonmuutoksen vaikutuksia paremmin tarjoamalla
        käyttäjäystävällisen ja visuaalisesti houkuttelevan tavan tarkastella ilmastonmuutokseen liittyviä tietoja</p>
      <p>Sovellus mahdollistaa myös käyttäjän rekisteröitymisen, jonka avulla käyttäjä voi kirjautua sovellukseen myöhemmin
        ja luoda oman yksilöllisen visualisointinäkymänsä valitsemalla
          haluamansa visualisoinnit, asettelun ja kirjoittamalla kuvaustekstin jokaiselle visualisoinnille.
          Käyttäjä voi myös jakaa näkymän muiden kanssa antamalla sille yksilöllisen URL-tunnisteen.</p>
    </div>
  );
}
