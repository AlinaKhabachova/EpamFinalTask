$(document).ready(function () {
    $('.crop-img').click(function () {
        var img = $('#bigImage').attr('src');
        $('#bigImage').attr('src', $(this).attr('src'));
        $(this).attr('src', img);
    });
});
