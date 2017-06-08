$(document).ready(function () {
  "use strict";

  $.getJSON("https://api.github.com/repos/theuves/piii.js/tags", function (data) {
    $(".version").text("v".concat(data[0].name));
    $(".download").attr("href", data[0].zipball_url);
  });

  $("code").click(function (event) {
    select(event.target);
  });
});
