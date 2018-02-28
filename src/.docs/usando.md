# Usando

```js
const Piii = require("piii");
const piiiFilters = require("piii-filters");

const piii = new Piii({
  filters: [
    ...Object.values(piiiFilters)
  ]
});
```

Após fazer as configurações você terá um objeto contendo dois métodos.

## `piii.filter(string)`

> Para filtrar todos os palavrões dentro de uma *string*.

* Retorna: *String*.

### Exemplo

```js
piii.filter("Vá se foder!"); // "Vá se *!"
piii.filter("Vá tomar no cu!"); // "Vá tomar no *!"
```

## `piii.has(string)`

> Para verificar se há palavrões dentro de uma *string*.

* Retorna: *Boolean*.

### Exemplo

```js
piii.has("Vá se foder!"); // true
piii.has("Vá tomar no cu!"); // true
```
