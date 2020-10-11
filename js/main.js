$(document).ready(function () {

    $(".telephone").inputmask({
      mask: "+375 (99) 999 99 99",
      clearIncomplete: true,
      greedy: false
    });
    $("form").submit(function () { //Change
      var th = $(this);
      $.ajax({
        type: "POST",
        url: "/mail.php", //Change
        data: th.serialize()
      }).done(function () {
        $('._def').hide();
        $('._thx').show();
        setTimeout(function () {
          $('._thx').hide();
          $('._def').show();
          $('.popup__close').click();
          th.trigger("reset");
        }, 1000);
      });
      return false;
    });
  $("form").keydown(function () {
    if (event.keyCode == 13) {
      event.preventDefault();
    }
  });
});