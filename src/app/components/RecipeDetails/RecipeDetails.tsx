"use client";

import { RecipeDetails } from "../../lib/types";
import { Tags } from "../Tags";
import {
  StyledArticle,
  StyledBackLink,
  StyledDescription,
  StyledHeading,
  StyledImage,
  StyledImageContainer,
  StyledImageLabel,
  StyledMain,
  StyledRecipeAuthor,
} from "./RecipeDetails.styles";

type RecipeDetailsProps = {
  recipe: RecipeDetails;
};

export function RecipeDetails({ recipe }: RecipeDetailsProps) {
  const {
    calories,
    chef,
    description,
    photo: { height, url: photoUrl, width },
    tagsCollection,
    title,
  } = recipe;

  return (
    <>
      <StyledBackLink href="/recipes" title="Click for the recipes listing">
        Back to listing of recipes
      </StyledBackLink>
      <StyledMain>
        <StyledArticle>
          <StyledHeading>{title}</StyledHeading>
          <StyledImageContainer>
            <StyledImage
              src={photoUrl}
              alt={title}
              height={height}
              width={width}
            />
            <StyledImageLabel>{calories} kcal</StyledImageLabel>
          </StyledImageContainer>
          {chef ? (
            <StyledRecipeAuthor>
              A suggestion from chef {chef.name}
            </StyledRecipeAuthor>
          ) : null}
          <StyledDescription
            as="div"
            dangerouslySetInnerHTML={{ __html: description }}
          />
          <Tags tags={tagsCollection} />
        </StyledArticle>
      </StyledMain>
    </>
  );
}
