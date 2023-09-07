import { useEffect, useState } from "react";

import { Recipe, RecipeDetails } from "./types";
import { formatRecipe } from "./useFormattedRecipe.utils";

export function useFormattedRecipe<R extends Recipe | RecipeDetails>(
  markdownRecipe: R
): R {
  const [recipe, setRecipe] = useState<R>(markdownRecipe);

  useEffect(() => {
    (async () => {
      const formattedRecipe = await formatRecipe(markdownRecipe);
      setRecipe(formattedRecipe);
    })();
  }, [markdownRecipe]);

  return recipe;
}
