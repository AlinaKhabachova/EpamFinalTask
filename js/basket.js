function showBasket() {
    var basket = document.getElementById("basket");
    basket.innerHTML = "";
    var item = document.createElement('div');
    var picture = document.createElement('div');
    picture.className = "pictureOfItem";
    var removeItem = document.createElement('div');
    removeItem.className = "deleteItem";

}