const numero1 = document.getElementById("numero1");
const numero2 = document.getElementById("numero2");
const soma = document.getElementById("botao");

soma.addEventListener("click", () => {
    
   if(numero1.value >= 2 && numero1.value <= 10 && numero2.value >= 2 && numero2.value <= 10){
    var resultado = Number(numero1.value) + Number(numero2.value)
    document.getElementById("resultado").textContent = resultado
   } else{
    document.getElementById("resultado").textContent = "Por favor, digite um número maior ou igual a 2 e menor ou igual a 10."
   }
});