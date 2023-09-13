import * as apolloClient from "./apolloClient";
import { mockedMarkdownRecipe, mockedRecipe } from "./mocks";
import { formatRecipe, getRecipeData, getSortedRecipesData } from "./recipes";
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

  describe("getSortedRecipesData()", () => {
    beforeEach(() => {
      jest.clearAllMocks();
    });

    it("calls client's methods as expected", async () => {
      const QUERY_NAME = "AllRecipes";
      const mockedQuery = jest.fn(async () => ({
        data: { recipeCollection: { items: [], total: 0 } },
      }));

      const clientSpy = jest
        .spyOn(apolloClient, "getClient")
        // @ts-ignore
        .mockReturnValue({ query: mockedQuery });

      getSortedRecipesData();

      expect(clientSpy).toHaveBeenCalledTimes(1);
      expect(mockedQuery).toHaveBeenCalledTimes(1);
      expect(mockedQuery).toHaveBeenCalledWith(
        expect.objectContaining({
          query: expect.objectContaining({
            definitions: expect.arrayContaining([
              expect.objectContaining({
                kind: "OperationDefinition",
                name: {
                  kind: "Name",
                  value: QUERY_NAME,
                },
              }),
            ]),
          }),
        })
      );
    });
  });

  describe("getRecipeData()", () => {
    beforeEach(() => {
      jest.clearAllMocks();
    });

    it("calls client's methods as expected", async () => {
      const QUERY_NAME = "OneRecipe";
      const QUERY_ID = "123";

      const mockedQuery = jest.fn(async () => ({
        data: { recipe: {} },
      }));

      const clientSpy = jest
        .spyOn(apolloClient, "getClient")
        // @ts-ignore
        .mockReturnValue({ query: mockedQuery });

      getRecipeData(QUERY_ID);

      expect(clientSpy).toHaveBeenCalledTimes(1);
      expect(mockedQuery).toHaveBeenCalledTimes(1);
      expect(mockedQuery).toHaveBeenCalledWith(
        expect.objectContaining({
          query: expect.objectContaining({
            definitions: expect.arrayContaining([
              expect.objectContaining({
                kind: "OperationDefinition",
                name: {
                  kind: "Name",
                  value: QUERY_NAME,
                },
              }),
            ]),
          }),
          variables: { id: QUERY_ID },
        })
      );
    });
  });
});
