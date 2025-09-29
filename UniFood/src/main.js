import { fetchMeal} from "./api.js";
import { renderMeals, renderError } from "./ui.js";

const mealContainer = document.getElementById("mealList");
const searchInput = document.getElementById("searchMeal");

async function loadMeals(query = "") {
  try {
    const meals = await fetchMeal(query);
    renderMeals(meals, mealContainer);
  } catch (err) {
    renderError(mealContainer, "Gagal memuat daftar makanan.");
  }
}


searchInput.addEventListener("input", e => {
  const query = e.target.value.trim();
  loadMeals(query);
});


loadMeals();
