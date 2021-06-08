$(document).ready(function () {
  $("#search").click(function (event) {
    event.preventDefault();
    //var word = document.getElementById("word").value;
    $.ajax({
      method: "POST",
      url: "http://localhost:5000/search",
      data: JSON.stringify({
        word: document.getElementById("word").value,
      }),
      contentType: "application/json; charset=utf-8",
      // dataType: "json",
      success: showSearchResult,
    });
  });
});


function showSearchResult(obj){
    console.log(obj.length);
    $(".divTable").empty();
    for (let i = 0; i < obj.length; i++) {
      $(".divTable").append(
        `<div class="divRow">${i + 1}(${obj[i].wordtype}):: ${
          obj[i].definition
        }</div>`
      );
    }
}
