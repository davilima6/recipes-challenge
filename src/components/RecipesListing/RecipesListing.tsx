"use client";

import { RecipeItem } from "@/components/RecipeItem";
import type { Recipe } from "@/lib/types";
import { StyledList, StyledSection } from "./RecipesListing.styles";

type RecipesProps = {
  recipes: Recipe[];
};

export function RecipesListing({ recipes }: RecipesProps) {
  return (
    <StyledSection>
      <StyledList>
        {recipes.map((recipe) => (
          <RecipeItem recipe={recipe} key={recipe.sys.id} />
        ))}
      </StyledList>
    </StyledSection>
  );
}
