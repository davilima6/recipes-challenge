import { RecipesListing } from "../components/recipesListing";
import { getSortedRecipesData } from "../lib/recipes";
import styles from "./recipes.module.css";

export default async function Home() {
  const {
    data: { recipeCollection },
    error,
    loading,
  } = await getSortedRecipesData();
  const isLoaded = !loading && !error && recipeCollection;

  if (!isLoaded) {
    return null;
  }

  return (
    <main className={styles.main}>
      <h1 className={styles.heading}>What would you like to eat?</h1>
      <RecipesListing recipes={recipeCollection.items} />
    </main>
  );
}
