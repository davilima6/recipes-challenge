import { ApolloQueryResult } from "@apollo/client";

type Collection<T> = {
  total: number;
  items: T[];
};

export type Recipe = {
  calories: number;
  description: string;
  photo: { height: number; url: string; width: number };
  sys: { id: string };
  title: string;
};

export type RecipeDetails = Recipe & {
  chef: { name: string } | null;
  tagsCollection: Collection<{ name: string }>;
};

type ResponseItem<T> = {
  [itemName: string]: T;
};

type ResponseCollection<T> = {
  [collectionName: string]: Collection<T>;
};

type Response<T> = Omit<ApolloQueryResult<T>, "data"> & {
  data: T extends Array<infer U>
    ? ResponseCollection<U>
    : ResponseItem<T>;
};

export type RecipesResponse = Response<Recipe[]>;

export type RecipeResponse = Response<RecipeDetails>;
