(() => {
  "use strict";

  fetch("https://api.github.com/repos/theuves/piii.js/tags").then(response => {
    response.text().then(json => {
      const download = JSON.parse(json)[0].zipball_url;
      const version = JSON.parse(json)[0].name;
      document.querySelector("#download").href = download;
      document.querySelector("#version").innerHTML = version;
    });
  });
})();
