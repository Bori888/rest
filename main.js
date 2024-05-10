import { getAdat } from "./async.js";

console.log("Róka Rudi")

getAdat("adatok.json", megjelenit)
getAdat("", megjelenit)

function megjelenit(adat) {
    console.log(adat)
    console.log(adat.termek)
    $("body").append(`<>`)
    
}