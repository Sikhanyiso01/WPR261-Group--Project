document.addEventListener('DOMContentLoaded', () => {
    const searchButton = document.getElementById('btn');
    const searchBar = document.getElementById('searchInput');
    const recipeList = document.getElementById('recipe-list');
    const recipeDetailsSection = document.getElementById('recipe-details-section');
    const recipeTitle = document.getElementById('recipe-title');
    const recipeImage = document.getElementById('recipe-image');
    const recipeIngredients = document.getElementById('recipe-ingredients');
    const recipeSteps = document.getElementById('recipe-steps');
    const printButton = document.getElementById('print-button');

    const recipes = [
        {
            id: 1,
            title: "Spaghetti Carbonara",
            description: "A classic Italian pasta dish.",
            ingredients: ["Spaghetti", "Eggs", "Parmesan cheese", "Pancetta", "Pepper"],
            steps: [
                "Boil the spaghetti.",
                "Cook the pancetta until crisp.",
                "Mix eggs and cheese in a bowl.",
                "Combine spaghetti with pancetta and remove from heat.",
                "Stir in the egg mixture and serve."
            ],
            image: "images/spaghetti-carbonara.jpeg"
        },
        {
            id: 2,
            title: "Chicken Curry",
            description: "A flavorful chicken curry.",
            ingredients: ["Chicken", "Onions", "Tomatoes", "Garlic", "Spices"],
            steps: [
                "Sauté onions and garlic.",
                "Add spices and cook until fragrant.",
                "Add chicken and brown.",
                "Add tomatoes and simmer until chicken is cooked.",
                "Serve with rice."
            ],
            image: "images/chicken_curry.jpeg"
        },
        {
            id: 3,
            title: "Vegetable Stir-Fry",
            description: "A quick and healthy vegetable stir-fry.",
            ingredients: ["Broccoli", "Carrots", "Bell peppers", "Soy sauce", "Ginger", "Garlic"],
            steps: [
                "Chop all vegetables.",
                "Heat oil in a pan and add garlic and ginger.",
                "Add vegetables and stir-fry until tender.",
                "Add soy sauce and mix well.",
                "Serve hot with rice or noodles."
            ],
            image: "images/vegetable_stir_fry.jpeg"
        },
        {
            id: 4,
            title: "Beef Tacos",
            description: "Delicious and easy beef tacos.",
            ingredients: ["Ground beef", "Taco seasoning", "Taco shells", "Lettuce", "Cheese", "Tomatoes"],
            steps: [
                "Cook ground beef in a pan.",
                "Add taco seasoning and water, simmer until thickened.",
                "Warm taco shells in the oven.",
                "Assemble tacos with beef, lettuce, cheese, and tomatoes.",
                "Serve with your favorite taco toppings."
            ],
            image: "images/beef_tacos.jpeg"
        },
        {
            id: 5,
            title: "Pancakes",
            description: "Fluffy and delicious pancakes.",
            ingredients: ["Flour", "Milk", "Eggs", "Baking powder", "Sugar", "Salt"],
            steps: [
                "Mix flour, baking powder, sugar, and salt in a bowl.",
                "Add milk and eggs, whisk until smooth.",
                "Heat a pan and pour batter to form pancakes.",
                "Cook until bubbles form, then flip and cook the other side.",
                "Serve with syrup, butter, and your favorite toppings."
            ],
            image: "images/pancakes.jpeg"
        }
    ];

    function displayRecipes(recipes) {
        recipeList.innerHTML = '';
        recipes.forEach(recipe => {
            const li = document.createElement('li');
            li.textContent = recipe.title ;
            li.addEventListener('click', () => displayRecipeDetails(recipe));
            recipeList.appendChild(li);
        });
    }

    function displayRecipeDetails(recipe) {
        recipeTitle.textContent = recipe.title;
        recipeImage.src = recipe.image;
        recipeIngredients.innerHTML = '';
        recipeSteps.innerHTML = '';
        recipe.ingredients.forEach(ingredient => {
            const li = document.createElement('li');
            li.textContent = ingredient;
            li.addEventListener('click', () => li.classList.toggle('purchased'));
            recipeIngredients.appendChild(li);
        });
        recipe.steps.forEach(step => {
            const li = document.createElement('li');
            li.textContent = step;
            recipeSteps.appendChild(li);
        });
    }

    searchButton.addEventListener('click', () => {
        const query = searchBar.value.toLowerCase();
        const filteredRecipes = recipes.filter(recipe => recipe.title.toLowerCase().includes(query));
        displayRecipes(filteredRecipes);
    });

    printButton.addEventListener('click', () => {
        window.print();
    });

    // Initial display of all recipes
    displayRecipes(recipes);
});