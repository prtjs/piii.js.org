(() => {
  "use strict";

  const updateElement = (sel, attr, val) =>
    document.querySelector(sel)[attr] = val;

  const updateEverything = json => {
    const download = json[0].zipball_url;
    const version = json[0].name;

    updateElement("#download", "href", download);
    updateElement("#version", "innerHTML", version);
  };

  fetch("https://api.github.com/repos/theuves/piii.js/tags")
    .then(response => response.text())
    .then(JSON.parse)
    .then(updateEverything);
})();
