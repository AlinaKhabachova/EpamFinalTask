function wideSearch() {
    var form = document.createElement("div");
    form.id = "formForSearch";
    form.innerHTML = '<form><input type="search" value="Search something..."><div type="submit" style="height: 36px;padding-top: 3px;" class="icon"><i class="fa fa-search"></i></div></form>';
    $('#search').after($(form));
    $('#search').remove();
    $('.firstHr').attr('id', 'firstHr');
}

$(function () {
    $("#sliderContainerDiv").load("slider.html");
});