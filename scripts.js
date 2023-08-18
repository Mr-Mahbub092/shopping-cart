let total = 0;

function setButton(data){
  // To add item names in the cart
  const addedItems = document.getElementById('added-items');
  const itemName = data.parentNode.parentNode.childNodes[1].innerText;

  const li = document.createElement('li');
  li.innerText = itemName;
  addedItems.appendChild(li);

  const price = data.parentNode.parentNode.childNodes[5].innerText.split(' ')[1];

  // to set total amount
  total = parseFloat(total) + parseFloat(price);
  const totalElement = document.getElementById('total').innerText = total;

  // set 20% discount
  const discount = document.getElementById('discount').innerText = (total * 0.2).toFixed(2);


  // set grand Total
  document.getElementById('grand-total').innerText = total - discount;
  console.log(discount);
 
}

