import remark from "remark";
import html from "remark-html";

export async function markdownToHtml(
  markdownString: string
): Promise<string | undefined> {
  if (!markdownString) {
    return;
  }

  const processedContent = await remark().use(html).process(markdownString);
  const contentHtml = processedContent.toString();

  return contentHtml;
}
