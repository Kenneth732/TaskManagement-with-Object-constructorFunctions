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

