"use client";

import styled from "styled-components";

import { RecipeDetails } from "../lib/types";

type TagsProps = {
  tags: RecipeDetails["tagsCollection"];
};

const StyledTags = styled.div`
  font-size: 0.7rem;
  margin-top: 1rem;
`;

const StyledTag = styled.span`
  background-color: #fff;
  border-radius: var(--border-radius);
  display: inline-block;
  margin-right: 0.5rem;
  padding: 0.25rem 0.75rem;
`;

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
