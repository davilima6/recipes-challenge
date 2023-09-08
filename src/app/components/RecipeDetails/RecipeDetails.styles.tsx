import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";

export const StyledMain = styled.main`
  padding: 1rem;
`;

export const StyledBackLink = styled(Link)`
  color: #0000ee;
  display: block;
  font-size: 0.75rem;
  font-style: italic;
  margin: 1rem;

  &:hover {
    text-decoration: underline;
  }
`;

export const StyledArticle = styled.article`
  align-items: center;
  display: flex;
  flex-direction: column;
  position: relative;
`;

export const StyledHeading = styled.h1`
  margin-bottom: 0;
  margin-top: 1rem;
  min-height: 3rem;
`;

export const StyledText = styled.p`
  font-size: 1rem;
  margin: 0;
`;

export const StyledImageContainer = styled.div`
  display: inline-flex;
  position: relative;
`;

export const StyledImage = styled(Image)`
  border-radius: var(--border-radius);
  height: 100%;
  width: 100%;
`;

export const StyledImageLabel = styled.span`
  background-color: #0070f3;
  border-top-right-radius: var(--border-radius);
  bottom: 0;
  color: #fff;
  left: 0;
  line-height: 1.5;
  padding: 0 5px;
  position: absolute;
  z-index: 10;
`;

export const StyledRecipeAuthor = styled(StyledText)`
  font-size: 0.8rem;
  font-style: italic;
  padding-top: 0.25rem;
`;

export const StyledDescription = styled(StyledText)`
  line-height: 1.5;
  padding: 1rem 3rem;
`;
