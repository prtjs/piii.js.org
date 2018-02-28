# Opção filters

> Lista de filtros.

* Tipo: *Array*.
* Valor padrão: `[]`.

Isso deve ser uma *array* contendo todos os filtros que serão usados. Por padrão nenhum filtro é adicionado ― pois existem algumas palavras que não são vistas como de [baixo-calão](https://goo.gl/KaUXDc) por todas as pessoas ou para determinadas situações ―, portanto, você deverá criar o seu próprio filtro ou obter um de terceiros.

```js
/**
 * Sintaxe.
 */
const piii = new Piii({
  filters: [
     // todos os filtros aqui...
  ]
});
```

## Criando filtros

Para a criação de filtros, é usado *arrays* que posteriormente serão convertidas em *regexs*.

Exemplo simples de filtro:

```js
["foo", "bar"]
```

O *Piii.js* interpretará a *array* acima como `(foo|bar)`, portanto, com isso, serão filtrados todas as ocorrências de *foo* e *bar* denttro de uma *string*. Veja o exemplo:

```js
const filtro = ["foo", "bar"];

const piii = new Piii({
  filters: [
    filtro
  ]
});

piii.filter("foo bar baz") // "* * bar"
```

> **Obs.**: Tudo dentro do filtro deve ser *arrays* e/ou *strings* e as *strings* DEVEM corresponder a expressão regular `/^[a-zA-Z]+$/`, ou seja, só podem ter letras (sem acentos) ― um erro será lançado caso isso não seja seguido.

Algumas regras do interpretador de filtros para conversão em *regexs*.

* Uma *string* retorna uma string.
* Uma *array* de *strings* retorna-as como alternação.
  - Antes disso a *array* é posta em ordem decrescente.
* Uma *array* de *arrays* retorna-as como alternação.
  - Antes disso a *array* é invertida.
* Uma *array* de *strings* e *arrays* retorna-as como continuação.

Exemplos de cada uma das regras:

```js
"abc" // é como "abc"
["def", "abc"] // é como "(abc|def)"
[["def", "abc"], ["jkl", "ghi"]] // é como "((abc|def)|(ghi|jkl))"
["abc", ["ghi", "def"]] // é como "(abc(def|ghi))"
```


## Exemplos

Supondo que você queira criar um filtro para *merda*.

Você pode fazer algo como:

```js
const filtroDeExemplo = [
  "merd",
  [
    "a",
    "inha",
    "ao" // observe que não tem acento
  ]
];

const piii = new Piii({
  filters: [
    filtroDeExemplo
  ]
});

// Exemplos:
piii.filter("Que merda!"); // "Que *!"
piii.filter("Que merdinha!"); // "Que *!"
piii.filter("Que merdão!"); // "Que *!"
```

## Usando filtros de terceiros

Você também pode importar filtros de terceiros para usar. Você pode pesquisar no *GitHub* por [`topic:piii-filter`](https://git.io/vNxcW) para encontrar filtros ― e caso você crie seu próprio filtro e publique-o no *GitHub* você poderá adicionar *piii-filter* nos *topics* do repositório para que ele seja encontrado por outras pessoas.

Caso queira começar com *Piii.js* sem ter que fazer muitas configurações você poderá usar o [`piii-filters`](https://ghub.io/piii-filters) que já vem com alguns filtros dos palavrões mais usados na língua portuguesa (e visto como de baixo-calão por quase todos).

Você pode instalá-lo com:

```
npm install --save-dev piii-filters
```

E usá-lo com:

```js
const Piii = require("piii");
const piiiFilters = require("piii-filters");

const piii = Piii({
  filters: [
    ...Object.values(piiiFilters)
  ]
});

piii.filter("Vá se foder!"); // "Vá se *!"
```
