import { mockedMarkdownRecipe } from "../../mocks";
import { Recipe } from "../../types";
import { formatRecipe } from "./useFormattedRecipe.utils";

describe("formatRecipe()", () => {
  it("converts the markdown description of a recipe into html", async () => {
    const formattedRecipe = await formatRecipe(mockedMarkdownRecipe);
    expect(formattedRecipe.description).toBe(
      "<p><em>Grilled Cheese 101</em>: Use <strong>mayonnaise</strong> on the outside of the bread to achieve the ultimate <strong>grilled cheese</strong>.</p>\n"
    );
  });

  it("does not convert a recipe's description if it is empty", async () => {
    const mockedRecipe: Recipe = { ...mockedMarkdownRecipe, description: "" };
    const formattedRecipe = await formatRecipe(mockedRecipe);
    expect(formattedRecipe.description).toBe(mockedRecipe.description);
  });
});
