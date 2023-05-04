# Ilmastonmuutoksen visualisointi
Projektiryhmän jäsenet:
  - mikkot666 - Mikko Taipale
  - Nutu13 - Nuutti Suhonen
  - kontiok - Pete Kontiokari
  - vsvante - Svante Vähäjylkkä

## Esittely
Ryhmän 16 Web-ohjelmoinnin sovellusprojekti. <br>
Projektiryhmämme koostuu Oulun ammattikorkeakoulun tieto- ja viestintätekniikan opiskelijoista.

Projektimme keskittyy ilmastonmuutokseen liittyvän tiedon visualisointityökalun suunnitteluun ja toteuttamiseen. Työkalu toteutetaan käyttäen React-teknologiaa käyttöliittymän rakentamiseen ja Java-palvelinta takana olevan tietokannan hallintaan.

Työkalu mahdollistaa käyttäjien tarkastella ja visualisoida ilmastonmuutokseen liittyviä tietoja, kuten hiilidioksidipäästöjä, ilmaston lämpenemistä ja sään ääri-ilmiöitä. Tietoa voi tarkastella eri mittakaavoissa, kuten globaalisti tai tiettyä maantieteellistä aluetta koskien.
Projektin tavoitteena on luoda käyttäjäystävällinen, informatiivinen ja visuaalisesti houkutteleva työkalu, joka auttaa käyttäjiä ymmärtämään ilmastonmuutoksen vaikutuksia paremmin.

---
### Vastuualueet

Mikko Taipale: Visualisointi 4 (frontend ja backend), rekisteröityminen, kirjautuminen, käyttäjän poisto, näkymien poisto käyttäjän mukana, backend testit, tietokannan kasaaminen, tietokannan yhdistäminen, privateroutet, ulkoasu osittain (enimmäkseen Nuutin kädenjälkeä).

Pete Kontiokari: Datasettien muokkaamista tietokantaan sopivaksi, Visualisoinnin 1 ja 2 frontend ja backend, käyttäjäkohtaisen visualisointinäkymän luonti, Käyttäjäkohtaisen visualisointinäkymän näyttäminen yksilöivällä tunnisteella, Käyttäjäkohtaisten visualisointinäkymien haku ja poistaminen.
Frontend testit.

Nuutti Suhonen: Visualisointi 5 frontend ja backend, Ulkoasun suunnittelu ja toteutus, pienissä määrin tietokannan muokkausta.

Svante Vähäjylkkä: Visualisointi 3 frontend ja backend.

---
### Käyttöliittymä

Käyttöliittymä toteutetaan skaalautuvaksi, jotta se toimii moitteettomasti erikokoisilla näytöillä. Tekstit ja visualisointinäkymät on suunniteltu siten, että ne ovat luettavissa myös pienillä näytöillä.
>Ei olisi pitänyt luottaa selaimen simulointi näkymään, puhelimella demoa testatessa asioita menee piiloon. -Mikko

Visualisointeja varten tarvittavat tiedot tallennetaan palvelimella olevaan tietokantaan, josta React-sovellus lataa ne HTTP-pyyntöjen avulla palvelimen tarjoaman rajapinnan kautta.

Kun käyttäjä muuttaa selaimen ikkunan kokoa, käyttöliittymän on mukauduttava uuteen näytön kokoon automaattisesti ja näytettävä tiedot ja visualisoinnit selkeästi. Tämä toteutetaan käyttämällä responsiivisia suunnittelumalleja, jotka mukautuvat automaattisesti näytön koon mukaan.


#### Etusivu

