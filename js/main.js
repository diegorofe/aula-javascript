

//------------Exemplos com Variáveis--------------------
/*
var nome = "Diêgo Rodrigues";
alert("Bem vindo " + nome);
var idade = 20;
var idade2 = 10;
var frase = "Japão é o melhor time do mundo";
var lista = ["maça", "pera", "laranja"];
console.log(lista);
console.log(lista[0])
console.log(lista.reverse());
console.log(lista.toString());
console.log(lista.toString()[0]);
console.log(lista.join(" - "));
lista.push("uva");
console.log(lista);
alert(idade + idade2)
console.log(frase.toUpperCase())
console.log(frase.replace("Japão","Brasil"))
*/

//------------Dicionários--------------------


/*
var fruta = {nome:"maça", cor:"vermelha"}
console.log(fruta.nome)
alert(fruta.cor)


//lista de dicionários
var fruta = [{nome:"maça", cor:"vermelha"}, {nome:"uva", cor:"verde"}]
console.log(fruta[0].nome)
alert(fruta[1].cor)
*/

//-------------Condicionais----------------

/*
var idade = prompt("Qual a ua idade?");
if(idade >= 18){
    alert("Maior de idade");
}
else{
    alert("Menor de idade")
}
*/

//-------------Estrutura de repeticao----------------

/*
var count = 0;
while(count < 5){
    console.log(count);
    count ++;
}

var count = 0;
for(count = 0; count <= 5; count++){
    console.log(count);
}
*/

//-------------Datas---------------

/*
var d = new Date();
alert(d);
alert(d.getDay()+1);
alert(d.getHours())
*/

//-------------Funções---------------

/*
function soma(n1, n2){
    return(n1+n2);
}

alert(soma(5,4));
*/

/*
function setRepalce(frase, nome, novo_nome){
    return frase.replace(nome, novo_nome);
}

alert(setRepalce("Vai Japão", "Japão", "Brasil"));
*/

/*
function validaIdade(idade){
    var validar;
    if(idade >= 18){
        return validar = true;
    }else{
        return validar = false;
 
    }
}

var idade = prompt("Qual a sua idade?");
console.log(validaIdade(idade));
*/

//-------------Funções interação com Botões---------------

/*
function clicou(){
  document.getElementById("agradecimento").innerHTML = "<ins><strong>Obrigado por clicar</strong></ins>"

}
*/


/*
function redirecionar(){
window.open("https://github.com/diegorofe")
}
*/

/*
function redirecionar(){
    window.location.href = "https://github.com/diegorofe";
    }
  */

    /*
    function trocar() {
        document.getElementById("mouse").innerHTML = "Obrigado por passar o mouse!"
    }

    function voltar() {
        document.getElementById("mouse").innerHTML = "Passe o mause aqui"
    }
    */

    function trocar(elemento) {
        elemento.innerHTML = "Obrigado por passar o mouse!"
    }

    function voltar(elemento) {
        elemento.innerHTML = "Passe o mause aqui"
    }

    function funcaoChange(elemento) {
        console.log(elemento.value);
    }

 
    
