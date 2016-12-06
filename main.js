$("document").ready(function() {
  $(".btn").on('click', function() {
    var textId = $(this).attr('data-textId');
    var socialId = $(this).attr('data-socialId');
    if (this.value=="Read more") {
      this.value="Read less";
    } else {
      this.value="Read more";
    }
    $('#'+textId).slideToggle(200);
    $('#'+socialId).slideToggle(200);
  });
});
