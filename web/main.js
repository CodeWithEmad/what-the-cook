document.addEventListener('DOMContentLoaded', function () {
  document.getElementById("random").addEventListener("click", function (e) {
    e.preventDefault();
    // read foods.json file and get the list of foods
    fetch("../foods.json").then(function (response) {
      return response.json();
    }).then(function (data) {

      // get a random food from the list
      let randomCategory = Math.floor(Math.random() * data.length);
      let category = data[randomCategory];
      let randomFood = Math.floor(Math.random() * Object.keys(category['content']).length);
      let textCategory = "دسته‌بندی:"+ "&nbsp;" + category['category'];
      let textFood = "غذا:" + "&nbsp;" +  category['content'][randomFood];

      // add random food to the page
      // if main has no child nodes, add a new div else change inner html
      let main = document.getElementById("main");
      if (main.childNodes.length == 0) {
        let card = document.createElement("div");
        card.className = "card";
        let cardBody = document.createElement("div");
        cardBody.className = "card-body";
        let cardTitle = document.createElement("div");
        cardTitle.className = "card-title";
        cardTitle.innerHTML = textCategory;
        let cardText = document.createElement("div");
        cardText.className = "card-text";
        cardText.innerHTML = textFood;
        card.appendChild(cardTitle);
        card.appendChild(cardText);
        main.appendChild(card);
      } else {
        let card = main.childNodes[0]
        let child = card.childNodes[0];
        child.innerHTML = textCategory;
        let child2 = card.childNodes[1];
        child2.innerHTML = textFood;
      }
    });
  }
  );
}
);