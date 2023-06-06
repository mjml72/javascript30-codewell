const menuBtn = document.getElementById("menu-btn");
const productsLink = document.querySelectorAll(".products-link");
const navigation = document.getElementById("navigation");
const products = document.getElementById("products");
const closeBtnNavigation = document.getElementById("close-btn-navigation");
const closeBtn = document.getElementById("close-btn");

productsLink.forEach(element => {
    element.addEventListener("click", ()=>{
        products.style.display = products.style.display === "block" ? 
        products.style.display = "none" : products.style.display = "block";
    });
});

closeBtn.addEventListener("click", ()=>{
    products.style.display = "none";
});

closeBtnNavigation.addEventListener("click", ()=>{
    menuBtn.style.display = "block";
    navigation.style.display = "none";
});

menuBtn.addEventListener("click", ()=>{
    navigation.style.display = "block";
    menuBtn.style.display = "none";
});

