import books from "./list_books.js";

const card = (name, type, url) => {
  let img_type = "test";
  if (type === "китоб" || type === "книга" || type === "book") {
    img_type = "book";
  } else img_type = "test";

  return `
    <div class="card" style="align-items: center">
      <img
        src="./images/${img_type}.png"
        class="card-img-top"
        alt="..."
        style="width: 10rem; padding: 0.5rem"
      />
      <div class="card-body">
        <h5 class="card-title">
          <span class="item_title">Name: </span>${name}
        </h5>

        <!-- <h6><span class="item_type">Тип: </span> <span>${type}</span></h6> -->

        <a
          href="${url}"
          class="btn btn-primary item_download"
          style="margin-left: 1rem; margin-top: 1rem"
          download
          >Download</a
        >
      </div>
    </div>
  `;
};

const create_card = () => {
  let root_row = document.getElementById("root_row");

  books.forEach((book) => {
    // Создайте элемент div
    const cardElement = document.createElement("div");
    // Установите его класс
    cardElement.className = "col"; // Установите класс "col"

    // Установите HTML содержимое элемента
    cardElement.innerHTML = card(book.name, book.type, book.url);
    // Добавьте элемент в DOM
    root_row.appendChild(cardElement);
  });
};

create_card();

function search_algorithm() {
  window.onload = () => {
    let input = document.querySelector("#search");
    input.oninput = function () {
      let value = this.value.trim();
      let list = document.querySelectorAll(".col");
      if (value) {
        value = value.toLowerCase();
        // console.log(value);

        list.forEach((elem) => {
          let k = elem.innerText.toLowerCase();
          if (k.search(value) == -1) {
            elem.classList.add("hide");
          } else elem.classList.remove("hide");
        });
      } else {
        list.forEach((elem) => {
          elem.classList.remove("hide");
        });
      }
    };
  };
}

search_algorithm();

const title = document.getElementById("title");
const home = document.getElementById("home_nav");
const about = document.getElementById("about_nav");
const contact = document.getElementById("contact_nav");
const search = document.getElementById("search");
const item_title = document.getElementById("item_title");
const item_type = document.getElementById("item_type");
const item_download = document.getElementById("item_download");
const title_About = document.getElementById("title_about");
const text_About = document.getElementById("text_about");

let translate = [
  document.getElementById("title"),
  document.getElementById("home_nav"),
  document.getElementById("about_nav"),
  document.getElementById("contact_nav"),
  document.getElementById("search"),
  document.querySelectorAll(".item_title"),
  document.querySelectorAll(".item_type"),
  document.querySelectorAll(".item_download"),
  document.getElementById("title_about"),
  document.getElementById("text_about"),
];
translate.forEach((element) => {
  console.log(element);
});
function changeText(variable, change) {
  variable.textContent = change;
}

function translateFun(lang = "tj") {
  changeText(translate[0], language[lang].title);
  changeText(translate[1], language[lang].home);
  changeText(translate[2], language[lang].about);
  changeText(translate[3], language[lang].contact);
  translate[4].placeholder = language[lang].search;
  translate[5].forEach((element) => {
    changeText(element, language[lang].item_title);
  });
  translate[6].forEach((element) => {
    changeText(element, language[lang].item_type);
  });

  translate[7].forEach((element) => {
    changeText(element, language[lang].item_download);
  });

  // changeText(translate[5], language.tj.item_title);
  // changeText(translate[8], language.tj.item_type);
  changeText(translate[8], language[lang].title_about);
  changeText(translate[9], language[lang].text_about);
  console.log("Hello");
}

translateFun();

const selectElement = document.getElementById("select_lang");

// Функция, которая будет выполнена при изменении выбора
function handleChange() {
  // Получаем выбранное значение
  const selectedValue = selectElement.value;
  translateFun(selectedValue);
  // Выполните здесь вашу функцию или код, который должен выполниться при изменении выбора
  console.log("Выбрано значение: " + selectedValue);
}

// Назначаем обработчик события на изменение элемента <select>
selectElement.addEventListener("change", handleChange);
