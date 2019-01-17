---
path: "/docs/options/repeated"
title: "Opção repeated"
---

> Informa se deve ignorar letras repetidas.

* Tipo: *Boolean*.
* Valor padrão: `true`.

Isso deve ser um valor booleano informando se deve ignorar letras repetidas dentro da *string*, isso é `true` por padrão, pois é muito útil para evitar tentativas de burlar os filtros escrevendo, por exemplo, *porrrrrra*.

## Exemplos

```js
const Piii = require("piii");
const piiiFilters = require("piii-filters");

const filters = [
  piiiFilters.porra
];

const piii1 = new Piii({filters, repeated: true});
piii.filter("Eita, porrrrrra!"); // "Eita, *!"

const piii1 = new Piii({filters, repeated: false});
piii.filter("Eita, porrrrrra!"); // "Eita, porrrrrra!"
```