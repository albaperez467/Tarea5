var valor=0;
var resultado=0;
var variable=0;

var num = document.getElementById("numero");
num.addEventListener("change",
function cogerValor(){
    valor = document.getElementById("numero").value;
});

var select = document.getElementById("modo");
select.addEventListener("change",
function seleccionOpcion(){
var selectedOption = this.options[select.selectedIndex];
console.log(selectedOption.value + ': ' + selectedOption.text);

    if (selectedOption.value==1){
                resultado=valor.toString(2);
                console.log(resultado);
        devolverValor();
        }
    if (selectedOption.value==2){

                resultado=valor.toString(8);
                console.log(resultado);
                devolverValor();
    }
    if (selectedOption.value==3){

                resultado=valor.toString(16);
                console.log(resultado);
                devolverValor();
        }
    if (selectedOption.value==4){
                resultado=parseInt(valor,2);
                devolverValor();
    }
    if (selectedOption.value==5){
                resultado=parseInt(valor,8);
                devolverValor();
    }
    if (selectedOption.value==6){
                resultado=parseInt(valor,16);
                devolverValor();
    }
});

function devolverValor(){
    document.getElementById("resultado").innerHTML = valor;
    console.log(resultado);

    resultado=variable;
}


