import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import Modal from "react-modal";
const recipes = [
  {
    name: "Falafel Wrap",
    ingredients: [
      "Falafel",
      "Lettuce",
      "Tomato",
      "Pita",
      "Onion",
      "Hummus",
      "Parsley",
      "Mayo",
    ],
  },
  {
    name: "Spaghetti",
    ingredients: [
      "Spaghetti",
      "Tomato Sauce",
      "Meatballs",
      "Onion",
      "Parmesean",
    ],
  },
  {
    name: "Black Bean Burger",
    ingredients: [
      "Black Bean Burger",
      "Lettuce",
      "Tomato",
      "Onion",
      "Buns",
      "Mayo",
      "Cheese",
      "Fries",
    ],
  },
  {
    name: "Pizza",
    ingredients: [
      "Dough",
      "Tomato Sauce",
      "Cheese",
      "Olives",
      "Basil",
      "Garlic",
    ],
  },
  {
    name: "Chicken Ceasar Salad",
    ingredients: [
      "Chicken",
      "Ceasar Dressing",
      "Lettuce",
      "Tomato",
      "Parmesean",
      "Pita Chips",
    ],
  },
  {
    name: "Pad Thai",
    ingredients: [
      "Pad Thai Sauce",
      "Rice Noodles",
      "Tofu",
      "Peanuts",
      "Peanut Butter",
      "Carrots",
      "Broccoli",
      "Lime",
      "Cilantro",
      "Sesame Oil",
    ],
  },
  {
    name: "Nachos",
    ingredients: [
      "Nachos",
      "Cheese",
      "Tomato",
      "Lettuce",
      "Onion",
      "Meat",
      "Salsa",
      "Avacado",
      "Tex-Mex Seasoning",
      "Cilantro",
    ],
  },
  {
    name: "Breakfast Sandwich",
    ingredients: ["Buns", "Egg", "Cheese", "Hashbrown", "Sausage"],
  },
  {
    name: "Fried Gnocchi",
    ingredients: ["Gnocchi", "Tomato Sauce", "Pesto", "Cheese"],
  },
  {
    name: "Smoothies",
    ingredients: ["Frozen Fruits", "Milk", "Juice", "Protien Powder"],
  },
  {
    name: "Fattoush Salad",
    ingredients: [
      "Lettuce",
      "Tomato",
      "Cucumber",
      "Green Pepper",
      "Onion",
      "Green Onion",
      "Parsley",
      "Pita Chips",
      "Dressing",
    ],
  },
  {
    name: "Sandwhiches",
    ingredients: ["Buns", "Meat", "Cheese", "Lettuce", "Mayo"],
  },
  { name: "Fried Tofu and Veggies", ingredients: ["Tofu", "Veggies"] },
  {
    name: "Fresh Rolls",
    ingredients: [
      "Rice Paper",
      "Lettuce",
      "Rice Noodles",
      "Avacado",
      "Soy Sauce",
      "Cilantro",
      "Peanut Butter",
    ],
  },
  {
    name: "Overnight Oats",
    ingredients: ["Oats", "Milk", "Blueberries", "Chocolate Chips"],
  },
];

export default function Home() {
  const [selectedRecipes, setSelectedRecipes] = useState([]);
  const [modalIsOpen, setIsOpen] = useState(false);

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

  const getIngredients = () => {
    let ingredients = [];
    selectedRecipes.forEach((recipe) => {
      recipe.ingredients.forEach((ing) => {
        if (!ingredients.includes(ing)) {
          ingredients.push(ing);
        }
      });
    });
    console.log(ingredients);
    return ingredients;
  };

  return (
    <div className="h-screen bg-black flex text-center">
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Ingredients Modal"
      >
        <div className="text-xl text-center flex-col">
          {getIngredients().map((ingredient) => {
            return <li key={ingredient}>{ingredient}</li>;
          })}
          {/* <button
            className="bg-blue-700 rounded text-2xl px-10 py-2 mt-5"
            onClick={closeModal}
          >
            close
          </button> */}
        </div>
      </Modal>
      <main className="flex flex-col text-white text-2xl w-full">
        <h1 className="text-center text-3xl text-bold">
          Shopping List Generator
        </h1>
        {/* <div className="grid grid-rows-5 grid-flow-col gap-5 mx-20 py-3 text-left"> */}
        {recipes.map((recipe, i) => (
          <div key={i} className="px-3">
            <label>
              <input
                type="checkbox"
                className="mr-2"
                checked={selectedRecipes.includes(recipe)}
                onChange={() => toggleRecipe(recipe)}
              />
              {recipe.name}
            </label>
          </div>
        ))}
        {/* </div> */}
        <button
          className="bg-blue-700 text-center mx-20 mt-4 text-white rounded text-xl"
          onClick={() => setIsOpen(true)}
        >
          Show Ingredients
        </button>
      </main>
    </div>
  );
}
