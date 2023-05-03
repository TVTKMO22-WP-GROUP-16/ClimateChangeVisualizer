package com.group_16.webproject.Entities;


import jakarta.persistence.Entity;

import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(schema = "public", name = "co2ebc")
public class Co2EBC {

    @Id
    private int year; //Primary key

    private double Afghanistan;
    private double Albania;
    private double Algeria;
    private double Andorra;
    private double Angola;
    private double Anguilla;
    private double Antigua_and_Barbuda;
    private double Argentina;
    private double Armenia;
    private double Aruba;
    private double Australia;
    private double Austria;
    private double Azerbaijan;
    private double Bahamas;
    private double Bahrain;
    private double Bangladesh;
    private double Barbados;
    private double Belarus;
    private double Belgium;
    private double Belize;
    private double Benin;
    private double Bermuda;
    private double Bhutan;
    private double Bonaire_Saint_Eustatius_and_Saba;
    private double Bosnia_and_Herzegovina;
    private double Botswana;
    private double Brazil;
    private double British_Virgin_Islands;
    private double Brunei_Darussalam;
    private double Bulgaria;
    private double Burkina_Faso;
    private double Burundi;
    private double Cambodia;
    private double Canada;
    private double Cape_Verde;
    private double Central_African_Republic;
    private double Chad;
    private double Chile;
    private double China;
    private double Colombia;
    private double Comoros;
    private double Congo;
    private double Cook_Islands;
    private double Costa_Rica;
    private double Cote_d_Ivoire;
    private double Croatia;
    private double Cuba;
    private double Curacao;
    private double Cyprus;
    private double Czech_Republic;
    private double North_Korea;
    private double Democratic_Republic_of_the_Congo;
    private double Denmark;
    private double Djibouti;
    private double Dominica;
    private double Dominican_Republic;
    private double Ecuador;
    private double Egypt;
    private double El_Salvador;
    private double Equatorial_Guinea;
    private double Eritrea;
    private double Estonia;
    private double Ethiopia;
    private double Faeroe_Islands;
    private double Micronesia;
    private double Fiji;
    private double Finland;
    private double France;
    private double French_Guiana;
    private double French_Polynesia;
    private double Gabon;
    private double Gambia;
    private double Georgia;
    private double Germany;
    private double Ghana;
    private double Greece;
    private double Greenland;
    private double Grenada;
    private double Guadeloupe;
    private double Guatemala;
    private double Guinea;
    private double Guinea_Bissau;
    private double Guyana;
    private double Haiti;
    private double Honduras;
    private double Hong_Kong;
    private double Hungary;
    private double Iceland;
    private double India;
    private double Indonesia;
    private double Iraq;
    private double Ireland;
    private double Iran;
    private double Israel;
    private double Italy;
    private double Jamaica;
    private double Japan;
    private double Jordan;
    private double Kazakhstan;
    private double Kenya;
    private double Kiribati;
    private double Kosovo;
    private double Kuwait;
    private double Kyrgyzstan;
    private double Laos;
    private double Latvia;
    private double Lebanon;
    private double Lesotho;
    private double Liberia;
    private double Libya;
    private double Liechtenstein;
    private double Lithuania;
    private double Luxembourg;
    private double Macao;
    private double North_Macedonia;
    private double Madagascar;
    private double Malawi;
    private double Malaysia;
    private double Maldives;
    private double Mali;
    private double Malta;
    private double Marshall_Islands;
    private double Martinique;
    private double Mauritania;
    private double Mauritius;
    private double Mayotte;
    private double Mexico;
    private double Mongolia;
    private double Montenegro;
    private double Montserrat;
    private double Morocco;
    private double Mozambique;
    private double Myanmar;
    private double Namibia;
    private double Nauru;
    private double Nepal;
    private double Netherlands;
    private double New_Caledonia;
    private double New_Zealand;
    private double Nicaragua;
    private double Niger;
    private double Nigeria;
    private double Niue;
    private double Norway;
    private double Occupied_Palestinian_Territory;
    private double Oman;
    private double Pakistan;
    private double Palau;
    private double Panama;
    private double Papua_New_Guinea;
    private double Paraguay;
    private double Peru;
    private double Philippines;
    private double Bolivia;
    private double Poland;
    private double Portugal;
    private double Qatar;
    private double Cameroon;
    private double South_Korea;
    private double Moldova;
    private double South_Sudan;
    private double Sudan;
    private double Reunion;
    private double Romania;
    private double Russian_Federation;
    private double Rwanda;
    private double Saint_Helena;
    private double Saint_Lucia;
    private double Sint_Maarten;
    private double Samoa;
    private double Sao_Tome_and_Principe;
    private double Saudi_Arabia;
    private double Senegal;
    private double Serbia;
    private double Seychelles;
    private double Sierra_Leone;
    private double Singapore;
    private double Slovakia;
    private double Slovenia;
    private double Solomon_Islands;
    private double Somalia;
    private double South_Africa;
    private double Spain;
    private double Sri_Lanka;
    private double Saint_Kitts_and_Nevis;
    private double Saint_Pierre_and_Miquelon;
    private double Saint_Vincent_and_the_Grenadines;
    private double Suriname;
    private double Swaziland;
    private double Sweden;
    private double Switzerland;
    private double Syria;
    private double Taiwan;
    private double Tajikistan;
    private double Thailand;
    private double Timor_Leste;
    private double Togo;
    private double Tonga;
    private double Trinidad_and_Tobago;
    private double Tunisia;
    private double Turkey;
    private double Turkmenistan;
    private double Turks_and_Caicos_Islands;
    private double Tuvalu;
    private double Uganda;
    private double Ukraine;
    private double United_Arab_Emirates;
    private double United_Kingdom;
    private double Tanzania;
    private double USA;
    private double Uruguay;
    private double Uzbekistan;
    private double Vanuatu;
    private double Venezuela;
    private double Viet_Nam;
    private double Wallis_and_Futuna_Islands;
    private double Yemen;
    private double Zambia;
    private double Zimbabwe;
    private double KP_Annex_B;
    private double Non_KP_Annex_B;
    private double OECD;
    private double Non_OECD;
    private double EU27;
    private double Africa;
    private double Asia;
    private double Central_America;
    private double Europe;
    private double Middle_East;
    private double North_America;
    private double Oceania;
    private double South_America;
    private double Bunkers;
    private double Statistical_Difference;
    private double World;


