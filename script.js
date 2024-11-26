const recipes = [
    {
        label: "Spaghetti Carbonara",
        image: "Spaghetti Carbonara.jpeg",
        type: "nonveg", // non-veg recipe
        ingredients: [
            "200g spaghetti",
            "100g pancetta",
            "2 large eggs",
            "50g pecorino cheese",
            "50g parmesan cheese",
            "Freshly ground black pepper",
            "Salt"
        ],
        instructions: `
            1. Cook the spaghetti in a large pot of salted boiling water until al dente.
            2. Meanwhile, fry the pancetta in a pan until crispy.
            3. Beat the eggs in a bowl and stir in the cheeses.
            4. Drain the spaghetti and mix with pancetta.
            5. Remove from heat and quickly stir in the egg mixture. Toss until the spaghetti is coated.
            6. Serve with extra cheese and black pepper.
        `
    },
    {
        label: "Chicken Alfredo",
        image: "Chicken Alfredo Recipe.jpeg",
        type: "nonveg", // Non-vegetarian recipe
        ingredients: [
            "200g fettuccine",
            "2 chicken breasts",
            "2 tbsp butter",
            "200ml heavy cream",
            "50g parmesan cheese",
            "Salt and pepper"
        ],
        instructions: `
            1. Cook the fettuccine in a large pot of salted boiling water until al dente.
            2. Cook the chicken breasts in a pan until browned and fully cooked. Slice them thinly.
            3. In a pan, melt butter and stir in the heavy cream. Add parmesan and stir until melted.
            4. Combine the fettuccine with the sauce and top with chicken slices.
            5. Serve with extra parmesan and pepper.
        `
    },
    {
        label: "Vegetarian Stir-Fry with Tofu",
        image: "Vegetarian Stir-Fry with Tofu.jpeg",
        type: "veg", // Vegetarian recipe
        ingredients: [
            "1 block (14 oz) firm tofu, drained and cubed",
            "1 tablespoon soy sauce (for marinating tofu)",
            "2 tablespoons vegetable oil (divided)",
            "1 small onion, sliced",
            "2 cloves garlic, minced",
            "1-inch piece of ginger, grated",
            "1 bell pepper, sliced",
            "1 large carrot, julienned",
            "1 zucchini, sliced",
            "1 cup broccoli florets",
            "1 cup snap peas",
            "2 tablespoons soy sauce (for the stir-fry)",
            "1 tablespoon hoisin sauce (optional)",
            "1 teaspoon sesame oil",
            "1 tablespoon sesame seeds (optional, for garnish)",
            "Cooked rice or noodles (optional, for serving)"
        ],
        instructions: `
            1. Drain and pat the tofu dry, then cut it into cubes. Marinate with soy sauce for 10 minutes.
            2. Heat 1 tablespoon of oil in a pan. Cook the tofu until golden brown on all sides. Remove and set aside.
            3. Heat the remaining oil and sauté onion, garlic, and ginger for 2 minutes.
            4. Add bell pepper, carrot, zucchini, broccoli, and snap peas. Stir-fry for 5-7 minutes until tender.
            5. Return tofu to the pan and stir in soy sauce, hoisin sauce (if using), and sesame oil. Cook for 2 more minutes.
            6. Garnish with sesame seeds and serve with rice or noodles.
        `
    },
    {
        label: "Beef Stroganoff",
        image: "Beef Stroganoff.jpeg",
        type: "nonveg", // Non-vegetarian recipe
        ingredients: [
            "500g beef sirloin, thinly sliced",
            "1 onion, chopped",
            "2 cloves garlic, minced",
            "200g mushrooms, sliced",
            "200ml sour cream",
            "2 tablespoons flour",
            "200ml beef broth",
            "2 tablespoons butter",
            "Salt and pepper"
        ],
        instructions: `
            1. In a pan, melt the butter and cook the beef until browned. Remove from pan.
            2. Sauté onion and garlic until softened, then add mushrooms and cook for 5 minutes.
            3. Sprinkle flour over the mixture and stir in the beef broth.
            4. Add sour cream and simmer until thickened.
            5. Return beef to the pan and season with salt and pepper.
            6. Serve over egg noodles or rice.
        `
    },
    {
        label: "Butter Chicken",
        image: "Butter Chicken.jpeg",
        type: "nonveg", // Non-vegetarian recipe
        ingredients: [
            "500g chicken thighs, boneless and skinless",
            "2 tablespoons butter",
            "1 onion, chopped",
            "2 cloves garlic, minced",
            "1 tablespoon ginger, grated",
            "200ml tomato puree",
            "200ml heavy cream",
            "1 tablespoon garam masala",
            "1 teaspoon turmeric",
            "1 teaspoon cumin",
            "1 teaspoon chili powder",
            "Salt and pepper",
            "Fresh cilantro (for garnish)"
        ],
        instructions: `
            1. Marinate chicken with salt, pepper, and spices for 30 minutes.
            2. In a pan, melt butter and cook chicken until browned.
            3. Remove chicken and sauté onion, garlic, and ginger.
            4. Stir in tomato puree and cook until thickened.
            5. Add cream and return chicken to the pan. Simmer for 10 minutes.
            6. Garnish with fresh cilantro and serve with rice or naan.
        `
    },
    {
        label: "Chickpea and Spinach Curry",
        image: "Chickpea and Spinach Curry.jpeg",
        type: "veg", // Vegetarian recipe
        ingredients: [
            "1 can chickpeas, drained",
            "1 onion, chopped",
            "2 cloves garlic, minced",
            "1 tablespoon ginger, grated",
            "200g spinach leaves",
            "200ml coconut milk",
            "1 tablespoon curry powder",
            "1 teaspoon turmeric",
            "1 teaspoon cumin",
            "Salt and pepper",
            "Cooked rice (for serving)"
        ],
        instructions: `
            1. Sauté onion, garlic, and ginger until softened.
            2. Add curry powder, turmeric, and cumin, cooking for 1 minute.
            3. Stir in chickpeas and coconut milk, and simmer for 10 minutes.
            4. Add spinach leaves and cook until wilted.
            5. Season with salt and pepper and serve with rice.
        `
    },
    {
        label: "Grilled Fish Tacos",
        image: "Grilled Fish Tacos.jpeg",
        type: "nonveg", // Non-vegetarian recipe
        ingredients: [
            "500g white fish fillets",
            "1 tablespoon olive oil",
            "1 tablespoon lime juice",
            "1 teaspoon cumin",
            "1 teaspoon chili powder",
            "Salt and pepper",
            "Taco shells",
            "Sliced cabbage",
            "Sour cream",
            "Salsa"
        ],
        instructions: `
            1. Marinate fish with olive oil, lime juice, cumin, chili powder, salt, and pepper for 15 minutes.
            2. Grill fish until cooked through, then flake into pieces.
            3. Assemble tacos with fish, cabbage, sour cream, avocado, and salsa.
        `
    },
    {
        label: "Paneer Butter Masala",
        image: "Paneer Butter Masala.jpeg",
        type: "veg", // Vegetarian recipe
        ingredients: [
            "250g paneer, cubed",
            "2 tablespoons butter",
            "1 onion, chopped",
            "2 cloves garlic, minced",
            "1 tablespoon ginger, grated",
            "200ml tomato puree",
            "100ml cream",
            "1 tablespoon garam masala",
            "1 teaspoon turmeric",
            "1 teaspoon cumin",
            "Fresh cilantro (for garnish)"
        ],
        instructions: `
            1. Heat butter in a pan and sauté onion, garlic, and ginger.
            2. Stir in tomato puree, garam masala, turmeric, and cumin. Cook for 5 minutes.
            3. Add cream and paneer cubes, simmering until paneer is soft.
            4. Garnish with cilantro and serve with rice or naan.
        `
    },
    {
        label: "BBQ Pulled Pork",
        image: "BBQ Pulled Pork.jpeg",
        type: "nonveg", // Non-vegetarian recipe
        ingredients: [
            "1kg pork shoulder",
            "1 tablespoon smoked paprika",
            "1 tablespoon brown sugar",
            "1 teaspoon garlic powder",
            "1 teaspoon onion powder",
            "BBQ sauce",
            "Burger buns"
        ],
        instructions: `
            1. Rub pork with smoked paprika, brown sugar, garlic powder, and onion powder.
            2. Slow-cook for 8 hours until pork is tender.
            3. Shred pork and mix with BBQ sauce.
            4. Serve in burger buns with coleslaw.
        `
    },
    {
        label: "Vegetable Lasagna",
        image: "Vegetable Lasagna.jpeg",
        type: "veg", // Vegetarian recipe
        ingredients: [
            "12 lasagna sheets",
            "1 zucchini, sliced",
            "1 bell pepper, sliced",
            "1 cup spinach",
            "200g ricotta cheese",
            "500ml tomato sauce",
            "100g mozzarella cheese",
            "50g parmesan cheese"
        ],
        instructions: `
            1. Cook lasagna sheets according to package instructions.
            2. Sauté zucchini, bell pepper, and spinach until soft.
            3. Layer lasagna sheets with vegetables, ricotta, and tomato sauce.
            4. Top with mozzarella and parmesan cheese.
            5. Bake at 180°C (350°F) for 30 minutes until golden.
        `
    },
    {
        label: "Eggplant Parmesan",
        image: "Eggplant Parmesan.jpeg",
        type: "veg", // Vegetarian recipe
        ingredients: [
            "2 large eggplants, sliced",
            "200g mozzarella cheese, sliced",
            "50g parmesan cheese, grated",
            "500ml marinara sauce",
            "1 cup breadcrumbs",
            "1 teaspoon dried oregano",
            "Salt and pepper",
            "Olive oil"
        ],
        instructions: `
            1. Preheat oven to 180°C (350°F). Lightly salt the eggplant slices and let them sit for 20 minutes.
            2. Pat the eggplants dry, coat in breadcrumbs, and fry until golden brown.
            3. In a baking dish, layer marinara sauce, eggplant, and mozzarella cheese.
            4. Repeat layers and top with parmesan and oregano.
            5. Bake for 30 minutes until bubbly and golden. Serve hot.
        `
    },
    {
        label: "Vegetable Biryani",
        image: "Vegetable Biryani.jpeg",
        type: "veg", // Vegetarian recipe
        ingredients: [
            "2 cups basmati rice",
            "1 large potato, cubed",
            "1 carrot, diced",
            "1/2 cup peas",
            "1 onion, sliced",
            "2 cloves garlic, minced",
            "1 tablespoon biryani masala",
            "1/2 teaspoon turmeric",
            "2 tablespoons ghee or oil",
            "Fresh coriander (for garnish)",
            "Salt"
        ],
        instructions: `
            1. Cook basmati rice and set aside.
            2. Heat ghee in a pot and sauté onion, garlic, biryani masala, and turmeric.
            3. Add potatoes, carrots, and peas, cooking until tender.
            4. Layer the cooked rice over the vegetables, cover, and steam for 10 minutes.
            5. Garnish with fresh coriander and serve with yogurt or raita.
        `
    },
    {
        label: "Shrimp Scampi",
        image: "Shrimp Scampi.jpeg",
        type: "nonveg", // Non-vegetarian recipe
        ingredients: [
            "400g large shrimp, peeled and deveined",
            "200g spaghetti",
            "3 tablespoons butter",
            "4 cloves garlic, minced",
            "1/4 cup white wine",
            "Juice of 1 lemon",
            "2 tablespoons fresh parsley, chopped",
            "Salt and pepper"
        ],
        instructions: `
            1. Cook the spaghetti in salted water until al dente.
            2. In a pan, melt butter and sauté garlic until fragrant.
            3. Add shrimp, cooking until pink, then pour in white wine and lemon juice.
            4. Simmer for 2 minutes and toss in the cooked spaghetti.
            5. Garnish with fresh parsley and serve hot.
        `
    },
    {
        label: "Lamb Rogan Josh",
        image: "Lamb Rogan Josh.jpeg",
        type: "nonveg", // Non-vegetarian recipe
        ingredients: [
            "500g lamb shoulder, cubed",
            "2 onions, chopped",
            "3 cloves garlic, minced",
            "1 tablespoon ginger, grated",
            "2 tablespoons rogan josh curry paste",
            "200ml yogurt",
            "1 teaspoon cumin",
            "1 teaspoon coriander powder",
            "Salt and pepper",
            "Fresh cilantro (for garnish)"
        ],
        instructions: `
            1. Heat oil in a pot and brown the lamb on all sides.
            2. Remove lamb and sauté onions, garlic, and ginger until soft.
            3. Add curry paste, cumin, and coriander, cooking for 2 minutes.
            4. Return lamb to the pot, add yogurt, and simmer for 1 hour until tender.
            5. Garnish with fresh cilantro and serve with basmati rice or naan.
        `
    }
];


