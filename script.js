 // const el = (id) => document.getElementById(id)
const DOM ={

  plusBtns : document.querySelectorAll(".fa-plus-circle"),
 minusBtn : document.querySelectorAll(".fa-minus-circle"),
 prices : document.querySelectorAll(".unit-price"),
 quantities: document.querySelectorAll(".quantity"),
 deleteBtn: document.querySelectorAll(".fa-trash-alt"),
 Heartbtn:document.querySelectorAll(".fa-heart"),
}
DOM.plusBtns.forEach((btn) =>  {
    btn.addEventListener ("click",()=>{
      const span= btn.nextElementSibling;
      const current= Number(span.textContent);
      const increase = current +1;
      span.textContent= increase;
        console.log(increase);
        updateTotal();
    })
});

DOM.minusBtn.forEach((btn)=>{
    btn.addEventListener("click",()=>{
        const span=btn.previousElementSibling;
        const current=Number(span.textContent);
        if (current > 0){
        const Reduction = current -1;
        span.textContent= Reduction;
        console.log(Reduction);
        updateTotal();
        }
    })
})
// function updateTotal() {
//   let sum = 0;
//   DOM.prices.forEach((priceEl, i) => {
//     const price = parseInt(priceEl.textContent);
//     const qty = Number(DOM.quantities[i].textContent);
//     sum = sum + price*qty;
//   });
//   console.log(sum);
//}

function updateTotal() {
  let sum = 0;
  DOM.prices.forEach((priceEl, i) => {
    const price = parseInt(priceEl.textContent);
    const qty = Number(DOM.quantities[i].textContent);
    sum = sum + price * qty;
  });
  console.log(sum);

  const totalEl = document.querySelector(".total");
  totalEl.textContent = `$`+sum;

}
updateTotal();
DOM.deleteBtn.forEach((btn)=>{
    btn.addEventListener("click",()=>{
const card= btn.closest(".card");
card.remove();
updateTotal();
    })
})
DOM.Heartbtn.forEach((btn) => {
  btn.addEventListener("click", () => {
    btn.classList.toggle("liked");
  });
});