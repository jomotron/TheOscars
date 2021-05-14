function displayNominees() {
  let endpoint = "name/actor/" + $("#nominee").val();
  $.ajax({
    url: endpoint,
    contentType: "application/json",
    dataType: "json",
    success: function (result) {
      console.log(result[0]);
      for (var i = 0; i < result.length; i++) {
        $("#results").append("<tr>");
        $("#results").append(
          "<td>" +
            "<a onclick='routeToIMDB(\"" +
            result[i].film +
            "\")'>" +
            result[i].film +
            "</a>" +
            "</td>"
        );
        $("#results").append("<td>" + result[i].name + "</td>");
        $("#results").append("<td>" + result[i].category + "</td>");
        $("#results").append("<td>" + result[i].year_film + "</td>");
        $("#results").append("<td>" + result[i].winner + "</td>");
        $("#results").append("</tr>");
      }
    },
  });
}

function displayFilm() {
  let endpoint = "name/" + $("#filmTitle").val();
  $.ajax({
    url: endpoint,
    contentType: "application/json",
    dataType: "json",
    success: function (result) {
      console.log(result[0]);
      for (var i = 0; i < result.length; i++) {
        $("#results").append("<tr>");
        $("#results").append(
          "<td>" +
            "<a onclick='routeToIMDB(\"" +
            result[i].film +
            "\")'>" +
            result[i].film +
            "</a>" +
            "</td>"
        );
        $("#results").append("<td>" + result[i].name + "</td>");
        $("#results").append("<td>" + result[i].category + "</td>");
        $("#results").append("<td>" + result[i].year_film + "</td>");
        $("#results").append("<td>" + result[i].winner + "</td>");
        $("#results").append("</tr>");
      }
    },
  });
}

function displayDateRange() {
  let endpoint =
    "year/range/" + $("#startDate").val() + "/" + $("#endDate").val();
  $.ajax({
    url: endpoint,
    contentType: "application/json",
    dataType: "json",
    success: function (result) {
      console.log(result[0]);
      for (var i = 0; i < result.length; i++) {
        $("#results").append("<tr>");
        $("#results").append(
          "<td>" +
            "<a onclick='routeToIMDB(\"" +
            result[i].film +
            "\")'>" +
            result[i].film +
            "</a>" +
            "</td>"
        );
        $("#results").append("<td>" + result[i].name + "</td>");
        $("#results").append("<td>" + result[i].category + "</td>");
        $("#results").append("<td>" + result[i].year_film + "</td>");
        $("#results").append("<td>" + result[i].winner + "</td>");
        $("#results").append("</tr>");
      }
    },
  });
}
function routeToIMDB(name) {
  var endpoint = "http://www.omdbapi.com/?t=" + name + "&apikey=210fa736";
  $.getJSON(endpoint, function (data) {
    console.log(data);
    window.open("https://www.imdb.com/title/" + data.imdbID, "_blank");
  });
}
