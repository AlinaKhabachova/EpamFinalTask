var Slider = function () {
    this.initialize.apply(this, arguments)
}
Slider.prototype = {

    initialize: function (slider) {
        this.ul = slider.children[0]
        this.li = this.ul.children

        // make <ul> as large as all <li>’s
        this.ul.style.width = (this.li[0].clientWidth * this.li.length) + 'px'

        this.currentIndex = 0
    },

    goTo: function (index) {
        // filter invalid indices
        if (index < 0 || index > this.li.length - 1)
            return

        // move <ul> left
        this.ul.style.left = '-' + (100 * index) + '%'

        this.currentIndex = index
    },

    goToPrev: function () {
        this.goTo(this.currentIndex - 1)
    },

    goToNext: function () {
        this.goTo(this.currentIndex + 1)
    }
}

function wideSearch() {
    var form = document.createElement("div");
    form.id = "formForSearch";
    form.innerHTML = '<form><input type="search" value="Search something..."><div type="submit" class="icon"><i class="fa fa-search"></i></div></form>';
    $('#search').after($(form));
    $('#search').remove();
    $('.firstHr').attr('id', 'firstHr');
}


function checkScreenWidth() {
    var footer, collectionDiv, siteDiv, shopDiv, socialDiv;
    if (screen.width >= 1024) {
        $('.footer').empty();
        collectionDiv = document.createElement('div');
        $(collectionDiv).attr('class', 'footerFloat');
        $(collectionDiv).attr('id', 'footerCollection');
        $('.footer').append(collectionDiv);
        $(collectionDiv).append('<h3>Collection</h3>')
        $(collectionDiv).append("<ul>" +
            "<li>Women</li>" +
            "<li>Men</li>" +
            "<li>Kids</li>" +
            "<li>Coming Soon</li></ul>");
        siteDiv = document.createElement('div');
        $(siteDiv).attr('class', 'footerFloat');
        $(siteDiv).attr('id', 'footerSite');
        $('.footer').append(siteDiv);
        $(siteDiv).append('<h3>Site</h3>')
        $(siteDiv).append("<ul>" +
            "<li>Terms of Service</li>" +
            "<li>Privacy Policy</li><li>Copyright Policy</li>" +
            "<li>Press Kit</li> " +
            "<li>Support</li></ul>");
        shopDiv = document.createElement('div');
        $(shopDiv).attr('class', 'footerFloat');
        $(shopDiv).attr('id', 'footerShop');
        $('.footer').append(shopDiv);
        $(shopDiv).append('<h3>Shop</h3>')
        $(shopDiv).append('<ul>' +
            '<li>About us</li>' +
            '<li>Shipping Methods</li>' +
            '<li>Career</li>' +
            '<li>Contact</li></ul>');
        socialDiv = document.createElement('div');
        $(socialDiv).attr('class', 'footerFloat');
        $(socialDiv).attr('id', 'footerSocial');
        $('.footer').append(socialDiv);
        $(socialDiv).append('<h3>Social</h3>' +
            '<ul><li>Shoper is made with love in Warsaw, <br> 2014 © All rights reserved. El Passion</li></ul>' + addSocial());
    } else {
        $('.footer').empty();
        $('.footer').append('<h2>Social</h2>Shoper is made with love in Warsaw, <br> 2014 © All rights reserved. El Passion'+addSocial());

    }

}

function addSocial (){
    return '<div id="social">'+
        '<div class="social icon"><i class="fa fa-twitter"></i></div>'+
        '<div class="social icon"><i class="fa fa-facebook"></i></div>'+
        '<div class="social icon"><i class="fa fa-instagram"></i></div>'+
        '</div>';
}


$(document).ready(function () {
    $(window).resize(function () {
        checkScreenWidth();
    });
});
