import Head from "next/head";
import Image from "next/image";
import React, { useState } from "react";
import Modal from "react-modal";

const categories = {
  produce: { name: "Produce" },
  other: { name: "Pantry" },
  freezer: { name: "Freezer" },
  fridge: { name: "Fridge" },
  bakery: { name: "Bakery" },
};

const ingredients = {
  falafel: {
    name: "Falafel",
    category: categories.fridge,
  },
  lettuce: {
    name: "Lettuce",
    category: categories.produce,
  },
  tomato: {
    name: "Tomato",
    category: categories.produce,
  },
  naan: {
    name: "Naan Bread",
    category: categories.bakery,
  },
  onion: {
    name: "Onion",
    category: categories.produce,
  },
  hummus: {
    name: "Hummus",
    category: categories.other,
  },
  parsley: {
    name: "Parsley",
    category: categories.produce,
  },
  mayo: {
    name: "Mayo",
    category: categories.other,
  },
  cucumber: {
    name: "Cucumber",
    category: categories.produce,
  },
  olives: {
    name: "Olives",
    category: categories.other,
  },
  spaghetti: {
    name: "Spaghetti",
    category: categories.other,
  },
  tomatoSauce: {
    name: "Tomato Sauce",
    category: categories.other,
  },
  meatballs: {
    name: "Meatballs",
    category: categories.freezer,
  },
  parmesean: {
    name: "Parmesean",
    category: categories.fridge,
  },
  blackBeanBurger: {
    name: "Black Bean Burger",
    category: categories.freezer,
  },
  cheddar: {
    name: "Cheddar",
    category: categories.fridge,
  },
  buns: {
    name: "Buns",
    category: categories.bakery,
  },
  fries: {
    name: "Fries",
    category: categories.freezer,
  },
  dough: {
    name: "Dough",
    category: categories.bakery,
  },
  mozzarella: {
    name: "Mozzarella",
    category: categories.fridge,
  },
  basil: {
    name: "Basil",
    category: categories.produce,
  },
  garlic: {
    name: "Garlic",
    category: categories.produce,
  },
  chicken: {
    name: "Chicken",
    category: categories.freezer,
  },
  caesarDressing: {
    name: "Caesar Dressing",
    category: categories.other,
  },
  pitaChips: {
    name: "Pita Chips",
    category: categories.other,
  },
  padThaiSauce: {
    name: "Pad Thai Sauce",
    category: categories.other,
  },
  riceNoodles: {
    name: "Rice Noodles",
    category: categories.other,
  },
  tofu: {
    name: "Tofu",
    category: categories.produce,
  },
  peanuts: {
    name: "Peanuts",
    category: categories.other,
  },
  peanutButter: {
    name: "Peanut Butter",
    category: categories.other,
  },
  carrots: {
    name: "Carrots",
    category: categories.produce,
  },
  broccoli: {
    name: "Broccoli",
    category: categories.produce,
  },
  lime: {
    name: "Lime",
    category: categories.produce,
  },
  cilantro: {
    name: "Cilantro",
    category: categories.produce,
  },
  sesameOil: {
    name: "Sesame Oil",
    category: categories.other,
  },
  tortillaChips: {
    name: "Tortilla Chips",
    category: categories.other,
  },
  groundBeef: {
    name: "Ground Beef",
    category: categories.freezer,
  },
  salsa: {
    name: "Salsa",
    category: categories.other,
  },
  avocado: {
    name: "Avocado",
    category: categories.produce,
  },
  tortilla: {
    name: "Tortilla",
    category: categories.bakery,
  },
  texMexSeasoning: {
    name: "Tex Mex Seasoning",
    category: categories.other,
  },
  eggs: {
    name: "Eggs",
    category: categories.freezer,
  },
  hashbrown: {
    name: "Hashbrown",
    category: categories.freezer,
  },
  sausage: {
    name: "Sausage",
    category: categories.freezer,
  },
  gnocchi: {
    name: "Gnocchi",
    category: categories.other,
  },
  pesto: {
    name: "Pesto",
    category: categories.other,
  },
  milk: {
    name: "Milk",
    category: categories.fridge,
  },
  juice: {
    name: "Juice",
    category: categories.other,
  },
  proteinPowder: {
    name: "Protein Powder",
    category: categories.other,
  },
  frozenFruit: {
    name: "Frozen Fruit",
    category: categories.freezer,
  },
  greenPepper: {
    name: "Green Pepper",
    category: categories.produce,
  },
  fattoushDressing: {
    name: "Fattoush Dressing",
    category: categories.other,
  },
  deliMeat: {
    name: "Deli Meat",
    category: categories.fridge,
  },
  frozenVegetables: {
    name: "Frozen Vegetables",
    category: categories.freezer,
  },
  ricePaper: {
    name: "Rice Paper",
    category: categories.other,
  },
  soySauce: {
    name: "Soy Sauce",
    category: categories.other,
  },
  oats: {
    name: "Oats",
    category: categories.other,
  },
  blueberries: {
    name: "Blueberries",
    category: categories.produce,
  },
  chocolateChips: {
    name: "Chocolate Chips",
    category: categories.other,
  },
};

