function showBasket() {
    var basket = document.getElementById("basket");
    basket.innerHTML = "";
    var item = document.createElement('div');
    var picture = document.createElement('div');
    picture.className = "pictureOfItem";
    var removeItem = document.createElement('div');
    removeItem.className = "deleteItem";
    var name = document.createElement('h3');


//<h3>Floral Plimsoll (1st)</h3>
//    <p>Ref. 2514/302</p>
//    <p>Black</p>
//    <p>39</p>
//    <form>
//    <input type="number" name="quantity" min="1" max="99" value="1">
//        </form>
//        <p class="sum">&euro;99.95</p>
}

localStorage['basket'] = [
        {
            ref : "2514/302",
            collor: "black",
            name: "name",
            price: 20,
            size: 32,
            count: 1
        },
        {
            ref : "2514/302",
            collor: "white",
            name: "name 2",
            price: 30,
            size: 40,
            count: 2
        }
    ];