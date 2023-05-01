import React from "react";

export default function Home() {
  return (
    <div className="home">
      <h1>Home</h1>
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
            <a href="http://localhost:3000/Charts1">
              <button class="button-19">Avaa</button>
            </a>
          </article>
          <article>
            <h2>Charts 2</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sed
              lorem turpis. Nam non sapien vel lectus interdum viverra eu vitae
              felis. Nam lectus massa, pellentesque vitae justo et, suscipit
              tempus purus.
            </p>
            <a href="http://localhost:3000/Charts2">
              <button class="button-19">Avaa</button>
            </a>
          </article>
          <article>
            <h2>Kirjaudu/Rekisteröidy</h2>
            <p>
              Jos teillä on jo käyttäjä voitte siirtyä kirjautumiseen painamalla
              näppäintä
            </p>
            <a href="http://localhost:3000/login">
              <button class="button-19">Kirjaudu</button>
            </a>
            <p>
              Jos haluatte rekisteröityä käyttäjäksi voitte siirtyä
              rekisteröitymään painamalla näppäintä{" "}
            </p>
            <a href="http://localhost:3000/signup">
              <button class="button-19">Rekisteröidy</button>
            </a>
          </article>
        </section>
      </main>
    </div>
  );
}
