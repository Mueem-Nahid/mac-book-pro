let flag = 0;

// ----------for 8GB memory----------
document.getElementById("btn-memory-8gb").addEventListener("click", function(){
    const priceMemory8GB = 0;
    itemCharge(priceMemory8GB, "extra-memory-cost");
});

// ----------for 16GB memory----------
document.getElementById("btn-memory-16gb").addEventListener("click", function(){
    const priceMemory16GB = 180;
    itemCharge(priceMemory16GB, "extra-memory-cost");
});

// ----------for 256GB SSD----------
document.getElementById("btn-storage-256gb").addEventListener("click", function(){
    const priceStorage256GB = 0;
    itemCharge(priceStorage256GB, "extra-storage-cost");
});

// ----------for 512GB SSD----------
document.getElementById("btn-storage-512gb").addEventListener("click", function(){
    const priceStorage512GB = 100;
    itemCharge(priceStorage512GB, "extra-storage-cost");
});

// ----------for 1TB SSD----------
document.getElementById("btn-storage-1tb").addEventListener("click", function(){
    const priceStorage1TB = 180;
    itemCharge(priceStorage1TB, "extra-storage-cost");
});

// ----------for free delivery----------
document.getElementById("btn-delivery-free").addEventListener("click", function(){
    const freeDelivery = 0;
    itemCharge(freeDelivery, "delivery-charge");
});

// ----------for paid delivery----------
document.getElementById("btn-delivery-with-charge").addEventListener("click", function(){
    const paidDelivery = 20;
    itemCharge(paidDelivery, "delivery-charge");
});

// ----------for promo code----------
document.getElementById("btn-promo").addEventListener("click", function(){
    const promo = document.getElementById("promo-input").value;
    if(flag == 0)
    {
        applyPromoCode(promo);
    }else{
        alert("Promo code already used!")
    }   
    document.getElementById("promo-input").value = '';
});

// ----------function to display additional item price----------
function itemCharge(price, id){
    document.getElementById(id).innerText = price;
    calculateTotal();
    const total = calculateTotal();
    document.getElementById("total-price").innerText = total;
    document.getElementById("total-price-after-promo").innerText = total;
}

// ----------function to calculate total price----------
function calculateTotal()
{
    const bestPrice = 1299;
    let extraMemoryCost = parseInt(document.getElementById("extra-memory-cost").innerText);
    let extraStorageCost = parseInt(document.getElementById("extra-storage-cost").innerText);
    let deliveryCharge = parseInt(document.getElementById("delivery-charge").innerText);
    var totalPrice = bestPrice + extraMemoryCost + extraStorageCost + deliveryCharge;
    return totalPrice;
}

function applyPromoCode(PromoCode)
{
    var totalPriceAfterPromo = parseInt(document.getElementById("total-price-after-promo").innerText);
    if(PromoCode == 'stevekaku')
    {
        flag = 1;
        const totalAfterPromo = totalPriceAfterPromo - (totalPriceAfterPromo * (20/100));
        document.getElementById("total-price-after-promo").innerText = totalAfterPromo;
    }
    else
    {
        alert("Enter a valid Promo code!");  
    }
}