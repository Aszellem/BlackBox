-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Gép: 127.0.0.1
-- Létrehozás ideje: 2022. Ápr 23. 16:15
-- Kiszolgáló verziója: 10.4.22-MariaDB
-- PHP verzió: 8.1.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Adatbázis: `rendkereso`
--
CREATE DATABASE IF NOT EXISTS `rendkereso` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_hungarian_ci;
USE `rendkereso`;

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `eloado`
--

CREATE TABLE `eloado` (
  `eloado_id` int(11) NOT NULL,
  `eloado_nev` varchar(50) COLLATE utf8mb4_hungarian_ci NOT NULL,
  `bio` text COLLATE utf8mb4_hungarian_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_hungarian_ci;

--
-- A tábla adatainak kiíratása `eloado`
--

INSERT INTO `eloado` (`eloado_id`, `eloado_nev`, `bio`) VALUES
(2, 'Kiss Apám zenekar', 'Sziasztok, mi vagyunk a Kiss Apám zenekar, 2002-ben alapultunk meg, mi vagyunk a magyar könnyű rockzene megtestesítője'),
(3, 'KilakikItt', 'Sziasztok, mi vagyunk a KILAKIKITT, 2004-ben alapultunk meg, mi vagyunk a magyar underground megtestesítője'),
(4, 'Korda Gyuri', 'Sziasztok, Korda György vagyok, a mulatós megtestesítője, legtöbbször a feleségemmel, Klárikával lépek fel'),
(5, 'Alma Együttes', 'Sziasztok, mi vagyunk az Alma Együttes, egyetlen ismert számunk a ma van a szülinapom!'),
(6, 'kiskutyák', 'Sziasztok, mi vagyunk a kiskutyák'),
(7, 'NagyKutyák', 'Sziasztok, mi vagyunk a NAGYKUTYÁÁÁÁÁÁÁÁÁÁÁÁK'),
(8, 'Carson Coma', 'Sziasztok mi vagyunk Magyarország új legjobb alter zenekara'),
(9, 'Repülő bálnák', 'Sziasztok mi vagyunk a bálnák akik repkednek össze-vissza'),
(14, '30Y', 'A 30Y 2000-ben alapított négy tagú pécsi alternatív rockegyüttes.'),
(15, 'Tankcsapda', 'Mi vagyunk a tankcspda, keményebbek, mint a tanksapka'),
(19, 'Pannonia All Stars Orchestra', 'A Pannonia Allstars Ska Orchestra (röviden: PASO) egy 2003-ban alakult budapesti skazenekar. A Csizmáskandúr, a The Deadbeats, a Kevés, a Böiler és a MeSKAlin tagjaiból állt össze. A tradicionális ska és a dancehall, reggae, dub stílusjegyei mellé olykor a magyar népzene és a jazz elemeit is párosítja.'),
(23, 'The Kooks', 'A The Kooks egy angol indie rock zenekar, mely az angliai Brightonban alapult 2004-ben. Nevüket David Bowie Kooks című száma ihlette. Tagjai Luke Pritchard (vokál, gitár), Hugh Harris (gitár), Paul Garred (dob) és Peter Denton (basszusgitár). Első sikerüket a Naive című kislemezük hozta meg, amely 5. helyet ért el a UK slágerlistán, majd 2006-ban a 19. legjobban eladott album lett. Bemutatkozó albumukból az Inside in/Inside Out-ból több mint 2 millió példányt adtak el világszerte. Második stúdióalbumuk, a Konk 2008 áprilisában jelent meg, és egyből a brit albumlista (UK Album Charts) első helyére szökött.'),
(47, 'Punnany Massif', 'A Punnany Massif 2003-ban alapított magyar funkzenekar. Műfaja önmeghatározása szerint társadalom-funk.'),
(49, 'Road', 'A Road nevű magyar rockzenekar 2004 januárjában, a Heves megyei Domoszló községben alakult. Tagjai: Molnár Máté basszusgitáros-énekes, Golyán B. Zsolt „Goya” gitáros, Kádár Imre gitáros. Legutóbbi dobosuk - Szabó Erik - 2021 márciusában távozott. Majd a dobfelszerelést Tóth Tamás vette át.A csapat stílusát „Rock n’ Road”-ként aposztrofálja, ez a heavy metalra jellemző torzított gitárhangzást és erős ritmusokat takar. Az együttes más zenei utak felé is nyitott: egyes dalaiban népies motívumok tűnnek fel, van akusztikus repertoárjuk, és fúvószenekarral is léptek már fel együtt. Dalszövegeik jellemző témái: szerelem, szenvedély, benzingőz és rock n\' roll életérzés, pozitív szemlélettel, egyenes megfogalmazásban. A Road a hazai rockéletben az egyik legaktívabb formáció, amely lemezeladás és koncertlátogatottság tekintetében is igen sikeres. A zenekar eddig hét stúdiólemezt, két best of albumot, egy koncert cd-t, két dvd-t és egy könyvet adott ki, munkássága három arany- és két platinalemezt eredményezett. Tagjai ma is a Mátraalja vidékén élnek, de egész évben járják az ország és a határon túli magyarlakta területek színpadait.'),
(50, 'Macklemore', 'Benjamin Hammond Haggerty (Seattle, Washington, 1983. június 19. –), művésznevén Macklemore amerikai rapper. Karrierje kezdetén Professor Macklemore néven tevékenykedett. 2008-ban kezdett el együtt dolgozni Ryan Lewis producerrel, akivel közösen két stúdióalbumot jelentetett meg. Szólóelőadóként egy mixtape-et, két középlemezt, valamint négy albumot dobott piacra.'),
(51, 'E-Dubble', 'Evan Sewell Wallace (November 1, 1982 – February 13, 2017) best known by his stage name E-Dubble, often stylized e-dubble, or shortened to e-dub, was an American rapper. He was best known for his Freestyle Friday series in which he released a new song each Friday throughout 2010, with one final unofficial release in 2012. He was the founder of Black Paisley Records.[1]  Throughout his career, E-Dubble released two studio albums, Hip Hop Is Good (2009), and Two Tone Rebel (2016); One studio EP Reset EP (2012); one collaborative EP with the band 27 Lights, Surrounded By Giants (2014); and one mixtape Straight Outta St. Mary\'s (2006).'),
(54, 'ztutr876r', '6555u75rutzjh');

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `helyszin`
--

CREATE TABLE `helyszin` (
  `helyszin_id` int(3) NOT NULL,
  `helyszin_nev` varchar(100) COLLATE utf8mb4_hungarian_ci NOT NULL,
  `helyszin_cim` varchar(255) COLLATE utf8mb4_hungarian_ci NOT NULL,
  `helyszin_bemutatas` text COLLATE utf8mb4_hungarian_ci NOT NULL,
  `email` varchar(255) COLLATE utf8mb4_hungarian_ci NOT NULL,
  `weblap` varchar(255) COLLATE utf8mb4_hungarian_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_hungarian_ci;

--
-- A tábla adatainak kiíratása `helyszin`
--

INSERT INTO `helyszin` (`helyszin_id`, `helyszin_nev`, `helyszin_cim`, `helyszin_bemutatas`, `email`, `weblap`) VALUES
(1, 'Csodák Palotája', '1038 Budapest, Bécsi út 38-44.', '2017-ben Óbudán a két helyszín összeköltözésével testet öltött egy világszínvonalú, többféle tudományágat felölelő, minden korosztálynak programot nyújtó science center. A Csopa egy 5000 m2-es tudomán', 'csodakpalotaja@gmail.com', 'https://www.csopa.hu/'),
(2, 'Kobuci Kert', '1033 Budapest, Fő tér 1., Zich', 'Kobuci Kert\', \'1033 Budapest, Fő tér 1., Zichy-kastély udvar\', \'A Kobuci Kert 2005-ben indult Kapolcson, és 2009-ben költözött a Zichy-kastély udvarába. Különböző szabadtéri zenei rendezvényeket tarta', 'kobuci@kert.com', 'https://https://kobuci.hu/'),
(3, 'ÖTKERT', 'Budapest', 'Éjszakai rendezvényközpont, kisebb rendezvényeknek, több teremmel.', '', 'https://otkert.hu/'),
(4, 'SZIMPLA kert', 'Budapest', 'Éjszakai rendezvényközpont, sok alkohol és sok kultúra.', '', 'https://szimpla.hu/'),
(5, 'ARÉNA GARDEN', 'Budapest', 'Rendezvényközpont, nagyobb rendezvényeknek, szabadtéri élmény.', '', 'https://arena-garden.hu/'),
(6, 'Gamer Land', 'Budapest', 'Rendezvény és szórakoztató központ. Kisebb, illetve nagyobb rendezvényeknek, több teremmel, gépekkel.', '', 'https://gamerland.hu/'),
(7, 'PIPI KLUB', 'PIPI utca 1.', 'Hello miénk a legjobb Pipi klub', 'pipiklub@pipi.hu', 'www.pipiklub.hu'),
(8, 'Anyám Tyúkja bár', '1031 Anyám tyúkja utca 1.', 'Ez a leg anyámtyúkjább bulihely ahol valaha jártál', 'anyamtyukja@anyam.tyuk', 'www.pipiklub.hu'),
(9, 'Városliget', '1146 Budapest Vak Bottyán útja', 'A Városligeti nagyszínpad szeretettel vár minden zenerajongót', 'varosliget@varosliget.hu', 'www.varosliget.hu'),
(24, 'Ram Colosseum', 'BUDAPEST, 1133, KÁRPÁT U. 23-2', 'TERET AZ ÉLMÉNYNEK!\r\n\r\n\r\n10 év bőséggel elég idő arra, hogy szakmai alapokon nyugvó tapasztalásainkat megélve eldönthessük és ha lehetőséget kapunk rá, megvalósíthassuk mindazt, amiről úgy tartjuk, \"o', 'ramcolosseum@gmail.com', 'HTTP://WWW.RAMCOLOSSEUM.COM'),
(30, 'Cinema Hall', 'Budapest, Népligeti út 2, 1101', 'A művészet az életünk, az élet a művészetünk.  A Lu-Men, fény az éjszakában hiszen fényfestéssel foglalkozik rendezvényeken, fesztiválokon és mindenhol, ahol szükség van egyedi, varázslatos hangulat kialakítására.', ' info@lumenartist.com', 'http://www.lumenartist.com'),
(32, 'PIPI KLUB', 'PIPI utca 1.', 'Hello miénk a legjobb Pipi klub', 'bassassab930817@hotmail.com', 'www.pipiklub.hu');

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `rendezveny`
--

CREATE TABLE `rendezveny` (
  `rend_id` int(3) NOT NULL,
  `helyszin_id` int(3) NOT NULL,
  `rend_nev` varchar(100) COLLATE utf8mb4_hungarian_ci NOT NULL,
  `idopont` date NOT NULL,
  `kategoria` varchar(100) COLLATE utf8mb4_hungarian_ci NOT NULL,
  `korosztaly` varchar(100) COLLATE utf8mb4_hungarian_ci NOT NULL,
  `leiras` text COLLATE utf8mb4_hungarian_ci NOT NULL,
  `ar` int(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_hungarian_ci;

--
-- A tábla adatainak kiíratása `rendezveny`
--

INSERT INTO `rendezveny` (`rend_id`, `helyszin_id`, `rend_nev`, `idopont`, `kategoria`, `korosztaly`, `leiras`, `ar`) VALUES
(1, 1, 'Fingó mókusok szülinapi koncer', '2022-02-18', 'koncert', 'Családi', 'A Fingó Mókusok megalakulásuk alkalmából koncertet adnak elő, hogy megünnepeljék harmadik havi életben maradásuk.', 0),
(2, 2, 'KIS APÁM koncert', '2022-01-05', 'koncert', '+18', 'Kiss Apám 20. szülinapi koncertje', 1000),
(3, 3, 'Ki lakik itt koncert', '2022-01-31', 'koncert', '+16', 'Ki lakik itt?.', 2000),
(4, 4, 'Eper fesztivál', '2022-06-18', 'fesztivál', '+5', 'Gyere és te is szedd le a legszebb és legfinomabb epreket.', 500),
(5, 6, 'Boldog Szülinapot Vanessza', '2022-04-22', 'HB', '+16', 'Czégel Vanessza születésnapja, be kell inni', 0),
(6, 4, 'Kilakik Itt nyárindító koncert', '2022-05-11', 'koncert', '+16', 'Sziasztok mindenkit várunk szeretettel a kilakik itt nyárindító májusi koncertjére, fergeteges lesz!', 2500),
(7, 5, 'Egy fess pesti este - Kamarás Iván koncertje', '2022-05-23', 'koncert', 'mindenki', 'A néző bepillanthat a múlt izgalmas kulisszái mögé, Iván őszinte véleményével és közvetlen humorával..\r\n\r\nEgy fess pesti este - Kamarás Iván koncertje\r\n\r\nA dalok a múltba repítenek ugyan, de az EGY FE', 2900),
(14, 30, 'PASO Koncert', '2022-05-20', 'Koncert', 'Felnőtt', 'Legendásan energikus élő koncertjeivel a 11 tagú zenekar pillanatok alatt jutott el az underground klubok deszkáiról a Sziget fesztivál Nagyszínpadára és vált minden jelentős hazai zenei fesztiválon kihagyhatatlan kedvenccé, míg külföldön a ska zene magyar nagyköveteként ismerik. A Cinema Hallban is ennek megfelelő produkcióra számíthat majd a közönség.', 3000),
(15, 30, 'The Kooks koncert', '2022-07-12', 'Koncert', 'Felnőtt', 'Mikor a The Kooks leszerződött a Virginhez, nem akartak egyből lemezt kiadni, inkább szerettek volna dalokat írni, és élőben koncerteket adni. Mikor első turnéjuk véget ért, elkezdték felvenni bemutatkozó albumukat, az Inside in/Inside out-ot, a Konk Stúdióban, Londonban. A Tony Hoffer közreműködésével készített album 2006 januárjában jelent meg, és az első héten csupán 19 098 db-t adtak el belőle. Ugyanakkor az album a Brit albumlista 2. helyén büszkélkedhetett.', 7000),
(16, 30, 'tzu', '2022-02-02', 'tzu', 'tzu', 'tzu', 1);

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `rend_eloado`
--

CREATE TABLE `rend_eloado` (
  `rend_id` int(3) NOT NULL,
  `eloado_id` int(3) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_hungarian_ci;

--
-- A tábla adatainak kiíratása `rend_eloado`
--

INSERT INTO `rend_eloado` (`rend_id`, `eloado_id`) VALUES
(1, 2),
(2, 14),
(2, 5),
(3, 3),
(4, 4),
(4, 6),
(5, 5),
(5, 8),
(6, 3),
(6, 6),
(7, 15),
(7, 4),
(7, 14),
(14, 9),
(4, 2),
(1, 2),
(15, 2),
(15, 8),
(16, 50),
(16, 51),
(16, 49),
(15, 23);

--
-- Indexek a kiírt táblákhoz
--

--
-- A tábla indexei `eloado`
--
ALTER TABLE `eloado`
  ADD PRIMARY KEY (`eloado_id`),
  ADD UNIQUE KEY `id` (`eloado_id`);

--
-- A tábla indexei `helyszin`
--
ALTER TABLE `helyszin`
  ADD PRIMARY KEY (`helyszin_id`);

--
-- A tábla indexei `rendezveny`
--
ALTER TABLE `rendezveny`
  ADD PRIMARY KEY (`rend_id`),
  ADD UNIQUE KEY `rend_nev` (`rend_nev`),
  ADD KEY `helyszin_id` (`helyszin_id`);

--
-- A tábla indexei `rend_eloado`
--
ALTER TABLE `rend_eloado`
  ADD KEY `rend_id` (`rend_id`),
  ADD KEY `eloado_id` (`eloado_id`);

--
-- A kiírt táblák AUTO_INCREMENT értéke
--

--
-- AUTO_INCREMENT a táblához `eloado`
--
ALTER TABLE `eloado`
  MODIFY `eloado_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=55;

--
-- AUTO_INCREMENT a táblához `helyszin`
--
ALTER TABLE `helyszin`
  MODIFY `helyszin_id` int(3) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=33;

--
-- AUTO_INCREMENT a táblához `rendezveny`
--
ALTER TABLE `rendezveny`
  MODIFY `rend_id` int(3) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- Megkötések a kiírt táblákhoz
--

--
-- Megkötések a táblához `rendezveny`
--
ALTER TABLE `rendezveny`
  ADD CONSTRAINT `rendezveny_ibfk_1` FOREIGN KEY (`helyszin_id`) REFERENCES `helyszin` (`helyszin_id`);

--
-- Megkötések a táblához `rend_eloado`
--
ALTER TABLE `rend_eloado`
  ADD CONSTRAINT `rend_eloado_ibfk_1` FOREIGN KEY (`rend_id`) REFERENCES `rendezveny` (`rend_id`),
  ADD CONSTRAINT `rend_eloado_ibfk_2` FOREIGN KEY (`eloado_id`) REFERENCES `eloado` (`eloado_id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
