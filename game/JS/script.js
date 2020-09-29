var jahr = 0, korn = 6000, buerger = 100, land = 400;
var outJahr = document.getElementsByClassName("jahr");
var outKorn = document.getElementsByClassName("korn");
var outBuerger = document.getElementsByClassName("buerger");
var outLand = document.getElementsByClassName("land");
var endRound = document.getElementById("endRound");
var inNahrung = document.getElementById("nahrung");
var inSaat = document.getElementById("saat");

aktualisiereDaten();

endRound.addEventListener("click", function (event) {
    fuettereEinwohner(parseInt(inNahrung.value));
    aktualisiereDaten();
})

function fuettereEinwohner(nahrung) {
    korn -= nahrung;
    let benoetigteNahrung = buerger * 20;
    if (nahrung < benoetigteNahrung) {
        buerger = nahrung / 20;
    }
    else if (nahrung > benoetigteNahrung) {
        let ueberschuss = nahrung - benoetigteNahrung;
        buerger = benoetigteNahrung / 20;
        while (ueberschuss >= 40) {
            ueberschuss -= 40;
            buerger++;
        }
    }
}

function aktualisiereDaten() {
    outJahr[0].innerHTML = "Jahr: " + jahr;
    outKorn[0].innerHTML = "Korn: " + korn;
    outBuerger[0].innerHTML = "Bürger: " + buerger;
    outLand[0].innerHTML = "Land: " + land;
}