# WP-GROUP-16
1. Jäsenet
  - mikkot666 - Mikko Taipale
  - Nutu13 - Nuutti Suhonen
  - kontiok - Pete Kontiokari
  - vsvante - Svante Vähäjylkkä
## Esittely
Ryhmän 16 Web-ohjelmoinnin sovellusprojektin repositorio.

Projektimme keskittyy ilmastonmuutokseen liittyvän tiedon visualisointityökalun suunnitteluun ja toteuttamiseen. Työkalu toteutetaan käyttäen React-teknologiaa käyttöliittymän rakentamiseen ja Java-palvelinta takana olevan tietokannan hallintaan.

Työkalu mahdollistaa käyttäjien tarkastella ja visualisoida ilmastonmuutokseen liittyviä tietoja, kuten hiilidioksidipäästöjä, ilmaston lämpenemistä ja sään ääri-ilmiöitä. Tietoa voi tarkastella eri mittakaavoissa, kuten globaalisti tai tiettyä maantieteellistä aluetta koskien.
Projektin tavoitteena on luoda käyttäjäystävällinen, informatiivinen ja visuaalisesti houkutteleva työkalu, joka auttaa käyttäjiä ymmärtämään ilmastonmuutoksen vaikutuksia paremmin.


---
### Käyttöliittymä

Käyttöliittymä toteutetaan skaalautuvaksi, jotta se toimii moitteettomasti erikokoisilla näytöillä. Tekstit ja visualisointinäkymät on suunniteltu siten, että ne ovat luettavissa myös pienillä näytöillä.
Visualisointeja varten tarvittavat tiedot tallennetaan palvelimella olevaan tietokantaan, josta React-sovellus lataa ne HTTP-pyyntöjen avulla palvelimen tarjoaman rajapinnan kautta.

Kun käyttäjä muuttaa selaimen ikkunan kokoa, käyttöliittymän on mukauduttava uuteen näytön kokoon automaattisesti ja näytettävä tiedot ja visualisoinnit selkeästi. Tämä toteutetaan käyttämällä responsiivisia suunnittelumalleja, jotka mukautuvat automaattisesti näytön koon mukaan.


#### Etusivu
(kuva)

#### Rekisteröityminen ja kirjautuminen 

Sovellus mahdollistaa käyttäjän luomisen. Käyttäjän on kirjauduttava sovellukseen ennen kuin hän voi luoda oman visualisointinäkymänsä.

(kuva)

#### Visualisoinnit

Kun käyttäjä on kirjautunut sovellukseen, hän voi luoda yksilöllisen visualisointinäkymän, johon hän voi valita haluamansa visualisoinnit, asettelun ja kirjoittaa kuvaustekstin jokaiselle visualisoinnille. Näkymälle luodaan yksilölliset URL-tunnisteet, jotta käyttäjä voi jakaa näkymän muiden kanssa. Käyttäjä voi poistaa luomansa visualisointinäkymän milloin tahansa, jos hän ei enää halua käyttää sitä.

(kuva)

---
### Teknologiat ja käytetyt ohjelmat
(tekstiä)

---
## Käyttöönotto
### Demo
(linkki)
