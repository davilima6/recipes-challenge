import { gql } from "@apollo/client";

const RECIPE_FIELDS = gql`
  fragment RecipeFields on Recipe {
    calories
    description
    photo {
      height
      url
      width
    }
    sys {
      id
    }
    title
  }
`;

export const ALL_RECIPES = gql`
  query AllRecipes {
    recipeCollection(order: sys_publishedAt_DESC) {
      total
      items {
        ...RecipeFields
      }
    }
  }
  ${RECIPE_FIELDS}
`;

export const ONE_RECIPE = gql`
  query OneRecipe($id: String!) {
    recipe(id: $id) {
      ...RecipeFields
      chef {
        name
      }
      tagsCollection {
        total
        items {
          name
        }
      }
    }
  }
  ${RECIPE_FIELDS}
`;
