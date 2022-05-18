require("dotenv").config();
const express = require("express");
const app = express();
app.use(express.json());
const mysql = require("mysql");
const cors = require("cors");
app.use(cors());

const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const pool = mysql.createPool({
    host: "localhost",
    port: "3306",
    user: "root",
    password: "",
    database: "rendkereso",
});

//ADMIN jelszo: kicsinagy
app
    .route("/admin")
    .post(function(req, res) {
        const hash = process.env.ADMIN;
        if (!bcrypt.compareSync(req.body.password, hash))
            return res.status(401).send({ message: "Hibás jelszó!" });
        const token = jwt.sign({ password: req.body.password },
            process.env.TOKEN_SECRET, { expiresIn: 3600 }
        );
        res.json({ token: token, message: "Sikeres bejelentkezés." });
    })
    .get(function(req, res) {
        const q =
            "SELECT r.rend_id AS id, r.rend_nev AS 'rend_nev', date_format(r.idopont, '%Y %M %d') AS 'idopont', h.helyszin_nev AS 'helyszin_nev', e.eloado_id AS eEloadoID, re.eloado_id AS reEloadoID, re.rend_id AS reRendID, e.eloado_nev AS 'eloado_nev'" +
            " FROM helyszin AS h INNER JOIN" +
            " rendezveny AS r" +
            " ON h.helyszin_id = r.helyszin_id INNER JOIN" +
            " rend_eloado AS re" +
            " ON r.rend_id = re.rend_id INNER JOIN" +
            " eloado AS e" +
            " ON re.eloado_id = e.eloado_id GROUP BY r.rend_nev" +
            " ORDER BY r.idopont DESC;";
        pool.query(q, function(error, results) {
            if (!error) {
                res.send(results);
            } else {
                res.send(error);
            }
        });
    });

//Token ellenőrzése middlewarrel
function authenticateToken(req, res, next) {
    const authHeader = req.headers["authorization"];
    const token = authHeader && authHeader.split(" ")[1];
    if (!token) return res.status(401).send({ message: "Azonosítás szükséges" });
    jwt.verify(token, process.env.TOKEN_SECRET, (err, user) => {
        if (err) return res.status(403).send({ message: "Nincs jogosultság!" });
        req.user = user;
        next();
    });
}

app.route("/kezdolap").get(function(req, res) {
    const q =
        "SELECT r.rend_id AS id, r.rend_nev AS 'rend_nev', date_format(r.idopont, '%Y %M %d') AS 'idopont', h.helyszin_nev AS 'helyszin_nev', e.eloado_id AS eEloadoID, re.eloado_id AS reEloadoID, re.rend_id AS reRendID, e.eloado_nev AS 'eloado_nev'" +
        " FROM helyszin AS h INNER JOIN" +
        " rendezveny AS r" +
        " ON h.helyszin_id = r.helyszin_id INNER JOIN" +
        " rend_eloado AS re" +
        " ON r.rend_id = re.rend_id INNER JOIN" +
        " eloado AS e" +
        " ON re.eloado_id = e.eloado_id GROUP BY r.rend_nev" +
        " ORDER BY r.idopont DESC;";
    pool.query(q, function(error, results) {
        if (!error) {
            res.send(results);
        } else {
            res.send(error);
        }
    });
});

app.route("/bovebben/:id").get(function(req, res) {
    const q =
        "SELECT r.rend_id, r.rend_nev, date_format(r.idopont, '%Y %M %d') AS 'idopont', r.kategoria, r.korosztaly, r.leiras as esLeiras, r.ar, h.helyszin_nev, h.email, h.weblap, e.eloado_nev, e.bio as eBio " +
        " FROM helyszin AS h JOIN" +
        " rendezveny AS r" +
        " ON h.helyszin_id = r.helyszin_id JOIN" +
        " rend_eloado AS re" +
        " ON r.rend_id = re.rend_id JOIN" +
        " eloado AS e" +
        " ON re.eloado_id = e.eloado_id" +
        " WHERE r.rend_id = ?";
    pool.query(q, [req.params.id], function(error, results) {
        if (!error) {
            res.send(results);
        } else {
            res.send(error);
        }
    });
});

