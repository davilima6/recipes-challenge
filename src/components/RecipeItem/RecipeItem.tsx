"use client";

import { Recipe } from "@/lib/types";
import {
  StyledDescription,
  StyledHeading,
  StyledImage,
  StyledImageLabel,
  StyledImageLink,
  StyledListItem,
} from "./RecipeItem.styles";

type RecipeItemProps = {
  recipe: Recipe;
};

export function RecipeItem({ recipe }: RecipeItemProps) {
  const {
    calories,
    description,
    photo: { height, url: photoUrl, width },
    sys: { id },
    title,
  } = recipe;

  return (
    <StyledListItem>
      <StyledHeading>{title}</StyledHeading>
      <StyledImageLink
        href={`/recipes/${id}`}
        title="Click for the recipe details"
      >
        <StyledImage src={photoUrl} alt={title} height={height} width={width} />
        <StyledImageLabel>{calories} kcal</StyledImageLabel>
      </StyledImageLink>
      <StyledDescription dangerouslySetInnerHTML={{ __html: description }} />
    </StyledListItem>
  );
}