const idioms = [
    "A watched pot never boils.",
    "Too many cooks spoil the broth.",
    "The proof is in the pudding.",
    "Don’t bite off more than you can chew.",
    "You can’t have your cake and eat it too."
];

function displayRandomIdiom() {
    const idiomElement = document.getElementById('dailyIdiom');
    const randomIdiom = idioms[Math.floor(Math.random() * idioms.length)];
    idiomElement.innerText = `"${randomIdiom}"`;
}

document.addEventListener('DOMContentLoaded', displayRandomIdiom);



// Load favorite recipes from local storage
let favoriteRecipes = JSON.parse(localStorage.getItem('favoriteRecipes')) || [];
const recipeReviews = JSON.parse(localStorage.getItem('recipeReviews')) || {};

// DOM references
const searchInput = document.querySelector('#searchInput');
const searchButton = document.querySelector("#searchButton");
const resultsList = document.querySelector('#results');
const favoriteResultsList = document.querySelector('#favoriteResults');
const selectedRecipeContainer = document.querySelector('#selectedRecipe');
const popularRecipesList = document.querySelector('#popularRecipesList');
let currentRecipeLabel = '';



// Set initial state for the dashboard
document.addEventListener('DOMContentLoaded', () => {
    // Display favorite recipes and popular recipes
    displayFavoriteRecipes();
    displayPopularRecipes();
    
    // Update the browser history to mark the initial page load
    history.replaceState({ page: 'dashboard' }, '', 'dashboard.html');
});



