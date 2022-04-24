var linkId;


function bovebben() {
    window.onload = function(linkId) {
        try {
            let url_string = (window.location.href).toLowerCase();
            let url = new URL(url_string);
            linkId = url.searchParams.get("id");
            console.log(linkId);
        } catch (error) {
            console.log("Hiba az URL paraméter beolvasásakor - " + err);
        }

        console.log(linkId);
        const url = 'http://localhost:3000/bovebben/' + linkId;
        const lista = document.getElementById("reszletek");
        let fellepok = document.getElementById("fellepok");
        fetch(url)
            .then((response) => response.json())
            .then(json => {
                console.log(json[0]),
                    json.forEach(f => {
                        fellepok.innerHTML += f.eloado_nev + "<br><br>";
                    });
                lista.innerHTML = "";
                lista.innerHTML +=
                    "<p><h2>" + json[0].rend_nev + "</h2></p>" +
                    "<p>Időpont: " + json[0].idopont + "</p>" +
                    "<p>Helyszín: " + json[0].helyszin_nev + "</p>" +
                    "<p>Helyszín e-mail: " + json[0].email + "</p>" +
                    "<p>Helyszín weblap: <a href='" + json[0].weblap + "' target='_blank' rel='noopener noreferrer'>" + json[0].weblap + "<a></p>" +
                    "<p>Kategória: " + json[0].kategoria + "</p>" +
                    "<p id='leiras'>Esemény leírása: " + json[0].leiras + "</p>" +
                    "<p>Ár: " + json[0].ar + "</p>";
            })
            .catch((err) => console.log(err));
    }
}

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


bovebben();