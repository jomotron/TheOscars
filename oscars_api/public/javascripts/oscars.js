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
        $("#results").append("<td>" + result[i].film + "</td>");
        $("#results").append("<td>" + result[i].name + "</td>");
        $("#results").append("<td>" + result[i].year_film + "</td>");
        $("#results").append("<td>" + result[i].year_ceremony + "</td>");
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
        $("#results").append("<td>" + result[i].film + "</td>");
        $("#results").append("<td>" + result[i].name + "</td>");
        $("#results").append("<td>" + result[i].year_film + "</td>");
        $("#results").append("<td>" + result[i].year_ceremony + "</td>");
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
        $("#results").append("<td>" + result[i].film + "</td>");
        $("#results").append("<td>" + result[i].name + "</td>");
        $("#results").append("<td>" + result[i].year_film + "</td>");
        $("#results").append("<td>" + result[i].year_ceremony + "</td>");
        $("#results").append("<td>" + result[i].winner + "</td>");
        $("#results").append("</tr>");
      }
    },
  });
}
