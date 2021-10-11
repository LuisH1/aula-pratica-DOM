function toUpperCase(){
    var nome = document.getElementById("nome");
    document.getElementById("maiusculo").innerHTML = nome.value.toUpperCase();
}

function maisDez(){
    var idade = document.getElementById("idade").value;
    var idadeMaisDez = parseInt(idade) + 10
    document.getElementById("idadeSomada").innerHTML = "Daqui a 10 anos você terá " + idadeMaisDez + " anos"
}