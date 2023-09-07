import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

import { mockedRecipe } from "../../lib/mocks";
import { RecipeDetails } from "./RecipeDetails";

describe("RecipeDetails", () => {
  it("renders a heading with the title of the recipe", async () => {
    render(<RecipeDetails recipe={mockedRecipe} />);
    const heading = await screen.findByRole("heading", { name: "My title" });
    expect(heading).toBeInTheDocument();
  });

  it("renders the recipe's image", async () => {
    render(<RecipeDetails recipe={mockedRecipe} />);
    const photo = await screen.findByRole("img", { name: "My title" });
    expect(photo).toBeInTheDocument();
    expect(photo).toHaveAttribute(
      "src",
      "/_next/image?url=http%3A%2F%2Flocalhost%2Fdummy&w=32&q=75"
    );
  });

  it("renders the recipe's description", async () => {
    render(<RecipeDetails recipe={mockedRecipe} />);
    const text = await screen.findByText(/Grilled Cheese 101/i);
    expect(text).toBeInTheDocument();
  });

  it("renders the recipe's calories count", async () => {
    render(<RecipeDetails recipe={mockedRecipe} />);
    const text = await screen.findByText("100 kcal");
    expect(text).toBeInTheDocument();
  });

  it("renders the recipes's chef name", async () => {
    render(<RecipeDetails recipe={mockedRecipe} />);
    const text = await screen.findByText("A suggestion from chef Tim Cook");
    expect(text).toBeInTheDocument();
  });

  it("renders the recipe's tags", async () => {
    render(<RecipeDetails recipe={mockedRecipe} />);
    const text = await screen.findByText("healthy");
    expect(text).toBeInTheDocument();
  });

  it("renders a link to go back to the listing page", async () => {
    render(<RecipeDetails recipe={mockedRecipe} />);
    const link = await screen.findByRole("link", {
      name: "Back to listing of recipes",
    });
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute("href", "/recipes");
  });
});
