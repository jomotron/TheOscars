function displayNominees(winner) {
  let endpoint = null;
  if (winner === true) {
    endpoint = "name/actor/" + $("#nominee").val() + "?winner=true";
  } else {
    endpoint = "name/actor/" + $("#nominee").val();
  }

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
            "<a class='film-label' onclick='routeToIMDB(\"" +
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
        $("#resultTable").show();
      }
    },
  });
}

function displayFilm(winner) {
  let endpoint = null;
  if (winner === true) {
    endpoint = "name/" + $("#filmTitle").val() + "?winner=true";
  } else {
    endpoint = "name/" + $("#filmTitle").val();
  }
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
            "<a class='film-label' onclick='routeToIMDB(\"" +
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
        $("#resultTable").show();
      }
    },
  });
}

function displayDateRange(winner) {
  let endpoint = null;
  if (winner === true) {
    endpoint =
      "year/range/" +
      $("#startDate").val() +
      "/" +
      $("#endDate").val() +
      "?winner=true";
  } else {
    endpoint =
      "year/range/" + $("#startDate").val() + "/" + $("#endDate").val();
  }
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
            "<a class='film-label' onclick='routeToIMDB(\"" +
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
        $("#resultTable").show();
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
