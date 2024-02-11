let buyf = false;
const btn = document.getElementById('btn');
let bank = 0
let product_price = document.querySelector(".product__price")
let basket_price = document.querySelector(".product__price")
function buy() {
	if(!buyf) {
		btn.style.background = 'white';
		btn.innerHTML = 'In the bag';
		btn.style.color = 'black';
	} else {
		btn.style.background = '#0D0C0C';
		btn.innerHTML = 'Add to bag';
		btn.style.color = 'white';
	}
}
