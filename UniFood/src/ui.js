export function renderMeals(meals, container) {
  container.innerHTML = "";

  if (!meals || meals.length === 0) {
    container.innerHTML = "<p>Tidak ada makanan ditemukan.</p>";
    return;
  }

  
  meals.forEach(meal => {
    const card = document.createElement("div");
    card.className = "meal-card";

    
    let ingredients = "";
    for (let i = 1; i <= 20; i++) {
      const ingredient = meal[`strIngredient${i}`];
      const measure = meal[`strMeasure${i}`];
      if (ingredient && ingredient.trim() !== "") {
        ingredients += `<li>${ingredient} - ${measure || ""}</li>`;
      }
    }

   card.innerHTML = `
      <h3>${meal.strMeal}</h3>
      <img src="${meal.strMealThumb}" width="200">
      <p><b>Asal:</b> ${meal.strArea}</p>
      <p><b>Kategori:</b> ${meal.strCategory}</p>
      <h4>Bahan-bahan:</h4>
      <ul>${ingredients}</ul>
      <h4>Cara Masak:</h4>
      <p>${meal.strInstructions}</p>
    `;
    container.appendChild(card);
  });
}


export function renderError(container, message) {
  container.innerHTML = `<p style="color:red">${message}</p>`;
}