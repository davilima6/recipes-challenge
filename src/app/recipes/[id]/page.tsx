import Head from "next/head";

import { RecipeDetails } from "../../components/recipeDetails";
import Layout from "../../layout";
import { getRecipeData, getSortedRecipesData } from "../../lib/recipes";
import { Recipe } from "../../lib/types";

type RouteParam = {
  params: {
    id: string;
  };
};

type RecipeProps = RouteParam;

export default async function Recipe({ params: { id } }: RecipeProps) {
  const {
    data: { recipe },
    error,
    loading,
  } = await getRecipeData(id);

  const isLoaded = !loading && !error && recipe;

  if (!isLoaded) {
    return null;
  }

  return (
    <Layout>
      <Head>
        <title>{recipe.title}</title>
      </Head>
      <RecipeDetails recipe={recipe} />
    </Layout>
  );
}

export async function generateStaticParams(): Promise<RouteParam[]> {
  const {
    data: { recipeCollection },
  } = await getSortedRecipesData();

  const recipeIdsParams: RouteParam[] = recipeCollection.items.map(
    (recipe) => ({
      params: { id: recipe.sys.id },
    })
  );

  return recipeIdsParams;
}
