function Recipe(title, ingredients, instructions) {
    this.title = title;
    this.ingredients = ingredients;
    this.instructions = instructions;
  
    this.displayDetails = function() {
      console.log("Title: " + this.title);
      console.log("Ingredients: " + this.ingredients.join(", "));
      console.log("Instructions: " + this.instructions);
    };
  }
  

  // Create an array to store the recipes
const recipes = [];

// Function to add a new recipe
function addRecipe(title, ingredients, instructions) {
  const recipe = new Recipe(title, ingredients, instructions);
  recipes.push(recipe);
}

// Function to view all recipes
function viewRecipes() {
  recipes.forEach(function(recipe, index) {
    console.log("Recipe " + (index + 1));
    recipe.displayDetails();
    console.log("-------------------");
  });
}

// Function to delete a recipe
function deleteRecipe(index) {
  if (index >= 0 && index < recipes.length) {
    recipes.splice(index, 1);
    console.log("Recipe deleted successfully.");
  } else {
    console.log("Invalid recipe index.");
  }
}


/////////////////
// Get references to the form and recipes list
const addRecipeForm = document.getElementById("add-recipe-form");
const recipesList = document.getElementById("recipes-list");

// Event listener for the add recipe form submission
addRecipeForm.addEventListener("submit", function(event) {
  event.preventDefault();

  // Retrieve input values from the form
  const title = document.getElementById("title-input").value;
  const ingredients = document.getElementById("ingredients-input").value.split("\n");
  const instructions = document.getElementById("instructions-input").value;

  // Call the addRecipe function to add a new recipe
  addRecipe(title, ingredients, instructions);

  // Clear the form inputs
  addRecipeForm.reset();

  // Update the recipes list
  updateRecipesList();
});

// Function to update the recipes list in the UI
function updateRecipesList() {
  // Clear the existing list
  recipesList.innerHTML = "";

  // Loop through the recipes array and display each recipe
  recipes.forEach(function(recipe, index) {
    const recipeElement = document.createElement("div");
    recipeElement.innerHTML = "<h3>" + recipe.title + "</h3>" +
                              "<p><strong>Ingredients:</strong> " + recipe.ingredients.join(", ") + "</p>" +
                              "<p><strong>Instructions:</strong> " + recipe.instructions + "</p>" +
                              "<button class='delete-button btn btn-primary' data-index='" + index + "'>Delete Recipe</button>";

    // Event listener for the delete button
    const deleteButton = recipeElement.querySelector(".delete-button");
    deleteButton.addEventListener("click", function() {
      const index = parseInt(deleteButton.getAttribute("data-index"));
      deleteRecipe(index);
      updateRecipesList();
    });

    // Append the recipe element to the recipes list
    recipesList.appendChild(recipeElement);
  });
}

// Call the updateRecipesList function initially to display any existing recipes
updateRecipesList();