    public int getYear() {
        return this.year;
    }

    public void setYear(int year) {
        this.year = year;
    }

    public double getAfghanistan() {
        return this.Afghanistan;
    }

    public void setAfghanistan(double Afghanistan) {
        this.Afghanistan = Afghanistan;
    }

    public double getAlbania() {
        return this.Albania;
    }

    public void setAlbania(double Albania) {
        this.Albania = Albania;
    }

    public double getAlgeria() {
        return this.Algeria;
    }

    public void setAlgeria(double Algeria) {
        this.Algeria = Algeria;
    }

    public double getAndorra() {
        return this.Andorra;
    }

    public void setAndorra(double Andorra) {
        this.Andorra = Andorra;
    }

    public double getAngola() {
        return this.Angola;
    }

    public void setAngola(double Angola) {
        this.Angola = Angola;
    }

    public double getAnguilla() {
        return this.Anguilla;
    }

    public void setAnguilla(double Anguilla) {
        this.Anguilla = Anguilla;
    }

    public double getAntigua_and_Barbuda() {
        return this.Antigua_and_Barbuda;
    }

    public void setAntigua_and_Barbuda(double Antigua_and_Barbuda) {
        this.Antigua_and_Barbuda = Antigua_and_Barbuda;
    }

    public double getArgentina() {
        return this.Argentina;
    }

    public void setArgentina(double Argentina) {
        this.Argentina = Argentina;
    }

    public double getArmenia() {
        return this.Armenia;
    }

    public void setArmenia(double Armenia) {
        this.Armenia = Armenia;
    }

    public double getAruba() {
        return this.Aruba;
    }

    public void setAruba(double Aruba) {
        this.Aruba = Aruba;
    }

    public double getAustralia() {
        return this.Australia;
    }

    public void setAustralia(double Australia) {
        this.Australia = Australia;
    }

    public double getAustria() {
        return this.Austria;
    }

    public void setAustria(double Austria) {
        this.Austria = Austria;
    }

    public double getAzerbaijan() {
        return this.Azerbaijan;
    }

    public void setAzerbaijan(double Azerbaijan) {
        this.Azerbaijan = Azerbaijan;
    }

    public double getBahamas() {
        return this.Bahamas;
    }

    public void setBahamas(double Bahamas) {
        this.Bahamas = Bahamas;
    }

    public double getBahrain() {
        return this.Bahrain;
    }

    public void setBahrain(double Bahrain) {
        this.Bahrain = Bahrain;
    }

    public double getBangladesh() {
        return this.Bangladesh;
    }

    public void setBangladesh(double Bangladesh) {
        this.Bangladesh = Bangladesh;
    }

    public double getBarbados() {
        return this.Barbados;
    }

    public void setBarbados(double Barbados) {
        this.Barbados = Barbados;
    }

    public double getBelarus() {
        return this.Belarus;
    }

    public void setBelarus(double Belarus) {
        this.Belarus = Belarus;
    }

    public double getBelgium() {
        return this.Belgium;
    }

    public void setBelgium(double Belgium) {
        this.Belgium = Belgium;
    }

    public double getBelize() {
        return this.Belize;
    }

    public void setBelize(double Belize) {
        this.Belize = Belize;
    }

    public double getBenin() {
        return this.Benin;
    }

    public void setBenin(double Benin) {
        this.Benin = Benin;
    }

    public double getBermuda() {
        return this.Bermuda;
    }

    public void setBermuda(double Bermuda) {
        this.Bermuda = Bermuda;
    }

    public double getBhutan() {
        return this.Bhutan;
    }

    public void setBhutan(double Bhutan) {
        this.Bhutan = Bhutan;
    }

    public double getBonaire_Saint_Eustatius_and_Saba() {
        return this.Bonaire_Saint_Eustatius_and_Saba;
    }

    public void setBonaire_Saint_Eustatius_and_Saba(double Bonaire_Saint_Eustatius_and_Saba) {
        this.Bonaire_Saint_Eustatius_and_Saba = Bonaire_Saint_Eustatius_and_Saba;
    }

    public double getBosnia_and_Herzegovina() {
        return this.Bosnia_and_Herzegovina;
    }

    public void setBosnia_and_Herzegovina(double Bosnia_and_Herzegovina) {
        this.Bosnia_and_Herzegovina = Bosnia_and_Herzegovina;
    }

    public double getBotswana() {
        return this.Botswana;
    }

    public void setBotswana(double Botswana) {
        this.Botswana = Botswana;
    }

    public double getBrazil() {
        return this.Brazil;
    }

    public void setBrazil(double Brazil) {
        this.Brazil = Brazil;
    }

    public double getBritish_Virgin_Islands() {
        return this.British_Virgin_Islands;
    }

    public void setBritish_Virgin_Islands(double British_Virgin_Islands) {
        this.British_Virgin_Islands = British_Virgin_Islands;
    }

    public double getBrunei_Darussalam() {
        return this.Brunei_Darussalam;
    }

