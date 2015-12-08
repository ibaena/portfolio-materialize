$(document).ready(function(){

  //build commits
  $(document).on("click", "a", function(e){
    e.preventDefault();

    $.ajax({
      type: "GET",
      url: $(this).attr("href"),
      success: function(commits){
        $("tbody").empty();

        for(var i = 0; i < commits.length; i++){

          $("tbody").append(buildTableRow(commits[i]));
        }
      },
      error: function(jqXHR, textStatus, errorThrown){
        console.log(jqXHR);
        console.log(textStatus);
        console.log(errorThrown);
      }
    });

    function buildTableRow(commitData){
      var commitTd = $("<td>").append(commitData.sha);
      var authorTd = $("<td>").append(commitData.author.login);
      var messageTd = $("<td>").append(commitData.commit.message);
      var dateTd = $("<td>").append(commitData.commit.author.date);

      return $("<tr>").append(commitTd)
        .append(authorTd)
        .append(messageTd)
        .append(dateTd);
    }
  });
});