const recipes = [
  {
    name: "Black Bean Burger",
    ingredients: [
      ingredients.blackBeanBurger,
      ingredients.lettuce,
      ingredients.tomato,
      ingredients.onion,
      ingredients.mayo,
      ingredients.cheddar,
      ingredients.buns,
      ingredients.fries,
    ],
  },
  {
    name: "Breakfast Sandwich",
    ingredients: [
      ingredients.buns,
      ingredients.eggs,
      ingredients.cheddar,
      ingredients.hashbrown,
      ingredients.sausage,
    ],
  },
  {
    name: "Chicken Caesar Salad",
    ingredients: [
      ingredients.chicken,
      ingredients.caesarDressing,
      ingredients.lettuce,
      ingredients.tomato,
      ingredients.parmesean,
      ingredients.pitaChips,
    ],
  },
  {
    name: "Chicken Caesar Wraps",
    ingredients: [
      ingredients.chicken,
      ingredients.caesarDressing,
      ingredients.lettuce,
      ingredients.tomato,
      ingredients.parmesean,
      ingredients.pitaChips,
      ingredients.tortilla,
    ],
  },
  {
    name: "Falafel Wrap",
    ingredients: [
      ingredients.falafel,
      ingredients.lettuce,
      ingredients.tomato,
      ingredients.naan,
      ingredients.onion,
      ingredients.hummus,
      ingredients.parsley,
      ingredients.mayo,
      ingredients.cucumber,
      ingredients.olives,
    ],
  },
  {
    name: "Fattoush Salad",
    ingredients: [
      ingredients.lettuce,
      ingredients.tomato,
      ingredients.cucumber,
      ingredients.greenPepper,
      ingredients.onion,
      ingredients.parsley,
      ingredients.olives,
      ingredients.pitaChips,
      ingredients.fattoushDressing,
    ],
  },
  {
    name: "Fresh Rolls",
    ingredients: [
      ingredients.ricePaper,
      ingredients.lettuce,
      ingredients.riceNoodles,
      ingredients.avocado,
      ingredients.soySauce,
      ingredients.cilantro,
      ingredients.peanutButter,
    ],
  },
  {
    name: "Fried Gnocchi",
    ingredients: [
      ingredients.gnocchi,
      ingredients.pesto,
      ingredients.tomatoSauce,
      ingredients.mozzarella,
    ],
  },
  {
    name: "Fried Tofu and Veggies",
    ingredients: [ingredients.tofu, ingredients.frozenVegetables],
  },
  {
    name: "Nachos",
    ingredients: [
      ingredients.tortillaChips,
      ingredients.cheddar,
      ingredients.tomato,
      ingredients.lettuce,
      ingredients.onion,
      ingredients.groundBeef,
      ingredients.salsa,
      ingredients.avocado,
      ingredients.texMexSeasoning,
      ingredients.cilantro,
    ],
  },
  {
    name: "Overnight Oats",
    ingredients: [
      ingredients.oats,
      ingredients.milk,
      ingredients.blueberries,
      ingredients.chocolateChips,
    ],
  },
  {
    name: "Pad Thai",
    ingredients: [
      ingredients.padThaiSauce,
      ingredients.riceNoodles,
      ingredients.tofu,
      ingredients.peanuts,
      ingredients.peanutButter,
      ingredients.carrots,
      ingredients.broccoli,
      ingredients.lime,
      ingredients.cilantro,
      ingredients.sesameOil,
    ],
  },
  {
    name: "Pizza",
    ingredients: [
      ingredients.dough,
      ingredients.tomatoSauce,
      ingredients.mozzarella,
      ingredients.olives,
      ingredients.basil,
      ingredients.garlic,
    ],
  },
  {
    name: "Sandwich",
    ingredients: [
      ingredients.buns,
      ingredients.deliMeat,
      ingredients.cheddar,
      ingredients.cheddar,
      ingredients.lettuce,
      ingredients.tomato,
      ingredients.mayo,
    ],
  },
  {
    name: "Smoothies",
    ingredients: [
      ingredients.frozenFruit,
      ingredients.milk,
      ingredients.juice,
      ingredients.proteinPowder,
    ],
  },
  {
    name: "Spaghetti",
    ingredients: [
      ingredients.spaghetti,
      ingredients.tomatoSauce,
      ingredients.meatballs,
      ingredients.parmesean,
      ingredients.onion,
    ],
  },
];

