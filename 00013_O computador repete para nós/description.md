Em Javascript existe uma forma de dizer "quero que estes comandos se repitam esta quantidade de vezes".

Então, quando é necessário repetir um comando (como `console.log`) um certo número de vezes, ao invés de copiar e colar como vinhamos fazendo até agora, podemos utilizar o comando `for`.

Por exemplo, se queremos imprimir "Olá!" na tela 4 vezes, podemos escrever o seguinte código:

```javascript
for(var i = 0; i < 4; i++) {
   console.log("Olá!")
}
```

O `for` tem um contador de repetições, no exemplo anterior esse contador é a variável `i`. É necessário indicar onde começa a contar, qual é a condição que deixará de contar, neste caso `i < 4` e como se modifica a variável `i` em cada repetição (neste caso se incrementa 1).   

Sabendo isso: Como podemos imprimir 4 vezes na tela a palavra `Azul`?

> Faça uma função chamada **imprimirAzul4** que mostre **4 vezes** a palavra **Azul**.