async function addNewCityToLocalStorage() {
    let { getCitiesFromLocalStorage, consultarAPIclima } = await import("../common.js"); //Importacion en funcion :/
    let cities = getCitiesFromLocalStorage();
    let ciudadAgregada = document.getElementById("agregarCiudad").value;

    document.getElementById("result").style.display = "none";

    //document.getElementById("spinner").style.display = "block";
    let codigo = (await consultarAPIclima(ciudadAgregada)).cod;
    //document.getElementById("spinner").style.display = "none";


    document.getElementById("result").style.display = "block";

    if (cities.includes(ciudadAgregada)) {
        document.getElementById("result").innerHTML = "La ciudad ingresada ya se encuentra almacenada";
        document.getElementById("result").style.backgroundColor = "#ffc107";
    } else if (codigo != 200) {
        document.getElementById("result").innerHTML = "Error: La ciudad ingresada no se encuentra en la API o se produjo un error al consultar";
        document.getElementById("result").style.backgroundColor = "#dc3545";
    } else {
        cities.push(ciudadAgregada);
        document.getElementById("result").innerHTML = "Ciudad agregada con éxito";
        document.getElementById("result").style.backgroundColor = "#28a745";
    }
    localStorage.setItem("CITIES", JSON.stringify(cities));
}
