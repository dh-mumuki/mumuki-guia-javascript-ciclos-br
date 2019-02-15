Em Javascript existe uma forma de dize "quero que estes comandos se repitam esta quantidade de vezes".

Então, quando é necessário repetir um comando (como `console.log`) um certo número de vezes, ao invés de copiar e colar como vinhamos fazendo até agora, podemos utilizar o comando `for`.

Por ejemplo, si queremos imprimir "Hola!" por pantalla 4 veces, podríamos escribir lo siguiente:

```javascript
for(var i = 0; i < 4; i++) {
   console.log("Hola!")
}
```
En el for tenés un contador de repeticiones, en el ejemplo anterior ese contador es la variable `i`. Tenés que indicar donde comienza a contar, cuál es la condición en donde dejará de contar, en este caso `i < 4` y cómo se modifica la i en cada repetición (en este caso se incrementa uno).

Sabiendo esto, ¿Cómo podemos hacer para imprimir 4 veces por pantalla la palabra Azul?

> Realizar una función llamada **imprimirAzul4** que muestre por consola **4 veces** la palabra **Azul**