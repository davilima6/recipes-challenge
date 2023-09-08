import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";

export const StyledListItem = styled.li`
  margin-bottom: 5px;
  margin-right: 5px;
`;

export const StyledHeading = styled.h5`
  margin-bottom: 1rem;
  margin-top: 1rem;
  min-height: 3rem;
`;

export const StyledImage = styled(Image)`
  border-radius: var(--border-radius);
  display: block;
  height: 100%;
  width: 100%;
`;

export const StyledImageLink = styled(Link)`
  display: inline-flex;
  margin-bottom: 0.5rem;
  position: relative;
`;

export const StyledImageLabel = styled.span`
  background-color: #0070f3;
  border-top-right-radius: var(--border-radius);
  bottom: 0;
  color: #fff;
  padding: 0 5px;
  position: absolute;
  z-index: 10;
`;

export const StyledDescription = styled.div`
  font-size: 1rem;
  margin: 0;
`;
