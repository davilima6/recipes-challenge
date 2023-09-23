import { markdownToHtml } from "./markdownToHtml";
import { htmlRecipeDescription, markdownRecipeDescription } from "./mocks";

describe("markdownToHtml()", () => {
  it("converts a markdown string to html", async () => {
    const html = await markdownToHtml(markdownRecipeDescription);
    expect(html).toBe(htmlRecipeDescription);
  });

  it("returns an empty string if no input is provided", async () => {
    const html = await markdownToHtml("");
    expect(html).toBe("");
  });
});
