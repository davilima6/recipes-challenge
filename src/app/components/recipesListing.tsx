"use client";

import styled from "styled-components";

import type { Recipe } from "../lib/types";
import { RecipeItem } from "./recipeItem";

type RecipesProps = {
  recipes: Recipe[];
};

const StyledSection = styled.section`
  font-size: 1.2rem;
  line-height: 1.5;
`;

const StyledList = styled.ul`
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  list-style: none;
  margin: 0;
  padding: 0;
`;

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
