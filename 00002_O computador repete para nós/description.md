Como vimos no exercício anterior, no Javascript há uma maneira de dizer "eu quero que esses comandos sejam repetidos muitas vezes".

 Então, quando for necessário repetir um comando (como console.log) um certo número de vezes, em vez de copiar e colar como temos feito em alguns momentos, podemos usar a instrução `for`.

Por exemplo, se quisermos imprimir "Olá!" na tela 4 vezes, poderíamos escrever o seguinte:
 
```javascript
for(var i = 0; i < 4; i++) {
   console.log("Olá!")
}
```

No for temos um contador de repetições, nenhum exemplo anterior é contrário a uma variedade de `i`. Você tem que indicar em qual momento irá iniciar seu contador no primeiro critério, qual condição você irá utilizar a fim de fazer seu contador parar de contar no segundo critério, e também indicar no terceiro critério se iremos incrementar (aumentar) ou decrementar nossas repetições (diminuir).

 Sabendo disso, como podemos imprimir a palavra Azul na tela 4 vezes?
 
> Crie uma função chamada **imprimirAzul4** que exibe pelo console **4 vezes** a palavra **Azul**
