document.addEventListener("DOMContentLoaded", () => {
  const takeAway = new TakeAway();
  const menu = takeAway.getMenu();
  const totalNode = document.querySelector("#total_price");
  Object.keys(menu).forEach((value) => {
    // create li
    const liNode = document.createElement("li");
    liNode.textContent = `Name: ${value} price: £${menu[value]}   `;

    //create  add button
    const addButtonNode = document.createElement("button");
    addButtonNode.textContent = "add";
    addButtonNode.addEventListener("click", () => {
      takeAway.add(value);
      spanNode.textContent = takeAway.myOrder[value];
      totalNode.textContent = takeAway.getTotal();
    });
    liNode.appendChild(addButtonNode);

    // create current quantity
    const spanNode = document.createElement("span");
    spanNode.textContent = 0;
    liNode.appendChild(spanNode);
    // create remove button
    const removeButtonNode = document.createElement("button");
    removeButtonNode.textContent = "remove";
    removeButtonNode.addEventListener("click", () => {
      takeAway.remove(value);
      spanNode.textContent = takeAway.myOrder[value] || 0;
      totalNode.textContent = takeAway.getTotal();
    });
    liNode.appendChild(removeButtonNode);

    document.getElementById("menu").appendChild(liNode);
  });

  // checkout button
  document.querySelector("#order").addEventListener("click", () => {
    // TODO - add send sms
  });
});
