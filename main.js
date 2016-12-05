$("document").ready(function() {
  $(".btn").on('click', function() {
    var textId = $(this).attr('data-textId');
    var socialId = $(this).attr('data-socialId');
    $('#'+textId).slideToggle(200);
    $('#'+socialId).slideToggle(200);
  });
});
