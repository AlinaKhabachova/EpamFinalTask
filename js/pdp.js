$(document).ready(function () {

    $('.crop-img').click(function () {
        var img = $('#bigImage').attr('src');
        $('#bigImage').attr('src', $(this).attr('src'));
        $(this).attr('src', img);
    });

    $('#addToCard').click(function () {
        $('')
    });

    var art = getURLParameter('art');
    loadDataFromArt(art);
});

function loadDataFromArt(art) {
    var clothes = JSON.parse(localStorage['full_data']).filter(function (item) {
        return item.art == art;
    });
    var selectedItem = clothes[0];
    $('.large-img').attr('src', selectedItem.img[0])
    $('#image1').attr('src', selectedItem.img[1])
    $('#image2').attr('src', selectedItem.img[2])
    $('#image3').attr('src', selectedItem.img[3])
    $('#chosenProduct').after('<h2>' + selectedItem.name + '</h2>');
    $('.articleNumber').append('Article number:' + (selectedItem.art).toString());
    $('.price').append('&euro;' + (selectedItem.price / 100).toString());
    $('.description').append(selectedItem.description);
    var sizes = $('#sizes');
    selectedItem.sizes.forEach(function (item) {
        var size = document.createElement('div');
        size.className = 'size';
        size.innerHTML = item;
        sizes.append(size);
    });
}

function getURLParameter(name) {
    return decodeURIComponent((new RegExp('[?|&]' + name + '=' + '([^&;]+?)(&|#|;|$)').exec(location.search) || [, ""])[1].replace(/\+/g, '%20')) || null;
}
