const search = document.getElementById("search");
const cards = [...document.querySelectorAll(".recipe-card, .category-coming")];
const empty = document.getElementById("no-results");

let currentFilter = "all";

function cardMatches(card) {
  const term = (search?.value || "").toLowerCase().trim();
  const name = (card.dataset.name || "").toLowerCase();

  const categories = (card.dataset.category || "")
    .toLowerCase()
    .split(/\s+/)
    .filter(Boolean);

  const matchesCategory =
    currentFilter === "all" ||
    categories.includes(currentFilter);

  const matchesSearch =
    !term ||
    name.includes(term) ||
    categories.includes(term);

  return matchesCategory && matchesSearch;
}

function applyFilters() {
  let visible = 0;

  cards.forEach(card => {
    const show = cardMatches(card);

    card.hidden = !show;

    if (show) visible++;
  });

  if (empty) {
    empty.hidden = visible !== 0;
  }
}

function setFilter(filter) {
  currentFilter = (filter || "all").toLowerCase();

  document.querySelectorAll(".category-pills button").forEach(button => {
    button.classList.toggle(
      "active",
      button.dataset.filter === currentFilter
    );
  });

  applyFilters();

  function setFilter(filter) {
  currentFilter = (filter || "all").toLowerCase();

  document.querySelectorAll(".category-pills button").forEach(button => {
    button.classList.toggle(
      "active",
      button.dataset.filter === currentFilter
    );
  });

  applyFilters();
}
}
document.querySelectorAll("button[data-filter], .category-dropdown a[data-filter]").forEach(button => {
  button.addEventListener("click", event => {
    event.preventDefault();
    setFilter(button.dataset.filter);
  });
});

if (search) {
  search.addEventListener("input", applyFilters);
}

applyFilters();
/* ================================
   ENGLISH / HINDI RECIPE SWITCH
   ================================ */

const languageButtons = document.querySelectorAll(".language-btn");
const englishRecipe = document.querySelector(".recipe-english");
const hindiRecipe = document.querySelector(".recipe-hindi");

languageButtons.forEach(button => {
  button.addEventListener("click", () => {

    const selectedLanguage = button.dataset.language;

    languageButtons.forEach(btn => {
      btn.classList.remove("active");
    });

    button.classList.add("active");

    if (selectedLanguage === "hindi") {
      englishRecipe.hidden = true;
      hindiRecipe.hidden = false;
    } else {
      englishRecipe.hidden = false;
      hindiRecipe.hidden = true;
    }

  });
});