    public void setBrunei_Darussalam(double Brunei_Darussalam) {
        this.Brunei_Darussalam = Brunei_Darussalam;
    }

    public double getBulgaria() {
        return this.Bulgaria;
    }

    public void setBulgaria(double Bulgaria) {
        this.Bulgaria = Bulgaria;
    }

    public double getBurkina_Faso() {
        return this.Burkina_Faso;
    }

    public void setBurkina_Faso(double Burkina_Faso) {
        this.Burkina_Faso = Burkina_Faso;
    }

    public double getBurundi() {
        return this.Burundi;
    }

    public void setBurundi(double Burundi) {
        this.Burundi = Burundi;
    }

    public double getCambodia() {
        return this.Cambodia;
    }

    public void setCambodia(double Cambodia) {
        this.Cambodia = Cambodia;
    }

    public double getCanada() {
        return this.Canada;
    }

    public void setCanada(double Canada) {
        this.Canada = Canada;
    }

    public double getCape_Verde() {
        return this.Cape_Verde;
    }

    public void setCape_Verde(double Cape_Verde) {
        this.Cape_Verde = Cape_Verde;
    }

    public double getCentral_African_Republic() {
        return this.Central_African_Republic;
    }

    public void setCentral_African_Republic(double Central_African_Republic) {
        this.Central_African_Republic = Central_African_Republic;
    }

    public double getChad() {
        return this.Chad;
    }

    public void setChad(double Chad) {
        this.Chad = Chad;
    }

    public double getChile() {
        return this.Chile;
    }

    public void setChile(double Chile) {
        this.Chile = Chile;
    }

    public double getChina() {
        return this.China;
    }

    public void setChina(double China) {
        this.China = China;
    }

    public double getColombia() {
        return this.Colombia;
    }

    public void setColombia(double Colombia) {
        this.Colombia = Colombia;
    }

    public double getComoros() {
        return this.Comoros;
    }

    public void setComoros(double Comoros) {
        this.Comoros = Comoros;
    }

    public double getCongo() {
        return this.Congo;
    }

    public void setCongo(double Congo) {
        this.Congo = Congo;
    }

    public double getCook_Islands() {
        return this.Cook_Islands;
    }

    public void setCook_Islands(double Cook_Islands) {
        this.Cook_Islands = Cook_Islands;
    }

    public double getCosta_Rica() {
        return this.Costa_Rica;
    }

    public void setCosta_Rica(double Costa_Rica) {
        this.Costa_Rica = Costa_Rica;
    }

    public double getCote_d_Ivoire() {
        return this.Cote_d_Ivoire;
    }

    public void setCote_d_Ivoire(double Cote_d_Ivoire) {
        this.Cote_d_Ivoire = Cote_d_Ivoire;
    }

    public double getCroatia() {
        return this.Croatia;
    }

    public void setCroatia(double Croatia) {
        this.Croatia = Croatia;
    }

    public double getCuba() {
        return this.Cuba;
    }

    public void setCuba(double Cuba) {
        this.Cuba = Cuba;
    }

    public double getCuracao() {
        return this.Curacao;
    }

    public void setCuracao(double Curacao) {
        this.Curacao = Curacao;
    }

    public double getCyprus() {
        return this.Cyprus;
    }

    public void setCyprus(double Cyprus) {
        this.Cyprus = Cyprus;
    }

    public double getCzech_Republic() {
        return this.Czech_Republic;
    }

    public void setCzech_Republic(double Czech_Republic) {
        this.Czech_Republic = Czech_Republic;
    }

    public double getNorth_Korea() {
        return this.North_Korea;
    }

    public void setNorth_Korea(double North_Korea) {
        this.North_Korea = North_Korea;
    }

    public double getDemocratic_Republic_of_the_Congo() {
        return this.Democratic_Republic_of_the_Congo;
    }

    public void setDemocratic_Republic_of_the_Congo(double Democratic_Republic_of_the_Congo) {
        this.Democratic_Republic_of_the_Congo = Democratic_Republic_of_the_Congo;
    }

    public double getDenmark() {
        return this.Denmark;
    }

    public void setDenmark(double Denmark) {
        this.Denmark = Denmark;
    }

    public double getDjibouti() {
        return this.Djibouti;
    }

    public void setDjibouti(double Djibouti) {
        this.Djibouti = Djibouti;
    }

    public double getDominica() {
        return this.Dominica;
    }

    public void setDominica(double Dominica) {
        this.Dominica = Dominica;
    }

    public double getDominican_Republic() {
        return this.Dominican_Republic;
    }

    public void setDominican_Republic(double Dominican_Republic) {
        this.Dominican_Republic = Dominican_Republic;
    }

    public double getEcuador() {
        return this.Ecuador;
    }

    public void setEcuador(double Ecuador) {
        this.Ecuador = Ecuador;
    }

    public double getEgypt() {
        return this.Egypt;
    }

    public void setEgypt(double Egypt) {
        this.Egypt = Egypt;
    }

    public double getEl_Salvador() {
        return this.El_Salvador;
    }

    public void setEl_Salvador(double El_Salvador) {
        this.El_Salvador = El_Salvador;
    }

    public double getEquatorial_Guinea() {
        return this.Equatorial_Guinea;
    }

    public void setEquatorial_Guinea(double Equatorial_Guinea) {
        this.Equatorial_Guinea = Equatorial_Guinea;
    }

    public double getEritrea() {
        return this.Eritrea;
    }

    public void setEritrea(double Eritrea) {
        this.Eritrea = Eritrea;
    }

    public double getEstonia() {
        return this.Estonia;
    }

    public void setEstonia(double Estonia) {
        this.Estonia = Estonia;
    }