export default function Home() {
  const [selectedRecipes, setSelectedRecipes] = useState([]);
  const [modalIsOpen, setIsOpen] = useState(false);
  const [obtainedIngredients, setObtainedIngredients] = useState([]);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  const toggleRecipe = (recipe) => {
    if (selectedRecipes.includes(recipe)) {
      setSelectedRecipes(
        selectedRecipes.filter(function (r) {
          return r !== recipe;
        })
      );
    } else {
      setSelectedRecipes([...selectedRecipes, recipe]);
    }
  };

  const toggleIngredient = (ingredient) => {
    if (obtainedIngredients.includes(ingredient)) {
      setObtainedIngredients(
        obtainedIngredients.filter(function (r) {
          return r !== ingredient;
        })
      );
    } else {
      setObtainedIngredients([...obtainedIngredients, ingredient]);
    }
  };

  const getIngredients = () => {
    let ingredients = [];
    selectedRecipes.forEach((recipe) => {
      recipe.ingredients.forEach((ing) => {
        if (!ingredients.includes(ing)) {
          ingredients.push(ing);
        }
      });
    });
    return ingredients.sort((a, b) => a.category.name > b.category.name);
  };

  const getRecipeClassName = (recipe) => {
    let className =
      "rounded-xl mx-2 py-1 text-center my-2 border-2 border-solid w-1/3";
    if (selectedRecipes.includes(recipe)) {
      return className + " bg-blue-700 text-white border-blue-700";
    }
    return className + " bg-slate-200 border-black";
  };

  const getIngredientClassName = (ingredient) => {
    let className = "";
    if (obtainedIngredients.includes(ingredient)) {
      return className + "line-through";
    }
    return className;
  };

  let selectedCategories = [];
  return (
    <div className="flex text-center">
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Ingredients Modal"
        ariaHideApp={false}
      >
        <div className="text-center flex-col">
          {/* {selectedRecipes.map((recipe, i) => (
            <span key={i} className="text-2xl">
              {i < selectedRecipes.length - 1
                ? recipe.name + ", "
                : recipe.name}
            </span>
          ))}
          <p>---</p> */}
          {getIngredients().map((ingredient, i) => {
            if (!selectedCategories.includes(ingredient.category.name)) {
              {
                <p className="invisible">
                  {selectedCategories.push(ingredient.category.name)}
                </p>;
              }
              return (
                <React.Fragment key={i}>
                  <h2 className="text-2xl">{ingredient.category.name}</h2>
                  <label>
                    <p className={getIngredientClassName(ingredient)}>
                      <input
                        type="checkbox"
                        className="mr-2"
                        onChange={() => toggleIngredient(ingredient)}
                        checked={obtainedIngredients.includes(ingredient)}
                      ></input>
                      {ingredient.name}
                    </p>
                  </label>
                </React.Fragment>
              );
            }
            return (
              <label key={i}>
                <p className={getIngredientClassName(ingredient)}>
                  <input
                    type="checkbox"
                    className="mr-2"
                    onChange={() => toggleIngredient(ingredient)}
                    checked={obtainedIngredients.includes(ingredient)}
                  ></input>
                  {ingredient.name}
                </p>
              </label>
            );
          })}
          <button
            className="bg-blue-700 rounded px-10 py-2 mt-5 text-white"
            onClick={closeModal}
          >
            close
          </button>
        </div>
      </Modal>
      <main className="flex flex-col w-full">
        <h1 className="text-center text-2xl text-bold my-5">
          Shopping List Generator
        </h1>
        <div className="flex justify-center flex-wrap">
          {recipes
            .sort((a, b) => a.name > b.name)
            .map((recipe, i) => (
              <div
                key={i}
                onClick={() => toggleRecipe(recipe)}
                className={getRecipeClassName(recipe)}
              >
                <p>{recipe.name}</p>
              </div>
            ))}
        </div>

        <button
          className="bg-green-500 text-center mx-4 my-4 p-2 text-white rounded-xl text-2xl"
          onClick={() => openModal()}
        >
          Show Shopping List
        </button>
      </main>
    </div>
  );
}
