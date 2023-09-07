import { formatRecipe } from "./useFormattedRecipe.utils";
import { Recipe } from "./types";

const MOCKED_MARKDOWN =
  "*Grilled Cheese 101*: Use __mayonnaise__ on the outside of the bread to achieve the ultimate __grilled cheese__.";

const MOCKED_MARKDOWN_RECIPE: Recipe = {
  calories: 100,
  description: MOCKED_MARKDOWN,
  photo: { height: 10, title: "title", url: "url", width: 10 },
  sys: { id: "123" },
  title: "title",
};

describe("formatRecipe()", () => {
  it("converts the markdown description of a recipe into html", async () => {
    const formattedRecipe = await formatRecipe(MOCKED_MARKDOWN_RECIPE);

    expect(formattedRecipe.description).toBe(
      "<p><em>Grilled Cheese 101</em>: Use <strong>mayonnaise</strong> on the outside of the bread to achieve the ultimate <strong>grilled cheese</strong>.</p>\n"
    );
  });

  it("does not convert a recipe's description if it is empty", async () => {
    const mockedRecipe: Recipe = { ...MOCKED_MARKDOWN_RECIPE, description: "" };
    const formattedRecipe = await formatRecipe(mockedRecipe);

    expect(formattedRecipe.description).toBe(mockedRecipe.description);
  });
});
