var Slider = function () {
    this.initialize.apply(this, arguments)
};
Slider.prototype = {

    initialize: function (slider) {
        this.ul = slider.children[0];
        this.li = this.ul.children;

        // make <ul> as large as all <li>’s
        this.ul.style.width = (this.li[0].clientWidth * this.li.length) + 'px';

        this.currentShift = 0;
    },

    goTo: function (goToNext) {
        var shift = this.currentShift + this.li[0].clientWidth * (goToNext ? 1 : -1);
        var ulWidth = $(this.ul).width();
        var sliderWidth = $('.slider').width();
        if (sliderWidth + shift >= ulWidth) {
            shift = ulWidth - sliderWidth;
        } else if (shift < 0) {
            shift = 0;
        }
        this.ul.style.left = '-' + shift + 'px';

        this.currentShift = shift;
    },

    goToPrev: function () {
        this.goTo(false);
    },

    goToNext: function () {
        this.goTo(true);
    },

    fixStyle: function () {
        var ulWidth = $(this.ul).width();
        var sliderWidth = $('.slider').width();
        if (this.currentShift + sliderWidth >= ulWidth) {
            this.currentShift = ulWidth - sliderWidth;
        }
        this.ul.style.left = '-' + this.currentShift + 'px';
    }
}

$(document).ready(function(){
        var sliders = [];
        $('.slider').each(function () {
            sliders.push(new Slider(this));
        });
        $(window).resize(function () {
            sliders.forEach(function (slider) {
                slider.fixStyle();
            });
        });
        $('.buttonNext').click(function() {
            sliders[0].goToNext();
        });
        $('.buttonPrev').click(function() {
            sliders[0].goToPrev();
        });
    }
);