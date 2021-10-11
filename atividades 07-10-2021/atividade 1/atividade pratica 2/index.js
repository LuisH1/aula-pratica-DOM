function tabuadaDoNove(){
    for(var contador = 0; contador <= 10; contador++){
        var resultado = contador * 9
        if(resultado % 9 == 0){
            document.getElementById("resultadoDaTabuada").innerHTML += " 9 x " + contador + " = " + resultado + " | "
        }
    }
}