![etusivu](https://user-images.githubusercontent.com/117103774/236253993-d4c7557e-e01a-473c-8ef5-7fb7d083503f.png)
> **Kuva 1.** Etusivu

#### Rekisteröityminen ja kirjautuminen 

Sovellus mahdollistaa käyttäjän luomisen. Käyttäjän on kirjauduttava sovellukseen ennen kuin hän voi luoda oman visualisointinäkymänsä.

![rekisteröityminen](https://user-images.githubusercontent.com/117103774/236254187-35013d98-565a-48dd-b708-44a364411ab7.png)
> **Kuva 2.** Rekisteröitymisnäkymä

![kirjautuminen](https://user-images.githubusercontent.com/117103774/236254317-0c7ec46e-cd85-4b8a-aa13-6d6f5114ea9f.png)
> **Kuva 3.** Kirjautusmisnäkymä

![tili](https://user-images.githubusercontent.com/117103774/236254452-62e5f127-8b52-41aa-b6df-4ef932c5d222.png)
> **Kuva 4.** Kirjautuneen käyttäjän tilinäkymä


#### Visualisoinnit

Visualisointeihin pääsee sivuston sivupalkista: <br>
![sivupalkki](https://user-images.githubusercontent.com/117103774/236255411-7e4b2542-fc4f-4477-90da-46507918ef3c.png)
> **Kuva 5.** Sivustolla navigointi

![Päästölähteet](https://user-images.githubusercontent.com/117103774/236255526-4ea10676-8ab3-4ddc-a4c9-63c9527b04dc.png)
> **Kuva 6.** Esimerkki visualisoinnista (V4)


Kun käyttäjä on kirjautunut sovellukseen, hän voi luoda yksilöllisen visualisointinäkymän, johon hän voi valita haluamansa visualisoinnit, asettelun ja kirjoittaa kuvaustekstin jokaiselle visualisoinnille. Näkymälle luodaan yksilölliset URL-tunnisteet, jotta käyttäjä voi jakaa näkymän muiden kanssa. Käyttäjä voi poistaa luomansa visualisointinäkymän milloin tahansa, jos hän ei enää halua käyttää sitä.

![sivupalkki2](https://user-images.githubusercontent.com/117103774/236255785-98c5353f-befa-44e7-b768-80bdaae2e07d.png)
> **Kuva 7.** Kirjautuneen käyttäjän sivupalkki

![Näkymän luonti](https://user-images.githubusercontent.com/117103774/236254668-c20d436c-84d7-42ff-838b-d36728ab5ca6.png)
> **Kuva 8.** Visualisointinäkymän luonti

---
### Teknologiat ja käytetyt ohjelmat

Frontend: React <br>
Backend: Java (Spring boot) <br>

Tietokanta: Aluksi käytössä oli MySQL sitemmin siirryttiin PostgreSQL:ään jota pidetään yllä render.com -palvelussa <br>

Versionhallinta: GitHub <br>

Ohjelmistot: <br>
Visual Studio Code (koodaamiseen) <br>
pgAdmin (tietokannan hallintaan) <br>
Postman (REST-rajapinnan testaamiseen) <br>


---
## Käyttöönotto

### Ajo-ohjeet

Kloonaa repositorio haluamaasi kansioon.<br>
`git clone https://github.com/TVTKMO22-WP-GROUP-16/ClimateChangeVisualizer.git`


Tietokannan luonti:
Luo pgadmin 4:ssä login/group role nimellä wp16db_user <br>
Tämän jälkeen luo database nimellä wp16db ja aseta sen omistajaksi wp16db_user. <br>
Tietokannan luomisen jälkeen klikkaa tehtyä tietokantaa oikealla hiirenapilla avataksesi menun ja valitse sieltä Restore. <br>
Ikkunassa, joka aukeaa valitse Formatiksi Custom or tar ja Filenamen kohdalle etsi wp16db-backup.sql tiedoston sijainti. <br>
Viimeisenä klikkaa restore jonka pitäisi luoda sinulle tietokanta, josta löytyy kaikki tarvittava tieto sivustoa varten.

Lisää application.properties -tiedosto 
src/main/resources -kansioon:

```
spring.datasource.url=tietokannan osoite
spring.datasource.username=wp16db_user
spring.datasource.password=tietokannan salasana
spring.datasource.driverClassName=org.postgresql.Driver
spring.jpa.hibernate.ddl-auto=update
spring.jpa.properties.hibernate.dialect=org.hibernate.dialect.PostgreSQLDialect
jwt.secret=randomavain
server.port=8090
```
Varmista, että olet asentanut tarvittavat lisäosat Visual Studio Codeen (kuten tarvittavat Java-lisäosat)

Avaa kansiosi Visual Studio Codessa.

Voit käynnistää Java-palvelimen src/main/java/com/group_16/webproject/WebProjectApplication.java -tiedostosta.

Palvelin on nyt käynnistyneenä, jos terminaalin viimeisin rivi vaikuttaa tältä:
”Started WebProjectApplication in 5.895 seconds (process running for 6.183)”

Avaa nyt web-app -kansio uudessa terminaalissa

Aja seuraavat komennot terminaalissa:
```
npm install
npm start
```

React-applikaation pitäisi nyt pyöriä osoitteessa:
http://localhost:3000


## Demo
https://ccv-service.onrender.com 

Tämä todellakin on demo. Sivuja ei pysty päivittämään ja linkkejä ei pysty jakamaan, koska renderissä oleva build versio olisi vaatinut paljon muutoksia jotta nämä asiat saataisiin julkisessa internetissä toimimaan. Aikamme loppui kesken.

---
###ER-kaaviot
![ER](https://user-images.githubusercontent.com/117103774/236281630-d97f0484-9d9c-434c-ad43-db7ff042a447.png)
