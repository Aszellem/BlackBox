let id;

//Bejelentkezés
document.getElementById("login").onclick = function() {
    const url = 'http://localhost:3000/admin';
    fetch(url, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify({
                "password": document.getElementById("password").value,
            })
        })
        .then(res => {
            ok = res.ok
            return res.json()
        })
        .then(json => {
            document.getElementById("uzenet2").innerHTML = json.message
            if (ok) {
                sessionStorage.token = json.token
                document.location = "menu-bar.html"

            }
        })
        .catch(err => console.log(err));
}

//Kijelentkezes
function kijelentkezes() {
    delete sessionStorage.token
    document.location = "index.html"
}

function kezdolap() {
    const url = 'http://localhost:3000/kezdolap/';
    const lista = document.getElementById("rendezvenyek");
    fetch(url)
        .then((response) => response.json())
        .then(json => {
            lista.innerHTML = "";
            json.forEach(f => {
                id = f.id;
                lista.innerHTML +=
                    "<div class='card h-150 col-lg-3' id='" + id + "'>" +
                    "<p id='rendNev'>" + f.rend_nev + "</p>" +
                    "<p>" + f.idopont + "</p>" +
                    "<p>Helyszín:<br><br>" + f.helyszin_nev + "</p>" +
                    "<a href='bovebben.html?id=" + id + "'><button type='button' class='button' id='button" + id + "' onClick='bovebben(" + id + ")' style='vertical-align:middle'>Részletes infók</button></a>" +
                    "</div>";
            })
        })
        .catch(err => console.log(err));
}

function kereses() {
    const url = 'http://localhost:3000/kezdolap';
    const lista = document.getElementById("rendezvenyek");
    let val = document.getElementById('keresoInput').value;
    let kisval = val.toLowerCase();
    if (val != "") {
        fetch(url)
            .then((response) => response.json())
            .then(json => {
                lista.innerHTML = "";
                json.forEach(f => {
                    let eloado = f.eloado_nev;
                    kiseloado = eloado.toLowerCase();
                    let rend = f.rend_nev;
                    kisrend = rend.toLowerCase();
                    if (kisval.length > 0) {
                        if (kisrend.includes(kisval) || kiseloado.includes(kisval)) {
                            lista.innerHTML +=
                                "<div class='card h-150 col-lg-3' id='" + id + "'>" +
                                "<p id='rendNev'>" + f.rend_nev + "</p>" +
                                "<p>" + f.idopont + "</p>" +
                                "<p>Házigazda: " + f.eloado_nev + "</p>" +
                                "<p>" + f.helyszin_nev + "</p>" +
                                "<a href='bovebben.html?id=" + id + "'><button type='button' class='button' id='button" + id + "' onClick='bovebben(" + id + ")' style='vertical-align:middle'>Részletes infók</button></a>" +
                                "</div>";
                        }
                    }
                })
            })
            .catch(err => console.log(err));
    }
}

function nevSzerint() {
    const url = 'http://localhost:3000/nevSzerint/';
    const lista = document.getElementById("rendezvenyek");
    fetch(url)
        .then((response) => response.json())
        .then(json => {
            lista.innerHTML = "";
            json.forEach(f => {
                id = f.id;
                lista.innerHTML += "<div class='card h-150 col-lg-3' id='" + id + "'>" +
                    "<p id='rendNev'>" + f.rend_nev + "</p>" +
                    "<p>" + f.idopont + "</p>" +
                    "<p id='eloadonev'>" + f.eloado_nev + "</p>" +
                    "<p>" + f.helyszin_nev + "</p>" +
                    "<a href='bovebben.html?id=" + id + "'><button type='button' class='button' id='button" + id + "' onClick='bovebben(" + id + ")' style='vertical-align:middle'>Részletes infók</button></a>" +
                    "</div>";
            })
        })
        .catch(err => console.log(err));
}


//kéne valami ami alapból kitörli ami a getDay().now-nál kisebb
//és akkor meg van oldva a törlés

function eloadoTorol() {
    const url = 'http://localhost:3000/kezdolap';
}


//kezdolap();
//console.log("sikeresen elindult 🟢");