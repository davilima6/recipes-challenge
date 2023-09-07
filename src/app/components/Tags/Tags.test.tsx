import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

import { mockedTagCollection } from "../../lib/mocks";
import { Tags } from "./Tags";

describe("Tags", () => {
  it("renders a title for each recipe", async () => {
    render(<Tags tags={mockedTagCollection} />);
    const tag1 = await screen.findByText("healthy");
    const tag2 = await screen.findByText("vegan");
    const tag3 = await screen.findByText("quick");
    expect(tag1).toBeInTheDocument();
    expect(tag2).toBeInTheDocument();
    expect(tag3).toBeInTheDocument();
  });
});
