var basket = [];
$(document).ready(function () {
    if (localStorage['basket'] === undefined || localStorage['basket'] === '[]' || localStorage['basket'] === '') {
        localStorage['basket'] = [];
        basket = [];
    } else {
        basket = JSON.parse((localStorage['basket']));
    }

    initBasket();
});

function initBasket() {
    var basketContainer = $('#basket');
    basket.forEach(function (item) {
        var newBasketItem = document.createElement('div');
        newBasketItem.className = 'item';

        var pictureContainer = document.createElement('div');
        pictureContainer.className = 'pictureOfItem';
        var picture = document.createElement('img');
        picture.className = 'large-img';
        picture.setAttribute('src', item.img[0]);
        pictureContainer.appendChild(picture);
        var deleteIconContainer = document.createElement('div');
        deleteIconContainer.className = 'deleteItem';
        var deleteIcon = document.createElement('i');
        deleteIcon.setAttribute('class', 'fa fa-times');
        deleteIconContainer.appendChild(deleteIcon);

        $(deleteIconContainer).click(function () {
            newBasketItem.remove();
            basket = basket.filter(function (el) {
                return el.art != item.art || el.size != item.size
            });
            calculateSum();
            $('#basketCount').html(basket.length.toString());
            localStorage.setItem('basket', JSON.stringify(basket));
        });

        var name = document.createElement('h3');
        name.innerHTML = item.name;
        var ref = document.createElement('p');
        ref.innerHTML = item.art;
        var color = document.createElement('p');
        color.innerHTML = 'One color';
        var size = document.createElement('p');
        size.innerHTML = item.size;
        var form = document.createElement('form');
        var count = document.createElement('input');
        count.setAttribute('type', 'number');
        count.setAttribute('name', 'quantity');
        count.setAttribute('min', '1');
        count.setAttribute('max', '9');
        count.setAttribute('value', item.count);

        $(count).bind('change', function () {
            var newCount = $(this).val();
            item.count = newCount;
            localStorage.setItem('basket', JSON.stringify(basket));
            calculateSum();
            priceContainer.innerHTML = '&euro;' + (item.price * newCount / 100).toString();
        });

        form.appendChild(count);
        var priceContainer = document.createElement('p');
        priceContainer.className = 'sum';
        var price = (item.price * item.count / 100);
        priceContainer.innerHTML = '&euro;' + price.toString();

        newBasketItem.appendChild(document.createElement('hr'));
        newBasketItem.appendChild(pictureContainer);
        newBasketItem.appendChild(deleteIconContainer);
        newBasketItem.appendChild(name);
        newBasketItem.appendChild(ref);
        newBasketItem.appendChild(color);
        newBasketItem.appendChild(size);
        newBasketItem.appendChild(form);
        newBasketItem.appendChild(priceContainer);

        basketContainer.append(newBasketItem);
    });
    basketContainer.append(document.createElement('hr'));
    var aggregateSum = document.createElement('div');
    aggregateSum.id = 'aggregateSum';
    basketContainer.append(aggregateSum);
    calculateSum();
}

function calculateSum() {
    var sum = 0;
    basket.forEach(function (item) {
        sum += item.price * item.count / 100;
    });
    $('#aggregateSum').html('Subtotal: <span>&euro;' + sum + '</span>');
}

function backToShopping() {
    window.history.back();
}

function sendOrder() {
    if (localStorage['basket'] != undefined && localStorage['basket'] != '[]' && localStorage['basket'] != '') {
        localStorage['basket'] = '';
        window.location.href = 'thankYou.html';
    }
}