import { mockedRecipe, mockedMarkdownRecipe } from "./mocks";
import { formatRecipe } from "./recipes";
import { RecipeDetails } from "./types";

jest.mock("./apolloClient", () => ({
  getClient: jest.fn(),
}));

describe("recipes", () => {
  describe("formatRecipe()", () => {
    it("converts the markdown description of a recipe into html", async () => {
      const formattedRecipe = await formatRecipe(mockedMarkdownRecipe);
      expect(formattedRecipe.description).toBe(mockedRecipe.description);
    });

    it("does not format a recipe's description if it is empty", async () => {
      const noDescriptionRecipe: RecipeDetails = {
        ...mockedMarkdownRecipe,
        description: "",
      };
      const formattedRecipe = await formatRecipe(noDescriptionRecipe);
      expect(formattedRecipe.description).toBe("");
    });
  });

  describe.skip("getRecipeData()", () => {});
  describe.skip("getSortedRecipesData()", () => {});
});
