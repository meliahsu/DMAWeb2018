$('#menu > ul.topnav li a').click(function(e) {
    var $this = $(this);
    $this.parent().siblings().removeClass('active').end().addClass('active');
    e.preventDefault();
});
$('#menu > li.dropdown div a').click(function(e) {
    var $this = $(this);
    $this.parent().siblings().removeClass('active').end().addClass('active');
    e.preventDefault();
});
