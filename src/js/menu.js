import '../css/menu.css'

export const menuElements = (() => {
    
    const images = importAll(require.context('../img/menu/', false, /\.(png|jpg|svg)$/));

    let menuContainer = document.createElement('div');
    menuContainer.classList.add('menu-container');

    let cardContainer = document.createElement('div');
    cardContainer.classList.add('card-container');

    let header = document.createElement('div');
    header.classList.add('header');
    header.textContent = "Take a look at our small menu";
    cardContainer.appendChild(header);

    // dishes
    let dishCard, dishImg, dishIngredient, dishName, dishPrice;

    // card dish 1 
    dishCard = document.createElement('div');
    dishCard.classList.add('card');

    dishImg = document.createElement('img');
    dishImg = new Image(300,300)
    // get pea-leek-open-lasagne image dir
    dishImg.src = images[2];
    
    dishName =  document.createElement('div');
    dishName.classList.add('dish-name');
    dishName.textContent = 'Pea & leek open lasagne';

    dishIngredient = document.createElement('div');
    dishIngredient.classList.add('dish-ing');
    dishIngredient.textContent = `rapeseed oil
    leeks | garlic | peas | kale | 
    wholegrain mustard | low-fat crème fraîche 
    | lemon | zested | lasagne sheets`;

    dishPrice = document.createElement('div');
    dishPrice.classList.add('dish-price');
    dishPrice.textContent = '23$';
    
    dishCard.appendChild(dishImg);
    dishCard.appendChild(dishName);
    dishCard.appendChild(dishIngredient);
    dishCard.appendChild(dishPrice);

    cardContainer.appendChild(dishCard);
    cardContainer.appendChild(dishCard);

    // card dish 2
    dishCard = document.createElement('div');
    dishCard.classList.add('card');

    dishImg = document.createElement('img');
    dishImg = new Image(300,300)
    // get veggie-chinese-pancakes image dir
    dishImg.src = images[5];
    
    dishName =  document.createElement('div');
    dishName.classList.add('dish-name');
    dishName.textContent = 'Veggie Chinese pancakes';

    dishIngredient = document.createElement('div');
    dishIngredient.classList.add('dish-ing');
    dishIngredient.textContent = `mushroom | soy sauce 
    | spice powder | rice wine | sesame oil
    sugar | Chinese pancakes 
    | onions | cucumber | Gem lettuce | hoisin sauce`;

    dishPrice = document.createElement('div');
    dishPrice.classList.add('dish-price');
    dishPrice.textContent = '27$';
    
    dishCard.appendChild(dishImg);
    dishCard.appendChild(dishName);
    dishCard.appendChild(dishIngredient);
    dishCard.appendChild(dishPrice);

    cardContainer.appendChild(dishCard);
    cardContainer.appendChild(dishCard);

    // card dish 3
    dishCard = document.createElement('div');
    dishCard.classList.add('card');

    dishImg = document.createElement('img');
    dishImg = new Image(300,300)
    dishImg.src = images[3];
    
    dishName =  document.createElement('div');
    dishName.classList.add('dish-name');
    dishName.textContent = 'Vegan Thai green curry';

    dishIngredient = document.createElement('div');
    dishIngredient.classList.add('dish-ing');
    dishIngredient.textContent = `potatoes | green beans 
    | rapeseed oil | garlic | Thai green curry paste 
    | coconut milk | lime | sugar snap peas 
    | cherry tomatoes | firm tofu | jasmine rice`;

    dishPrice = document.createElement('div');
    dishPrice.classList.add('dish-price');
    dishPrice.textContent = '20$';
    
    dishCard.appendChild(dishImg);
    dishCard.appendChild(dishName);
    dishCard.appendChild(dishIngredient);
    dishCard.appendChild(dishPrice);

    cardContainer.appendChild(dishCard);
    cardContainer.appendChild(dishCard);

    // card dish 4
    dishCard = document.createElement('div');
    dishCard.classList.add('card');

    dishImg = document.createElement('img');
    dishImg = new Image(300,300)
    dishImg.src = images[0];
    
    dishName =  document.createElement('div');
    dishName.classList.add('dish-name');
    dishName.textContent = 'Avocado & black bean eggs';

    dishIngredient = document.createElement('div');
    dishIngredient.classList.add('dish-ing');
    dishIngredient.textContent = `rapeseed oil | red chilli 
    | garlic | eggs | black beans 
    | cherry tomatoes | avocado | lime`;

    dishPrice = document.createElement('div');
    dishPrice.classList.add('dish-price');
    dishPrice.textContent = '24$';
    
    dishCard.appendChild(dishImg);
    dishCard.appendChild(dishName);
    dishCard.appendChild(dishIngredient);
    dishCard.appendChild(dishPrice);

    cardContainer.appendChild(dishCard);
    cardContainer.appendChild(dishCard);

    // card dish 5
    dishCard = document.createElement('div');
    dishCard.classList.add('card');

    dishImg = document.createElement('img');
    dishImg = new Image(300,300)
    dishImg.src = images[1];
    
    dishName =  document.createElement('div');
    dishName.classList.add('dish-name');
    dishName.textContent = 'Orange & dark chocolate yogurt bowls';

    dishIngredient = document.createElement('div');
    dishIngredient.classList.add('dish-ing');
    dishIngredient.textContent = `porridge oats | soya milk | bio yogurt 
    | orange | pecan or walnuts | dark chocolate | cinnamon`;

    dishPrice = document.createElement('div');
    dishPrice.classList.add('dish-price');
    dishPrice.textContent = '18$';
    
    dishCard.appendChild(dishImg);
    dishCard.appendChild(dishName);
    dishCard.appendChild(dishIngredient);
    dishCard.appendChild(dishPrice);

    cardContainer.appendChild(dishCard);
    cardContainer.appendChild(dishCard);

    return { menuContainer, cardContainer }
})();


// get all the photos in menu dir
function importAll(r) {
    return r.keys().map(r);
  }