    public double getEthiopia() {
        return this.Ethiopia;
    }

    public void setEthiopia(double Ethiopia) {
        this.Ethiopia = Ethiopia;
    }

    public double getFaeroe_Islands() {
        return this.Faeroe_Islands;
    }

    public void setFaeroe_Islands(double Faeroe_Islands) {
        this.Faeroe_Islands = Faeroe_Islands;
    }

    public double getMicronesia() {
        return this.Micronesia;
    }

    public void setMicronesia(double Micronesia) {
        this.Micronesia = Micronesia;
    }

    public double getFiji() {
        return this.Fiji;
    }

    public void setFiji(double Fiji) {
        this.Fiji = Fiji;
    }

    public double getFinland() {
        return this.Finland;
    }

    public void setFinland(double Finland) {
        this.Finland = Finland;
    }

    public double getFrance() {
        return this.France;
    }

    public void setFrance(double France) {
        this.France = France;
    }

    public double getFrench_Guiana() {
        return this.French_Guiana;
    }

    public void setFrench_Guiana(double French_Guiana) {
        this.French_Guiana = French_Guiana;
    }

    public double getFrench_Polynesia() {
        return this.French_Polynesia;
    }

    public void setFrench_Polynesia(double French_Polynesia) {
        this.French_Polynesia = French_Polynesia;
    }

    public double getGabon() {
        return this.Gabon;
    }

    public void setGabon(double Gabon) {
        this.Gabon = Gabon;
    }

    public double getGambia() {
        return this.Gambia;
    }

    public void setGambia(double Gambia) {
        this.Gambia = Gambia;
    }

    public double getGeorgia() {
        return this.Georgia;
    }

    public void setGeorgia(double Georgia) {
        this.Georgia = Georgia;
    }

    public double getGermany() {
        return this.Germany;
    }

    public void setGermany(double Germany) {
        this.Germany = Germany;
    }

    public double getGhana() {
        return this.Ghana;
    }

    public void setGhana(double Ghana) {
        this.Ghana = Ghana;
    }

    public double getGreece() {
        return this.Greece;
    }

    public void setGreece(double Greece) {
        this.Greece = Greece;
    }

    public double getGreenland() {
        return this.Greenland;
    }

    public void setGreenland(double Greenland) {
        this.Greenland = Greenland;
    }

    public double getGrenada() {
        return this.Grenada;
    }

    public void setGrenada(double Grenada) {
        this.Grenada = Grenada;
    }

    public double getGuadeloupe() {
        return this.Guadeloupe;
    }

    public void setGuadeloupe(double Guadeloupe) {
        this.Guadeloupe = Guadeloupe;
    }

    public double getGuatemala() {
        return this.Guatemala;
    }

    public void setGuatemala(double Guatemala) {
        this.Guatemala = Guatemala;
    }

    public double getGuinea() {
        return this.Guinea;
    }

    public void setGuinea(double Guinea) {
        this.Guinea = Guinea;
    }

    public double getGuinea_Bissau() {
        return this.Guinea_Bissau;
    }

    public void setGuinea_Bissau(double Guinea_Bissau) {
        this.Guinea_Bissau = Guinea_Bissau;
    }

    public double getGuyana() {
        return this.Guyana;
    }

    public void setGuyana(double Guyana) {
        this.Guyana = Guyana;
    }

    public double getHaiti() {
        return this.Haiti;
    }

    public void setHaiti(double Haiti) {
        this.Haiti = Haiti;
    }

    public double getHonduras() {
        return this.Honduras;
    }

    public void setHonduras(double Honduras) {
        this.Honduras = Honduras;
    }

    public double getHong_Kong() {
        return this.Hong_Kong;
    }

    public void setHong_Kong(double Hong_Kong) {
        this.Hong_Kong = Hong_Kong;
    }

    public double getHungary() {
        return this.Hungary;
    }

    public void setHungary(double Hungary) {
        this.Hungary = Hungary;
    }

    public double getIceland() {
        return this.Iceland;
    }

    public void setIceland(double Iceland) {
        this.Iceland = Iceland;
    }

    public double getIndia() {
        return this.India;
    }

    public void setIndia(double India) {
        this.India = India;
    }

    public double getIndonesia() {
        return this.Indonesia;
    }

    public void setIndonesia(double Indonesia) {
        this.Indonesia = Indonesia;
    }

    public double getIraq() {
        return this.Iraq;
    }

    public void setIraq(double Iraq) {
        this.Iraq = Iraq;
    }

    public double getIreland() {
        return this.Ireland;
    }

    public void setIreland(double Ireland) {
        this.Ireland = Ireland;
    }

    public double getIran() {
        return this.Iran;
    }

    public void setIran(double Iran) {
        this.Iran = Iran;
    }

    public double getIsrael() {
        return this.Israel;
    }

    public void setIsrael(double Israel) {
        this.Israel = Israel;
    }

    public double getItaly() {
        return this.Italy;
    }

    public void setItaly(double Italy) {
        this.Italy = Italy;
    }

    public double getJamaica() {
        return this.Jamaica;
    }

    public void setJamaica(double Jamaica) {
        this.Jamaica = Jamaica;
    }

    public double getJapan() {
        return this.Japan;
    }

    public void setJapan(double Japan) {
        this.Japan = Japan;
    }

    public double getJordan() {
        return this.Jordan;
    }

    public void setJordan(double Jordan) {
        this.Jordan = Jordan;
    }

    public double getKazakhstan() {
        return this.Kazakhstan;
    }

    public void setKazakhstan(double Kazakhstan) {
        this.Kazakhstan = Kazakhstan;
    }

