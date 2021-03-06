Nos exercícios anteriores, conseguimos ter a palavra “Azul” impressa na tela várias vezes de uma maneira muito mais eficiente e limpa graças ao método `for`.

Agora, muitas vezes nos deparamos com situações em que não temos um número constante de repetições. Nesses caso é necessário que o valor de repetições possa variar conforme a necessidade.

Por exemplo, poderíamos fazer uma função que imprimisse 5 vezes “Azul” utilizando o `for`. O que aconteceria se agora precisássemos que imprimisse 4 vezes? Para isso, hoje em dia, precisaríamos criar outra função.
Como você pode perceber, isso não viável. No entanto, com algumas coisas que vimos, podemos dar um upgrade e fazer uma função genérica que recebe como parâmetro quantas vezes que algo será executado. 
Algo como uma impressão repetitiva da palavra “Azul”.

Para isso, teremos de modificar o `for`. 
Se quisermos repetir uma instrução 4 vezes, poderíamos escrever o seguinte:


```javascript
for(var i = 0; i < 4; i++) {
   //Aqui eu coloco as instruções que quero repetir
}
```
Para que o `for` seja dinâmico, ao invés de repetir fixamente 4 vezes, pode dizer que irá repetir **x** vezes  

```javascript
var x = 4
for(var i = 0; i < x; i++) {
   //Aqui eu coloco as instruções que quero repetir
}
```
Aqui **x** é uma variável numérica que, no caso anterior, receberia o valor 4. A ideia é que agora podemos atribuir valores diferentes para a variável **x**. Uma maneira de obter esse valor seria se você passasse para nós como um parâmetro de uma função e dentro dela, usá-lo.
 
```javascript
function repetirAlgoXVezes(quantidadeDeVezes) {
  for(var i = 0; i < quantidadeDeVezes; i++) {
   //Aqui dentro escrevo as instruções que quero repetir
  }
}
```
> Sabendo isso, escreva uma função `imprimirAzul` que receba como parâmetro um valor numérico “x” e imprima “Azul” “x” vezes.
Por exemplo
>  
> ```javascript
> ム imprimirAzul(3)
> "AzulAzulAzul"
> ```
