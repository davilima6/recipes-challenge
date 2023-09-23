import { RecipeDetails } from "./types";

export const markdownRecipeDescription =
  "*Grilled Cheese 101*: Use __mayonnaise__ on the outside of the bread to achieve the ultimate __grilled cheese__.";

export const htmlRecipeDescription =
  "<p><em>Grilled Cheese 101</em>: Use <strong>mayonnaise</strong> on the outside of the bread to achieve the ultimate <strong>grilled cheese</strong>.</p>\n";

export const mockedMarkdownRecipe: RecipeDetails = {
  calories: 100,
  chef: {
    name: "Tim Cook",
  },
  description: markdownRecipeDescription,
  photo: {
    height: 10,
    url: "http://localhost/dummy",
    width: 10,
  },
  sys: { id: "123" },
  tagsCollection: { total: 1, items: [{ name: "healthy" }] },
  title: "My title",
};

export const mockedRecipe: RecipeDetails = {
  ...mockedMarkdownRecipe,
  description: htmlRecipeDescription,
};

export const mockedTagCollection: RecipeDetails["tagsCollection"] = {
  total: 3,
  items: [{ name: "healthy" }, { name: "vegan" }, { name: "quick" }],
};
