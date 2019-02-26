---
path: "/docs/options/cleaner"
title: "Opção cleaner"
---

# Opção cleaner

> Removedor de acentos.

- Tipo: *Function*.
- Valor padrão: [`diacritics`](https://npm.im/diacritics).

Isso deve ser uma função que faz a remoção de acentos nos caracteres da *string* antes de filtrá-la, por padrão é usado o função do módulo [`diacritics`](https://npm.im/diacritics) que é uma das mais completas funções para normalização desses caracteres. É necessário fazer a remoção de acentos, para padronizar a criação de filtros, para impedir que um filtro seja burlado e principalmente para evitar que seja filtrado trechos indesejáveis dentro da *string*.

## Exemplo

```js
const Piii = require("piii");
const piiiFilters = require("piii-filters");

/**
 * Desacentuador personalizado.
 */
const removeAccents = string => string
  .replace(/ô/g, "o")
  .replace(/ê/g, "e");

const piii = new Piii({
  filters: [
    piiiFilters.cu,
    piiiFilters.foder
   ],
  cleaner: removeAccents
});

piii.filter("Vá se fôdêr!"); // "Vá se *!"
piii.filter("Vá tomar no cú!"); // "Vá tomar no cú!"
```

Observe que no último exemplo (de `Vá tomar cú!`) o palavrão *cú* não foi filtrado, pois o desacentuador personalizado (definido em `removeAccents`) não fez a remoção do acento agudo na letra *U*.

## Problemas com o não-uso de um desacentuador

O *Piii.js* para filtrar somente uma palavra usa o metacaractere `\b` (nas expressões regulares) evintando assim que seja filtrado partes de DENTRO de outras palavras, por exemplo, para que um filtro do palavrão *cu* não filtre _piraru**cu**_ ou _**cu**rrí**cu**lo_. Se não for usado um desacentuador, um problema ocorrerá, porquê o metacactere `\b` não interpreta uma palavra quando ela termina ou começa com um caractere acentudado, por exemplo, a expressão regular `\bcú\b` (terminada com *ú*) não corresponde a nada na *string* *Vai tomar no cú!*. Por esses motivos é usado um removedor de acentos que irá remover todos os acentos da *string*, fazer a filtragem dos palavrões e posteriormente devolver todos os acentos da letras que não foram filtradas.
