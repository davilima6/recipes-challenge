"use client";

import type { Recipe } from "../../lib/types";
import { RecipeItem } from "../RecipeItem";
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
