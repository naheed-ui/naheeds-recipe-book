const recipes = [
  {
    emoji: "🥙",
    title: "Keema Kabab",
    category: "Mutton • Beginner",
    description: "Soft, flavourful keema kababs made with keema, chana dal and warming spices.",
    file: "recipes/01-keema-kabab.html"
  },
  {
    emoji: "🥔🌿",
    title: "Aloo Drumstick Curry",
    category: "Vegetarian • Beginner",
    description: "A comforting spicy curry with a ginger-garlic-mustard masala and tender drumsticks.",
    file: "recipes/02-aloo-drumstick.html"
  }
];

const grid = document.getElementById("recipeGrid");
const search = document.getElementById("search");

function render(list) {
  grid.innerHTML = list.length ? list.map(r => `
    <article class="card">
      <div class="emoji">${r.emoji}</div>
      <h3>${r.title}</h3>
      <div class="meta">${r.category}</div>
      <p>${r.description}</p>
      <a href="${r.file}">Open recipe →</a>
    </article>
  `).join("") : "<p>No recipe found — try another word 💕</p>";
}
render(recipes);

search.addEventListener("input", e => {
  const q = e.target.value.toLowerCase();
  render(recipes.filter(r =>
    `${r.title} ${r.category} ${r.description}`.toLowerCase().includes(q)
  ));
});
