"use client";

import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";

import { RecipeDetails } from "../lib/types";

type RecipeDetailsProps = {
  recipe: RecipeDetails;
};

const StyledBackLink = styled(Link)`
  color: #0000EE;
  display: block;
  font-size: 0.75rem;
  font-style: italic;
  margin: 1rem;

  &:hover {
    text-decoration: underline;
  }
`;

const StyledArticle = styled.article`
  align-items: center;
  display: flex;
  flex-direction: column;
  padding: 0 1rem;
  position: relative;
`;

const StyledHeading = styled.h1`
  margin-bottom: 0;
  margin-top: 1rem;
  min-height: 3rem;
`;

const StyledText = styled.p`
  font-size: 1rem;
  margin: 0;
`;

const StyledImageContainer = styled.div`
  display: inline-flex;
  position: relative;
`;

const StyledImage = styled(Image)`
  border-radius: var(--border-radius);
  height: 100%;
  width: 100%;
`;

const StyledImageLabel = styled.span`
  background-color: #0070f3;
  border-top-right-radius: var(--border-radius);
  bottom: 0;
  color: #fff;
  left: 0;
  line-height: 1.5;
  padding: 0 5px;
  position: absolute;
  z-index: 10;
`;

const StyledRecipeAuthor = styled(StyledText)`
  font-size: 0.8rem;
  font-style: italic;
  padding-top: 0.25rem;
`;

const StyledDescription = styled(StyledText)`
  padding: 1rem 3rem;
`;


export function RecipeDetails({ recipe }: RecipeDetailsProps) {
  const {
    calories,
    chef,
    description,
    photo: { height, url: recipePhotoUrl, width },
    title,
  } = recipe;

  return (
    <>
      <StyledBackLink href="/recipes" title="Click for the recipes listing">
        Back to listing of recipes
      </StyledBackLink>
      <StyledArticle>
        <StyledHeading>{title}</StyledHeading>
        <StyledImageContainer>
          <StyledImage
            src={recipePhotoUrl}
            alt={title}
            width={width}
            height={height}
          />
          <StyledImageLabel>{calories} kcal</StyledImageLabel>
        </StyledImageContainer>
        {chef ? <StyledRecipeAuthor>A suggestion from chef {chef.name}</StyledRecipeAuthor> : null}
        <StyledDescription dangerouslySetInnerHTML={{ __html: description }} />
      </StyledArticle>{" "}
    </>
  );
}
