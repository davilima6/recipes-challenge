import { useEffect, useState } from "react";

import { markdownToHtml } from "./markdownToHtml";
import { Recipe, RecipeDetails } from "./types";

export function useFormattedRecipe<R extends Recipe | RecipeDetails>(
  markdownRecipe: R
): R {
  const [processedRecipe, setProcessedRecipe] = useState<R>(markdownRecipe);

  useEffect(() => {
    async function formatRecipes() {
      const htmlDescription = await markdownToHtml(
        markdownRecipe.description
      );
      const formattedRecipe = { ...markdownRecipe };
      formattedRecipe.description = htmlDescription;
      setProcessedRecipe(formattedRecipe);
    }
    formatRecipes();
  }, [markdownRecipe]);

  return processedRecipe;
}
