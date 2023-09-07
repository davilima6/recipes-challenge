import { remark } from "remark";
import html from "remark-html";

export async function markdownToHtml(markdownString: string): Promise<string> {
  if (!markdownString) {
    return "";
  }

  const processedContent = await remark().use(html).process(markdownString);
  const htmlContent = processedContent.toString();

  return htmlContent;
}
