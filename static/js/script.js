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
