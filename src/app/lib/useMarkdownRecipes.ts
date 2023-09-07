import { useEffect, useState } from "react";
import { markdownToHtml } from "./markdownToHtml";
import { Recipe } from "./types";

export function useMarkdownRecipes(markdownRecipes: Recipe[]): Recipe[] {
  const [processedRecipes, setProcessedRecipes] = useState<Recipe[]>([]);

  useEffect(() => {
    async function processRecipes() {
      const clonedMarkdownRecipes = [...markdownRecipes];

      for (const markdownRecipe of clonedMarkdownRecipes) {
        const processedDescription = await markdownToHtml(
          markdownRecipe.description
        );

        markdownRecipe.description = processedDescription;
      }

      setProcessedRecipes(clonedMarkdownRecipes);
    }

    processRecipes();
  }, [markdownRecipes]);

  return processedRecipes;
}
