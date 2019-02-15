Até agora nos concentramos em entender que o `for` nos serve para repetir um número de ação **x** vezes.
Neste exercício, vamos nos concentrar na ação.
Até agora nós só imprimimos a palavra "Azul" na tela, agora vamos fazer algo mais avançado e a idéia seria usar o `for` para obter o resultado de uma operação realizada várias vezes.
 
Se quiséssemos contar quantas calorias temos em 3 coxinhas e cada coxinha tem 300 calorias, poderíamos fazer duas coisas, uma seria multiplicar e outra seria adicionar 3 vezes 300 calorias.

 
Para fazer isso no código, primeiro precisamos fazer um `for` para rodar 3 vezes:

 
 
```javascript
for(var i = 0; i < 3; i++) {
   //Fazer a somatória
}
```
 
Para fazer a soma, pode-se chegar à seguinte conclusão:
 
```javascript
for(var i = 0; i < 3; i++) {
   var totalCalorias = totalCalorias + 300;
}
```
 

Onde para cada iteração estamos dizendo que o "totalCalorias" é igual ao valor que estava em "totalCalorias" mais 300, dessa forma podemos obter o total dos valores.


Este código, embora pareça que funcionaria se o executássemos, não nos daria o valor que esperamos, por quê?
 
Isso ocorre porque a variável "totalCalorias" é declarada dentro do `for` e isso tem duas conseqüências:
 
*A variável não existe E não pode ser chamada fora do `for`.
 
```javascript
for(var i = 0; i < 3; i++) {
   var totalCalorias = totalCalorias + 300; 
   //a variavel totalCalorias está declarada dentro do for e só pode ser usada lá dentro
}
 
console.log(totalCalorias) 
//a variavel totalCalorias aqui já não existe e não pode ser consul-tada
```
 
* A variável é inicializada cada vez que se executa uma iteração do `for`
 
Dentro do `for` está o código que queremos que seja executado em CADA ITERAÇÃO, para o qual em CADA ITERAÇÃO o mesmo código é executado novamente.
Consequentemente, a primeira vez que o `for` é executado
 
```javascript
   var totalCalorias = totalCalorias + 300;
   //totalCalorias podería terminar valendo 300
}
```
 
E a segunda vez que se executa dentro do `for`
 
```javascript
   var totalCalorias = totalCalorias + 300; 
   //Estamos retornando para declarar a variável totalCalorias, para a qual não podemos armazenar o valor anterior.
}
```
 
Como resolvemos isso?
 
Isso está relacionado à existência das variáveis, a variável totalCalorias é local para `for` e, portanto, só podemos usá-la e é redefinida para cada iteração. Se quisermos manter o valor fora de cada iteração, devemos fazer com que essa variável seja global para o `for`. Conseguimos isso de maneira simples, declarando a variável totalCalorias fora do `for`.

 
```javascript
var totalCalorias = 0; 
//Aqui eu aproveito e inicializo em 0 a variável totalCalorias.
 
for(var i = 0; i < 5; i++) {
  totalCalorias = totalCalorias + 0.25; 
  //aqui a variável, como já está declarada fora do for, pode ser modificada durante as iterações e não irá "reiniciar"
}
 
console.log(totalCalorias) 
//a variável totalCalorias já existe e retorna o valor total que estávamos procurando.
```
 
> Sabendo disso, escreva uma função `somar5MoedasDe25Centavos`, que adiciona o valor de 5 moedas de 0,25 centavos e retorna o resultado.
 
Por exemplo:  
>  
> ```javascript
> ム somar5MoedasDe25Centavos()
> 1.25
> ```
> Isso fez 0.25+0.25+0.25+0.25+0.25

