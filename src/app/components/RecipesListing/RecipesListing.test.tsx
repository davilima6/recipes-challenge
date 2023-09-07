import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

import { mockedRecipe } from "../../lib/mocks";
import { RecipesListing } from "./RecipesListing";

const ANOTHER_MOCKED_RECIPE = {
  ...mockedRecipe,
  sys: { id: "124" },
};

describe("RecipesListing", () => {
  it("renders a title for each recipe", async () => {
    render(
      <RecipesListing
        recipes={[mockedRecipe, ANOTHER_MOCKED_RECIPE]}
      />
    );
    const headings = await screen.findAllByRole("heading", {
      name: "My title",
    });
    headings.forEach((h) => expect(h).toBeInTheDocument());
    expect(headings).toHaveLength(2);
  });

  it("renders an image for each recipe", async () => {
    render(
      <RecipesListing
        recipes={[mockedRecipe, ANOTHER_MOCKED_RECIPE]}
      />
    );
    const photos = await screen.findAllByRole("img", { name: "My title" });
    photos.forEach((photo) => expect(photo).toBeInTheDocument());
    expect(photos).toHaveLength(2);
  });

  it("renders a description for each recipe", async () => {
    render(
      <RecipesListing
        recipes={[mockedRecipe, ANOTHER_MOCKED_RECIPE]}
      />
    );
    const texts = await screen.findAllByText(/Grilled Cheese 101/);
    texts.forEach((item) => expect(item).toBeInTheDocument());
    expect(texts).toHaveLength(2);
  });

  it("renders the calories count for each recipe", async () => {
    render(
      <RecipesListing
        recipes={[mockedRecipe, ANOTHER_MOCKED_RECIPE]}
      />
    );
    const texts = await screen.findAllByText("100 kcal");
    texts.forEach((item) => expect(item).toBeInTheDocument());
    expect(texts).toHaveLength(2);
  });
});
