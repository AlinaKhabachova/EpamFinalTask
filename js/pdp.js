var selectedItem;
var basket;
$(document).ready(function () {
    if (localStorage['basket'] === undefined || localStorage['basket'] === [] || localStorage['basket'] === '') {
        localStorage['basket'] = [];
        basket = [];
    } else {
        basket = JSON.parse((localStorage['basket']));
    }
    $('.crop-img').click(function () {
        var img = $('#bigImage').attr('src');
        $('#bigImage').attr('src', $(this).attr('src'));
        $(this).attr('src', img);
    });

    $('#addToCard').click(function () {
        selectedItem.size = $('.selectedSize').text();
        var same_item_form_basket = basket.filter(function (item) {
            return item.art == selectedItem.art && item.size == selectedItem.size;
        });
        if (same_item_form_basket.length <= 0) {
            selectedItem.count = 1;
            basket.push(selectedItem);
        }
        localStorage.setItem('basket', JSON.stringify(basket));
    });
    var art = getURLParameter('art');
    loadDataFromArt(art);
});

function loadDataFromArt(art) {
    var clothes = JSON.parse(localStorage['full_data']).filter(function (item) {
        return item.art == art;
    });
    selectedItem = clothes[0];

    var breadcrumbs = $('.breadcrumb');
    var link = '<a href="index.html">home</a> / <a href="category-all.html?category=';
    switch (selectedItem.category) {
        case 'w':
            link += selectedItem.category + '"> women';
            break;
        case 'm':
            link += selectedItem.category + '"> men';
            break;
        case 'k':
            link += selectedItem.category + '"> kids';
            break;
        case 'cs':
            link += selectedItem.category + '"> coming soon';
            break;
    }
    link += '</a> / <a>'+ selectedItem.name+'</a>';
    breadcrumbs.append(link);

    $('.large-img').attr('src', selectedItem.img[0]);
    $('#image1').attr('src', selectedItem.img[1]);
    $('#image2').attr('src', selectedItem.img[2]);
    $('#image3').attr('src', selectedItem.img[3]);
    $('#chosenProduct').after('<h2>' + selectedItem.name + '</h2>');
    $('.articleNumber').append('Article number:' + (selectedItem.art).toString());
    $('.price').append('&euro;' + (selectedItem.price / 100).toString());
    $('.description').append(selectedItem.description);
    var sizes = $('#sizes');
    selectedItem.sizes.forEach(function (item) {
        var size = document.createElement('div');
        size.className = 'size';
        size.innerHTML = item;
        size.onclick = function () {
            $('.size').removeClass('selectedSize');
            size.className = 'size selectedSize';
        };
        sizes.append(size);
    });
}

function getURLParameter(name) {
    return decodeURIComponent((new RegExp('[?|&]' + name + '=' + '([^&;]+?)(&|#|;|$)').exec(location.search) || [, ""])[1].replace(/\+/g, '%20')) || null;
}