    public double getKenya() {
        return this.Kenya;
    }

    public void setKenya(double Kenya) {
        this.Kenya = Kenya;
    }

    public double getKiribati() {
        return this.Kiribati;
    }

    public void setKiribati(double Kiribati) {
        this.Kiribati = Kiribati;
    }

    public double getKosovo() {
        return this.Kosovo;
    }

    public void setKosovo(double Kosovo) {
        this.Kosovo = Kosovo;
    }

    public double getKuwait() {
        return this.Kuwait;
    }

    public void setKuwait(double Kuwait) {
        this.Kuwait = Kuwait;
    }

    public double getKyrgyzstan() {
        return this.Kyrgyzstan;
    }

    public void setKyrgyzstan(double Kyrgyzstan) {
        this.Kyrgyzstan = Kyrgyzstan;
    }

    public double getLaos() {
        return this.Laos;
    }

    public void setLaos(double Laos) {
        this.Laos = Laos;
    }

    public double getLatvia() {
        return this.Latvia;
    }

    public void setLatvia(double Latvia) {
        this.Latvia = Latvia;
    }

    public double getLebanon() {
        return this.Lebanon;
    }

    public void setLebanon(double Lebanon) {
        this.Lebanon = Lebanon;
    }

    public double getLesotho() {
        return this.Lesotho;
    }

    public void setLesotho(double Lesotho) {
        this.Lesotho = Lesotho;
    }

    public double getLiberia() {
        return this.Liberia;
    }

    public void setLiberia(double Liberia) {
        this.Liberia = Liberia;
    }

    public double getLibya() {
        return this.Libya;
    }

    public void setLibya(double Libya) {
        this.Libya = Libya;
    }

    public double getLiechtenstein() {
        return this.Liechtenstein;
    }

    public void setLiechtenstein(double Liechtenstein) {
        this.Liechtenstein = Liechtenstein;
    }

    public double getLithuania() {
        return this.Lithuania;
    }

    public void setLithuania(double Lithuania) {
        this.Lithuania = Lithuania;
    }

    public double getLuxembourg() {
        return this.Luxembourg;
    }

    public void setLuxembourg(double Luxembourg) {
        this.Luxembourg = Luxembourg;
    }

    public double getMacao() {
        return this.Macao;
    }

    public void setMacao(double Macao) {
        this.Macao = Macao;
    }

    public double getNorth_Macedonia() {
        return this.North_Macedonia;
    }

    public void setNorth_Macedonia(double North_Macedonia) {
        this.North_Macedonia = North_Macedonia;
    }

    public double getMadagascar() {
        return this.Madagascar;
    }

    public void setMadagascar(double Madagascar) {
        this.Madagascar = Madagascar;
    }

    public double getMalawi() {
        return this.Malawi;
    }

    public void setMalawi(double Malawi) {
        this.Malawi = Malawi;
    }

    public double getMalaysia() {
        return this.Malaysia;
    }

    public void setMalaysia(double Malaysia) {
        this.Malaysia = Malaysia;
    }

    public double getMaldives() {
        return this.Maldives;
    }

    public void setMaldives(double Maldives) {
        this.Maldives = Maldives;
    }

    public double getMali() {
        return this.Mali;
    }

    public void setMali(double Mali) {
        this.Mali = Mali;
    }

    public double getMalta() {
        return this.Malta;
    }

    public void setMalta(double Malta) {
        this.Malta = Malta;
    }

    public double getMarshall_Islands() {
        return this.Marshall_Islands;
    }

    public void setMarshall_Islands(double Marshall_Islands) {
        this.Marshall_Islands = Marshall_Islands;
    }

    public double getMartinique() {
        return this.Martinique;
    }

    public void setMartinique(double Martinique) {
        this.Martinique = Martinique;
    }

    public double getMauritania() {
        return this.Mauritania;
    }

    public void setMauritania(double Mauritania) {
        this.Mauritania = Mauritania;
    }

    public double getMauritius() {
        return this.Mauritius;
    }

    public void setMauritius(double Mauritius) {
        this.Mauritius = Mauritius;
    }

    public double getMayotte() {
        return this.Mayotte;
    }

    public void setMayotte(double Mayotte) {
        this.Mayotte = Mayotte;
    }

    public double getMexico() {
        return this.Mexico;
    }

    public void setMexico(double Mexico) {
        this.Mexico = Mexico;
    }

    public double getMongolia() {
        return this.Mongolia;
    }

    public void setMongolia(double Mongolia) {
        this.Mongolia = Mongolia;
    }

    public double getMontenegro() {
        return this.Montenegro;
    }

    public void setMontenegro(double Montenegro) {
        this.Montenegro = Montenegro;
    }

    public double getMontserrat() {
        return this.Montserrat;
    }

    public void setMontserrat(double Montserrat) {
        this.Montserrat = Montserrat;
    }

    public double getMorocco() {
        return this.Morocco;
    }

    public void setMorocco(double Morocco) {
        this.Morocco = Morocco;
    }

    public double getMozambique() {
        return this.Mozambique;
    }

    public void setMozambique(double Mozambique) {
        this.Mozambique = Mozambique;
    }

    public double getMyanmar() {
        return this.Myanmar;
    }

    public void setMyanmar(double Myanmar) {
        this.Myanmar = Myanmar;
    }

    public double getNamibia() {
        return this.Namibia;
    }

    public void setNamibia(double Namibia) {
        this.Namibia = Namibia;
    }

    public double getNauru() {
        return this.Nauru;
    }

    public void setNauru(double Nauru) {
        this.Nauru = Nauru;
    }

    public double getNepal() {
        return this.Nepal;
    }

    public void setNepal(double Nepal) {
        this.Nepal = Nepal;
    }

