import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

import { mockedRecipe } from "../../lib/mocks";
import { RecipeItem } from "./RecipeItem";

describe("RecipeItem", () => {
  it("renders the title of the recipe", async () => {
    render(<RecipeItem recipe={mockedRecipe} />);
    const heading = await screen.findByRole("heading", {
      name: "My title",
    });
    expect(heading).toBeInTheDocument();
  });

  it("renders the recipe's image", async () => {
    render(<RecipeItem recipe={mockedRecipe} />);
    const photo = await screen.findByRole("img", { name: "My title" });
    expect(photo).toBeInTheDocument();
    expect(photo).toHaveAttribute(
      "src",
      "/_next/image?url=http%3A%2F%2Flocalhost%2Fdummy&w=32&q=75"
    );
  });

  it("renders the description of the recipe", async () => {
    render(<RecipeItem recipe={mockedRecipe} />);
    const text = await screen.findByText(/Grilled Cheese 101/);
    expect(text).toBeInTheDocument();
  });

  it("renders the calories count of the recipe", async () => {
    render(<RecipeItem recipe={mockedRecipe} />);
    const text = await screen.findByText("100 kcal");
    expect(text).toBeInTheDocument();
  });
});
