"use client";

import { RecipeDetails } from "@/lib/types";
import { StyledTags, StyledTag } from "./Tags.styles";

type TagsProps = {
  tags: RecipeDetails["tagsCollection"];
};

export function Tags({ tags }: TagsProps) {
  if (tags.total === 0) {
    return null;
  }

  return (
    <StyledTags>
      {tags.items.map((tag) => (
        <StyledTag key={tag.name}>{tag.name}</StyledTag>
      ))}
    </StyledTags>
  );
}
