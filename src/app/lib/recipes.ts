import { getClient } from "./apolloClient";

import { ALL_RECIPES, ONE_RECIPE } from "./graphqlQueries";
import { RecipeResponse, RecipesResponse } from "./types";

export async function getRecipeData(id: string): Promise<RecipeResponse> {
  const response = await getClient().query({
    query: ONE_RECIPE,
    variables: { id },
  });

  return response;
}

export async function getSortedRecipesData(): Promise<RecipesResponse> {
  const response = await getClient().query({ query: ALL_RECIPES });

  return response;
}
