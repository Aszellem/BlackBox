let id;

function bejelentkezve() {
    const url = "http://localhost:3000/admin/";
    const lista = document.getElementById("rendezvenyek2");
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
                    "<a href='bovebben_login.html?id=" + id + "'><button type='button' class='button' id='button" + id + "' onClick='bovebben(" + id + ")' style='vertical-align:middle'>Részletes infók</button></a>" +
                    "</div>";
            })
        })
        .catch(err => console.log(err));
}

bejelentkezve();

function kijelentkezes() {
    delete sessionStorage.token;
    document.location = "index.html";
}

function kereses() {
    const url = "http://localhost:3000/kezdolap";
    const lista = document.getElementById("rendezvenyek2");
    let val = document.getElementById("keresoInput").value;
    let kisval = val.toLowerCase();

    if (val != "") {
        fetch(url)
            .then((response) => response.json())
            .then((json) => {
                lista.innerHTML = "";
                json.forEach((f) => {
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
                                "<a href='bovebben_login.html?id=" + id + "'><button type='button' class='button' id='button" + id + "' onClick='bovebben(" + id + ")' style='vertical-align:middle'>Részletes infók</button></a>" +
                                "</div>";
                        }
                    }
                });
            })
            .catch((err) => console.log(err));
    } else {
        bejelentkezve()
    }
}

function nevSzerint() {
    const url = "http://localhost:3000/nevSzerint/";
    const lista = document.getElementById("rendezvenyek2");
    fetch(url)
        .then((response) => response.json())
        .then((json) => {
            lista.innerHTML = "";
            json.forEach((f) => {
                id = f.id;
                lista.innerHTML +=
                    "<div class='card h-150 col-lg-3' id='" + id + "'>" +
                    "<p id='rendNev'>" + f.rend_nev + "</p>" +
                    "<p>" + f.idopont + "</p>" +
                    "<p>Házigazda: " + f.eloado_nev + "</p>" +
                    "<p>" + f.helyszin_nev + "</p>" +
                    "<a href='bovebben_login.html?id=" + id + "'><button type='button' class='button' id='button" + id + "' onClick='bovebben(" + id + ")' style='vertical-align:middle'>Részletes infók</button></a>" +
                    "</div>";
            });
        })
        .catch((err) => console.log(err));
}

//LÉTREHOZÁS SCRIPTEK

function submitHelyszin() {
    console.log("submitHelyszin elindult...🟢");
    const helyszin = document.getElementById("helyszin").value;
    const cim = document.getElementById("cim").value;
    const leiras = document.getElementById("leiras").value;
    const email = document.getElementById("email").value;
    const weblap = document.getElementById("weblap").value;
    const url = 'http://localhost:3000/submitHelyszin';
    fetch(url, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify({
                "helyszin_nev": helyszin,
                "helyszin_cim": cim,
                "helyszin_bemutatas": leiras,
                "email": email,
                "weblap": weblap
            })
        })
        .then(json => console.log(json))
        .catch(err => console.log(err));
};

function submitEloado() {
    console.log("submitEloado elindult...🟢");
    const eloado = document.getElementById("eloado").value;
    const bio = document.getElementById("bio").value;
    const url = 'http://localhost:3000/submitEloado';
    if (eloado != "" && bio != "") {
        fetch(url, {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json;charset=utf-8'
                },
                body: JSON.stringify({
                    "eloado_nev": eloado,
                    "bio": bio,
                })
            })
            .then(json => console.log(json))
            .catch(err => console.log(err));
    } else {
        alert("Töltsd ki a mezőket");
    }
};

function submitRendezveny() {
    console.log("submitEsemeny elindult...🟢");
    const rendezveny = document.getElementById("rendezveny").value;
    const datum = document.getElementById("datum").value;
    const kategoria = document.getElementById("kategoria").value;
    const korosztaly = document.getElementById("korosztaly").value;
    const es_leiras = document.getElementById("es_leiras").value;
    const ar = document.getElementById("ar").value;
    const url = 'http://localhost:3000/submitRendezveny';

    var helyszinValue = 0;
    var inputHelyszin = document.getElementsByClassName('helyszinRadio');
    for (var i = 0; inputHelyszin[i]; ++i) {
        if (inputHelyszin[i].checked) {
            helyszinValue = inputHelyszin[i].value;
            break;
        }
    }
    fetch(url, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify({
                "helyszin_id": helyszinValue,
                "rend_nev": rendezveny,
                "idopont": datum,
                "kategoria": kategoria,
                "korosztaly": korosztaly,
                "leiras": es_leiras,
                "ar": ar
            })
        })
        .then(json => console.log(json))
        .catch(err => console.log(err));
};

