$(document).ready(function () {
  $(".add-ipb").click(function () {
    const container = $(this).closest(".multi-inp");
    container.append('<input type="text" />');
    $(this).appendTo(container);
  });
});