    public double getNetherlands() {
        return this.Netherlands;
    }

    public void setNetherlands(double Netherlands) {
        this.Netherlands = Netherlands;
    }

    public double getNew_Caledonia() {
        return this.New_Caledonia;
    }

    public void setNew_Caledonia(double New_Caledonia) {
        this.New_Caledonia = New_Caledonia;
    }

    public double getNew_Zealand() {
        return this.New_Zealand;
    }

    public void setNew_Zealand(double New_Zealand) {
        this.New_Zealand = New_Zealand;
    }

    public double getNicaragua() {
        return this.Nicaragua;
    }

    public void setNicaragua(double Nicaragua) {
        this.Nicaragua = Nicaragua;
    }

    public double getNiger() {
        return this.Niger;
    }

    public void setNiger(double Niger) {
        this.Niger = Niger;
    }

    public double getNigeria() {
        return this.Nigeria;
    }

    public void setNigeria(double Nigeria) {
        this.Nigeria = Nigeria;
    }

    public double getNiue() {
        return this.Niue;
    }

    public void setNiue(double Niue) {
        this.Niue = Niue;
    }

    public double getNorway() {
        return this.Norway;
    }

    public void setNorway(double Norway) {
        this.Norway = Norway;
    }

    public double getOccupied_Palestinian_Territory() {
        return this.Occupied_Palestinian_Territory;
    }

    public void setOccupied_Palestinian_Territory(double Occupied_Palestinian_Territory) {
        this.Occupied_Palestinian_Territory = Occupied_Palestinian_Territory;
    }

    public double getOman() {
        return this.Oman;
    }

    public void setOman(double Oman) {
        this.Oman = Oman;
    }

    public double getPakistan() {
        return this.Pakistan;
    }

    public void setPakistan(double Pakistan) {
        this.Pakistan = Pakistan;
    }

    public double getPalau() {
        return this.Palau;
    }

    public void setPalau(double Palau) {
        this.Palau = Palau;
    }

    public double getPanama() {
        return this.Panama;
    }

    public void setPanama(double Panama) {
        this.Panama = Panama;
    }

    public double getPapua_New_Guinea() {
        return this.Papua_New_Guinea;
    }

    public void setPapua_New_Guinea(double Papua_New_Guinea) {
        this.Papua_New_Guinea = Papua_New_Guinea;
    }

    public double getParaguay() {
        return this.Paraguay;
    }

    public void setParaguay(double Paraguay) {
        this.Paraguay = Paraguay;
    }

    public double getPeru() {
        return this.Peru;
    }

    public void setPeru(double Peru) {
        this.Peru = Peru;
    }

    public double getPhilippines() {
        return this.Philippines;
    }

    public void setPhilippines(double Philippines) {
        this.Philippines = Philippines;
    }

    public double getBolivia() {
        return this.Bolivia;
    }

    public void setBolivia(double Bolivia) {
        this.Bolivia = Bolivia;
    }

    public double getPoland() {
        return this.Poland;
    }

    public void setPoland(double Poland) {
        this.Poland = Poland;
    }

    public double getPortugal() {
        return this.Portugal;
    }

    public void setPortugal(double Portugal) {
        this.Portugal = Portugal;
    }

    public double getQatar() {
        return this.Qatar;
    }

    public void setQatar(double Qatar) {
        this.Qatar = Qatar;
    }

    public double getCameroon() {
        return this.Cameroon;
    }

    public void setCameroon(double Cameroon) {
        this.Cameroon = Cameroon;
    }

    public double getSouth_Korea() {
        return this.South_Korea;
    }

    public void setSouth_Korea(double South_Korea) {
        this.South_Korea = South_Korea;
    }

    public double getMoldova() {
        return this.Moldova;
    }

    public void setMoldova(double Moldova) {
        this.Moldova = Moldova;
    }

    public double getSouth_Sudan() {
        return this.South_Sudan;
    }

    public void setSouth_Sudan(double South_Sudan) {
        this.South_Sudan = South_Sudan;
    }

    public double getSudan() {
        return this.Sudan;
    }

    public void setSudan(double Sudan) {
        this.Sudan = Sudan;
    }

    public double getReunion() {
        return this.Reunion;
    }

    public void setReunion(double Reunion) {
        this.Reunion = Reunion;
    }

    public double getRomania() {
        return this.Romania;
    }

    public void setRomania(double Romania) {
        this.Romania = Romania;
    }

    public double getRussian_Federation() {
        return this.Russian_Federation;
    }

    public void setRussian_Federation(double Russian_Federation) {
        this.Russian_Federation = Russian_Federation;
    }

    public double getRwanda() {
        return this.Rwanda;
    }

    public void setRwanda(double Rwanda) {
        this.Rwanda = Rwanda;
    }

    public double getSaint_Helena() {
        return this.Saint_Helena;
    }

    public void setSaint_Helena(double Saint_Helena) {
        this.Saint_Helena = Saint_Helena;
    }

    public double getSaint_Lucia() {
        return this.Saint_Lucia;
    }

    public void setSaint_Lucia(double Saint_Lucia) {
        this.Saint_Lucia = Saint_Lucia;
    }

    public double getSint_Maarten() {
        return this.Sint_Maarten;
    }

    public void setSint_Maarten(double Sint_Maarten) {
        this.Sint_Maarten = Sint_Maarten;
    }

    public double getSamoa() {
        return this.Samoa;
    }

    public void setSamoa(double Samoa) {
        this.Samoa = Samoa;
    }

    public double getSao_Tome_and_Principe() {
        return this.Sao_Tome_and_Principe;
    }

