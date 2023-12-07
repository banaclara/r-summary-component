import data from "../data/data.json" assert {type: "json"};

document.addEventListener("DOMContentLoaded", function () {
  const categories = data;
  const container = document.getElementById("categories");

  categories.forEach(function (categories) {
    var section = document.createElement("section");
    section.classList.add(categories.category);

    var h4 = document.createElement("h4");
    var img = document.createElement("img");
    var p = document.createElement("p");
    var span = document.createElement("span");

    section.appendChild(h4);
    section.appendChild(p);
    h4.appendChild(img);
    img.src = categories.icon;
    img.alt = categories.category;
    h4.appendChild(document.createTextNode(categories.category));
    p.classList.add("score");
    p.appendChild(span);
    span.appendChild(document.createTextNode(categories.score));
    span.classList.add("scored");
    p.appendChild(document.createTextNode(" / 100"));

    container.appendChild(section);
  });
});