// Back button behavior
window.addEventListener('popstate', function(event) {
    if (event.state && event.state.page === 'dashboard') {
        displayFavoriteRecipes();
        selectedRecipeContainer.innerHTML = '';
    }
});



// Function to display popular recipes
function displayPopularRecipes() {
    const popularRecipes = ["Paneer Butter Masala", "Butter Chicken", "Vegetable Biryani", "Grilled Fish Tacos"];
    let html = '';

    popularRecipes.forEach(recipeLabel => {
        const recipe = recipes.find(r => r.label === recipeLabel);
        const isFavorite = favoriteRecipes.includes(recipe.label);
        html += `
            <li class="recipe-item">
                <div class="recipe-image">
                    <img src="${recipe.image}" alt="${recipe.label}">
                    <h3>${recipe.label}</h3>
                </div>
                <div class="recipe-actions">
                    <button onclick="toggleFavorite('${recipe.label}')">
                        ${isFavorite ? 'Unfavorite' : 'Favorite'}
                    </button>
                    <button onclick="displayRecipeDetails('${recipe.label}')">View Recipe</button>
                </div>
            </li>
        `;
    });
 // Insert the generated HTML into the popular recipes list container
    popularRecipesList.innerHTML = html;
}



// Select menu elements
const menuToggle = document.getElementById('menuToggle');
const closeMenu = document.getElementById('closeMenu');
const sideMenu = document.getElementById('sideMenu');