    public void setSao_Tome_and_Principe(double Sao_Tome_and_Principe) {
        this.Sao_Tome_and_Principe = Sao_Tome_and_Principe;
    }

    public double getSaudi_Arabia() {
        return this.Saudi_Arabia;
    }

    public void setSaudi_Arabia(double Saudi_Arabia) {
        this.Saudi_Arabia = Saudi_Arabia;
    }

    public double getSenegal() {
        return this.Senegal;
    }

    public void setSenegal(double Senegal) {
        this.Senegal = Senegal;
    }

    public double getSerbia() {
        return this.Serbia;
    }

    public void setSerbia(double Serbia) {
        this.Serbia = Serbia;
    }

    public double getSeychelles() {
        return this.Seychelles;
    }

    public void setSeychelles(double Seychelles) {
        this.Seychelles = Seychelles;
    }

    public double getSierra_Leone() {
        return this.Sierra_Leone;
    }

    public void setSierra_Leone(double Sierra_Leone) {
        this.Sierra_Leone = Sierra_Leone;
    }

    public double getSingapore() {
        return this.Singapore;
    }

    public void setSingapore(double Singapore) {
        this.Singapore = Singapore;
    }

    public double getSlovakia() {
        return this.Slovakia;
    }

    public void setSlovakia(double Slovakia) {
        this.Slovakia = Slovakia;
    }

    public double getSlovenia() {
        return this.Slovenia;
    }

    public void setSlovenia(double Slovenia) {
        this.Slovenia = Slovenia;
    }

    public double getSolomon_Islands() {
        return this.Solomon_Islands;
    }

    public void setSolomon_Islands(double Solomon_Islands) {
        this.Solomon_Islands = Solomon_Islands;
    }

    public double getSomalia() {
        return this.Somalia;
    }

    public void setSomalia(double Somalia) {
        this.Somalia = Somalia;
    }

    public double getSouth_Africa() {
        return this.South_Africa;
    }

    public void setSouth_Africa(double South_Africa) {
        this.South_Africa = South_Africa;
    }

    public double getSpain() {
        return this.Spain;
    }

    public void setSpain(double Spain) {
        this.Spain = Spain;
    }

    public double getSri_Lanka() {
        return this.Sri_Lanka;
    }

    public void setSri_Lanka(double Sri_Lanka) {
        this.Sri_Lanka = Sri_Lanka;
    }

    public double getSaint_Kitts_and_Nevis() {
        return this.Saint_Kitts_and_Nevis;
    }

    public void setSaint_Kitts_and_Nevis(double Saint_Kitts_and_Nevis) {
        this.Saint_Kitts_and_Nevis = Saint_Kitts_and_Nevis;
    }

    public double getSaint_Pierre_and_Miquelon() {
        return this.Saint_Pierre_and_Miquelon;
    }

    public void setSaint_Pierre_and_Miquelon(double Saint_Pierre_and_Miquelon) {
        this.Saint_Pierre_and_Miquelon = Saint_Pierre_and_Miquelon;
    }

    public double getSaint_Vincent_and_the_Grenadines() {
        return this.Saint_Vincent_and_the_Grenadines;
    }

    public void setSaint_Vincent_and_the_Grenadines(double Saint_Vincent_and_the_Grenadines) {
        this.Saint_Vincent_and_the_Grenadines = Saint_Vincent_and_the_Grenadines;
    }

    public double getSuriname() {
        return this.Suriname;
    }

    public void setSuriname(double Suriname) {
        this.Suriname = Suriname;
    }

    public double getSwaziland() {
        return this.Swaziland;
    }

    public void setSwaziland(double Swaziland) {
        this.Swaziland = Swaziland;
    }

    public double getSweden() {
        return this.Sweden;
    }

    public void setSweden(double Sweden) {
        this.Sweden = Sweden;
    }

    public double getSwitzerland() {
        return this.Switzerland;
    }

    public void setSwitzerland(double Switzerland) {
        this.Switzerland = Switzerland;
    }

    public double getSyria() {
        return this.Syria;
    }

    public void setSyria(double Syria) {
        this.Syria = Syria;
    }

    public double getTaiwan() {
        return this.Taiwan;
    }

    public void setTaiwan(double Taiwan) {
        this.Taiwan = Taiwan;
    }

    public double getTajikistan() {
        return this.Tajikistan;
    }

    public void setTajikistan(double Tajikistan) {
        this.Tajikistan = Tajikistan;
    }

    public double getThailand() {
        return this.Thailand;
    }

    public void setThailand(double Thailand) {
        this.Thailand = Thailand;
    }

    public double getTimor_Leste() {
        return this.Timor_Leste;
    }

    public void setTimor_Leste(double Timor_Leste) {
        this.Timor_Leste = Timor_Leste;
    }

    public double getTogo() {
        return this.Togo;
    }

    public void setTogo(double Togo) {
        this.Togo = Togo;
    }

    public double getTonga() {
        return this.Tonga;
    }

    public void setTonga(double Tonga) {
        this.Tonga = Tonga;
    }

    public double getTrinidad_and_Tobago() {
        return this.Trinidad_and_Tobago;
    }

    public void setTrinidad_and_Tobago(double Trinidad_and_Tobago) {
        this.Trinidad_and_Tobago = Trinidad_and_Tobago;
    }

    public double getTunisia() {
        return this.Tunisia;
    }

    public void setTunisia(double Tunisia) {
        this.Tunisia = Tunisia;
    }

    public double getTurkey() {
        return this.Turkey;
    }

    public void setTurkey(double Turkey) {
        this.Turkey = Turkey;
    }

    public double getTurkmenistan() {
        return this.Turkmenistan;
    }

    public void setTurkmenistan(double Turkmenistan) {
        this.Turkmenistan = Turkmenistan;
    }

