"use client";

import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";

import { Recipe } from "../lib/types";
import { useFormattedRecipe } from "../lib/useFormattedRecipe";

type RecipeItemProps = {
  recipe: Recipe;
};

const StyledListItem = styled.li`
  margin-bottom: 5px;
  margin-right: 5px;
`;

const StyledHeading = styled.h5`
  margin-bottom: 1rem;
  margin-top: 1rem;
  min-height: 3rem;
`;

const StyledImage = styled(Image)`
  border-radius: var(--border-radius);
  display: block;
  height: 100%;
  width: 100%;
`;

const StyledImageLink = styled(Link)`
  display: inline-flex;
  margin-bottom: 0.5rem;
  position: relative;
`;

const StyledImageLabel = styled.span`
  background-color: #0070f3;
  border-top-right-radius: var(--border-radius);
  bottom: 0;
  color: #fff;
  padding: 0 5px;
  position: absolute;
  z-index: 10;
`;

const StyledDescription = styled.div`
  font-size: 1rem;
  margin: 0;
`;

export function RecipeItem({ recipe }: RecipeItemProps) {
  const formattedRecipe = useFormattedRecipe(recipe);
  const {
    calories,
    description,
    photo: { height, url: recipeImageUrl, width },
    sys: { id },
    title,
  } = formattedRecipe;

  return (
    <StyledListItem>
      <StyledHeading>{title}</StyledHeading>
      <StyledImageLink
        href={`/recipes/${id}`}
        title="Click for the recipe details"
      >
        <StyledImage
          src={recipeImageUrl}
          alt={title}
          height={height}
          width={width}
        />
        <StyledImageLabel>{calories} kcal</StyledImageLabel>
      </StyledImageLink>
      <StyledDescription dangerouslySetInnerHTML={{ __html: description }} />
    </StyledListItem>
  );
}
