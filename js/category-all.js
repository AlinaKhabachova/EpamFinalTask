$(function () {
    $("#slider").load("slider.html");
});

//For IE
if (!Array.prototype.filter) {
    Array.prototype.filter = function (fun /*, thisp*/) {
        var len = this.length >>> 0;
        if (typeof fun != "function")
            throw new TypeError();

        var res = [];
        var thisp = arguments[1];
        for (var i = 0; i < len; i++) {
            if (i in this) {
                var val = this[i]; // in case fun mutates this
                if (fun.call(thisp, val, i, this))
                    res.push(val);
            }
        }
        return res;
    };
}

$(document).ready(function () {
    var category = getURLParameter('category');
    loadDataForCategory(category);
});

function loadDataForCategory(category) {
    var breadcrumbs = $('.breadcrumb');
    var link = '<a href="index.html">home</a> / <a href="category-all.html?category=';
    switch (category) {
        case 'w':
            link += category + '"> women';
            break;
        case 'm':
            link += category + '"> men';
            break;
        case 'k':
            link += category + '"> kids';
            break;
        case 'cs':
            link += category + '"> coming soon';
            break;
    }
    link += '</a>';
    breadcrumbs.append(link);

    var clothes = JSON.parse(localStorage['full_data']).filter(function (item) {
        return item.category == category;
    });

    var coats = clothes.filter(function (item) {
        return item.sub_category == 'coat'
    });

    var outerwear = clothes.filter(function (item) {
        return item.sub_category == 'outerwear'
    });

    var tshirts = clothes.filter(function (item) {
        return item.sub_category == 'tshirt'
    });

    coats.forEach(function (item) {
        $('#coats_container').append(getHtmlObject(item));
    });

    outerwear.forEach(function (item) {
        $('#outwear_container').append(getHtmlObject(item));
    });

    tshirts.forEach(function (item) {
        $('#tshirts_container').append(getHtmlObject(item));
    });
}

function getHtmlObject(item) {
    var container = document.createElement('div');
    container.className = 'product';
    var picture_container = document.createElement('div');
    picture_container.className = 'pictureOfClothes';
    var image = document.createElement('img');
    image.className = 'large-img';
    image.setAttribute('src', item.img[0]);
    picture_container.appendChild(image);
    var link_container = document.createElement('a');
    link_container.setAttribute('href', 'pdp.html?art=' + item.art.toString());
    link_container.appendChild(picture_container);
    container.appendChild(link_container);
    var name_container = document.createElement('h3');
    name_container.innerHTML = item.name;
    container.appendChild(name_container);
    var price_container = document.createElement('p');
    price_container.innerHTML = '&euro;' + (item.price / 100).toString();
    container.appendChild(price_container)

    return container;
}


function getURLParameter(name) {
    return decodeURIComponent((new RegExp('[?|&]' + name + '=' + '([^&;]+?)(&|#|;|$)').exec(location.search) || [, ""])[1].replace(/\+/g, '%20')) || null;
}