    public double getTurks_and_Caicos_Islands() {
        return this.Turks_and_Caicos_Islands;
    }

    public void setTurks_and_Caicos_Islands(double Turks_and_Caicos_Islands) {
        this.Turks_and_Caicos_Islands = Turks_and_Caicos_Islands;
    }

    public double getTuvalu() {
        return this.Tuvalu;
    }

    public void setTuvalu(double Tuvalu) {
        this.Tuvalu = Tuvalu;
    }

    public double getUganda() {
        return this.Uganda;
    }

    public void setUganda(double Uganda) {
        this.Uganda = Uganda;
    }

    public double getUkraine() {
        return this.Ukraine;
    }

    public void setUkraine(double Ukraine) {
        this.Ukraine = Ukraine;
    }

    public double getUnited_Arab_Emirates() {
        return this.United_Arab_Emirates;
    }

    public void setUnited_Arab_Emirates(double United_Arab_Emirates) {
        this.United_Arab_Emirates = United_Arab_Emirates;
    }

    public double getUnited_Kingdom() {
        return this.United_Kingdom;
    }

    public void setUnited_Kingdom(double United_Kingdom) {
        this.United_Kingdom = United_Kingdom;
    }

    public double getTanzania() {
        return this.Tanzania;
    }

    public void setTanzania(double Tanzania) {
        this.Tanzania = Tanzania;
    }

    public double getUSA() {
        return this.USA;
    }

    public void setUSA(double USA) {
        this.USA = USA;
    }

    public double getUruguay() {
        return this.Uruguay;
    }

    public void setUruguay(double Uruguay) {
        this.Uruguay = Uruguay;
    }

    public double getUzbekistan() {
        return this.Uzbekistan;
    }

    public void setUzbekistan(double Uzbekistan) {
        this.Uzbekistan = Uzbekistan;
    }

    public double getVanuatu() {
        return this.Vanuatu;
    }

    public void setVanuatu(double Vanuatu) {
        this.Vanuatu = Vanuatu;
    }

    public double getVenezuela() {
        return this.Venezuela;
    }

    public void setVenezuela(double Venezuela) {
        this.Venezuela = Venezuela;
    }

    public double getViet_Nam() {
        return this.Viet_Nam;
    }

    public void setViet_Nam(double Viet_Nam) {
        this.Viet_Nam = Viet_Nam;
    }

    public double getWallis_and_Futuna_Islands() {
        return this.Wallis_and_Futuna_Islands;
    }

    public void setWallis_and_Futuna_Islands(double Wallis_and_Futuna_Islands) {
        this.Wallis_and_Futuna_Islands = Wallis_and_Futuna_Islands;
    }

    public double getYemen() {
        return this.Yemen;
    }

    public void setYemen(double Yemen) {
        this.Yemen = Yemen;
    }

    public double getZambia() {
        return this.Zambia;
    }

    public void setZambia(double Zambia) {
        this.Zambia = Zambia;
    }

    public double getZimbabwe() {
        return this.Zimbabwe;
    }

    public void setZimbabwe(double Zimbabwe) {
        this.Zimbabwe = Zimbabwe;
    }

    public double getKP_Annex_B() {
        return this.KP_Annex_B;
    }

    public void setKP_Annex_B(double KP_Annex_B) {
        this.KP_Annex_B = KP_Annex_B;
    }

    public double getNon_KP_Annex_B() {
        return this.Non_KP_Annex_B;
    }

    public void setNon_KP_Annex_B(double Non_KP_Annex_B) {
        this.Non_KP_Annex_B = Non_KP_Annex_B;
    }

    public double getOECD() {
        return this.OECD;
    }

    public void setOECD(double OECD) {
        this.OECD = OECD;
    }

    public double getNon_OECD() {
        return this.Non_OECD;
    }

    public void setNon_OECD(double Non_OECD) {
        this.Non_OECD = Non_OECD;
    }

    public double getEU27() {
        return this.EU27;
    }

    public void setEU27(double EU27) {
        this.EU27 = EU27;
    }

    public double getAfrica() {
        return this.Africa;
    }

    public void setAfrica(double Africa) {
        this.Africa = Africa;
    }

    public double getAsia() {
        return this.Asia;
    }

    public void setAsia(double Asia) {
        this.Asia = Asia;
    }

    public double getCentral_America() {
        return this.Central_America;
    }

    public void setCentral_America(double Central_America) {
        this.Central_America = Central_America;
    }

    public double getEurope() {
        return this.Europe;
    }

    public void setEurope(double Europe) {
        this.Europe = Europe;
    }

    public double getMiddle_East() {
        return this.Middle_East;
    }

    public void setMiddle_East(double Middle_East) {
        this.Middle_East = Middle_East;
    }

    public double getNorth_America() {
        return this.North_America;
    }

    public void setNorth_America(double North_America) {
        this.North_America = North_America;
    }

    public double getOceania() {
        return this.Oceania;
    }

    public void setOceania(double Oceania) {
        this.Oceania = Oceania;
    }

    public double getSouth_America() {
        return this.South_America;
    }

    public void setSouth_America(double South_America) {
        this.South_America = South_America;
    }

    public double getBunkers() {
        return this.Bunkers;
    }

    public void setBunkers(double Bunkers) {
        this.Bunkers = Bunkers;
    }

    public double getStatistical_Difference() {
        return this.Statistical_Difference;
    }

    public void setStatistical_Difference(double Statistical_Difference) {
        this.Statistical_Difference = Statistical_Difference;
    }

    public double getWorld() {
        return this.World;
    }

    public void setWorld(double World) {
        this.World = World;
    }


}
