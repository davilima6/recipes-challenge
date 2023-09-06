import { getClient } from "./apolloClient";

import { ALL_RECIPES } from "./graphqlQueries";
import { RecipesResponse } from "./types";

export async function getSortedRecipesData(): Promise<RecipesResponse> {
  const response = await getClient().query({ query: ALL_RECIPES });

  return response;
}
