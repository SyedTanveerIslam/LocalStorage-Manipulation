const addToCart = () => {
    const productNameText = document.getElementById("product-name");
    const productPriceText = document.getElementById("product-price");
    const productName = productNameText.value;
    const productPrice = productPriceText.value;
    if (!productName || !productPrice) {
        return;
    }
    productNameText.value = "";
    productPriceText.value = "";
    //display Product in UI
    displayProducts(productName, productPrice);
    //add Product to localstorage
    addProductToCart(productName, productPrice);
}

const displayProducts = (name, price) => {
    const productList = document.getElementById("product-list");
    const product = document.createElement("li");
    product.innerHTML = `${name}: ${price} Tk`;
    productList.appendChild(product);
}

const getCart = () => {
    const cart = localStorage.getItem("cart");
    let cartObj;
    if (cart) {
        cartObj = JSON.parse(cart);
    }
    else {
        cartObj = {};
    }
    return cartObj;
}

const addProductToCart = (name, value) => {
    const cart = getCart();
    if (cart[name]) {
        cart[name] = (parseFloat(cart[name]) + parseFloat(value)) + "";
    }
    else {
        cart[name] = value;
    }
    const cartStringified = JSON.stringify(cart);
    localStorage.setItem("cart", cartStringified);
}

const displayProductFromLocalStorage = () => {
    const products = getCart();
    for (const product in products) {
        displayProducts(product,products[product])
    }
}
displayProductFromLocalStorage();