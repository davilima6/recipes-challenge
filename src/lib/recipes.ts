import { getClient } from "./apolloClient";
import { ALL_RECIPES, ONE_RECIPE } from "./graphqlQueries";
import { markdownToHtml } from "./markdownToHtml";
import {
  Recipe,
  RecipeDetails,
  RecipeResponse,
  RecipesResponse,
} from "./types";

export async function getRecipeData(id: string): Promise<RecipeResponse> {
  const response = await getClient().query<RecipeResponse["data"]>({
    query: ONE_RECIPE,
    variables: { id },
  });

  response.data = {
    recipe: await formatRecipe(response.data.recipe),
  };

  return response;
}

export async function getSortedRecipesData(): Promise<RecipesResponse> {
  const response = await getClient().query<RecipesResponse["data"]>({
    query: ALL_RECIPES,
  });

  const formattedRecipes = await Promise.all(
    response.data.recipeCollection.items.map((recipe) => formatRecipe(recipe))
  );

  response.data = {
    recipeCollection: {
      total: formattedRecipes.length,
      items: formattedRecipes,
    },
  };

  return response;
}

export async function formatRecipe<R extends Recipe | RecipeDetails>(
  markdownRecipe: R
): Promise<R> {
  const formattedDescription = await markdownToHtml(markdownRecipe.description);
  const formattedRecipe: R = {
    ...markdownRecipe,
    description: formattedDescription,
  };

  return formattedRecipe;
}
