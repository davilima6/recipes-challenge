export type Recipe = {
  calories: number;
  description: string;
  photo: { height: number; url: string; width: number };
  sys: { id: string };
  title: string;
};

export type RecipeDetails = Recipe & {
  chef: { name: string } | null;
  tagsCollection: {
    total: number;
    items: {
      name: string;
    }[];
  };
};

export type Response = {
  error?: Error;
  loading: boolean;
};

export type RecipeResponse = Response & {
  data: { recipe: RecipeDetails };
};

export type RecipesResponse = Response & {
  data: {
    recipeCollection: {
      total: number;
      items: Recipe[];
    };
  };
};
