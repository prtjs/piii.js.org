---
path: "/docs/options/censor"
title: "Opção censor"
---

> Valor que substituirá os palavrões dentro da *string*.

- Tipo: *String* ou *Function*.
- Valor padrão: `"*"`.

Isso deve informar uma *string* que substituirá todos os palavrões filtrados ou uma função que receberá o palavrão que está sendo filtrado e que deve retornar uma *string* para substituí-lo.

## Exemplo de censura

Veja um exemplo manipulando o palavrão antes de filtrá-lo.

```js
const Piii = require("piii");
const piiiFilters = require("piii-filters");

const piii = new Piii({
  filters: [
    piiiFilters.foder
  ],
  censor: badWord => {
    return badWord.charAt(0) + "*".repeat(badWord.length - 1)
  }
});

piii.filter("Vá se foder!") // "Vá se f****!";
```