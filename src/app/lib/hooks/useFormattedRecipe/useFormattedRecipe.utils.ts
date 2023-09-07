import { markdownToHtml } from "../../markdownToHtml";
import { Recipe, RecipeDetails } from "../../types";

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
