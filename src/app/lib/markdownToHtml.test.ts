import { markdownToHtml } from "./markdownToHtml";

const MOCKED_MARKDOWN =
  "*Grilled Cheese 101*: Use __mayonnaise__ on the outside of the bread to achieve the ultimate __grilled cheese__.";

describe("markdownToHtml()", () => {
  it("converts a markdown string to html", async () => {
    const html = await markdownToHtml(MOCKED_MARKDOWN);

    expect(html).toBe(
      "<p><em>Grilled Cheese 101</em>: Use <strong>mayonnaise</strong> on the outside of the bread to achieve the ultimate <strong>grilled cheese</strong>.</p>\n"
    );
  });

  it("returns an empty string if no input is provided", async () => {
    const html = await markdownToHtml("");

    expect(html).toBe("");
  });
});
