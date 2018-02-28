# Opção aliases

> Alfabeto alternativo para alguns caracteres.

* Tipo: *Object*.
* Valor padrão: `{}`.

Isso deve estender algumas letras do alfabeto para reconhecer possíveis formas do filtro ser burlado, por exemplo, a letras *A* em alguns casos pode ser representado pelos caracteres *2*, *4* e *@* sendo possível compreender a palavra e seu significado, como em *c4r4lho* é possível entender claramente que representa *caralho*.

## Criando aliáses

Como visto na opção de criação de filtros, só podemos usar letras de *A* a *Z*, portanto, os aliáses também só poderão ser adicionados para palavras de *A* a *Z* ― caso contrário um erro será lançado.

Veja o exemplo:

```js
const Piii = require("piii");
const piiiFilters = require("piii-filters");

const piii = new Piii({
  filters: [
    piiiFilters.boceta
  ],
  aliases: {
    a: ["2", "4", "@"]
    e: ["3", "&"],
    o: ["0"]
  }
});

piii.filter("foo boceta bar") // "foo * bar";
piii.filter("foo b0c3t4 bar") // "foo * bar";
piii.filter("foo boc&ta bar") // "foo * bar";
```
