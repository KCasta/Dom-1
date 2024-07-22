//like icon
const likeICON = document.querySelectorAll(".fa-regular");

let liked = false;
likeICON.forEach(function (likeICOn) {
  likeICOn.addEventListener("click", function () {
    liked = !liked;
    if (liked) {
      likeICOn.setAttribute("class", "fa-solid fa-heart");
    } else {
      likeICOn.setAttribute("class", "fa-regular fa-heart");
    }
  });
});
// console.log("likeICON");

// // adition

//  calculate the unit-price with the quantity

document.addEventListener("DOMContentLoaded", () => {
  const increaseButtons = document.querySelectorAll(".fa-plus-circle");
  const decreaseButtons = document.querySelectorAll(".fa-minus-circle");
  const totalElement = document.querySelector(".total");

  function updateTotalPrice() {
    const quantities = document.querySelectorAll(".quantity");
    const unitPrices = document.querySelectorAll(".unit-price");
    let totalPrice = 0;

    quantities.forEach((quantityElement, index) => {
      const quantity = parseInt(quantityElement.textContent);
      const unitPrice = parseFloat(
        unitPrices[index].textContent.replace(" $", "")
      );
      totalPrice += quantity * unitPrice;
    });

    totalElement.textContent = totalPrice.toFixed(1) + " $";
  }
  // increase button
  increaseButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const quantityElement = button.nextElementSibling;
      let quantity = parseInt(quantityElement.textContent);
      quantityElement.textContent = quantity + 1;
      updateTotalPrice();
    });
  });

  decreaseButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const quantityElement = button.previousElementSibling;
      let quantity = parseInt(quantityElement.textContent);
      if (quantity > 0) {
        quantityElement.textContent = quantity - 1;
        updateTotalPrice();
      }
    });
  });
});

const deleteIcon = document.querySelectorAll(".fa-trash-alt");

deleteIcon.forEach((button) => {
  button.addEventListener("click", () => {
    const cardBody = button.closest(".card-body");
    cardBody.remove();
    updateTotalPrice();
  });
});
