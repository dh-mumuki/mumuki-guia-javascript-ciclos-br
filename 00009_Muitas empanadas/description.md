Com os exercícios anteriores, vimos como usar `for` para executar uma ação com um número fixo e/ou variável de vezes e como fazer algum processamento dentro dela.
 
No exercício anterior, aprendemos a calcular a soma de 5 moedas de 25 centavos.
A ideia seria que podemos fazer uma função que calcula a soma de qualquer número de moedas.
 
Para isso vamos ampliar o exemplo das empanadas anteriores em que calculamos as calorias de 3 empanadas.
 
```javascript
var totalCalorias = 0;  
 
for(var i = 0; i < 3; i++) {
  totalCalorias = totalCalorias + 300;
}
 
console.log(totalCalorias)
```
 
Para conseguir isso, o que temos que modificar é algo semelhante ao Exercício 2 de Variáveis ​​Repetidas.
 
Primeiro temos que tirar o número 3 e torná-lo variável, por exemplo, "x" ou "quantidadeDeEmpanadas"
 
```javascript
var quantidadeDeEmpanadas = 3;
var totalCalorias = 0;  
 
for(var i = 0; i < quantidadeDeEmpanadas; i++) {
  totalCalorias = totalCalorias + 300;
}
 
console.log(totalCalorias)
```
Depois de fazer essa modificação, a variável quantidadeDeEmpanadas poderia ser um argumento de uma função.
 
```javascript
function caloriasDeEmpanadas(quantidadeDeEmpanadas){
  var totalCalorias = 0;  
 
  for(var i = 0; i < quantidadeDeEmpanadas; i++) {
	totalCalorias = totalCalorias + 300;
  }
 
  console.log(totalCalorias)
}
```
 
E assim conseguimos fazer a nossa função, que ao passar a quantidade de empanadas, imprime na tela a quantidade de calorias totais.
 
 
> Sabendo disso, eu escrevi uma função `somarMoedasDe25(quantidadeDeMoedas)`, que toma como parâmetro um valor numérico e retorna a soma das moedas de 25 centavos.
Por exemplo:  
>  
> ```javascript
> ム somarMoedasDe25(7)
> 1.75
> ```
> Isso fez 0.25+0.25+0.25+0.25+0.25+0.25+0.25
