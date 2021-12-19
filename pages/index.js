import Head from "next/head";
import Image from "next/image";
import React, { useState } from "react";
import Modal from "react-modal";

const categories = {
  vegetables: { name: "Vegetables" },
  other: { name: "Other" },
  fruits: { name: "Fruits" },
  meat: { name: "Meat" },
  dairy: { name: "Dairy" },
  bread: { name: "Bread" },
};

const ingredients = {
  falafel: {
    name: "Falafel",
    category: categories.other,
  },
  lettuce: {
    name: "Lettuce",
    category: categories.vegetables,
  },
  tomato: {
    name: "Tomato",
    category: categories.vegetables,
  },
  naan: {
    name: "Naan Bread",
    category: categories.bread,
  },
  onion: {
    name: "Onion",
    category: categories.vegetables,
  },
  hummus: {
    name: "Hummus",
    category: categories.other,
  },
  parsley: {
    name: "Parsley",
    category: categories.vegetables,
  },
  mayo: {
    name: "Mayo",
    category: categories.other,
  },
  cucumber: {
    name: "Cucumber",
    category: categories.vegetables,
  },
  olive: {
    name: "Olive",
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
    category: categories.meat,
  },
  parmesean: {
    name: "Parmesean",
    category: categories.dairy,
  },
  blackBeanBurger: {
    name: "Black Bean Burger",
    category: categories.meat,
  },
  cheddar: {
    name: "Cheddar",
    category: categories.dairy,
  },
  buns: {
    name: "Buns",
    category: categories.bread,
  },
  fries: {
    name: "Fries",
    category: categories.other,
  },
  dough: {
    name: "Dough",
    category: categories.bread,
  },
  mozzarella: {
    name: "Mozzarella",
    category: categories.dairy,
  },
  basil: {
    name: "Basil",
    category: categories.vegetables,
  },
  garlic: {
    name: "Garlic",
    category: categories.vegetables,
  },
  chicken: {
    name: "Chicken",
    category: categories.meat,
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
    category: categories.vegetables,
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
    category: categories.vegetables,
  },
  broccoli: {
    name: "Broccoli",
    category: categories.vegetables,
  },
  lime: {
    name: "Lime",
    category: categories.fruits,
  },
  cilantro: {
    name: "Cilantro",
    category: categories.vegetables,
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
    category: categories.meat,
  },
  salsa: {
    name: "Salsa",
    category: categories.other,
  },
  avocado: {
    name: "Avocado",
    category: categories.fruits,
  },
  texMexSeasoning: {
    name: "Tex Mex Seasoning",
    category: categories.other,
  },
  eggs: {
    name: "Eggs",
    category: categories.other,
  },
  hashbrown: {
    name: "Hashbrown",
    category: categories.other,
  },
  sausage: {
    name: "Sausage",
    category: categories.meat,
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
    category: categories.dairy,
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
    category: categories.other,
  },
  greenPepper: {
    name: "Green Pepper",
    category: categories.vegetables,
  },
  fattoushDressing: {
    name: "Fattoush Dressing",
    category: categories.other,
  },
  deliMeat: {
    name: "Deli Meat",
    category: categories.meat,
  },
  frozenVegetables: {
    name: "Frozen Vegetables",
    category: categories.other,
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
    category: categories.fruits,
  },
  chocolateChips: {
    name: "Chocolate Chips",
    category: categories.other,
  },
};

const recipes = [
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
      ingredients.olive,
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
    name: "Pizza",
    ingredients: [
      ingredients.dough,
      ingredients.tomatoSauce,
      ingredients.mozzarella,
      ingredients.olive,
      ingredients.basil,
      ingredients.garlic,
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
    name: "Fried Gnocchi",
    ingredients: [
      ingredients.gnocchi,
      ingredients.pesto,
      ingredients.tomatoSauce,
      ingredients.mozzarella,
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
    name: "Fattoush Salad",
    ingredients: [
      ingredients.lettuce,
      ingredients.tomato,
      ingredients.cucumber,
      ingredients.greenPepper,
      ingredients.onion,
      ingredients.parsley,
      ingredients.olive,
      ingredients.pitaChips,
      ingredients.fattoushDressing,
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
    name: "Fried Tofu and Veggies",
    ingredients: [ingredients.tofu, ingredients.frozenVegetables],
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
    name: "Overnight Oats",
    ingredients: [
      ingredients.oats,
      ingredients.milk,
      ingredients.blueberries,
      ingredients.chocolateChips,
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
      >
        <div className="text-center flex-col">
          {getIngredients().map((ingredient, i) => {
            if (!selectedCategories.includes(ingredient.category.name)) {
              console.log(selectedCategories.push(ingredient.category.name));
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
          {recipes.map((recipe, i) => (
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
