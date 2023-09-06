"use client";

import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";

import { Recipe } from "../lib/types";

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
  display: block;
  height: 100%;
  width: 100%;
`;

const StyledImageLink = styled(Link)`
  display: block;
  margin-bottom: 0.5rem;
  position: relative;
`;

const StyledImageLabel = styled.span`
  background-color: #0070f3;
  border-top-right-radius: 5px;
  bottom: 0;
  color: #fff;
  padding: 0 5px;
  position: absolute;
  z-index: 10;
`;

const StyledText = styled.p`
  font-size: 1rem;
  margin: 0;
`;

export function RecipeItem({ recipe }: RecipeItemProps) {
  const {
    calories,
    description,
    photo: { height, url: recipeImageUrl, width },
    sys: { id },
    title,
  } = recipe;

  return (
    <StyledListItem key={id}>
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
      <StyledText dangerouslySetInnerHTML={{ __html: description }} />
    </StyledListItem>
  );
}