// Function to open the menu
function openMenu() {
    sideMenu.style.width = '250px';
}

// Function to close the menu
function closeMenuHandler() {
    sideMenu.style.width = '0';
}

// Event listeners for menu toggle and close button
menuToggle.addEventListener('click', openMenu);
closeMenu.addEventListener('click', closeMenuHandler);





// Event listener for Enter key press in search input
searchInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        e.preventDefault();
        searchRecipes(); // Now redirects to the new search results page
    }
});



// Event listener for search button click
searchButton.addEventListener('click', (e) => {
    e.preventDefault();
    searchRecipes(); // Now redirects to the new search results page
});



// Function to search recipes and redirect to new page (search_results.html)
function searchRecipes() 
{
    const searchValue = searchInput.value.trim().toLowerCase();
    window.location.href = `search_results.html?search=${encodeURIComponent(searchValue)}`;
}




// Function to toggle favorite status
function toggleFavorite(recipeLabel)
 {
    const index = favoriteRecipes.indexOf(recipeLabel);
    const currentlyViewedRecipe = document.querySelector('#selectedRecipe h3')?.innerText;

    if (index === -1)
    {
        // Add to favorites
        favoriteRecipes.push(recipeLabel);
        alert(`${recipeLabel} has been added to your favorites!`);
    } 
    else 
    {
        // Remove from favorites
        favoriteRecipes.splice(index, 1);
        alert(`${recipeLabel} has been removed from your favorites!`);

        // If the removed recipe is currently being viewed, clear the details
        if (recipeLabel === currentlyViewedRecipe) {
            selectedRecipeContainer.innerHTML = '';  
      }
    }

    localStorage.setItem('favoriteRecipes', JSON.stringify(favoriteRecipes));
    displayPopularRecipes();
    displayFavoriteRecipes();  
    updateFavoritesUI();  
}