function submitEsemeny() {
    console.log("submitEsemeny elindult...🟢");
    const url = 'http://localhost:3000/submitEsemeny';

    var rendValue = 0;
    var inputRendezveny = document.getElementsByClassName('rendRadio');
    for (var i = 0; inputRendezveny[i]; ++i) {
        if (inputRendezveny[i].checked) {
            rendValue = inputRendezveny[i].value;
            break;
        }
    }

    var eloadoValue = 0;
    var inputEloado = document.getElementsByClassName('eloadoCheckbox');
    for (var i = 0; inputEloado[i]; ++i) {
        if (inputEloado[i].checked) {
            eloadoValue = inputEloado[i].value;
            break;
        }
    }
    fetch(url, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify({
                "rend_id": rendValue,
                "eloado_id": eloadoValue
            })
        })
        .then(json => console.log(json))
        .catch(err => console.log(err));
};


function eloadokBetolt() {
    const url = 'http://localhost:3000/eloadok';
    const eloadok = document.getElementById("eloadoLista");
    fetch(url)
        .then((response) => response.json())
        .then(json => {
            eloadok.innerHTML = "";
            json.forEach(f => {
                id = f.eloado_id;
                eloadok.innerHTML +=
                    "<input type='radio' class='eloadoCheckbox' value='" + id + "' id='" + id + "'><label style='font-size:16'>" + f.eloado_nev + "</label><br>";
            })
        })
        .catch(err => console.log(err));
}


function eloadoSzur() {
    const url = 'http://localhost:3000/eloadok';
    const lista = document.getElementById("eloadoLista");
    let val = document.getElementById('eloadoSzuro').value;
    let kisval = val.toLowerCase();

    fetch(url)
        .then((response) => response.json())
        .then(json => {
            lista.innerHTML = "";
            json.forEach(f => {
                let eloado = f.eloado_nev;
                kiseloado = eloado.toLowerCase();
                if (kisval.length >= 0) {
                    if (kiseloado.includes(kisval)) {
                        id = f.eloado_id;
                        lista.innerHTML +=
                            "<input type='radio' class='eloadoCheckbox' value='" + id + "' id='" + id + "'><label style='font-size:16'>" + f.eloado_nev + "</label><br>";
                    }
                }
            })
        })
        .catch(err => console.log(err));
}

function helyszinBetolt() {
    const url = 'http://localhost:3000/helyszinek';
    const helyszinek = document.getElementById("helyszinLista");
    fetch(url)
        .then((response) => response.json())
        .then(json => {
            helyszinek.innerHTML = "";
            json.forEach(f => {
                id = f.helyszin_id;
                helyszinek.innerHTML +=
                    "<input type='radio' name='helyszinValaszto' class='helyszinRadio' value='" + id + "' id='" + id + "'><label style='font-size:16'>" + f.helyszin_nev + "</label><br>";
            })
        })
        .catch(err => console.log(err));
}

function helyszinSzur() {
    const url = 'http://localhost:3000/helyszinek';
    const lista = document.getElementById("helyszinLista");
    let val = document.getElementById('helyszinSzuro').value;
    let kisval = val.toLowerCase();

    fetch(url)
        .then((response) => response.json())
        .then(json => {
            lista.innerHTML = "";
            json.forEach(f => {
                let helyszin = f.helyszin_nev;
                kishelyszin = helyszin.toLowerCase();
                if (kisval.length >= 0) {
                    if (kishelyszin.includes(kisval)) {
                        id = f.helyszin_id;
                        lista.innerHTML +=
                            "<input type='radio' class='helyszinRadio' value='" + id + "' id='" + id + "'><label style='font-size:16'>" + f.helyszin_nev + "</label><br>";
                    }
                }
            })
        })
        .catch(err => console.log(err));
}

let rendDarab;

function rendezvenyBetolt() {
    const url = 'http://localhost:3000/rendezvenyek';
    const rendezvenyek = document.getElementById("rendezvenyLista");
    fetch(url)
        .then((response) => response.json())
        .then(json => {
            rendDarab = json.length;
            rendezvenyek.innerHTML = "";
            json.forEach(r => {
                id = r.rend_id;
                rendezvenyek.innerHTML +=
                    "<input type='radio' class='rendRadio' value='" + id + "' id='" + id + "'><label style='font-size:16'>" + r.rend_nev + "</label><br>";
            })
        })
        .catch(err => console.log(err));
    return rendDarab;
}

function rendezvenySzur() {
    const url = 'http://localhost:3000/rendezvenyek';
    const lista = document.getElementById("rendezvenyLista");
    let val = document.getElementById('rendezvenySzuro').value;
    let kisval = val.toLowerCase();

    fetch(url)
        .then((response) => response.json())
        .then(json => {
            lista.innerHTML = "";
            json.forEach(r => {
                let rendezvenyek = r.rend_nev;
                kisrendezvenyek = rendezvenyek.toLowerCase();
                if (kisval.length >= 0) {
                    if (kisrendezvenyek.includes(kisval)) {
                        id = r.rend_id;
                        lista.innerHTML +=
                            "<input type='radio' class='rendRadio' value='" + id + "' id='" + id + "'><label style='font-size:16'>" + r.rend_nev + "</label><br>";
                    }
                }
            })
        })
        .catch(err => console.log(err));
}


bejelentkezve();
helyszinBetolt();
eloadokBetolt();
rendezvenyBetolt();