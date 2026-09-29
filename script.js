const search=document.getElementById("search");
const cards=[...document.querySelectorAll(".recipe-card,.category-coming")];
const empty=document.getElementById("no-results");
let currentFilter="all";
function applyFilters(){
 const term=(search?.value||"").toLowerCase().trim(); let visible=0;
 cards.forEach(card=>{
  const name=(card.dataset.name||"").toLowerCase();
  const cats=(card.dataset.category||"").split(" ");
  const show=(currentFilter==="all"||cats.includes(currentFilter))&&(!term||name.includes(term));
  card.style.display=show?"":"none"; if(show) visible++;
 });
 if(empty) empty.style.display=visible?"none":"block";
}
document.querySelectorAll("[data-filter]").forEach(btn=>btn.addEventListener("click",e=>{
 e.preventDefault(); currentFilter=btn.dataset.filter;
 document.querySelectorAll(".category-pills button").forEach(b=>b.classList.toggle("active",b.dataset.filter===currentFilter));
 applyFilters(); document.getElementById("recipes")?.scrollIntoView({behavior:"smooth"});
}));
if(search) search.addEventListener("input",applyFilters); applyFilters();
