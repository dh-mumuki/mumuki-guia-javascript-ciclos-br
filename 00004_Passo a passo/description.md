Antes de avançar com o `for`, vamos tentar analisar bem o que está acontecendo dentro dele.
Nós já sabemos que ele executa o código que pedimos desde que uma determinada condição seja atendida.

O `for` tem uma variável que está mudando, que é a `i`. É importante entender o comportamento dela. Lembre-se na seção anterior que o valor `i` está aumentando à medida que você itera (repete). 

```javascript
for(var i = 0; i < 4; i++) {
   console.log("Olá!")
}
```

> Sabendo disso, escreva uma função `passoAPasso`, que imprime 5 vezes o conteúdo de `i`.
Por exemplo:
 
> 
> ```javascript
> ム passoAPasso()
> "01234"
> ```
> Faça um console.log(valor) para cada iteração.