app.route("/nevSzerint/").get(function(req, res) {
    const q =
        "SELECT r.rend_id AS id, r.rend_nev AS 'rend_nev', date_format(r.idopont, '%Y %M %d') AS 'idopont', h.helyszin_nev AS 'helyszin_nev', e.eloado_nev AS 'eloado_nev' " +
        " FROM helyszin AS h INNER JOIN" +
        " rendezveny AS r" +
        " ON h.helyszin_id = r.helyszin_id INNER JOIN" +
        " rend_eloado AS re" +
        " ON r.rend_id = re.rend_id INNER JOIN" +
        " eloado AS e" +
        " ON re.eloado_id = e.eloado_id" +
        " GROUP BY rend_nev ORDER BY r.rend_nev;";
    pool.query(q, function(error, results) {
        if (!error) {
            res.send(results);
        } else {
            res.send(error);
        }
    });
});

app.route("/keres/").get(function(req, res) {
    const q =
        "SELECT r.rend_id AS id, r.rend_nev AS 'rend_nev', date_format(r.idopont, '%Y %M %d') AS 'idopont', h.helyszin_nev AS 'helyszin_nev', e.eloado_id AS eEloadoID, re.eloado_id AS reEloadoID, re.rend_id AS reRendID, e.eloado_nev AS 'eloado_nev'" +
        " FROM helyszin AS h INNER JOIN" +
        " rendezveny AS r" +
        " ON h.helyszin_id = r.helyszin_id INNER JOIN" +
        " rend_eloado AS re" +
        " ON r.rend_id = re.rend_id INNER JOIN" +
        " eloado AS e" +
        " ON re.eloado_id = e.eloado_id" +
        " WHERE lcase(e.eloado_nev) LIKE '%?%'" +
        " ORDER BY r.idopont DESC;";
    pool.query(q, [req.params.kereso], function(error, results) {
        if (!error) {
            res.send(results);
        } else {
            console.log(error);
            res.send(error);
        }
    });
});

//FELTÖLTÉS ÚTVONALAK
app.route("/submitHelyszin")
    .post(function(req, res) {
        const q = "INSERT INTO helyszin (helyszin_nev, helyszin_cim, helyszin_bemutatas, email, weblap) VALUES (?, ?, ?, ?, ?);";
        pool.query(q, [req.body.helyszin_nev, req.body.helyszin_cim, req.body.helyszin_bemutatas, req.body.email, req.body.weblap],
            function(error, result) {
                if (!error) {
                    res.send(result);
                } else {
                    res.send(error);
                }
            }
        )
    });

app.route("/submitEloado")
    .post(function(req, res) {
        const q = "INSERT INTO eloado (eloado_nev, bio) VALUES (?, ?);";
        pool.query(q, [req.body.eloado_nev, req.body.bio],
            function(error, result) {
                if (!error) {
                    res.send(result);
                } else {
                    res.send(error);
                }
            }
        )
    });

app.route("/submitRendezveny")
    .post(function(req, res) {
        const q = "INSERT INTO rendezveny (helyszin_id, rend_nev, idopont, kategoria, korosztaly, leiras, ar) VALUES (?, ?, ?, ?, ?, ?, ?);";
        pool.query(q, [req.body.helyszin_id, req.body.rend_nev, req.body.idopont, req.body.kategoria, req.body.korosztaly, req.body.leiras, req.body.ar],
            function(error, result) {
                if (!error) {
                    res.send(result);
                } else {
                    res.send(error);
                }
            }
        )
    });

app.route("/submitEsemeny")
    .post(function(req, res) {
        const r = "INSERT INTO rend_eloado (rend_id, eloado_id) VALUES (?, ?);";
        pool.query(r, [req.body.rend_id, req.body.eloado_id],
            function(error, result) {
                if (!error) {
                    res.send(result);
                } else {
                    res.send(error);
                }
            }
        )
    });

//RENDEZVENYEK BETÖLTÉSE ÚTVONAL  
app.route("/rendezvenyek")
    .get(function(req, res) {
        const q = "SELECT * FROM rendezveny AS r";
        pool.query(q, function(error, results) {
            if (!error) {
                res.send(results);
            } else {
                res.send(error);
            }
        })
    })

//ELŐADÓK BETÖLTÉSE ÚTVONAL
app.route("/eloadok")
    .get(function(req, res) {
        const q = "SELECT * FROM eloado as e";
        pool.query(q, function(error, results) {
            if (!error) {
                res.send(results);
            } else {
                res.send(error);
            }
        })
    })

//HELYSZÍNEK BETÖLTÉSE ÚTVONAL
app.route("/helyszinek")
    .get(function(req, res) {
        const q = "SELECT * FROM helyszin";
        pool.query(q, function(error, results) {
            if (!error) {
                res.send(results);
            } else {
                res.send(error);
            }
        })
    })

app.listen(3000, function() {
    console.log("Szerver - 3000 - elindítva")
})