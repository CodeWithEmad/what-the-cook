document.addEventListener('DOMContentLoaded', function () {
        let Gdata;
        let main = document.getElementById("main");
        // read foods.json file and get the list of foods
        let food_json = "https://raw.githubusercontent.com/CodeWithEmad/ChiBepazam/master/foods.json";
        fetch(food_json).then(function (response) {
            return response.json();
        }).then(function (data) {
            Gdata = data;
        });
        document.getElementById("random").addEventListener("click", function (e) {
            e.preventDefault();
            // remove class main-list form main if exist
            if (main.classList.contains("main-list")) {
                main.classList.remove("main-list");
            }
            // get a random food from the list
            let randomCategory = Math.floor(Math.random() * Gdata.length);
            let category = Gdata[randomCategory];
            let randomFood = Math.floor(Math.random() * Object.keys(category['content']).length);
            let textCategory = "دسته‌بندی:" + "&nbsp;" + category['category'];
            let textFood = "غذا:" + "&nbsp;" + category['content'][randomFood];

            // add random food to the page
            // if main has no child nodes, add a new div else change inner html

            main.innerHTML = "";
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

        });
        
        document.getElementById("list").addEventListener("click", function (e) {
            e.preventDefault();
            // add class main-list form main if not exist
            if (!main.classList.contains("main-list")) {
                main.classList.add("main-list");
            }
            // show list of foods separated by category
            main.innerHTML = "";
            for (let i = 0; i < Gdata.length; i++) {
                let card = document.createElement("div");
                card.className = "card";
                let cardBody = document.createElement("div");
                cardBody.className = "card-body";
                let cardTitle = document.createElement("div");
                cardTitle.className = "card-title";
                cardTitle.innerHTML = Gdata[i]['category'];
                let cardText = document.createElement("div");
                cardText.className = "card-text";
                let ul = document.createElement("ul");
                for (let j = 0; j < Object.keys(Gdata[i]['content']).length; j++) {
                    let li = document.createElement("li");
                    li.innerHTML = Gdata[i]['content'][j];
                    ul.appendChild(li);
                }
                cardText.appendChild(ul);
                card.appendChild(cardTitle);
                card.appendChild(cardText);
                main.appendChild(card);
            }
        });
    }
);