// Function to display favorite recipes in the dashboard
function displayFavoriteRecipes() {
    if (favoriteResultsList) {
        let html = '';
        if (favoriteRecipes.length > 0) {
            favoriteRecipes.forEach(recipeLabel => {
                const recipe = recipes.find(r => r.label === recipeLabel);
                html += `
                    <li class="favorite-recipe-item">
                        <input type="checkbox" class="favorite-recipe-checkbox" value="${recipe.label}">
                        <div class="recipe-image">
                            <img src="${recipe.image}" alt="${recipe.label}">
                            <h3>${recipe.label}</h3>
                        </div>
                        <div class="recipe-actions">
                           <button onclick="displayRecipeDetails('${recipe.label}')">View Recipe</button>
                        </div>
                    </li>
                `;
            });
            // Add the "Remove Selected" button with an ID to apply styling
            html += '<button id="removeSelectedButton" onclick="removeSelectedFavorites()">Remove Selected</button>';
        } else {
            html = '<li><h3>Add your top picks to get started!</h3><li>';
        }
        favoriteResultsList.innerHTML = html;
    }
}






// Function to display filtered recipes (for search results or main recipe list)
function displayRecipes(filteredRecipes)
 {
    let html = '';
    if (filteredRecipes.length > 0) {
        filteredRecipes.forEach(recipe => {
            const isFavorite = favoriteRecipes.includes(recipe.label);  // Check if the recipe is favorited
            html += `
                <li class="recipe-item">
                    <div class="recipe-image">
                        <img src="${recipe.image}" alt="${recipe.label}">
                        <h3>${recipe.label}</h3>
                    </div>
                    <div class="recipe-actions">
                        <button onclick="toggleFavorite('${recipe.label}')" ${isFavorite ? 'disabled' : ''}>
                            ${isFavorite ? 'Unfavorite' : 'Favorite'}
                        </button>
                        <button onclick="displayRecipeDetails('${recipe.label}')">View Recipe</button>
                    </div>
                </li>
            `;
        });
    } 
    resultsList.innerHTML = html;
    updateFavoritesUI();  
}



// Function to update the favorite buttons based on favorite status
function updateFavoritesUI()
 {
    const favoriteButtons = document.querySelectorAll('.recipe-actions button:first-child');
    favoriteButtons.forEach(button => {
        const recipeLabel = button.getAttribute('onclick').match(/'(.*)'/)[1];
        if (favoriteRecipes.includes(recipeLabel)) {
            button.textContent = 'Unfavorite';
                    } else {
            button.textContent = 'Favorite';
            button.disabled = false;  // Enable the button if it's not yet favorited
        }
    });
}


function displayRecipeDetails(recipeLabel) {
    window.location.href = `recipe_details.html?label=${encodeURIComponent(recipeLabel)}`;
}


// Function to handle bulk removal of selected favorites
function removeSelectedFavorites() {
    const selectedItems = document.querySelectorAll('.favorite-recipe-checkbox:checked');
    
    // If no items are selected, alert the user
    if (selectedItems.length === 0) {
        alert("Please select at least one recipe to remove.");
        return;
    }
    
    selectedItems.forEach(item => {
        const recipeLabel = item.value;
        const index = favoriteRecipes.indexOf(recipeLabel);
        if (index !== -1) {
            favoriteRecipes.splice(index, 1);
        }
    });
    
    // Update localStorage and refresh the favorites display
    localStorage.setItem('favoriteRecipes', JSON.stringify(favoriteRecipes));
    displayFavoriteRecipes();

    // Alert the user that selected recipes were removed
    alert("Recipe removed—don’t cry over spilled milk!");
}


